import  { useState } from "react";
import { useSpring, animated } from "react-spring";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  // Animation for the headline
  const headlineProps = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
  });

  // Animation for the "Shop now" button
  const buttonProps = useSpring({
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1000, delay: 300 },
  });

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <animated.p
          style={headlineProps}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer Collections
        </animated.p>
        <animated.h1
          style={headlineProps}
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </animated.h1>
        <animated.p
          style={headlineProps}
          className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.
        </animated.p>
        <animated.div style={buttonProps}>
          <Button label="Shop now" iconURL={arrowRight} />
        </animated.div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=" font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <animated.img
        style={headlineProps}
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className=" object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
