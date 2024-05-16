import React from "react";
import styles from "../../css/components/cart.module.css";
import { RxCross2 } from "react-icons/rx";

interface CartProps {
  description: string;
  price: number;
  image: string;
  hideDescription?: boolean;
  hidePrice?: boolean;
  hideImage?: boolean;
}

const Cart = ({
description,
price,
image,
hideDescription = false,
hidePrice = false,
hideImage = false,
}: CartProps) => {
return (
  <div className={`${styles.cart}`}>
    <div className={`${styles.card_product} `}>
      {!hideImage && (
        <div className={styles.cart__image}>
          <img src={image} alt="" />
        </div>
      )}

      <div className={styles.cart__details}>
        {!hideDescription && <p className={styles.cart__name}>{description}</p>}

        {!hidePrice && <p className={styles.cart__price}>1 x ${price}</p>}
      </div>
    </div>
    <div className={styles.cart__cross}><RxCross2/></div>
  </div>
);
};

export default Cart;