import ContentSection from "@/app/components/(layout)/ContentSection";
import Image from "next/image";
import React from "react";
import CardDeck from "./CardDeck";

const CardSection = () => {
  return (
    <div className="pb-20">
      <div className="relative">
        <Image
          src="https://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="1"
          width={1920}
          height={1200}
        />
        <CardDeck />
      </div>
    </div>
  );
};

export default CardSection;
