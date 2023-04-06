import { h, FunctionalComponent } from 'preact';
import { Component, render } from "preact";
import { SwiperImg } from '../../components/swiper';
import { getProductsInCollection } from "../../lib/shopify.tsx";
import ProductList from "../../components/productlist";
import { useState, useEffect } from "preact/hooks";
import { Router } from 'preact-router';
  
function HomeP() {

const [products, setProducts] = useState([]);

useEffect(() => {
 getProductsInCollection()
.then(products => setProducts((products) || []));
}, []);
	
return (
<ProductList products={products} />
);
}


export default function Home({ products }) {
return (				
	<div class="container">
					<div class="content-area">
						<section>Hero</section>
						<section>
							<h1>Die Luft ist gerade etwas raus?</h1>
							<p>Dann wird es Zeit, dass du etwas änderst. Holt euch das Knistern zurück in die Beziehung, sodass ihr kaum noch die Finger voneinander lassen könnt. Qinao® PASS!ON senkt dein Stresslevel und bringt deinen Hormon- und Testosteronhaushalt auf natürliche Art und Weise ins Gleichgewicht. So kannst du dich endlich wieder fallen lassen. Komplett pflanzlich, hormonfrei und kompatibel mit sämtlichen Verhütungsmitteln.</p>
						</section>
					<section>
						<SwiperImg />
						</section>
					<section>
                                        

      					<HomeP />
                                                         
					</section>
					<section>Bild</section>
					<section>Paragraph</section>
					<section>Swiper</section>
					<section>Fakten</section>
					<section>Bewertungen</section>
					</div>
					</div>
				);
	    }
