import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';

export default function Cart() {
  const [stud, setstud] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(false);
  const [delet, setDelete] = useState(false);

  const user_id = window.localStorage.getItem("token");

  useEffect(() => {
    axios.get(`https://ecom-ten-blue.vercel.app/get-cart/${user_id}`).then((res) => {
      setstud(res.data);
      // Initialize quantities for each item if not already set
      const initialQuantities = {};
      res.data.forEach(item => {
        initialQuantities[item._id] = quantities[item._id] || 1;
      });
      setQuantities(initialQuantities);
    })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, [user_id]);

  // Quantity change handler
  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  // Loader spinner component for payment
  // const PaymentLoader = () => (
  //   <div className="flex flex-col items-center justify-center mt-6 mb-4">
  //     <svg className="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24">
  //       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
  //       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  //     </svg>
  //     <span className="mt-3 text-blue-700 font-semibold text-lg">Processing Payment...</span>
  //   </div>
  // );

  const pay = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const totalAmt = stud.reduce((sum, item) => sum + item.price * (quantities[item._id] || 1), 0);
      const response = await axios.post("https://ecom-ten-blue.vercel.app/payment", { amt: totalAmt });
      const res = response.data;
      var options = {
        key: "" + res.key_id + "",
        amount: "" + res.amount + "",
        currency: "INR",
        name: "Payment",
        description: "" + res.description + "",
        // image: "https://dummyimage.com/600x400/000/fff",
        order_id: "" + res.order_id + "",
        handler: function (response) {
          alert("Payment Succeeded");
        },
        prefill: {
          contact: "" + res.contact + "",
          name: "" + res.name + "",
          email: "" + res.email + "",
        },
        notes: {
          description: "" + res.description + "",
        },
        theme: {
          color: "#2300a3",
        },
      };
      // Uncomment below to actually open Razorpay
      var razorpayObject = new window.Razorpay(options);
      razorpayObject.on("payment.failed", function (response) {
        alert("Payment Failed");
      });
      const out = await axios.post(`https://ecom-ten-blue.vercel.app/empty-cart/${user_id}`);
      console.log(out);
      setstud([]); // Clear cart after payment
      razorpayObject.open();
    } catch (err) {
      alert("Payment Failed");
    }
    setLoading(false);
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-blue-50 flex flex-col items-center px-2 py-6">
        <div className="w-full max-w-[1023px] flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Your Cart</h2>
            {stud.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              <div className="space-y-4">
                {stud.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded"
                    />
                    <div className="flex-1 flex flex-col items-center sm:items-start">
                      <div className="font-semibold text-lg text-gray-800">{item.name}</div>
                      <div className="text-blue-700 font-bold mt-2 mb-2">₹{item.price}</div>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 py-1 bg-blue-200 text-blue-700 rounded hover:bg-blue-300"
                          onClick={() => handleQuantityChange(item._id, -1)}
                          disabled={quantities[item._id] <= 1}
                        >-</button>
                        <span className="px-3 py-1 bg-gray-100 rounded text-base">{quantities[item._id] || 1}</span>
                        <button
                          className="px-2 py-1 bg-blue-200 text-blue-700 rounded hover:bg-blue-300"
                          onClick={() => handleQuantityChange(item._id, 1)}
                        >+</button>
                      </div>
                    </div>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm flex items-center justify-center"
                      onClick={async (evt) => {
                        evt.preventDefault();
                        try {
                          setDelete(true);
                          await axios.post(`https://ecom-ten-blue.vercel.app/delete-cart/`, { name: item.name });
                          alert(`${item.name} deleted from cart`);
                          setstud(prev => prev.filter(i => i._id !== item._id));
                          setDelete(false);
                        } catch (err) {
                          console.log("error", err);
                        }
                      }
                      }
                    >
                      {delet ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Deleting
                        </>) : ("Delete")}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Order Summary */}
          <div className="md:w-80 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
                </svg>
                Order Summary
              </h3>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Total Items</span>
                <span className="font-semibold">{stud.reduce((sum, item) => sum + (quantities[item._id] || 1), 0)}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-700">
                <span>Total Amount</span>
                <span className="font-bold text-blue-700 text-lg">
                  ₹{stud.reduce((sum, item) => sum + (item.price * (quantities[item._id] || 1)), 0)}
                </span>
              </div>
              <hr className="my-4 border-blue-100" />
              <button
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition flex items-center justify-center gap-2"
                disabled={stud.length === 0 || loading}
                onClick={pay}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Processing Payment... 
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    Place Order
                  </>
                )}
              </button>
              <div className="text-xs text-gray-400 mt-3 text-center">
                Safe &amp; Secure Payments
              </div>
              {/* {loading && <PaymentLoader />} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}