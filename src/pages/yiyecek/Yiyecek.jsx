import React from "react";
import "./Yiyecek.css";
import image1 from "../../images/tava-ciger.webp";
import image2 from "../../images/kavala-kurabiyesi.jpg";
import image3 from "../../images/zirva.webp";
import image4 from "../../images/mamzana.jpg";


function Yiyecek() {
  return (
    <div className="yoreselLezzetlerContainer">
      <div className="yoreselLezzetler">
        <div className="yiyecekResimContainer">
          <div className="yiyecek">
            <h1 className="foodName">Tava Ciğeri</h1>
            <h2 className="foodExplanation">
              Edirne&#39;nin en meşhur lezzetlerinden biri olan tava ciğeri, ince ince dilimlenmiş ve kızartılmış yaprak ciğer olarak servis edilir. Yanında acı biber ve kızarmış ekmek ile sunulur.
            </h2>
          </div>
          <div className="imageContainer">
            <img src={image1} alt="Edirne" />
          </div>
        </div>
        <div className="yiyecekResimContainer">
          <div className="yiyecek">
            <h1 className="foodName">Kavala Kurabiyesi</h1>
            <h2 className="foodExplanation">
              Un, badem ve tereyağının mükemmel birleşimi olan kavala kurabiyesi, ağızda dağılan yapısıyla oldukça sevilen bir tatlıdır.
            </h2>
          </div>
          <div className="imageContainer">
            <img src={image2} alt="Edirne" />
          </div>
        </div>
        <div className="yiyecekResimContainer">
          <div className="yiyecek">
            <h1 className="foodName">Zirva</h1>
            <h2 className="foodExplanation">
            Osmanlı mutfağından günümüze gelen zirva, tatlı ve tuzlunun mükemmel uyumunu yakalayan özel bir yemektir. İçinde badem, kayısı, incir gibi kuru meyveler bulunur.
            </h2>
          </div>
          <div className="imageContainer">
            <img src={image3} alt="Edirne" />
          </div>
        </div>
        <div className="yiyecekResimContainer">
          <div className="yiyecek">
            <h1 className="foodName">Mamzana</h1>
            <h2 className="foodExplanation">
              Edirne&#39;nin özgün lezzetlerinden biri olan mamzana, közlenmiş patlıcan, biber ve domatesle yapılan bir mezedir.
            </h2>
          </div>
          <div className="imageContainer">
            <img src={image4} alt="Edirne" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yiyecek;

