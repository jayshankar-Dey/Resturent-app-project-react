"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { ourbreads } from "../../../public/images/export";
const OurBreads = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  });
  return (
    <>
      <section
        id="breads"
        className="w-full flex flex-col justify-center items-center gap-10 bg-cover  h-fit py-20 lg:px-20 px-10 bg-center "
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      >
        <h1 data-aos="zoom-in" className="text-[55px] text-white font-semibold">
          Our Breads
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-start items-center gap-6"
        >
          {ourbreads.map((items, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-lg"
            >
              <img
                src={items.image}
                alt=""
                width={300}
                height={400}
                className="h-[200px] w-[300px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-[20px] text-black font-semibold">
                {items.title}
              </h1>
              <h1 className="text-center">{items.desc}</h1>
              <button className="border-2 border-black rounded-full px-8 py-2 uppercase hover:bg-blue-500 hover:border-none hover:text-white">
                order now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurBreads;
