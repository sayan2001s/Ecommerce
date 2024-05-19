import React from 'react';
import styles from '../../css/components/banner.module.css';
import Button from './buttons';



interface BannerProps {
    title: string;
    subtitle: string;
    image: string;
    logo?: string;
    price: number;
    color?: "transparent"|"yellow";
    shopNowChildren?: React.ReactNode;
    addTocartChildren?: React.ReactNode;
    viewDetailsChildren?: React.ReactNode;
    hideTitle?: boolean;
    hideSubtitle?: boolean;
    hideImage?: boolean;
    hideLogo?: boolean;
    hidePrice?: boolean;
    hideShopNow?: boolean;
    hideAddToCart?: boolean;
    hideViewDetails?: boolean;
}

const Banner = ({
    title,
    subtitle,
    image,
    logo,
    price,
    color="transparent",
    shopNowChildren = "Shop Now",
    addTocartChildren = "Add to Cart",
    viewDetailsChildren = "View Details",
    hideTitle = false,
    hideSubtitle = false,
    hideImage = false,
    hidePrice = false,
    hideShopNow = false,
    hideAddToCart = false,
    hideViewDetails = false,
    hideLogo = false,
}: BannerProps) => {
    return (
        <div className={`${styles.banner} ${styles[`background-${color}`]}`}>
            <div className={styles.content}>
                {image && !hideImage && (
                    <img src={image} alt={title} className={styles.image} />
                )}
                {logo && !hideLogo && (
                    <img src={logo} alt={title} className={styles.logo} />)}
                {title && !hideTitle && <h1 className={styles.title}>{title}</h1>}
                {subtitle && !hideSubtitle && (
                    <p className={styles.subtitle}>{subtitle}</p>
                )}
                {price && !hidePrice && <p className={styles.price}><span className={styles.subtitle}>Only for:</span><span className={styles.priceBox}>₹{price} INR</span></p>}
                
            </div>
            <div className={styles.button}>
                {!hideShopNow&&<Button children={shopNowChildren} variant="primary" size='md' className='w-full'/>}
                {!hideAddToCart&&<Button children={addTocartChildren} variant="primary" size='md' className='w-full'/>}
                {!hideViewDetails&&<Button children={viewDetailsChildren} variant="outline" size='md' className='w-full'/>}
            </div>
        </div>
    );
};

export default Banner;