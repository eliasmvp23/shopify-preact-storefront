import { useState, useEffect } from "preact/hooks";
import useSWR from 'swr';

export default function ProductOptions({ name, values, selectedOptions, setOptions, productInventory, selectedVariant }) {
  
    return (
      <fieldset>
        <legend>{name}</legend>
        <div>
          {
            values.map(value => {
              const id = `option-${name}-${value}`
              const checked = selectedOptions[name] === value
  
              return (
                <label key={id} htmlFor={id}>
                  <input
                    className="sr-only"
                    type="radio"
                    id={id}
                    name={`option-${name}`}
                    value={value}
                    checked={checked}
                    onChange={() => {
                      setOptions(name, value)
                    }}
                  />
                  <div>
                    <span>{value}</span>
                  </div>
                </label>
              )
            })
          }
        </div>
      </fieldset>
    )
  }