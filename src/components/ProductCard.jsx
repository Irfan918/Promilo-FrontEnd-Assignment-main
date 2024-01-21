import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpg';

const pics = [image1, image2, image3, image4, image5, image6, image7];

const ProductCard = ({ index, imageUrl, productName }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Perform logic to add to cart, for example, call an addToCart function with the product details and quantity
    // For now, just log the details
    console.log(`Added ${quantity} ${productName} to cart`);
    
    // Reset quantity to 0 after adding to cart
    setQuantity(0);
  };

  return (
    <div className="p-2 text-center bg-white rounded shadow dark:bg-gray-700">
      <div className="block mb-2" href="#">
        <div className="relative z- overflow-hidden">
          <div className="mb-3 overflow-hidden">
            <div className='absolute z-50 top-2 left-3'>
              <img className="mx-auto transition-all rounded h-8 w-8"
                src={imageUrl}
                alt="" />
            </div>

            <img className="object-cover w-full mx-auto transition-all rounded h-40 hover:scale-110"
              src={pics[index]}
              alt="" />
          </div>
          <a href="#">
            <h3 className="mb-2 text-lg font-bold dark:text-white"> {productName}</h3>
          </a>

          <div className="flex items-center justify-center mx-auto mt-2 space-x-2">
            <button className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-700" onClick={handleRemove}>
              -
            </button>
            <input
              type="number"
              className="w-10 p-1 text-center border bg-green-100"
              value={quantity}
              readOnly
            />
            <button className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-700" onClick={handleAdd}>
              +
            </button>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
              onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
