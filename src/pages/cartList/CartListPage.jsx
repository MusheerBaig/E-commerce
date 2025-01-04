import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ProductContext";
import CartTile from "../../components/cartTile/CartTile";

function CartListPage() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-[90vw] mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">My Cart</h1>

      <div className="flex mt-8 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 w-[60vw]">
          <div className="space-y-4 mt-3">
            {cartItems?.length ? (
              cartItems.map((singleCartItem, index) => (
                <CartTile key={index} singleCartItem={singleCartItem} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <h2 className="text-xl font-semibold text-gray-600">
                  Your cart is empty.
                </h2>
                <button
                  onClick={() => navigate("/products")}
                  className="mt-4 px-6 py-3 rounded-md font-medium text-white bg-[#3a7ef9] hover:bg-blue-600 shadow-lg transition transform duration-300 hover:scale-105"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 w-[30vw] self-start">
          <h3 className="text-2xl font-semibold text-gray-800 border-b pb-4">
            Order Summary
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-gray-800 border-t pt-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">
                ${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <button
              disabled={cartItems.length === 0}
              className="w-full px-6 py-3 text-white bg-[#3a7ef9] hover:bg-blue-600 rounded-lg font-medium shadow-lg disabled:opacity-50 transition transform duration-300 hover:scale-105"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => navigate("/products")}
              className="w-full px-6 py-3 text-[#3a7ef9] border-[#3a7ef9] border rounded-lg font-medium hover:bg-slate-50 shadow-lg transition transform duration-300 hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListPage;
