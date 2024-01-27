import React from "react";
import "../gezilecek/gezilecek.css";
import selimiye from "../../images/selimiye.jpg";
import adaletKasri from "../../images/adaletkasri.jpg";

function Tarihi() {
  return (
    <div className="body">
      <div className="container">
        <div className="container-left">
          <div className="title">SELİMİYE CAMİİ</div>
          <div className="explanation">
            Edirne’nin her yerinden tüm ihtişamı ile görülebilen, dört zarif
            minaresi, muhteşem kubbesi ile eşsiz bir yapı olan Selimiye Camii
            dünya tarihinin ünlü mimarlarından birisi olan Mimar Sinan’ın
            eseridir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={selimiye} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">ADALET KASRI</div>
          <div className="explanation">
          Adalet Kasrı, Edirne Sarayı'nda kasır. Sarayın sağlam kalan tek
            binası. Kırkpınar Yağlı Güreşlerinin düzenlendiği Sarayiçi
            semtindedir. Edirne Sarayı'na Kanuni Sultan Süleyman zamanında
            eklendi. Kanuni'nin kanunlarını burada yazdırdığı söylenir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={adaletKasri} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">ADALET KASRI</div>
          <div className="explanation">
            Adalet Kasrı, Edirne Sarayı'nda kasır. Sarayın sağlam kalan tek
            binası. Kırkpınar Yağlı Güreşlerinin düzenlendiği Sarayiçi
            semtindedir. Edirne Sarayı'na Kanuni Sultan Süleyman zamanında
            eklendi. Kanuni'nin kanunlarını burada yazdırdığı söylenir.
          </div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={adaletKasri} />
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
          <img src={selimiye} />
        </div>
      </div>
    </div>
  );
}

export default Tarihi;
