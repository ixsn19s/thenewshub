import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

const Category = ({ userInput }) => {
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    userInput(category); // Call the userInput function with the selected category
  };

  return (
    <ul className="flex gap-8 font-semibold text-xl">
      <li>
        <Link
          onClick={() => handleCategoryClick('sports')}
          className="hover:text-violet-600 hover:scale-105 transition-all duration-300"
          to="/sports" // Replace href with 'to' if using React Router
        >
          Sports
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleCategoryClick('politics')}
          className="hover:text-blue-700 hover:scale-105 transition-all duration-300"
          to="/politics"
        >
          Politics
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleCategoryClick('entertainment')}
          className="hover:text-blue-700 hover:scale-105 transition-all duration-300"
          to="/entertainment"
        >
          Entertainment
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleCategoryClick('tech')}
          className="hover:text-blue-700 hover:scale-105 transition-all duration-300"
          to="/tech"
        >
          Tech
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleCategoryClick('health')}
          className="hover:text-blue-700 hover:scale-105 transition-all duration-300"
          to="/health"
        >
          Health
        </Link>
      </li>
    </ul>
  );
};

export default Category;
