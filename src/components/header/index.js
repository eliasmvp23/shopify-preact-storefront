import { h } from 'preact';
import { Link } from 'preact-router/match';
import MiniCart from '../minicart';
import { useContext } from 'preact/hooks';
import { CartContext } from '../../context/shopContext.tsx';

export default function Header() {
const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  });

return (
<header class="header-container">
  <div class="logo-area"><a href="/"><img src="../../assets/qinao_logo.png" alt="Qinao Logo" width="140px"  /></a></div>
  <div class="cart-area">
     <a 
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          <img src="../../assets/cart.png" alt="Qinao Logo" width="30px"  /> ({cartQuantity})
        </a>
        <MiniCart cart={cart} /></div>
  <div class="left-side"></div>
  </header>
);
}
