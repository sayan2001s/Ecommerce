import React, { useState, useRef, forwardRef } from "react";
import styles from "../../css/components/accordion.module.css";
import Button from "./buttons";
import { FaPlus, FaMinus } from "react-icons/fa6";


type Size = "sm" | "md" | "lg";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: Size;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
  size?: Size;
}

const Accordion: React.FC<AccordionProps> = ({ children, size = "md", ...props }) => {
  return (
    <div
      className={`${styles.accordion} ${styles[`accordion--${size}`]}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.accordionItem} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, onClick, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.accordionHeader} ${
        isOpen ? styles.open : ""
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <span className={`${styles.icon} ${!isOpen ? styles.inactive : ''}`}>
        {isOpen ? (
          <FaMinus size={20} />
        ) : (
          <FaPlus size={20} />
        )}
      </span>
    </div>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, isOpen, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={ref}
        className={`${styles.accordionContent} ${className}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        {...props}
      >
        <div ref={contentRef} className={styles.accordionContentInner}>
          {children}
        </div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
