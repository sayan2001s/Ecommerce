import React from "react";
import styles from "../../css/components/shoppingcart.module.css";
import Cart from "./cart";
import item from "../../Image/item-1.png";
import Button from "./buttons";


interface ShoppingCartProps {
  quantity: number;
  subTotal: number;
  hidequantity?: boolean;
  hidesubTotal?: boolean;
}

const ShoppingCart = ({
  quantity,
  subTotal,
  hidequantity = false,
  hidesubTotal = false,
}: ShoppingCartProps) => {
  return (
    <div className={`${styles.shopping__cart}`}>
      <div className={`${styles.shopping__cart__header} `}>
        <h3>Shopping Cart</h3>
        {!hidequantity && <p>({quantity})</p>}
      </div>
      <div className={styles.shopping__cart__body}>
        <Cart
          description="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          price={1000}
          image={item}
        />
        <Cart
          description="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          price={1000}
          image={item}
        />
        <Cart
          description="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          price={1000}
          image={item}
        />
      </div>
      <div className={styles.shopping__cart__footer}>
        <div className={`${styles.shopping__cart__footer__total}`}>
          <h4>Sub-Total:</h4>
          {!hidesubTotal && <p>${subTotal}</p>}
        </div>
        <Button variant="danger" size="md" className="w-full">
          CHECKOUT NOW
        </Button>
        <Button variant="outline" size="md" className="w-full">
          VIEW CART
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;