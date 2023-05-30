import ContentSection from "@/app/components/(layout)/ContentSection";
import Image from "next/image";
import React from "react";
import CardDeck from "./CardDeck";

const CardSection = () => {
  return (
    <div className="pb-20">
      <div className="relative">
        <h2 className="absolute left-1/2 top-20 max-w-3xl -translate-x-1/2 text-center text-3xl font-bold text-white">
          We&apos;re a leading provider of short-term and long-term needs for
          all of our members
        </h2>
        <Image
          className="lg:px-22 mx-auto px-4 sm:px-6"
          src="https://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="1"
          width={1700}
          height={870}
        />
        <CardDeck />
      </div>
    </div>
  );
};

export default CardSection;
