import Image from "next/image";

const courses = [
  {
    title: "Become A Machine Learning - Master",
    hours: "12 hours",
    students: "0 Students",
    lessons: "16 Lessons",
    image: "/course-1.jpg",
  },
  {
    title: "Deep Learning for Beginners - Master Deep Learning",
    hours: "7 hours",
    students: "0 Students",
    lessons: "15 Lessons",
    image: "/course-2.jpg",
  },
  {
    title: "The Complete AI Science Course 2024",
    hours: "18 hours",
    students: "0 Students",
    lessons: "14 Lessons",
    image: "/course-3.jpg",
  },
];

export default function CoursesSection() {
  return (
    <section className="relative bg-purple-950 text-white py-16">
      <div className="absolute inset-0">
        <Image
          src="/bg-image.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 pointer-events-none"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl uppercase">Popular Courses</h3>
          <h2 className="text-3xl font-semibold">Discover Your Perfect Course</h2>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] mx-auto opacity-70"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1C032F] to-[#0032AB] rounded-lg overflow-hidden shadow-lg relative opacity-100 hover:scale-105 hover:shadow-xl hover:opacity-100 transition-transform duration-300 ease-in-out"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{course.title}</h3>
                <div className="text-sm flex flex-wrap gap-2 text-gray-400 mb-4">
                  <span>{course.hours}</span>
                  <span>•</span>
                  <span>{course.students}</span>
                  <span>•</span>
                  <span>{course.lessons}</span>
                </div>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="inline-block align-middle bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] text-white py-2 px-4 text-sm font-semibold font-jost hover:opacity-90 transition"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] text-white py-2 px-6 shadow-md text-sm font-semibold hover:opacity-90 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
