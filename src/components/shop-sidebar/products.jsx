// import GetRating from "@hooks/use-rating";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { cart_product } from "src/redux/features/cart-slice";

// const Products = () => {
//   const [movies, setMovies] = useState([]);
//   const dispatch = useDispatch();
//   //get data
//   useEffect(() => {
//     axios
//       .get(`${process.env.BASE_URL}movie/all-movie`)
//       .then((res) => {
//         setMovies(res.data);
//       })
//       .catch((e) => console.log(e));
//   }, []);

//   return (
//     <div className="fm-shop-content-wrapper">
//       {movies?.slice(0, 12).map((item) => (
//         <div
//           className="fm-shop-product fade__anim-item text-center"
//           key={item._id}
//         >
//           <div className="fm-shop-product-img">
//             <Link href={`/shop-details/${item._id}`}>
//               <Image
//                 src={item.image}
//                 width={500}
//                 height={500}
//                 style={{ width: "100%", height: "auto" }}
//                 alt="image not found"
//               />
//             </Link>
//             <button
//               onClick={() => dispatch(cart_product(item))}
//               className="add_to_cart_button"
//             >
//               <i className={item.icon}></i>
//               <span>Add To Cart</span>
//             </button>
//           </div>
//           <div className="fm-shop-product-content ">
//             <div className="fm-shop-product-rating">
//               <GetRating averageRating={item.ratings} />
//             </div>
//             <h4 className="fm-shop-product-title">
//               <Link href={`/shop-details/${item._id}`}>{item.title}</Link>
//             </h4>
//             <span className="fm-shop-price">
//               <ins>${item.price}</ins>
//               <del>{item.old_price === 0 ? "" : `$${item.old_price}`}</del>
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
import GetRating from "@hooks/use-rating";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "src/redux/features/cart-slice";
import website from "@assets/img/shop/1.png";
import app from "@assets/img/shop/2.png";
import animation from "@assets/img/shop/3.png";
import uiux from "@assets/img/shop/4.png";
import branding from "@assets/img/shop/5.png";
import interior from "@assets/img/shop/6.png";
import advertisement from "@assets/img/shop/7.png";

// Hardcoded products for testing
const mockProducts = [
  {
    _id: '1',
    image: website,
    icon: 'icon-class-1',
    ratings: 4.5,
    title: 'Website Development',
    price: 29.99,
    
    
  },
  {
    _id: '2',
    image: app,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'App Development',
    price: 19.99,
    old_price: 29.99,
  },
  {
    _id: '3',
    image: animation,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'Animation',
    price: 19.99,
    old_price: 29.99,
  },
  {
    _id: '4',
    image: uiux,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'UI/UX',
    price: 19.99,
    old_price: 29.99,
  },
  {
    _id: '5',
    image: branding,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'Branding',
    price: 19.99,
    old_price: 29.99,
  },
  {
    _id: '6',
    image: interior,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'Interior Designing',
    price: 19.99,
    old_price: 29.99,
  },
  {
    _id: '7',
    image: advertisement,
    icon: 'icon-class-2',
    ratings: 3.5,
    title: 'Advertisement',
    price: 19.99,
    old_price: 29.99,
  },
  
  // Add more products as needed
];

const Products = () => {
  const [movies, setMovies] = useState(mockProducts); // Use hardcoded products
  const dispatch = useDispatch();

  return (
    <div className="fm-shop-content-wrapper">
      {movies?.slice(0, 12).map((item) => (
        <div
          className="fm-shop-product fade__anim-item text-center"
          key={item._id}
        >
          <div className="fm-shop-product-img">
            <Link href={`/shop-details/${item._id}`}>
              <Image
                src={item.image}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
            </Link>
            <button
              onClick={() => dispatch(cart_product(item))}
              className="add_to_cart_button"
            >
              <i className={item.icon}></i>
              <span>Add To Cart</span>
            </button>
          </div>
          <div className="fm-shop-product-content ">
            {/* <div className="fm-shop-product-rating">
              <GetRating averageRating={item.ratings} />
            </div> */}
            <h4 className="fm-shop-product-title">
              <Link href={`/shop-details/${item._id}`}>{item.title}</Link>
            </h4>
            {/* <span className="fm-shop-price">
              <ins>${item.price}</ins>
              <del>{item.old_price === 0 ? "" : `$${item.old_price}`}</del>
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
