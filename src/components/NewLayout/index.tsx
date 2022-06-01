import React, { useCallback } from 'react';
import { RedirectButton } from '../RedirectButton';
import { GithubLogo, InstagramLogo, LinkedinLogo, RocketLaunch } from 'phosphor-react';

const NewLayout: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen w-full  h-full text-primary font-roboto">
      <div className="px-8 h-20 w-full flex align-middle items-center justify-between">
        <div className="flex">
          <RocketLaunch size={32} />
        </div>
        <div>
          <span className="font-light pr-8">Home</span>
          <span className="font-light">About</span>
          <span className="font-light px-8">Projects</span>
          <span className="font-light">Contact</span>
        </div>
      </div>
      <div className="flex w-full mt-10 px-8 align-middle items-center">
        <div className="">
          <div className=" grid grid-cols-1">
            <span className="text-5xl font-medium leading-tight pb-6">Dhonny Jeep</span>
            <span className="text-3xl font-light">Full-Stack Developer</span>
            <span className="w-1/4 pt-2 border-b hover:w-2/3 transition-all duration-500 ease-in-out" />
          </div>
          <div className="py-28">
            <button className="text-2xl font-normal transition-all duration-700 ease-in-out border-x border-b hover:bg-primary hover:text-black p-2">
              My Projects
            </button>
          </div>
          <div className="text-2xl font-light flex transition-all duration-700 ease-in-out">
            <button className="flex items-center transition-all duration-500 ease-in-out hover:text-linkedin">
              <LinkedinLogo className="w-8" /> linkedin
            </button>
            <button className="flex items-center transition-all duration-500 ease-in-out hover:text-cyan-600">
              <GithubLogo className="w-8" /> github
            </button>
            <button className="flex items-center transition-all duration-500 ease-in-out hover:text-instagram">
              <InstagramLogo className="w-8" /> instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewLayout };
