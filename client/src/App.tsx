import Button from "./components/ui/buttons";
import Card from "./components/ui/cards";
import demoImage from "./Image/Image.png";
const App = () => {
  return (
    <div>
      <Card description="hi" name="DELL 21.5 inch Full HD Monitor (E2216HV)" price={1} orientation="horizontal" rating={4} image={demoImage} totalSales={6969} special="SALE"/>
    </div>
  );
};

export default App;
