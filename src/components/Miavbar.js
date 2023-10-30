import { useState } from "react";
import "./Miavbar.css";

function Miavbar() {
    const [isActive, setActive] = useState("anaSayfa");
    return (
        <div className="navbar">
          <ul>
            <li>
              <a className={isActive == 'anaSayfa' ? 'active' : ''} onClick={() => setActive('anaSayfa')}>Ana Sayfa</a>
            </li>
            <li>
              <a className={isActive == 'gezilecek' ? 'active' : ''} onClick={() => setActive('gezilecek')}>Gezilecek Yerler</a>
            </li>
            <li>
              <a className={isActive == 'tarihi' ? 'active' : ''} onClick={() => setActive('tarihi')}>Tarihi Yerler</a>
            </li>
            <li>
              <a className={isActive == 'plan' ? 'active' : ''} onClick={() => setActive('plan')}>Gezi Plani</a>
            </li>
          </ul>
        </div>
    );
}
export default Miavbar;