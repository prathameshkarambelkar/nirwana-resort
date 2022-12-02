import Link from "next/link";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <>
        <div className="mx-auto">
      <img src="/img/NirwanaStaysLogo.png" className="mx-auto" />
      </div>
      <div className="">
        <img src="/img/img1.png" />
      </div>
      </>
      <Facilities />
      <Footer />
    </>
  );
}
