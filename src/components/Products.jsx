const Products = ({ data }) => {
  return (
    <div className="container mx-auto py-16 px-6" id="productsHome">
      <section>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-all duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.featuredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-all duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-lg">{product.description}</p>
                <p className="text-[#3a7ef9] font-bold text-lg mt-4">
                  {product.price}
                </p>
                <button className="mt-4 px-6 py-2 bg-[#3a7ef9] text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
