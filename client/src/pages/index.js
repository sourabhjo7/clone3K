import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Logo from "../../public/logo.png";
import CarouselComp from "../components/CarouselComp";
import SideBarRight from "../components/SideBarRight";
import Footer from "../components/Footer"
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
export default function Home() {
  const slides1 = [
    {
      url: "https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-slider-8-1080x500.jpg",
    },
    {
      url: "https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-slider-6-1080x500.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col  w-full min-h-screen bg-[#ddd7c7] px-5 ">
        <Navbar />
        
        <div className="flex  flex-col  mt-10 items-center flex-wrap">
         
          <div className="max-w-[1380px] w-full mb-10 relative">
          <div className="absolute ml-[30%] mt-[20%] text-white lg:w-[60%] lg:ml-[20%] sm:w-[90%]  sm:mx-7 xs:mx-5 sm:px-5  bg-[#074c05] z-30 w-[40%] h-[40%] flex  flex-col items-center opacity-50 ">
            <h2 className="text-4xl xl:text-3xl lg:text-2xl  pt-10 font-bold ">Stay Calm and Live </h2>
            <p className="text-2xl lg:text-xl  pt-10 px-5 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
            <div className="flex flex-wrap ">
            <CarouselComp slides={slides1} />
            </div>
          </div>

          <div className=" flex max-w-[1380px] w-full md:flex-col ">
            {/* cards div */}
            <div className="w-full pr-10 md:pr-0">
              {/* all cards on the left col  */}
              <Card/>
              <Card3/>
              <Card2/>
              <Card/>
              <Card3/>
              
           </div>
           {/* right column */}
           <SideBarRight/>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
