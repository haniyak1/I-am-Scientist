export default function Action() {
  return (
    <section className="relative bg-purple-800 text-white py-12">
   
      <div className="absolute top-12 left-8 w-12 h-12 bg-blue-500 rounded-full"></div>
      <div className="absolute top-20 right-8 w-16 h-16 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-16 left-12 w-6 h-6 bg-green-500 rounded-full"></div>
      {/* <div className="absolute top-1/2 right-16 w-40 h-10 bg-red-400 rounded-lg"></div> */}
 
      <div className="container mx-auto text-center px-4 relative">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          "Test Your Limits—Sign Up for Remote Competitions and Rise to the Top!"
        </h2>
        <p className="text-sm md:text-base mb-6">
          Build your own online tests and assessments with AI Scientist for free
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:opacity-90 transition"
        >
          Get started for free →
        </a>
      </div>
    </section>
  );
}
