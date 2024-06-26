import React from "react";
import styles from "./Plan.module.css";
import { useNavigate } from "react-router-dom";


const plan1 = [
  { id: 1000, title: "Saraçlar Caddesi", category: "touristic-spots" },
  { id: 1007, title: "Edirne Arasta Çarşısı", category: "touristic-spots" },
  { id: 1008, title: "Edirne Kapalı Çarşı", category: "touristic-spots" },
];

const plan2 = [
  { id: 1000, title: "Selimiye Camii", category: "artworks" },
  { id: 1003, title: "Üç Şerefeli Camii", category: "artworks" },
  { id: 1002, title: "Muradiye Camii", category: "artworks" },
  { id: 1004, title: "Eski Camii", category: "artworks" },
];

const plan3 = [
  { id: 1003, title: "Meriç Nehri", category: "touristic-spots" },
  { id: 1005, title: "Tunca Nehri", category: "touristic-spots" },
  { id: 1004, title: "Edirne Kent Ormanı", category: "touristic-spots" },
];

const plan4 = [
  { id: 1001, title: "Edirne Sarayı", category: "artworks" },
  { id: 1009, title: "Adalet Kasrı", category: "artworks" },
  { id: 1005, title: "Rüstem Paşa Kervansarayı", category: "artworks" },
];

