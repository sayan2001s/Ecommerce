import Button from "./components/ui/buttons";
import Card from "./components/ui/cards";
import MemberCard from "./components/ui/memberCard";
import demoImage from "./Image/Image.png";
import avatar from "./Image/avatar.png";
import Cart from "./components/ui/cart";
import item from "./Image/item-1.png";
import ShoppingCart from "./components/ui/ShoppingCart";
const App = () => {
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
      <MemberCard
        name="Supriyo Sen"
        role="Full stack web devloper"
        image={avatar}
      />
      <Cart
        description="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
        price={1}
        image={item}
      />

      <ShoppingCart quantity={3} subTotal={3000} />
      <div className="md-10"></div>
    </div>
  );
};

export default App;
