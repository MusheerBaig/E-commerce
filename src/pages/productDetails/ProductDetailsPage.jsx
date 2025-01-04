import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ProductContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    listOfProducts,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("Medium");

  async function fetchProductDetails() {
    const product = listOfProducts.find((item) => item.id === parseInt(id));
    if (product) {
      setProductDetails(product);
      setMainImage(product.thumbnail);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // if (loading)
  //   return (
  //     <h1 className="text-center text-lg font-semibold py-6">
  //       Product details loading! Please wait...
  //     </h1>
  //   );

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-screen">
          <div className="flex flex-col justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[70vh]">
              <img
                src={mainImage}
                alt={productDetails?.title}
                className="w-full h-full object-cover transition-transform transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="flex mt-6 justify-center gap-4 overflow-x-auto h-[15vh]">
              {[
                productDetails?.thumbnail,
                ...(productDetails?.images || []),
              ].map((imageItem, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md overflow-hidden cursor-pointer border-2 ${
                    mainImage === imageItem
                      ? "border-[#3a7ef9]"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(imageItem)}
                >
                  <img
                    src={imageItem}
                    alt={`product image ${index}`}
                    className="w-20 h-full object-cover transition-transform transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4 mx-auto h-[65vh] flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mt-5">
                {productDetails?.title}
              </h2>
              <div className="text-2xl font-semibold text-gray-800">
                ${productDetails?.price}
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="block text-lg font-medium text-gray-700"
                >
                  Size
                </label>
                <select
                  id="size"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="mt-1 block w-[10vw] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <button
                disabled={
                  cartItems.findIndex((item) => item.id === productDetails.id) >
                  -1
                }
                onClick={() => handleAddToCart(productDetails)}
                className="w-[13vw] py-3 px-6 border border-blue-500 rounded-lg bg-[#3a7ef9] text-white text-lg font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {cartItems.findIndex((item) => item.id === productDetails.id) >
                -1
                  ? "Added to Cart"
                  : "Add to Cart"}
              </button>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                  Product Details
                </h3>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  {productDetails?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
