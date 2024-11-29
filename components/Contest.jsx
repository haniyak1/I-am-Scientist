import { El_Messiri } from "next/font/google";


const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export default function Contest() {
  const images = [
    "/Blue.png", 
    "/Pink.png",
    "/Contest.png",
  ];

  return (
    <section className="relative bg-purple-950 py-16 text-white overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src="/robot.jpg" 
          alt="Background robot"
          className="w-full h-full object-cover opacity-10" 
        />
      </div>

      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h3 className="pb-5">Contest Schedule</h3>
          <h2 className={`text-3xl font-semibold ${elMessiri.className}`}>
            The National I Am Scientist System
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-gray-500 rounded-lg shadow-lg p-4 bg-opacity-10"
            >
              <img
                src={src}
                alt={`Contest column ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
