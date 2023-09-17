import  { useState } from "react";
import  img  from "../assets/images/big-shoe1.png";
import  img1  from "../assets/images/big-shoe2.png";
import  img2  from "../assets/images/big-shoe3.png";
const ProductPage = () => {
  const categories = ["All", "Shoes", "Sneakers", "Sandals", "Boots"];

  const placeholderProducts = [
    { name: "Product 1", price: "$100", category: "Shoes", image: img },
    { name: "Product 1", price: "$100", category: "Shoes", image: img1 },
    { name: "Product 1", price: "$100", category: "Shoes", image: img2 },
    { name: "Product 2", price: "$120", category: "Shoes", image: "https://via.placeholder.com/150" },
    { name: "Product 3", price: "$90", category: "Sneakers", image: "https://via.placeholder.com/150" },
    { name: "Product 4", price: "$80", category: "Sneakers", image: "https://via.placeholder.com/150" },
    { name: "Product 5", price: "$70", category: "Sandals", image: "https://via.placeholder.com/150" },
    { name: "Product 6", price: "$110", category: "Sandals", image: "https://via.placeholder.com/150" },
    { name: "Product 7", price: "$130", category: "Boots", image: "https://via.placeholder.com/150" },
    { name: "Product 8", price: "$150", category: "Boots", image: "https://via.placeholder.com/150" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? placeholderProducts
      : placeholderProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="max-container mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Explore <span className="text-coral-red">Nike</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover the latest Nike products and styles in different categories.
        </p>
      </div>
   

    
      <div className="mt-8 flex justify-center space-x-4">
  {categories.map((category) => (
    <button
      key={category}
      className={` p-2 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full  ${
        selectedCategory === category ? "bg-coral-red text-white" : "bg-white text-gray-800"
      } hover:bg-coral-red hover:text-white focus:outline-none`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border p-4">
            <img src={product.image} alt={product.name} className="w-[150px] h-[150px] mb-4" />
            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
            <p className="font-semibold text-coral-red">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
