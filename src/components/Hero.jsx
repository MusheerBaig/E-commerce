import { useNavigate } from "react-router-dom";

const Hero = ({ data, highlights }) => {
  const navigate = useNavigate();
  return (
    <div id="home">
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            {data.subtitle}
          </p>
          <button
            onClick={() => navigate("/products")}
            className="mt-6 px-8 py-3 text-lg bg-[#3a7ef9] hover:bg-blue-600 text-white rounded-lg shadow-lg transform transition hover:scale-105"
          >
            {data.cta}
          </button>
        </div>
      </div>

      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={highlight.icon}
                  alt={highlight.title}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500 transition">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{highlight.description}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