function Plan() {
  const navigate = useNavigate();

  const handleItemClick = (id, category) => {
    navigate('/icerik', { state: { id, category } });
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.first_content}>
            <div className={styles.plan_title}>
            Gezi Planı 1: Tarihi Caddeler ve Pazarlar Turu
            </div>
            <div className={styles.plan_explanation}>
            Bu tur, Edirne&apos;nin en hareketli ve tarihi caddeleri ile pazarlarını keşfetmek isteyenler için ideal. 
            Şehir hayatının kalbinde dolaşırken, alışveriş yapabilir, tarihi dokuyu hissedebilir ve yerel lezzetlerin tadına bakabilirsiniz.
            </div>
          </div>
          <div className={styles.second_content}>
            <ul>
              {plan1.map((plan) => (
                <li key={plan.id}>
                  <button onClick={() => handleItemClick(plan.id, plan.category)}>
                    {plan.title}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/dir//Sara%C3%A7lar+Cd.,+Mithat+Pa%C5%9Fa,+Edirne+Merkez%2FEdirne/Sabuni,+Kapal%C4%B1+%C3%87ar%C5%9F%C4%B1,+Edirne+Merkez%2FEdirne/Meydan,+Selimiye+Arastas%C4%B1,+Edirne+Merkez%2FEdirne/@41.6701175,26.5601603,15z/data=!4m21!4m20!1m0!1m5!1m1!1s0x14b32f7a1250a929:0xa4f83b283c8e4592!2m2!1d26.5535305!2d41.6732662!1m5!1m1!1s0x14b32f7094efffff:0x451702c53bfda01!2m2!1d26.5533826!2d41.6750738!1m5!1m1!1s0x14b32f75d186c0dd:0xf2200cd58731c721!2m2!1d26.5590472!2d41.6772981!3e2?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.text}>Gezi Planı</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.first_content}>
            <div className={styles.plan_title}>
            Gezi Planı 2: Osmanlı Mimarisinin İncileri
            </div>
            <div className={styles.plan_explanation}>
            Bu tur, Edirne&apos;nin Osmanlı dönemine ait en önemli mimari eserlerini ziyaret etmek isteyenler için oluşturuldu.
             Mimar Sinan&apos;ın ustalık eserinden erken dönem Osmanlı camilerine kadar geniş bir yelpazede tarihi yapıları keşfedin.
            </div>
          </div>
          <div className={styles.second_content}>
            <ul>
              {plan2.map((plan) => (
                <li key={plan.id}>
                  <button onClick={() => handleItemClick(plan.id, plan.category)}>
                    {plan.title}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/dir//Meydan,+Selimiye+Camii,+Meydan,+Mimar+Sinan+Caddesi+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Sabuni,+Eski+Cami,+Muafakathane+Sokak,+Edirne+Merkez%2FEdirne/Babademirta%C5%9F,+%C3%9C%C3%A7+%C5%9Eerefeli+(Burmal%C4%B1)+Camii+%C3%87ay+Bah%C3%A7esi,+Babatimurta%C5%9F+Sokak,+Edirne+Merkez%2FEdirne/Muradiye+Cami,+Menzilah%C4%B1r,+22020+Edirne+Merkez%2FEdirne/@41.6727451,26.560057,15z/data=!4m27!4m26!1m0!1m5!1m1!1s0x14b32f75c6afb395:0x4575bc141db6227b!2m2!1d26.5591551!2d41.6781107!1m5!1m1!1s0x14b32f77943fffff:0x12a41f493b010bd1!2m2!1d26.5557149!2d41.6767208!1m5!1m1!1s0x14b32f3ee56b737f:0xf883426698899868!2m2!1d26.5530645!2d41.6784685!1m5!1m1!1s0x14b32fa1a59a956f:0xa1ce1eb32e8ecd8a!2m2!1d26.5647807!2d41.6824806!3e2?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.text}>Gezi Planı</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.first_content}>
            <div className={styles.plan_title}>
            Gezi Planı 3: Doğa ve Nehir Turu
            </div>
            <div className={styles.plan_explanation}>
            Doğa severler için ideal olan bu tur, Edirne&apos;nin doğal güzelliklerini ve nehirlerini keşfetme fırsatı sunar. 
            Yürüyüş yapabilir, piknik yapabilir ve huzurlu ortamın tadını çıkarabilirsiniz.
            </div>
          </div>
          <div className={styles.second_content}>
            <ul>
              {plan3.map((plan) => (
                <li key={plan.id}>
                  <button onClick={() => handleItemClick(plan.id, plan.category)}>
                    {plan.title}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/dir//Karaa%C4%9Fa%C3%A7,+Meri%C3%A7+K%C3%B6pr%C3%BCs%C3%BC,+Edirne+Merkez%2FEdirne/Yeniimaret,+Tunca+Nehri,+Edirne+Merkez%2FEdirne/Karaa%C4%9Fa%C3%A7,+Edirne+Kent+Orman%C4%B1,+Lozan+Caddesi,+Edirne+Merkez%2FEdirne/@41.6869245,26.5353682,14z/data=!4m21!4m20!1m0!1m5!1m1!1s0x14b32587aa203c0b:0x384129e2ad7a20a9!2m2!1d26.5520423!2d41.6630236!1m5!1m1!1s0x14b32f1c49cf73c5:0x7d431a60cc1cb46b!2m2!1d26.544825!2d41.701287!1m5!1m1!1s0x14b3258e9524848f:0x84198669d8df9d65!2m2!1d26.5403342!2d41.6621873!3e2?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.text}>Gezi Planı</div>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.first_content}>
            <div className={styles.plan_title}>
            Gezi Planı 4: Tarih ve Kültür Turu
            </div>
            <div className={styles.plan_explanation}>
            Edirne&apos;nin zengin tarihini ve kültürel mirasını keşfetmek isteyenler için oluşturulan bu tur, önemli tarihi yapıları ve müzeleri içerir. 
            Osmanlı&apos;nın izlerini sürebileceğiniz bir gezi planı.
            </div>
          </div>
          <div className={styles.second_content}>
            <ul>
              {plan4.map((plan) => (
                <li key={plan.id}>
                  <button onClick={() => handleItemClick(plan.id, plan.category)}>
                    {plan.title}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/dir//Yeniimaret,+Edirne+Saray%C4%B1+(+Milli+Saraylar+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1)+-+Edirne+Palace+(Presidency+of+National+Palaces),+10+000+sokak,+Edirne+Merkez%2FEdirne/Yeniimaret,+Adalet+Kasr%C4%B1,+Edirne+Merkez%2FEdirne/Sabuni,+Tarihi+R%C3%BCstempa%C5%9Fa+Kervansaray%C4%B1,+Edirne+Merkez%2FEdirne/@41.6835884,26.514997,13z/data=!3m1!4b1!4m21!4m20!1m0!1m5!1m1!1s0x14b32f08b3c93235:0xee660ff814ac9ccd!2m2!1d26.5563929!2d41.6911268!1m5!1m1!1s0x14b32f08dd946551:0x9abf2cef9ab6e67e!2m2!1d26.5564901!2d41.689881!1m5!1m1!1s0x14b32f5d40976409:0x1a371952c993f15b!2m2!1d26.5559029!2d41.6759366!3e2?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.text}>Gezi Planı</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
