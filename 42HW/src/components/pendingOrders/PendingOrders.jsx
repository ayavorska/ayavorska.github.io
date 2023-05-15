import styles from "./pendingorders.module.scss";
import React from "react";

export const PendingOrders = () => {
  const orders = [
    {
      icon: "./images/photo.jpg",
      time: "22/03/2022 18:55",
      info: "Lorem ipsum dolor sit amet.",
      price: "11.82$",
    },
    {
      icon: "./images/photo.jpg",
      time: "21/02/2022 17:55",
      info: "Lorem ipsum dolor sit amet.",
      price: "31.82$",
    },
    {
      icon: "./images/photo.jpg",
      time: "25/02/2022 18:35",
      info: "Lorem ipsum dolor sit amet.",
      price: "21.82$",
    },
    {
      icon: "./images/photo.jpg",
      time: "21/04/2022 18:25",
      info: "Lorem ipsum dolor sit amet.",
      price: "41.82$",
    },
    {
      icon: "./images/photo.jpg",
      time: "01/02/2022 18:55",
      info: "Lorem ipsum dolor sit amet.",
      price: "41.82$",
    },
  ];

  return (
    <div className={styles.orders}>
      <div className="container">
        <div className={styles.ordersTitle}>pending orders</div>
        <div className={styles.ordersBody}>
          {orders.map((order, index) => (
            <PendingOrder key={index} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PendingOrder = ({ order }) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderContent}>
        <div className={styles.orderIcon}>
          <img src={order.icon} alt="Order image" />
        </div>
        <div className={styles.orderContentInfo}>
          <p className={styles.orderTime}>{order.time}</p>
          <p className={styles.orderInfo}>{order.info}</p>
        </div>
      </div>

      <p className={styles.orderPrice}>{order.price}</p>
    </div>
  );
};
