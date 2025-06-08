import React from "react";

const certificates = [
  {
    title: "TCS iON Career Edge",
    image: "certificate4.jpg",
    link: "https://drive.google.com/file/d/17mOaHDz069t3JTUAo5kZZL3wCi6Ndv_M/view?usp=sharing",
    description:
      "Completed a 15-day program on career readiness and soft skills.",
  },
  {
    title: "NPTEL Operating System",
    image: "certificate3.jpg",
    link: "https://drive.google.com/file/d/1q-Rdr2svXUBVLyAfrGXQ1ZoKy121AzCz/view?usp=drivesdka",
    description:
      "Learned core OS concepts like process scheduling, memory management, and file systems.",
  },
  {
    title: "C Programming",
    image: "certificate1.jpg",
    link: "https://drive.google.com/file/d/1J7LVd6w3b3_UTzWjtWP86g0Z4nFPZU5V/view?usp=drivesdk",
    description:
      "Fundamentals of C language including loops, pointers, and memory operations.",
  },
  {
    title: "Aptitude Training",
    image: "certificate2.jpg",
    link: "https://drive.google.com/file/d/1J6eBrwBzwHovV51zihqZYDJqeTCr4yqO/view?usp=drivesdk",
    description:
      "Training on logical reasoning, quantitative aptitude, and verbal ability.",
  },
  {
    title: "All India NCAT 2025",
    image: "certificate5.jpeg",
    link: "https://drive.google.com/file/d/1Ymb6CZzQ5REoFgfLkEPDVR-9kQsdPTTK/view?usp=sharing",
    description:
      "This opportunity gave me deep insights into corporate hiring processes, especially the structure of aptitude tests.",
  },
];

const education = [
  {
    level: "10th",
    year: "2020",
    grade: "86.60",
    institute: "Graming Vidya Vikas Vidhyalay, Chapalagaon",
  },
  {
    level: "12th",
    year: "2022",
    grade: "74.67",
    institute:
      "C.B. Khedgis Basaveshwar Sci Rajavijaysingh Comm & Raja Jaysing Arts College Akkalkot",
  },
  {
    level: "Engineering",
    year: "2022–Present",
    grade: "7.22",
    institute:
      "Nagesh Karajagi Orchid College Of Engineering & Technology, Solapur",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen bg-graph px-6 pt-32 pb-16 grid grid-cols-1 place-items-center border-blue-600/40">
      <div className="max-w-5xl w-full">
        {/* Education Timeline - Vertical Layout */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-500">MY EDUCATION</h2>
            <p className="italic text-gray-400 mt-2">
              "Education builds the path to tomorrow’s success."
            </p>
          </div>

          <div className="relative border-l-2 border-blue-500 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-12 ml-6 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5 border-2 border-white"></div>
                <div className="bg-blue-500/10 border border-blue-400 p-4 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-blue-200">
                    {edu.level}
                  </h3>
                  <p className="text-sm text-blue-300">Year: {edu.year}</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Institute: {edu.institute}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Grade: {edu.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500">MY CERTIFICATES</h2>
          <p className="italic text-gray-400 mt-2">
            "Credentials that validate my knowledge and skills"
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-blue-500/10 border border-blue-400 rounded-xl p-6 shadow-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold text-center text-blue-200">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-300 text-center mt-2">
                  {cert.description}
                </p>

              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
