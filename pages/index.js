import Link from "next/link";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className=" h-max w-max"
          style={{
          backgroundImage: "url('/img/home.png')",
        }}
        >
        <h1>Hello World</h1>


        </div>
        <div className="flex m-10 justify-center ">
          <img src="/img/NirwanaStaysLogo.png"/>
        </div>
      </div>
        <div className="flex items-center justify-between">
          <img src="/img/icons/leaf.png" />
          <h1 className="text-[#FF0000] text-center m-2  ">LAKE VIEW FROM TENT</h1>
          <img src="/img/icons/leaf.png" />
        </div>

        <div className="flex justify-center ">
          <img src="/img/NirwanaStaysLogo.png"/>
        </div>
        <div>
          <p className="p-5 text-center m-2" >Our restaurant has a distinctive feature, the seating is done in the traditional Indian style. We also follow the old Indian tradition of not bringing footwear to dining. We love to serve our customers so don't forget the signature dishes we offer.</p>
        </div>
        <div className="flex">
        <div className="   content-center"> 
          <img src="/img/icons/dish.png" />

        </div>

        <div className="flex-col center ">
            <h1 className="text-[#198039]  font-semibold text-md">Opening Hours</h1>
            <h1>Breakfast: 08.00am - 10.30am</h1>
            <h1>Lundh: 1.00pm - 3.00pm</h1>
            <h1>Dinner: 4.30pm - 10.30pm</h1>
          </div>
        </div>


      
      <Facilities />
      <Footer2 />
    </>
  );
}
