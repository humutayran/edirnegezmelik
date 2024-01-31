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
          <div className="explanation">dillerde tekbir AllahuEkber</div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={selimiye} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">ADALET KASRI</div>
          <div className="explanation">dillerde tekbir AllahuEkber</div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={adaletKasri} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">ADALET KASRI</div>
          <div className="explanation">dillerde tekbir AllahuEkber</div>
          <button className="button">Daha Fazla</button>
        </div>
        <div className="container-right">
          <img src={adaletKasri} />
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="title">SELİMİYE CAMİ</div>
          <div className="explanation">dillerde tekbir AllahuEkber</div>
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
