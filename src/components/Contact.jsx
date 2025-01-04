const Contact = ({ data }) => {
  return (
    <div className="container mx-auto py-16 px-6" id="contact">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {data.title}
      </h2>
      <p className="text-gray-600 text-center mb-12">{data.description}</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h3>
          <p className="font-semibold">Email:</p>
          <p className="text-gray-600">{data.email}</p>
          <p className="font-semibold mt-4">Phone:</p>
          <p className="text-gray-600">{data.phone}</p>
          <p className="font-semibold mt-4">Address:</p>
          <p className="text-gray-600">{data.address}</p>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href={data.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a7ef9] hover:text-blue-600"
              >
                Facebook
              </a>
              <a
                href={data.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                Instagram
              </a>
              <a
                href={data.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a7ef9] hover:text-blue-600"
              >
                TwitterX
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h3>
          {data.form.fields.map((field, index) => (
            <div key={index}>
              <label className="block font-bold text-gray-700">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#3a7ef9] text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            {data.form.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
