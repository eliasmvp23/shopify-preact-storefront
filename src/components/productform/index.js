import { createContext } from 'preact';
import { createCheckout, updateCheckout } from '../../lib/shopify';
import { useState, useEffect, useContext } from "preact/hooks";
import { formatter } from '../../utils/helpers';
import ProductOptions from "../productoptions";
import { CartContext } from "../../context/shopContext";
import useSWR from 'swr';

const fetchInventory = (url, id) =>
fetch(url + new URLSearchParams({id: id}).toString())
   .then((response) => {
        return response.json();
      });



export default function ProductForm({ product }) {

  const { data: productInventory } = useSWR(
    ['/api/available', product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  )

  const [available, setAvailable] = useState(true)

  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1
    }
  })

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(item => item.node.id === selectedVariant.id)

      if (checkAvailable[0]?.node.availableForSale) {
        setAvailable(true)
      } else {
        setAvailable(false)
      }
    }
  }, [productInventory, selectedVariant])

  return (
    <div>
      <h2>{product.title}</h2>
      <span className="pb-3">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
      {
        product.options.map(({ name, values }) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            selectedVariant={selectedVariant}
            productInventory={productInventory}
            available={available}
          />
        ))
      }
      {
        available ?
          <button
            onClick={() => {
              addToCart(selectedVariant)
            }}
            classNamt="btnbtn">PASS!ON SICHERN
          </button> :
          <button>
              Ausverkauft!
          </button>
      }

    </div>
  )
}
