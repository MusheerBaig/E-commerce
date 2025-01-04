import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ProductContext";

function ProductTile({ singleProductTile }) {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(ShoppingCartContext);

  function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/product-details/${getCurrentProductId}`);
  }

  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
        <div className="relative group">
          <img
            src={singleProductTile?.thumbnail}
            alt={singleProductTile?.title}
            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-50 cursor-pointer"
            onClick={() =>
              handleNavigateToProductDetailsPage(singleProductTile?.id)
            }
          ></div>
        </div>

        <div className="px-2 py-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-semibold text-gray-800 truncate w-3/4">
              {singleProductTile?.title}
            </h3>
            <p className="text-xs font-semibold text-gray-900">
              ${singleProductTile?.price}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() =>
                handleNavigateToProductDetailsPage(singleProductTile?.id)
              }
              className="py-2 px-3 border border-[#3a7ef9] rounded-md text-[#3a7ef9] hover:bg-slate-50 shadow-lg transform transition hover:scale-105 w-full text-xs sm:text-base md:text-lg lg:text-xl"
            >
              View
            </button>

            <button
              disabled={
                cartItems.findIndex(
                  (item) => item.id === singleProductTile.id
                ) > -1
              }
              onClick={() => handleAddToCart(singleProductTile)}
              className="py-2 px-3 border bg-[#3a7ef9] rounded-md text-white hover:bg-blue-600 shadow-lg transform transition hover:scale-105 w-full text-xs sm:text-base md:text-lg lg:text-xl disabled:opacity-60"
            >
              {cartItems.findIndex((item) => item.id === singleProductTile.id) >
              -1
                ? "Added"
                : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
