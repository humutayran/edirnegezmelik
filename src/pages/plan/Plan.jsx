import React from "react";
import styles from "./Plan.module.css";
import { useNavigate } from "react-router-dom";


const plan1 = [
  { id: 1000, title: "Selimiye Camii", category: "artworks" },
  { id: 1001, title: "Edirne Sarayı", category: "artworks" },
  { id: 1002, title: "Muradiye Camii", category: "artworks" },
  { id: 1003, title: "Üç Şerefli Camii", category: "artworks" },
  { id: 1004, title: "Eski Camii", category: "artworks" },
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
              Gezi Planı 1: Tarihi Camiler ve Saray Turu
            </div>
            <div className={styles.plan_explanation}>
              Bu gezi planı, Edirne&apos;nin tarihi ve kültürel mirasını en iyi
              şekilde deneyimlemeniz için oluşturulmuştur. Her biri Osmanlı
              dönemine ait olan bu yapılar, sizi tarihin derinliklerine
              götürecek. Edirne&apos;de unutulmaz bir kültürel gezi yapmaya
              hazır olun!
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
              href="https://www.google.com/maps/dir//Meydan,+Selimiye+Camii,+Meydan,+Mimar+Sinan+Caddesi+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Yeniimaret,+Edirne+Saray%C4%B1+(+Milli+Saraylar+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1)+-+Edirne+Palace+(Presidency+of+National+Palaces),+10+000+sokak,+Edirne+Merkez%2FEdirne/Menzilah%C4%B1r,+Muradiye+Cami,+Edirne+Merkez%2FEdirne/Babademirta%C5%9F,+%C3%9C%C3%A7+%C5%9Eerefeli+(Burmal%C4%B1)+Camii+%C3%87ay+Bah%C3%A7esi,+Babatimurta%C5%9F+Sokak,+Edirne+Merkez%2FEdirne/Sabuni,+Eski+Cami,+Muafakathane+Sokak,+Edirne+Merkez%2FEdirne/@41.6622471,26.5450611,13z/data=!4m33!4m32!1m0!1m5!1m1!1s0x14b32f75c6afb395:0x4575bc141db6227b!2m2!1d26.5591551!2d41.6781107!1m5!1m1!1s0x14b32f08b3c93235:0xee660ff814ac9ccd!2m2!1d26.5563929!2d41.6911268!1m5!1m1!1s0x14b32fa1a59a956f:0xa1ce1eb32e8ecd8a!2m2!1d26.5647807!2d41.6824806!1m5!1m1!1s0x14b32f3ee56b737f:0xf883426698899868!2m2!1d26.5530645!2d41.6784685!1m5!1m1!1s0x14b32f77943fffff:0x12a41f493b010bd1!2m2!1d26.5557149!2d41.6767208!3e0?entry=ttu"
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
              Gezi Planı 1: Tarihi Camiler ve Saray Turu
            </div>
            <div className={styles.plan_explanation}>
              Bu gezi planı, Edirne&apos;nin tarihi ve kültürel mirasını en iyi
              şekilde deneyimlemeniz için oluşturulmuştur. Her biri Osmanlı
              dönemine ait olan bu yapılar, sizi tarihin derinliklerine
              götürecek. Edirne&apos;de unutulmaz bir kültürel gezi yapmaya
              hazır olun!
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
              href="https://www.google.com/maps/dir//Meydan,+Selimiye+Camii,+Meydan,+Mimar+Sinan+Caddesi+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Yeniimaret,+Edirne+Saray%C4%B1+(+Milli+Saraylar+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1)+-+Edirne+Palace+(Presidency+of+National+Palaces),+10+000+sokak,+Edirne+Merkez%2FEdirne/Menzilah%C4%B1r,+Muradiye+Cami,+Edirne+Merkez%2FEdirne/Babademirta%C5%9F,+%C3%9C%C3%A7+%C5%9Eerefeli+(Burmal%C4%B1)+Camii+%C3%87ay+Bah%C3%A7esi,+Babatimurta%C5%9F+Sokak,+Edirne+Merkez%2FEdirne/Sabuni,+Eski+Cami,+Muafakathane+Sokak,+Edirne+Merkez%2FEdirne/@41.6622471,26.5450611,13z/data=!4m33!4m32!1m0!1m5!1m1!1s0x14b32f75c6afb395:0x4575bc141db6227b!2m2!1d26.5591551!2d41.6781107!1m5!1m1!1s0x14b32f08b3c93235:0xee660ff814ac9ccd!2m2!1d26.5563929!2d41.6911268!1m5!1m1!1s0x14b32fa1a59a956f:0xa1ce1eb32e8ecd8a!2m2!1d26.5647807!2d41.6824806!1m5!1m1!1s0x14b32f3ee56b737f:0xf883426698899868!2m2!1d26.5530645!2d41.6784685!1m5!1m1!1s0x14b32f77943fffff:0x12a41f493b010bd1!2m2!1d26.5557149!2d41.6767208!3e0?entry=ttu"
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
              Gezi Planı 1: Tarihi Camiler ve Saray Turu
            </div>
            <div className={styles.plan_explanation}>
              Bu gezi planı, Edirne&apos;nin tarihi ve kültürel mirasını en iyi
              şekilde deneyimlemeniz için oluşturulmuştur. Her biri Osmanlı
              dönemine ait olan bu yapılar, sizi tarihin derinliklerine
              götürecek. Edirne&apos;de unutulmaz bir kültürel gezi yapmaya
              hazır olun!
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
              href="https://www.google.com/maps/dir//Meydan,+Selimiye+Camii,+Meydan,+Mimar+Sinan+Caddesi+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Yeniimaret,+Edirne+Saray%C4%B1+(+Milli+Saraylar+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1)+-+Edirne+Palace+(Presidency+of+National+Palaces),+10+000+sokak,+Edirne+Merkez%2FEdirne/Menzilah%C4%B1r,+Muradiye+Cami,+Edirne+Merkez%2FEdirne/Babademirta%C5%9F,+%C3%9C%C3%A7+%C5%9Eerefeli+(Burmal%C4%B1)+Camii+%C3%87ay+Bah%C3%A7esi,+Babatimurta%C5%9F+Sokak,+Edirne+Merkez%2FEdirne/Sabuni,+Eski+Cami,+Muafakathane+Sokak,+Edirne+Merkez%2FEdirne/@41.6622471,26.5450611,13z/data=!4m33!4m32!1m0!1m5!1m1!1s0x14b32f75c6afb395:0x4575bc141db6227b!2m2!1d26.5591551!2d41.6781107!1m5!1m1!1s0x14b32f08b3c93235:0xee660ff814ac9ccd!2m2!1d26.5563929!2d41.6911268!1m5!1m1!1s0x14b32fa1a59a956f:0xa1ce1eb32e8ecd8a!2m2!1d26.5647807!2d41.6824806!1m5!1m1!1s0x14b32f3ee56b737f:0xf883426698899868!2m2!1d26.5530645!2d41.6784685!1m5!1m1!1s0x14b32f77943fffff:0x12a41f493b010bd1!2m2!1d26.5557149!2d41.6767208!3e0?entry=ttu"
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
              Gezi Planı 1: Tarihi Camiler ve Saray Turu
            </div>
            <div className={styles.plan_explanation}>
              Bu gezi planı, Edirne&apos;nin tarihi ve kültürel mirasını en iyi
              şekilde deneyimlemeniz için oluşturulmuştur. Her biri Osmanlı
              dönemine ait olan bu yapılar, sizi tarihin derinliklerine
              götürecek. Edirne&apos;de unutulmaz bir kültürel gezi yapmaya
              hazır olun!
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
              href="https://www.google.com/maps/dir//Meydan,+Selimiye+Camii,+Meydan,+Mimar+Sinan+Caddesi+Selimiye+Cami,+Edirne+Merkez%2FEdirne/Yeniimaret,+Edirne+Saray%C4%B1+(+Milli+Saraylar+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1)+-+Edirne+Palace+(Presidency+of+National+Palaces),+10+000+sokak,+Edirne+Merkez%2FEdirne/Menzilah%C4%B1r,+Muradiye+Cami,+Edirne+Merkez%2FEdirne/Babademirta%C5%9F,+%C3%9C%C3%A7+%C5%9Eerefeli+(Burmal%C4%B1)+Camii+%C3%87ay+Bah%C3%A7esi,+Babatimurta%C5%9F+Sokak,+Edirne+Merkez%2FEdirne/Sabuni,+Eski+Cami,+Muafakathane+Sokak,+Edirne+Merkez%2FEdirne/@41.6622471,26.5450611,13z/data=!4m33!4m32!1m0!1m5!1m1!1s0x14b32f75c6afb395:0x4575bc141db6227b!2m2!1d26.5591551!2d41.6781107!1m5!1m1!1s0x14b32f08b3c93235:0xee660ff814ac9ccd!2m2!1d26.5563929!2d41.6911268!1m5!1m1!1s0x14b32fa1a59a956f:0xa1ce1eb32e8ecd8a!2m2!1d26.5647807!2d41.6824806!1m5!1m1!1s0x14b32f3ee56b737f:0xf883426698899868!2m2!1d26.5530645!2d41.6784685!1m5!1m1!1s0x14b32f77943fffff:0x12a41f493b010bd1!2m2!1d26.5557149!2d41.6767208!3e0?entry=ttu"
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
