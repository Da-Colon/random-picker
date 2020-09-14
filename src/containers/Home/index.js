import React from "react";
import demo from '../../assets/images/demo.gif'

const Home = () => {
  return (
    <div className="pt-16 w-full h-full flex flex-col items-center no-scroll-bar-overflowx">
      <div data-cy="home-heading" className="bg-white text-md tracking-wider max-w-sm mt-2 p-2 rounded-md text-center shadow-2xl">
        Leave the choosing to <span className="font-extrabold">Who's Next?</span> and have a random student be chosen at random from 
        your class list to partcipate in your lesson!
      </div>
      <img alt="demo" className="max-w-lg shadow-xl rounded-full p-8 my-4" src={demo} />
    </div>
  );
};

export default Home;
