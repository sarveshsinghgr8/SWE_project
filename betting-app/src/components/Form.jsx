import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    Amount: '',
    Sport: '',
    Match: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Place your bet here</h2>

        <div className="mb-4">
          <label htmlFor="Amount" className="block text-sm font-medium text-gray-600">
            Amount
          </label>
          <input
            type="text"
            id="Amount"
            name="Amount"
            value={formData.Amount}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Sport" className="block text-sm font-medium text-gray-600">
            Select Sport
          </label>
          <select
            id="Sport"
            name="Sport"
            value={formData.Sport}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            <option value="option1">Cricket</option>
            <option value="option2">Football</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="Match" className="block text-sm font-medium text-gray-600">
            Select Match
          </label>
          <select
            id="Match"
            name="Match"
            value={formData.Match}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Option</option>
            <option value="optionA">Match A</option>
            <option value="optionB">Match B</option>
          </select>
        </div>

        <Link to="/">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Place bet
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
