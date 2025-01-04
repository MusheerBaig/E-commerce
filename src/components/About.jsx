const About = ({ data }) => {
  return (
    <div id="about" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          {data.title}
        </h2>
        <p className="text-lg text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 justify-center items-center">
          {data.highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white border rounded-lg p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 max-w-xl mx-auto"
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3a7ef9] text-white text-2xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {highlight.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {highlight.description}
              </p>
              <div className="absolute inset-0 bg-[#3a7ef9] opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
