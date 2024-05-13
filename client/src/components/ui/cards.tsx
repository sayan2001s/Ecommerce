import styles from "../../css/components/card.module.css";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from "./rating";

interface CardProps {
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    special?: string;
    totalSales?: number;
    orientation?: "horizontal" | "vertical";
    hideRating?: boolean;
    hideDescription?: boolean;
    hidePrice?: boolean;
    hideButton?: boolean;
    hideFooter?: boolean;
    hideHeader?: boolean;
    hideImage?: boolean;
    hideTitle?: boolean;
    hideSubtitle?: boolean;
}

const Card = ({
    name,
    price,
    rating,
    image,
    special,
    totalSales = 0,
    orientation = "vertical",
    hideRating = false,
    hidePrice = false,
    hideImage = false,
    hideTitle = false,
}: CardProps) => {
    return (
        <div
            className={`${styles.card} ${styles[`card-${orientation}`]} `}
        >

           {!hideImage &&<div className={styles.image}>
            <img src={image} alt="" />
           </div>}



           <div className={styles.details}>
            {!hideRating && <div className={styles.rating}>
                <Rating rating={rating} hideRating={false} /><div className={styles.totalSale}>({totalSales})</div>
           </div>}

                {!hideTitle && <h3 className={styles.name}>{name}</h3>}

                {!hidePrice && <p className={styles.price}>${price}</p>}

           </div>
           {special && <div className={styles.special}>{special}</div>}
            
        </div>
    );
};

export default Card;