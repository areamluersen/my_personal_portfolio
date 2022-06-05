import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, RocketLaunch } from 'phosphor-react';
import { devData } from '../../data/DevData';
import { UserAvatar } from '../UserAvatar';

const SimpleHome: React.FC = () => {
  const { person } = devData;
  return (
    <div className="bg-dark-950 min-h-screen w-full  h-full text-primary font-roboto">
      <div className="flex w-full pt-[15%] px-6 sm:px-16 md:px-28 align-middle items-center">
        <div className="">
          <div className="sm:flex sm:flex-row-reverse sm:justify-between">
            <div className="flex justify-center mb-8 sm:mb-0 col-">
              <UserAvatar className="w-36 h-36 sm:w-64 sm:h-64 lg:w-72 lg:h-72" />
            </div>
            <div className="sm:mr-12 min-w-[250px]">
              <div className="">
                <div className="mb-6">
                  <span className="text-3xl sm:text-5xl font-medium leading-tight">
                    {person.name} {person.surname}
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-light">{person.title}</span>
                  <div className="pt-2 pb-5 sm:pb-8">
                    <hr className="w-1/6 hover:w-2/6 transition-all duration-500 ease-in-out border-dark-700 " />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-base sm:text-2xl font-thin">
                  {person.shortDescription}
                </span>
              </div>
              <div className="flex justify-center sm:justify-start py-9 sm:py-28">
                <button
                  onClick={() =>
                    open(`https://github.com/${person.githubAccount}?tab=repositories`)
                  }
                  className="text-xl sm:text-2xl font-normal transition-all duration-700 ease-in-out border hover:bg-primary hover:text-black p-2"
                >
                  My Projects
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center text-2xl font-light transition-all duration-700 ease-in-out overflow-hidden`}
          >
            <a
              href={person.linkedInAccount}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out text-linkedin sm:text-primary hover:text-linkedin hover:bg-primary rounded hover:px-2 px-2 sm:px-1"
            >
              <LinkedinLogo className="w-8" />
              <span className="w-0 sm:w-full invisible sm:visible">linkedin</span>
            </a>
            <a
              href={`https://github.com/${person.githubAccount}`}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out sm:text-primary hover:text-violet-500 hover:bg-primary rounded hover:px-2 px-2 sm:px-1"
            >
              <GithubLogo className="w-8" />{' '}
              <span className="w-0 sm:w-full invisible sm:visible">github</span>
            </a>
            <a
              href={person.instagramAccount}
              target="_blank"
              className="flex items-center transition-all duration-500 ease-in-out text-instagram sm:text-primary hover:text-instagram hover:bg-primary rounded hover:px-2 px-2 sm:px-1"
            >
              <InstagramLogo className="w-8 " />
              <span className="w-0 sm:w-full invisible sm:visible">instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SimpleHome };
