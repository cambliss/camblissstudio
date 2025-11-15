import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Simulate a fetch call with manual categories
const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { _id: '1', category: 'Website Development' },
        { _id: '2', category: 'Animation' },
        { _id: '3', category: 'UI/UX' },
        { _id: '4', category: 'Advertisement' },
        { _id: '5', category: 'Interior Designing' },
        { _id: '6', category: 'App Development' },
        { _id: '7', category: 'Marketing' },
        { _id: '8', category: 'Branding & Creative Services' },
        // { _id: '8', category: 'Branding and Creative Services' },
      ]);
    }, 500); // Simulate network delay
  });
};

const Categories = ({ selectCategory }) => {
  const [movieCategoryTwo, setMovieCategoryTwo] = useState([]);

  useEffect(() => {
    // Fetch categories (simulated with manual data)
    fetchCategories()
      .then((data) => {
        console.log(data); // Log the response to check data structure
        setMovieCategoryTwo(Array.isArray(data) ? data : []);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="widget fm-widget widget-category mb-40">
      <h4 className="fm-widget-heading-1-6 mb-20">Categories</h4>
      <div className="fm-widget-categories-list-1-6 category-btn">
        {/* View all button can be used to show/hide categories or for another feature */}
        {/* Uncomment the button if needed */}
        {/* <button className="mb-4">View all</button> */}
        <ul>
          {Array.isArray(movieCategoryTwo) && movieCategoryTwo.map((item) => (
            <li key={item._id}>
              <button onClick={() => selectCategory(item.category)}>
                {item.category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
