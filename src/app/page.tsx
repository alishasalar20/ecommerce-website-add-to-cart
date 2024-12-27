import Image from "next/image";
// import Nav from "@/components/Nav";
import Womens from "@/components/Womens";
import Mens from "@/components/Mens";
import Makeup from "@/components/Makeup";
// import Cart from "@/components/Cart"
import Shoes from "@/components/Shoes";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <Cart /> */}
      <Womens />
      <Mens />
      <Makeup />
      <Shoes />
      {/* <Footer /> */}
    </div>
  );
}
