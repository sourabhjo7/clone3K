import React from "react";

const Footer = () => {
  return (
    // <div className="flex flex-col w-full h-auto bg-[#B9AF94] mt-10 items-center ">
    //   <div className="flex max-w-[1420px] w-full mb-10 justify-center">
    //     <div className="mr-auto">
    //       <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Categories</h3>
    //       <ul className="px-8 pt-6 ">
    //         <li className="text-[#ffffff] hover:text-[#9b4800]">likes(5)</li>
    //         <li className="text-[#ffffff] hover:text-[#9b4800]">travel(3)</li>
    //         <li className="text-[#ffffff] hover:text-[#9b4800]">Vintage(4)</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Popular Posts</h3>
    //       <div className="flex flex-col px-8 pb-8 ">
    //         <div className="flex py-8">
    //           <img
    //             src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
    //             alt="latest post img"
    //           />
    //           <div className="flex flex-col ml-5">
    //             <h4 className="text-l text-[#ffffff] hover:text-[#9b4800]">
    //               Bored at Home
    //             </h4>
    //             <h6 className="italic  text-[#777]">June 22, 2023</h6>
    //           </div>
    //         </div>
    //         <div className="flex pb-8">
    //           <img
    //             src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
    //             alt="latest post img"
    //           />
    //           <div className="flex flex-col ml-5">
    //             <h4 className="text-l text-[#ffffff] hover:text-[#9b4800]">
    //               Bored at Home
    //             </h4>
    //             <h6 className="italic  text-[#777]">June 22, 2023</h6>
    //           </div>
    //         </div>
    //         <div className="flex">
    //           <img
    //             src="https://theburnhambox.com/frida/wp-content/uploads/sites/14/2019/01/frida-16-88x60.jpg"
    //             alt="latest post img"
    //           />
    //           <div className="flex flex-col ml-5">
    //             <h4 className="text-l text-[#ffffff] hover:text-[#9b4800]">
    //               Bored at Home
    //             </h4>
    //             <h6 className="italic  text-[#777]">June 22, 2023</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" ml-auto">
    //       <h3 className=" text-2xl text-[#9b4800] px-8 pt-6 ">Tags</h3>
    //       <div className="flex flex-wrap px-8 py-8 max-w-[350px]">
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           animals,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           cooking,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           countries,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           home,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           likes,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           photo,
    //         </a>
    //         &nbsp;//
    //
    //
    //
    //
    //
    //  ffffff] hover:text-[#9b4800]">
    //           travel,
    //         </a>
    //         &nbsp;
    //         <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
    //           video
    //         </a>
    //         &nbsp;
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex max-w-[1420px] w-full mb-10 justify-center">
    //     <div className="mr-auto text-[#CCC]">© 2023 Frida. All rights reserved.</div>
    //     <div className="flex text-[#ffffff] hover:text-[#9b4800]">
    //       Back to Top
    //       <svg
    //         class="w-6 h-6  dark:text-white"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 14 8"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
    //         />
    //       </svg>
    //     </div>
    //     <div className="ml-auto flex ">
    //       <svg
    //         className="w-6 h-6 mr-5 text-[#ffffff] hover:text-[#9b4800] dark:text-white"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 8 19"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //           clip-rule="evenodd"
    //         />
    //       </svg>
    //       <svg
    //         class="w-6 h-6  mr-5 text-[#ffffff] hover:text-[#9b4800] dark:text-white"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 20 17"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //           clip-rule="evenodd"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    <footer className="h-fit theme-body-200 zig-zag-footer mb-0 mt-auto ">
      <section className="w-full max-w-6xl m-auto pt-10 pb-6 px-5 py-5">
        <section className="flex  justify-between mb-5 lg:flex-col">
          <section className="mr-10 mb-5">
            <h2 className="text-3xl theme-text-100 pt-7 pb-6">Categories</h2>
            <ul className="list-none text-white">
              <li>
                <a className="hover:theme-text-200" href="#">
                  Likes
                </a>
                <span className="theme-text-100">(5)</span>
              </li>
              <li>
                <a className="hover:theme-text-200" href="#">
                  Travel
                </a>
                <span className="theme-text-100">(3)</span>
              </li>
              <li>
                <a className="hover:theme-text-200" href="#">
                  Vintage
                </a>
                <span className="theme-text-100">(4)</span>
              </li>
            </ul>
          </section>

          <section className="mr-10 mb-5">
            <h2 className="text-3xl theme-text-100 pt-7 pb-6">Popular Posts</h2>
            <ul className="list-none text-white">
              <li className="flex gap-x-5 pb-3">
                <img
                  className="w-16 h-11"
                  src="/./images/blog-poster-1.png"
                  alt=""
                />
                <section>
                  <h3 className="text-lg hover:theme-text-200">
                    A Blue Morning
                  </h3>
                  <p className="text-base theme-text-100 italic">
                    June 22, 2023
                  </p>
                </section>
              </li>
              <li className="flex gap-x-5 pb-3">
                <img
                  className="w-16 h-11"
                  src="/./images/blog-poster-2.png"
                  alt=""
                />
                <section>
                  <h3 className="text-lg hover:theme-text-200">
                    Bored At Home
                  </h3>
                  <p className="text-base theme-text-100 italic">
                    June 22, 2023
                  </p>
                </section>
              </li>
              <li className="flex gap-x-5 pb-3">
                <img
                  className="w-16 h-11"
                  src="/./images/blog-poster-3.png"
                  alt=""
                />
                <section>
                  <h3 className="text-lg hover:theme-text-200">
                    New Zealand Trip
                  </h3>
                  <p className="text-base theme-text-100 italic">
                    June 22, 2023
                  </p>
                </section>
              </li>
            </ul>
          </section>

          <section className="2xl:max-w-xs">
            <h2 className="text-3xl theme-text-100 pt-7 pb-6 px-8 lg:px-0">Tags</h2>

            <div className="flex flex-wrap px-8 lg:px-0 py-8 max-w-[350px]">
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                animals,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                cooking,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                countries,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                home,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                likes,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                photo,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                travel,
              </a>
              &nbsp;
              <a href="#" className="text-[#ffffff] hover:text-[#9b4800]">
                video
              </a>
              &nbsp;
            </div>
          </section>
        </section>

        <section className="flex items-center justify-between mb-5">
          <p className="theme-text-100 italic items-center">
            &copy; 2023 Frida. All rights reserved
          </p>
          <a
            href="#header"
            className="text-white flex gap-x-2 items-center hover:theme-text-200"
          >
            Back to Top
            <img className="h-4 w-4" src="/./images/up-arrow.png" alt="arrow" />
          </a>
          <span className="2xl:hidden flex gap-x-5">
            <a href="">
              <img className="w-4 h-4" src="/./images/facebook2.png" alt="" />
            </a>
            <a href="">
              <img className="w-4 h-4" src="/./images/twitter.png" alt="" />
            </a>
          </span>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
