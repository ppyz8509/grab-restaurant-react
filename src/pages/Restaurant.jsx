import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurant = async () => {
      try {
        const res = await axios.get(`${URL}/restaurants`, config);
        setRestaurants(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRestaurant();
  }, []);

  return (
    <div>
      <h1>Restaurant</h1>
    </div>
  );
};

export default Restaurant;
