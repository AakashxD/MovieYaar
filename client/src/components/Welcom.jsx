"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider.jsx";
import { Link } from "react-router-dom";
 function Welcome() {
  const images = [
    "https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
   "https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
   "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
   "https://image.tmdb.org/t/p/w500/7fR3KxswtY8OHHZuOUB9td58CRX.jpg"
  ];
  return (
    (<ImagesSlider className="h-[39rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center">
        <motion.p
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Book your Movies Tickets<br /> fun thrill enterterment
        </motion.p>
        <Link to={'/movies'}>
        <button 
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Movies→</span>
          <div
            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>)
  );
}
export default Welcome;