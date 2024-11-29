import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-blue-900">
     
      <div className="relative w-full h-[500px]">
        <Image
          src="/banner.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      
     
    </section>
  );
};

export default Hero;
