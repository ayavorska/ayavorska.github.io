import Sales from "../icons/Sales";
import Orders from "../icons/Orders";
import Reviews from "../icons/Reviews";
import Custumers from "../icons/Custumers";
import styles from "./cards.module.scss";
import React from "react";

export const Cards = () => {
  const cards = [
    {
      icon: <Sales size={64} />,
      title: "mounthly revenue",
      subtitle: "1 385 $US",
    },
    {
      icon: <Orders size={64} />,
      title: "new orders",
      subtitle: "12",
    },
    {
      icon: <Reviews size={64} />,
      title: "pending reviews",
      subtitle: "3",
    },
    {
      icon: <Custumers size={64} />,
      title: "new custumers",
      subtitle: "9",
    },
  ];

  return (
    <div className={styles.cards}>
      <div className="container">
        <div className={styles.cardsBody}>
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{card.icon}</div>
      <div className={styles.cardContent}>
      <p className={styles.cardTitle}>{card.title}</p>
      <p className={styles.cardSubtitle}>{card.subtitle}</p>
      </div>
    </div>
  );
};
