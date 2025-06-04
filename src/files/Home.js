import { Link } from "react-router-dom";
import Nav from "./Nav";
import Product from "./Product";
import Footer from "./Footer";

function Home() {
  // Category data for section 1
  // const allCookies = document.cookie;

  // // To get a specific cookie value (e.g., "token")
  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }

  // // Usage:
  // const token = getCookie("token");
  // console.log(token , allCookies);


  const categories = [
    { name: "Top Offers", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100" },
    { name: "Mobiles & Tablets", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100" },
    { name: "Electronics", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100" },
    { name: "TVs & Appliances", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100" },
    { name: "Fashion", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a11d5d13e54bf964.png?q=100" },
    { name: "Beauty", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100" },
    { name: "Home & Furniture", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100" },
    { name: "Flights", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100" },
    { name: "Grocery", img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100" },
  ];

  // Example product data

  // Banner images for section 5
  const banners = [
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/d78dda604e158c5c.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/6e9e6f6130cddc96.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/2073732fc5e1fef2.jpg?q=50",
  ];

  return (
    <>
      <Nav />

      {/* Hero Banner */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-blue-50 py-8 mb-6 flex flex-col items-center px-2">
        <div className="w-full max-w-[890px] flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900 text-center">Welcome to Delhi-Cart</h1>
          <p className="text-base sm:text-lg text-blue-700 mb-4 text-center">Best deals, top brands, and exclusive offers just for you!</p>
          <Link to="/shop">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-base sm:text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="w-full px-2 mb-8">
        <div className="w-full max-w-[890px] mx-auto flex overflow-x-auto gap-4 py-4 scrollbar-thin scrollbar-thumb-blue-200">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] bg-white rounded-lg shadow hover:scale-105 transition p-3 sm:p-4 cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
              <span className="font-medium text-xs sm:text-base text-gray-800 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <Product />

      {/* Banners Carousel */}
      <section className="w-full px-2 mb-10">
        <div className="w-full max-w-[890px] mx-auto flex gap-3 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200">
          {banners.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Banner ${idx + 1}`}
              className="rounded-xl shadow min-w-[220px] sm:min-w-[320px] max-w-[400px] object-cover"
              style={{ height: "120px", maxHeight: "200px" }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </>
  );
}

export default Home;