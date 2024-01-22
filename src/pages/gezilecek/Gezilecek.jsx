import React from "react";
import "./gezilecek.css";
import karaagac from "../../images/karaagac.jpg";

function Gezilecek() {
  return (
    <div className="body">
      <div className="conteiner">
        <div className="conteiner-left">
          <div className="title">KARAAĞAÇ</div>
          <div className="explanation">
            Karaağaç, Edirne ilinin Merkez ilçesine bağlı bir mahalle. Karaağaç,
            Meriç nehrinin 2 km batısında, Yunanistan sınırına 4 km
            uzaklıktadır.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="conteiner-right">
          <img src={karaagac} />
        </div>
      </div>
      <div className="conteiner">
        <div className="conteiner-left">
          <div className="title">KARAAĞAÇ</div>
          <div className="explanation">
            Karaağaç, Edirne ilinin Merkez ilçesine bağlı bir mahalle. Karaağaç,
            Meriç nehrinin 2 km batısında, Yunanistan sınırına 4 km
            uzaklıktadır.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="conteiner-right">
          <img src={karaagac} />
        </div>
      </div>
      <div className="conteiner">
        <div className="conteiner-left">
          <div className="title">SELİMİYE CAMİ</div>
          <div className="explanation">
            Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
            minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
            dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
            eseridir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="conteiner-right">
          <img src={karaagac} />
        </div>
      </div>
      <div className="conteiner">
        <div className="conteiner-left">
          <div className="title">SELİMİYE CAMİ</div>
          <div className="explanation">
            Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
            minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
            dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
            eseridir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="conteiner-right">
          <img src={karaagac} />
        </div>
      </div>
    </div>
  );
}

export default Gezilecek;
