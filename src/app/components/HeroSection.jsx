"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-[#FF0000]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Vishal Dubey",
                1000,
                "INSAAF MAN",
                1000,
                "BATMAN",
                1000,
                "DAREDEVIL",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#fffff] text-base sm:text-lg mb-6 lg:text-xl">
          Your anger gives you great power. But if you let it, it will destroy you… 
          As it almost did me - Henri Ducard, Batman Begins.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#FF0000] hover:bg-slate-800 text-white mt-3"
            >
              Hire Me
            </Link>
            <a
              href="/images/Vishal.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-[#FF0000] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#FF0000] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
