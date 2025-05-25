import { useState } from "react";
import axios from 'axios';

function Product() {
  const user_id = window.localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
      price: 1299,
      desc: "Bluetooth, 20h Battery, Noise Cancellation",
    },
    {
      id: 2,
      name: "Smartphone",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
      price: 15999,
      desc: "6.5-inch, 128GB, 50MP Camera",
    },
    {
      id: 3,
      name: "Sports Shoes",
      img: "https://images.unsplash.com/photo-1528701800484-9059093a9367?auto=format&fit=crop&w=400&q=80",
      price: 899,
      desc: "Breathable, Lightweight, Size 7-11",
    },
    {
      id: 4,
      name: "Analog Watch",
      img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
      price: 499,
      desc: "Water Resistant, 2 Years Warranty",
    },
  ]);
  // Cart state
  // const [cart, setCart] = useState([]);
  const cart = [];
  // Add to cart handler
  // const handleAddToCart = (product) => {
  //   setCart((prev) => [...prev, product]);
  // };

  return (
    <section className="w-full px-2 mb-10">
      <div className="w-full max-w-[890px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Featured Products</h2>
        {/* Simple cart feedback */}
        {cart.length > 0 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-center">
            {cart.length} item{cart.length > 1 ? "s" : ""} added to cart!
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={product.img} alt={product.name} className="w-28 h-28 object-contain mb-3 rounded" />
              <div className="font-semibold text-base text-gray-800 mb-1 text-center">{product.name}</div>
              <div className="text-gray-500 text-sm mb-2 text-center">{product.desc}</div>
              <div className="text-blue-700 font-bold mb-2 text-center">₹{product.price}</div>
              <button
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm flex items-center justify-center"
                onClick={async (evt) => {
                  setLoading(true);
                  const name = product.name;
                  let qty = 1;
                  try {
                    await axios.post(`https://ecom-ten-blue.vercel.app/add-to-cart/`, {
                      image: product.img,
                      user_id: user_id,
                      name: name,
                      desc: product.desc, // <-- use product.desc
                      price: product.price,
                      qty: qty,
                    });
                    alert(`${product.name} Added To Your Cart`);
                  } catch (err) {
                    alert("Failed to add to cart");
                    console.log("error", err);
                  }
                  setLoading(false);
                }}
              >
                {loading ? (
                  <>

                    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Adding...
                  </>) : ("Add To Cart")}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>

  )
}

export default Product;
