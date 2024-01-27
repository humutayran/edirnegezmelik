import React from "react";
import "./gezilecek.css";
import karaagac from "../../images/karaagac.jpg";
import kentormani from "../../images/edirnekentormani.jpg";

function Gezilecek() {
  return (
    <div className="body">
      <div className="container">
        <div className="container-left">
          <div className="title">KARAAĞAÇ</div>
          <div className="explanation">
            Karaağaç, Edirne ilinin Merkez ilçesine bağlı bir mahalle. Karaağaç,
            Meriç nehrinin 2 km batısında, Yunanistan sınırına 4 km
            uzaklıktadır.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={karaagac} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">Edirne Kent Ormanı</div>
          <div className="explanation">
            İl merkezinin güney kesminde Edirne-Karaağaç yolu üzerinde kente 2
            kilometre mesafede olan bir mesire yeridir. Yüksek ağaçlarla kaplı
            Meriç kıyısındaki bu alanda gazino, restoran, çocuk parkları, çay
            bahçeleri, çeşitli eğlence ve spor olanakları sunan yerler vardır.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={kentormani} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">SELİMİYE CAMİ</div>
          <div className="explanation">
            Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
            minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
            dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
            eseridir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={kentormani} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">SELİMİYE CAMİ</div>
          <div className="explanation">
            Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
            minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
            dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
            eseridir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={karaagac} />
        </div>
      </div>
    </div>
  );
}

export default Gezilecek;
