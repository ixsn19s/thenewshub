import React from 'react';
// import { Link } from 'react-router-dom'; 

const Category = ({ userInput }) => {
  // const handleCategoryClick = (e, value) => {
  //   e.preventDefault();
  //   userInput(value); // Call the userInput function with the selected category
  // };

  return (
    <ul className="flex gap-8 font-semibold text-xl">
      <li>
        <button onClick={userInput} value="sports"  className="hover:text-violet-600 transition-all duration-300">Sports</button>
      </li>

      <li>
      <button onClick={userInput} value="politics"  className="hover:text-violet-600 transition-all duration-300">Politics</button>
      </li>

      <li>
      <button onClick={userInput} value="entertainment"  className="hover:text-violet-600 transition-all duration-300">Entertainment</button>
      </li>

      <li>
      <button onClick={userInput} value="health"  className="hover:text-violet-600 transition-all duration-300">Health</button>
      </li>

      <li>
      <button onClick={userInput} value="education"  className="hover:text-violet-600 transition-all duration-300">Education</button>
      </li>
    </ul>
  );
};

export default Category;
