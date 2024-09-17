import React from "react";
import products from "@/json/products.json";
import Image from "next/image";
import Link from "next/link";

function Products() {
  const getPrice = (item) => {
    const amount = (item.price * item.discountPercentage) / 100;
    const realPrice = item.price - amount;
    return realPrice.toFixed(2);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-4 lg:gap-12 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <Image
              src={item.thumbnail}
              width={400}
              height={300}
              alt={item.title}
            />

            <div className="px-6 pb-6">
              <Link
                className="text-lg font-semibold"
                href={`/products/${item.title.split(" ").join("-")}`}
              >
                {item.title}
              </Link>
              <div className="space-x-3">
                <label>₹{getPrice(item)}</label>
                <del>₹{item.price}</del>
                <label>₹{item.discountPercentage}% off</label>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <button className="bg-green-600 px-4 py-2 text-white rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
