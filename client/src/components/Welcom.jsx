"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider.jsx";
import { Link } from "react-router-dom";

function Welcome() {
  const images = [
    "https://image.tmdb.org/t/p/w1280/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "https://image.tmdb.org/t/p/w1280/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "https://image.tmdb.org/t/p/w1280/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
    
  ];
  return (
    <ImagesSlider className="h-[40rem] w-full" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="z-50 flex flex-col justify-center items-center space-y-6 text-center px-4"
      >
        <motion.p
          className="font-extrabold text-3xl md:text-6xl text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-b from-white to-gray-400 
          drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
          leading-tight tracking-wide"
        >
          Book Your <br />
          <span className="text-2xl md:text-5xl text-yellow-300">
            Movie Magic Moments
          </span>
        </motion.p>
        <Link to={'/movies'}>
          <button 
            className="group relative px-6 py-3 
            bg-emerald-500/20 
            hover:bg-emerald-500/40 
            border border-emerald-500/50 
            text-white 
            rounded-full 
            overflow-hidden 
            transition-all duration-300 
            flex items-center justify-center 
            space-x-2"
          >
            <span className="relative z-10 font-semibold">Explore Showtime</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}

export default Welcome;