import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import ProductTile from "../../components/productTile/ProductTile";

function ProductListPage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  // if (!loading)
  //   return (
  //     <h1 className="text-center text-lg text-gray-500 py-20">
  //       Loading data... Please wait.
  //     </h1>
  //   );

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Our Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our exclusive range of products. Carefully curated for your
            style.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTile, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-105"
              >
                <ProductTile singleProductTile={singleProductTile} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-600">
              No Products Found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductListPage;
