import React from "react";
import hero3 from "../assets/hero3.png";
const Hero = () => {
  return (
    <div className="flex mt-4 max-sm:mt-0 flex-row lg:flex-col max-sm:flex-col md:flex-col md:gap-5 ">
      <img
        src={hero3}
        className="md:h-100 md:w-400 lg:h-120 lg:w-260 md:rounded-md lg:ml-50 "
        alt=""
      />
      <span className="max-sm:text-[13px] text-center lg:pl-[148px] lg:pr-[200px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime iusto,
        molestiae voluptate laborum numquam explicabo natus qui tempora optio
        vitae reprehenderit in rem odio! Dolore quibusdam totam itaque
        perferendis libero. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Non odit ex impedit libero beatae voluptas dignissimos nam
        architecto deserunt deleniti fugit eius placeat tempore quibusdam rerum
        porro recusandae, ullam fugiat! Eaque voluptatem voluptates iste.
      </span>
    </div>
  );
};

export default Hero;
