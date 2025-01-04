import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg shadow-md bg-white border border-gray-200">
        <div className="w-32 h-32 bg-gray-100 p-2 rounded-lg flex-shrink-0">
          <img
            src={singleCartItem?.thumbnail}
            alt={singleCartItem?.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-between w-full md:w-2/3">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {singleCartItem?.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 mb-4 truncate">
            {singleCartItem?.description || "No description available."}
          </p>
          <button
            onClick={() => handleRemoveFromCart(singleCartItem, true)}
            className="self-start text-sm px-4 py-2 rounded-md text-white bg-[#3a7ef9] hover:bg-blue-600 shadow-lg transition transform duration-300 hover:scale-105"
          >
            Remove
          </button>
        </div>

        <div className="flex flex-col items-end gap-3">
          <h3 className="text-lg font-semibold text-gray-800">
            ${singleCartItem?.totalPrice?.toFixed(2)}
          </h3>
          <p className="text-sm font-medium text-gray-600">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              disabled={singleCartItem?.quantity === 1}
            >
              <span className="text-lg font-bold">-</span>
            </button>
            <span className="text-sm font-medium text-gray-800">
              {singleCartItem?.quantity}
            </span>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              <span className="text-lg font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
    </Fragment>
  );
}

export default CartTile;
