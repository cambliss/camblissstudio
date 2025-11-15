import GetRating from "@hooks/use-rating";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SidebarMovie = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movie data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        console.log(res.data); // Log the response to check data structure
        // Ensure the data is an array
        setMovies(Array.isArray(res.data) ? res.data : []);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="fm-widget-top-product-list-1-6">
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.slice(12, 17).map((item) => (
          <div
            className="fm-widget-top-product-single-1-6 mb-20"
            key={item._id}
          >
            <div className="fm-shop-thumb">
              <Link href={`/shop-details/${item._id}`}>
                <Image
                  src={item.image || '/placeholder.jpg'} // Provide a fallback image if needed
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  alt={item.title || 'image not found'} // Provide a fallback alt text
                />
              </Link>
            </div>
            <div className="fm-widget-top-product-content-1-6">
              <h4 className="fm-product-box-title-1-6">
                <Link href={`/shop-details/${item._id}`}>{item.title}</Link>
              </h4>
              <div className="fm-product-box-price-1-6">
                <span>
                  <ins>${item.price}</ins>
                  {item.old_price && <del>${item.old_price}</del>}
                </span>
              </div>
              <div className="fm-rating pt-4-px">
                <GetRating averageRating={item.ratings} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No services available</p> // Message if there are no movies
      )}
    </div>
  );
};

export default SidebarMovie;
