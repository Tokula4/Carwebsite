import React, { useMemo } from 'react';
import Image from 'next/image';
import Testimoni from './Testimoni';
import ButtonPrimary from './misc/ButtonPrimary';
import ButtonOutline from './misc/ButtonOutline.';
import Maps from '../public/assets/HugeGlobal.svg';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="w-full bg-gradient-to-b from-white-300 to-white-500 py-14"
      id="pricing"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-xl px-6 mx-auto text-center sm:px-8 lg:px-16">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="w-10/12 mx-auto my-2 leading-normal text-center sm:w-7/12 lg:w-6/12"
            >
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row grid-cols-1 gap-4 px-6 py-8 sm:grid-flow-col sm:grid-cols-3 lg:gap-12 lg:py-12 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2  border-[#232E89] rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* First Image (hero.png) */}
                <div className="relative z-20 flex w-full">
                  <motion.div className="absolute inset-0 flex ">
                    <Image
                      src="/bg.png" // Replace with the path to your second image
                      alt="Background Image"
                      quality={100}
                      width={1000}
                      height={400}
                    />
                  </motion.div>
                  {/* Second Image (Behind hero.png) */}
                  <motion.div
                    className="w-full h-full"
                    variants={scrollAnimation}
                  >
                    <Image
                      src="/hero.png"
                      alt="Car Image"
                      quality={100}
                      width={612}
                      height={383}
                      layout="responsive"
                    />
                  </motion.div>
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7"></p>
                <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                  <li className="relative my-2 check custom-list">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative my-2 check custom-list">
                    Encrypted Connection
                  </li>
                  <li className="relative my-2 check custom-list">
                    No Traffic Logs
                  </li>
                  <li className="relative my-2 check custom-list">
                    Works on All Devices
                  </li>
                </ul>
                <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                  <p className="mb-4 text-2xl text-center text-black-600 ">
                    Contact us
                  </p>
                  <ButtonOutline>More</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-[#232E89] rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* First Image (hero.png) */}
                <div className="relative z-20 flex w-full">
                  <motion.div className="absolute inset-0 flex ">
                    <Image
                      src="/bg.png" // Replace with the path to your second image
                      alt="Background Image"
                      quality={100}
                      width={1000}
                      height={400}
                    />
                  </motion.div>
                  {/* Second Image (Behind hero.png) */}
                  <motion.div
                    className="w-full h-full"
                    variants={scrollAnimation}
                  >
                    <Image
                      src="/hero.png"
                      alt="Car Image"
                      quality={100}
                      width={612}
                      height={383}
                      layout="responsive"
                    />
                  </motion.div>
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Standard Plan{' '}
                </p>
                <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                  <li className="relative my-2 check custom-list">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative my-2 check custom-list">
                    Encrypted Connection
                  </li>
                  <li className="relative my-2 check custom-list">
                    No Traffic Logs
                  </li>
                  <li className="relative my-2 check custom-list">
                    Works on All Devices
                  </li>
                  <li className="relative my-2 check custom-list">
                    Connect Anyware{' '}
                  </li>
                </ul>
                <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                  <p className="mb-4 text-2xl text-center text-black-600 ">
                    Contact us
                  </p>
                  <ButtonOutline>About Us</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-[#232E89] rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* First Image (hero.png) */}
                <div className="relative z-20 flex w-full">
                  <motion.div className="absolute inset-0 flex ">
                    <Image
                      src="/bg.png" // Replace with the path to your second image
                      alt="Background Image"
                      quality={100}
                      width={1000}
                      height={400}
                    />
                  </motion.div>
                  {/* Second Image (Behind hero.png) */}
                  <motion.div
                    className="w-full h-full"
                    variants={scrollAnimation}
                  >
                    <Image
                      src="/hero.png"
                      alt="Car Image"
                      quality={100}
                      width={612}
                      height={383}
                      layout="responsive"
                    />
                  </motion.div>
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Premium Plan{' '}
                </p>
                <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                  <li className="relative my-2 check custom-list">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative my-2 check custom-list">
                    Encrypted Connection
                  </li>
                  <li className="relative my-2 check custom-list">
                    No Traffic Logs
                  </li>
                  <li className="relative my-2 check custom-list">
                    Works on All Devices
                  </li>
                  <li className="relative my-2 check custom-list">
                    Connect Anyware{' '}
                  </li>
                  <li className="relative my-2 check custom-list">
                    Get New Features{' '}
                  </li>
                </ul>
                <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                  <p className="mb-4 text-2xl text-center text-black-600 ">
                    Contact Us
                  </p>

                  <ButtonOutline>Contact Us </ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
