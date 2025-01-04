const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-2xl font-semibold text-[#3a7ef9]">Malboosat</p>
        </div>

        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://facebook.com/elegantburqas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/elegantburqas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/elegantburqas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            Twitter
          </a>
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Malboosat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
