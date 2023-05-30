import Image from "next/image";
import Container from "../components/(layout)/Container";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-h-[880px]">
        <Image
          className="max-h-[880px] w-full object-cover"
          src="https://dev2.growthbydesign.org/wp-content/uploads/home-hero-plane.jpg"
          alt="Hero"
          width={1920}
          height={880}
          quality={80}
        />
      </div>
      <Container>
        <div className="absolute top-1/4 ">
          <div className="flex max-w-prose flex-col gap-8">
            <h1 className="text-6xl font-bold">
              We&apos;ll help you pay for that trip to Paradise
            </h1>
            <p>
              Get Summertime loan from MSCU! You can borrow up to $1,000 with a
              low APR* of 8%, and a maximum 6 months tern. Automatic payment is
              required**. Offer available May 1st - August 31st.
            </p>
            <Button btnText="apply today" link="#" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
