import { formatter } from '../../utils/helpers.ts';
import { Link } from 'preact-router/match';

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;

  const { altText, url } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
     <Link
      href={`/products/${handle}`}
    >
      <a className="group">
        <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
          <div className="relative group-hover:opacity-75 h-72">
            <img
          style="max-width: 20%;"    
	  src={url}
              alt={altText}
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
      </a>
    </Link>
    
  )
}

export default ProductCard
