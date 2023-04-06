import { h } from 'preact';
import { Link } from 'preact-router/match';

const Footer = () => (
<footer class="footer-container">
<div class="footer-left" style="padding: 5%;">
 <h2>Informationen</h2>
 <ul>
 <li><a href="/impressum">Impressum</a></li>
 <li><a href="/datenschutz">Datenschutz</a></li>   
 </ul>
</div>
  <div class="footer-center" style="padding: 5%;">
  <h2>Newsletter</h2>
  <p>Melde dich jetzt zu unserem Newsletter an und erhalte regelmäßig Updates rund um Qinao® mit vielen Aktionen, Angeboten und wertvollen Inhalten. Für deine Anmeldung schenken wir dir 10% Rabatt auf deine erste Bestellung.</p>
  <button>Abonnieren</button>
</div>
  <div class="footer-right" style="padding: 5%;">
   <h2>Über Qinao®</h2>
   <p>Qinao® ist eine Marke der R-Pharm Germany GmbH Heinrich-Mack-Str. 35, 89257 Illertissen Telefon: 07303 12-7888, E-Mail: info@qinao.de </p>
   <a>www.qinao.de</a>
  </div>
  </footer>
);

export default Footer;
