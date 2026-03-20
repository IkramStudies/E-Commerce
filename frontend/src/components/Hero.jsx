import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
const Hero = () => {
  return (
    <div className="flex mt-4 max-sm:mt-0 flex-row max-sm:flex-col md:gap-5 md:ml-60 md:mr-60">
      <img src={hero2} className="md:h-80 md:w-180 md:rounded-md" alt="" />
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime iusto,
        molestiae voluptate laborum numquam explicabo natus qui tempora optio
        vitae reprehenderit in rem odio! Dolore quibusdam totam itaque
        perferendis libero. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Non odit ex impedit libero beatae voluptas dignissimos nam
        architecto deserunt deleniti fugit eius placeat tempore quibusdam rerum
        porro recusandae, ullam fugiat! Eaque voluptatem voluptates iste
        quisquam incidunt repudiandae quod officia quia consectetur ad quibusdam
        quae autem suscipit aliquid recusandae ab neque voluptatum, eos dolore
        modi commodi harum, saepe ipsam. Dolores, eos.
      </span>
    </div>
  );
};

export default Hero;
