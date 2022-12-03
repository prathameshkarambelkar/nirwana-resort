import Link from "next/link";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";
import Room from "../components/Room";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="  bg-[url('/img/home.png')]"></div>
        <div className="flex flex-col justify-center items-center">
          <button className="rounded-lg text-white bg-[#197C38] border p-2">
            Book Now
          </button>
        </div>
        <div className="flex m-10 justify-center ">
          <img src="/img/NirwanaStaysLogo.png" />
        </div>
      </div>
      <img src="/img/divider.png" />
      <Room />
      <Room />
      <div className="flex  items-center justify-between">
        <img src="/img/icons/leaf.png" />
        <h1 className="text-[#FF0000]  text-center m-2  ">
          LAKE VIEW FROM TENT
        </h1>
        <img src="/img/icons/leaf.png" />
      </div>
      

      <div className=" p-2 flex justify-center ">
        <img src="/img/NirwanaStaysLogo.png" />
      </div>
      <div>
        <p className="p-5 text-center m-2">
          Our restaurant has a distinctive feature, the seating is done in the
          traditional Indian style. We also follow the old Indian tradition of
          not bringing footwear to dining. We love to serve our customers so
          don't forget the signature dishes we offer.
        </p>
      </div>
      <div className="flex">
        <div className="content-center">
          <img className="p-2" src="/img/icons/dish.png" />
        </div>

        <div className="p-2 flex-col center ">
          <h1 className="text-[#198039]  font-semibold text-md">
            Opening Hours
          </h1>
          <h1>Breakfast: 08.00am - 10.30am</h1>
          <h1>Lundh: 1.00pm - 3.00pm</h1>
          <h1>Dinner: 4.30pm - 10.30pm</h1>
        </div>
      </div>

      <Facilities />
      <div className="">
        <img className="p-3" src="/img/tents.png" />
        <div className="flex ">
          <img className="p-2 w-2/3" src="/img/bedroom.png" />
          <img
            className="flex  w-10 h-10 items-center justify-between"
            src="/img/icons/tree.png"
          />
        </div>
        <div className="flex flex-col  items-center justify-center">
          <button className="border m-6 bg-transparent p-2  flex items-center justify-center">
            View Gallery
          </button>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <img className="m-6" src="/img/tentCircle.png" />
        </div>
        <div className="border p-2 flex m-6 text-sm flex-col items-center justify-center ">
          <h1 className="font-semibold">Devnash Tiwari</h1>
          <h1 className="text-center">
            Great Experience with good tents and good service.
          </h1>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <img className="m-6" src="/img/tentCircle.png" />
        </div>
        <div className="border p-2 flex m-6 text-sm flex-col items-center justify-center ">
          <h1 className="font-semibold">Devnash Tiwari</h1>
          <h1 className="text-center">
            Great Experience with good tents and good service.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center p-2 m-6">
          <img src="/img/icons/insta.png" />
          <p className="text-md font-light">#NirvanaStays</p>
          <p className="text-center text-sm">
            Follow @nirwanastays on instagram as we nirwana stays into a
            different world.
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <img className="p-2 w-1/2" src="/img/resort/resort1.png" />
          <img className="p-2 w-1/2" src="/img/resort/resort2.png" />
        </div>
        <div className="flex">
          <img className="p-2 w-1/2" src="/img/resort/resort3.png" />
          <img className="p-2 w-1/2" src="/img/resort/resort4.png" />
        </div>
        <div className="flex">
          <img className="p-2 w-1/2" src="/img/resort/resort5.png" />
          <img className="p-2 w-1/2" src="/img/resort/resort6.png" />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
