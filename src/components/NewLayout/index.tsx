import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, RocketLaunch } from 'phosphor-react';
import { devData } from '../../data/DevData';

const NewLayout: React.FC = () => {
  const { person } = devData;
  return (
    <div className="bg-dark-950 min-h-screen w-full  h-full text-primary font-roboto">
      <div className="px-8 h-20 w-full flex align-middle items-center justify-between">
        <div className="flex">
          <RocketLaunch size={32} />
        </div>
        <div className="">
          <button className="text-sm sm:text-xl lg:text-2xl font-light p-2">Home</button>
          <button className="text-sm sm:text-xl lg:text-2xl font-light p-2">About</button>
          <button className="text-sm sm:text-xl lg:text-2xl font-light p-2">
            Projects
          </button>
          <button className="text-sm sm:text-xl lg:text-2xl font-light pl-2">
            Contact
          </button>
        </div>
      </div>
      <div className="flex w-full mt-10 px-8 align-middle items-center">
        <div className="">
          <div className=" grid grid-cols-1">
            <span className="text-4xl sm:text-5xl font-medium leading-tight pb-6">
              {person.name} {person.surname}
            </span>
            <span className="text-2xl sm:text-3xl font-light hover:hr">
              {person.title}
            </span>
            <hr className="w-1/4 h-2 hover:w-2/3 transition-all duration-500 ease-in-out h" />
          </div>
          <div className="py-28">
            <button
              onClick={() =>
                open(`https://github.com/${person.githubAccount}?tab=repositories`)
              }
              className="text-xl sm:text-2xl font-normal transition-all duration-700 ease-in-out border hover:bg-primary hover:text-black p-2"
            >
              My Projects
            </button>
          </div>
          <div
            className={`grid-rows-${4} sm:flex text-2xl font-light transition-all duration-700 ease-in-out overflow-hidden`}
          >
            <a
              href={person.linkedInAccount}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out hover:text-linkedin hover:bg-primary rounded hover:px-2"
            >
              <LinkedinLogo className="w-8" /> linkedin
            </a>
            <a
              href={`https://github.com/${person.githubAccount}`}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out hover:text-violet-500 hover:bg-primary rounded hover:px-2"
            >
              <GithubLogo className="w-8" /> github
            </a>
            <a
              href={person.instagramAccount}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out hover:text-instagram hover:bg-primary rounded hover:px-2"
            >
              <InstagramLogo className="w-8" /> instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewLayout };
