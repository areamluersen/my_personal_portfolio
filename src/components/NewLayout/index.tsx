import React from 'react';
import { RedirectButton } from '../RedirectButton';
import { RocketLaunch } from 'phosphor-react';

const NewLayout: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen w-full  h-full text-primary font-roboto">
      <div className="px-8 h-20 w-full flex align-middle items-center justify-between">
        <div className="flex">
          <RocketLaunch size={32} />
        </div>
        <div>
          <span className="font-light">About</span>
          <span className="font-light px-8">Projects</span>
          <span className="font-light">Contact</span>
        </div>
      </div>
      <div className="flex w-full h-56 bg-dark-900 justify-center align-middle items-center">
        <>
          <p>Dhonny Jeep</p>
        </>
      </div>
    </div>
  );
};

export { NewLayout };
