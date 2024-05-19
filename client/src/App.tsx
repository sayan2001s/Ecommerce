import Banner from "./components/ui/banner";
import Button from "./components/ui/buttons";
import Card from "./components/ui/cards";
import MemberCard from "./components/ui/memberCard";
import demoImage from "./Image/Image.png";
import avatar from "./Image/avatar.png";
import Cart from "./components/ui/cart";
import item from "./Image/item-1.png";
import ShoppingCart from "./components/ui/ShoppingCart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../client/src/components/ui/accordion";
import { useState } from "react";
import demoImage2 from "./Image/image2.png";
import ForwardArrow from './Image/Vector.png';
import logo from './Image/image8.png';
import watch from './Image/image 7.png';

const App = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (

    <div className="flex flex-col items-center  gap-2">
      {/* <Card */}
      {/* description="hi" */}
      {/* name="DELL 21.5 inch Full HD Monitor (E2216HV)" */}
      {/* price={1} */}
      {/* orientation="horizontal" */}
      {/* rating={4} */}
      {/* image={demoImage} */}
      {/* totalSales={6969} */}
      {/* special="SALE" */}
      {/* /> */}
      {/* <MemberCard */}
      {/* name="Supriyo Sen" */}
      {/* role="Full stack web devloper" */}
      {/* image={avatar} */}
      {/* /> */}
      {/* <Cart */}
      {/* description="Canon EOS 1500D DSLR Camera Body+ 18-55 mm" */}
      {/* price={1} */}
      {/* image={item} */}
      {/* /> */}
      {/*  */}
      {/* <ShoppingCart quantity={3} subTotal={3000} /> */}
      <Accordion size="lg">
        {[...Array(1)].map((_, index) => (
          <AccordionItem key={index}>
            <AccordionTrigger
              onClick={() => handleToggle(index)}
              isOpen={openIndex === index}
            >
              Accordion Item {index + 1}
            </AccordionTrigger>
            <AccordionContent isOpen={openIndex === index}>
              <p>This is the content of item {index + 1}.</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="md-10"></div>

    <div>
      <Card description="hi" name="DELL 21.5 inch Full HD Monitor (E2216HV)" price={1} orientation="horizontal" rating={4} image={demoImage} totalSales={6969} special="SALE"/>
      <Banner title="Xiaomi True Wireless Earbuds" subtitle="Escape the noise, It’s time to hear the magic with Xiaomi Earbuds." image={watch} price={500} shopNowChildren={<><span>Shop Now</span><span><img src={ForwardArrow} alt="img_vector" /></span></>}
      addTocartChildren={
        <>
        <span>Add to Cart</span>
        <span><img src={ForwardArrow} alt="img_vector" /></span>
        </>
      }
      viewDetailsChildren={
        <>
        <span>View Details</span>
        <span><img src={ForwardArrow} alt="img_vector" /></span>
        </>
      }
      logo={logo}
      />

    </div>
  );
};

export default App;
