import React, { useMemo } from 'react';
import Image from 'next/image';
import ButtonPrimary from './misc/ButtonPrimary';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Hero = ({
  listUser = [
    {
      name: 'customers',
      number: '50',
      icon: '/assets/Icon/user.svg',
    },
    {
      name: 'Locations',
      number: 'Abuja Only',
      icon: '/assets/Icon/location.svg',
    },
    {
      name: 'Cars',
      number: '50',
      icon: '/assets/Icon/car.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-8 mx-auto mt-24 xl:px-16" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="relative grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col md:grid-rows-1 sm:grid-cols-2 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="relative z-10 flex flex-col items-start justify-center row-start-2 sm:row-start-1">
            <h1 className="text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl text-black-600">
              Best cars availble Here And
              <strong> very Affordable</strong>.
            </h1>
            <p className="mt-4 mb-6 text-black-500">
              sanko Autos has the most Affordable cars in the whole of abuja
              both Brand new and UK used.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>

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
            <motion.div className="w-full h-full" variants={scrollAnimation}>
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
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="relative flex w-full">
        <ScrollAnimationWrapper className="z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg sm:grid-flow-row sm:grid-cols-3 py-9 sm:divide-y-0 sm:divide-x-2 bg-white-500">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start w-8/12 px-4 py-4 mx-auto sm:justify-center sm:py-6 sm:w-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex w-40 mx-auto sm:w-auto">
                <div className="flex items-center justify-center w-12 h-12 mr-6 rounded-full bg-[#232E89]">
                  <img src={listUsers.icon} className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black-600">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute top-0 left-0 right-0 w-11/12 h-64 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg sm:h-48"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
