import React from 'react';
import Header from '../components/Header';
import LatestStories from '../components/Latest-stories';
import StaffPicks from '../components/Staff-picks';
import city from '../assets/images/city.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-64 md:h-96 overflow-hidden my-8">
        <img
          src={city}
          alt="city"
          className="w-full h-full object-cover"
        />
      </div>
      <LatestStories />
      <StaffPicks />
    </div>
  );
};

export default Home;