import React from "react";
import { FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Airpods Pro",
    image: "https://images.unsplash.com/photo-1585386959984-a41552262c3d",
  },
  {
    id: 2,
    name: "Plushie",
    image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69",
  },
  {
    id: 3,
    name: "Mini Fan",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 4,
    name: "Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 5,
    name: "Q-Tips",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8",
  },
  {
    id: 6,
    name: "Socks",
    image: "https://images.unsplash.com/photo-1582582429416-2d6e96f3e0c4",
  },
  {
    id: 7,
    name: "Baby Toy",
    image: "https://images.unsplash.com/photo-1608889175123-4c8a67f6e3a8",
  },
  {
    id: 8,
    name: "Delicious Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
];

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Top Header */}
      <header className="bg-[#248b7c] text-white px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">MyShop</div>

        <div className="flex w-1/2">
          <select className="bg-gray-200 text-black px-2 rounded-l-md outline-none">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 outline-none text-black bg-[#BFE7ED]"
          />
          <button className="bg-white  text-black px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        <div className="hidden md:flex gap-6 text-sm">
          <span>Account</span>
          <span>Orders</span>
          <span>Cart</span>
        </div>
      </header>

      {/* Category Bar */}
      <div className="bg-black text-white px-6 py-2 flex gap-6 text-sm overflow-x-auto">
        <span>Today's Deals</span>
        <span>Prime Video</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Customer Service</span>
        <span>Sell</span>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="text-center font-medium">{product.name}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;