import React, { useState } from "react";

const SideBarRight = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  return (
    <div className="flex relative flex-col  zig-zag-card">
      
      {/* this is the right col  */}
      <div className="relative"> <a href="/about">
      <div className="absolute ml-[30%] mt-[35%] text-white  z-30  items-center opacity-50 ">
        
            <h2 className="text-4xl pt-10 text-[#fffefe] font-bold ">About Me </h2>
           </div>
      <img
        src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-about-me6.jpg"
        alt="about me"
        className="w-full"
      />
      </a>
      </div>
      <div className="flex  flex-col  bg-white">
        <input
          type="text"
          placeholder="Type Keyword to search"
          className="border border-gray-300 bg-gray-100 mt-6 mb-1 mx-8 p-1 focus:outline-none focus:ring focus:border-blue-300"
        />
        <h3 className=" text-2xl text-[#9b4800] px-8 pt-6">Tags</h3>
        <div className="flex flex-wrap px-8 py-8 ">
          <a href="#" className="tag-link">
            animals,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            cooking,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            countries,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            home,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            likes,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            photo,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            travel,
          </a>
          &nbsp;
          <a href="#" className="tag-link">
            video
          </a>
          &nbsp;
        </div>
        <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Latest Posts</h3>
        <div className="flex flex-col px-8 pb-8 ">
          <div className="flex py-8">
          <a href="/posts/bored-at-home">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            </a>
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex pb-8">
          <a href="/posts/bored-at-home">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            </a>
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex">
          <a href="/posts/bored-at-home">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            </a>
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
        </div>
        <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Archives</h3>
        <div className="px-8 ">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="select-month  w-full h-10"
          >
            <option value="" disabled>
              Select Month
            </option>
            <option value="April">April</option>
            <option value="March">March</option>
            <option value="February">February</option>
            <option value="January">January</option>
          </select>
        </div>

        <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Popular Posts</h3>
        <div className="flex flex-col px-8 pb-8 ">
          <div className="flex py-8">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex pb-8">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
        </div>
        <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Latest Comments</h3>
        <div className="flex flex-col px-8 pb-8 ">
          <div className="flex py-8">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex pb-8">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
              alt="latest post img"
            />
            <div className="flex flex-col ml-5">
              <h4 className="text-l">Bored at Home</h4>
              <h6 className="italic  text-[#777]">June 22, 2023</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
