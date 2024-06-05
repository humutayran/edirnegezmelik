import React from "react";
import "./Plan.css";
function Plan() {
  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <div className="first-content">
            <span>First</span>
          </div>
          <div className="second-content">
            <a href="https://www.google.com/maps/dir//Meydan,+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Karaa%C4%9Fa%C3%A7,+Edirne+Merkez%2FEdirne/" target="_blank" rel="noreferrer" ><span>Second</span></a>
          </div>
        </div>
        <div className="card">
          <div className="first-content">
            <div className="plan_title">Gezi Planı 1</div>
            <div className="plan_explanation">Edirne&#39;de keşfedilecek pek çok harika yer var! Sizin için özenle seçip derlediğimiz gezi planları, Edirne&#39;nin zengin tarihini, kültürünü ve doğal güzelliklerini keşfetmenizi sağlayacak. Seyahat sürenize ve ilgi alanlarınıza göre özelleştirilmiş bu planlardan size en uygun olanı seçin ve Edirne&#39;yi keşfetmeye hemen başlayın.</div>
          </div>
          <div className="second-content">
            <span>Second</span>
          </div>
        </div>
        <div className="card">
          <div className="first-content">
            <span>First</span>
          </div>
          <div className="second-content">
            <span>Second</span>
          </div>
        </div>
        <div className="card">
          <div className="first-content">
            <span>First</span>
          </div>
          <div className="second-content">
            <span>Second</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
