import React from "react";
import styles from "../../css/components/card.module.css";

interface CardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  orientation?: "verticle" | "horizontal";
  collapseDescription?: boolean;
  collapsePrice?: boolean;
  collapseRating?: boolean;
  collapseImage?: boolean;
  collapseName?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  image,
  price,
  rating,
  orientation = "horizontal",
  collapseDescription,
  collapsePrice,
  collapseRating,
  collapseImage,
  collapseName,
}) => {
  return (
    <div
      className={`${styles.card} ${styles.card__container} h-full w-full border`}
    ></div>
  );
};

export default Card;
