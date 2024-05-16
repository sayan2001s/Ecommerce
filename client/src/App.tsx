import Banner from "./components/ui/banner";
import Button from "./components/ui/buttons";
import Card from "./components/ui/cards";
import demoImage from "./Image/Image.png";
import demoImage2 from "./Image/image2.png";
import ForwardArrow from './Image/Vector.png';
import logo from './Image/image8.png';
import watch from './Image/image 7.png';
const App = () => {
  return (
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
