import React from "react";

const order = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              ShopForFashion.COM
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              Order ID: #6778776
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order Has Been Successfully Placed
            </p>
            <div className="flex mb-4">
              <a className="flex-grow text-gray-300 text-center  border-b-2 py-2 text-lg px-1">
                Item Description
              </a>
              <a className="flex-grow border-b-2 border-gray-300 text-center py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow border-b-2 border-gray-300 text-center py-2 text-lg px-1">
                Price
              </a>
            </div>

            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500 ">Trend Wear (XL,Black)</span>

              <span className="text-gray-500 ml-auto">1</span>
              <span className="ml-auto text-white">₹499</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500 ">Trend Wear (XL,Blue)</span>

              <span className="text-gray-500 ml-auto">4</span>
              <span className="ml-auto text-white">₹499</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500 ">Trend Wear (XL,Red)</span>

              <span className=" ml-auto text-gray-500">2</span>
              <span className="ml-auto text-white">₹499</span>
            </div>
            <div className="flex flex-col">
              <span className="title-font font-medium text-2xl text-white">
                SubTotal :₹499
              </span>

              <div className="my-5 ">
                <button className="flex mx-0 text-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default order;
