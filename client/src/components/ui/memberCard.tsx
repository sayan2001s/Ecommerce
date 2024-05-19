import React from "react";
import styles from "../../css/components/member.module.css";

interface MemberCardProps {
  name: string;
  image: string;
  role: string;
  hideImage?: boolean;
  hideName?: boolean;
  hideRole?: boolean;
}

const MemberCard = ({
  name,
  image,
  role,
  hideImage = false,
  hideName = false,
  hideRole = false,
}: MemberCardProps) => {
  return (
    <>
      <div className={`${styles.card}`}>
        {!hideImage && (
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
        )}
        <div className={`${styles.details}`}>
          {!hideName && <h3>{name}</h3>}

          {!hideRole && <p className={`${styles.role}`}>{role}</p>}
        </div>
      </div>
    </>
  );
};

export default MemberCard;