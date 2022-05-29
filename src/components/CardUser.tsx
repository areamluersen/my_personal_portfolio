import { devData } from '../data/DevData';
import githubClaroSvg from '../icons/github_claro.svg';

export function CardUser() {
  return (
    <div className="bg-dark-900 p-2 mb-20 rounded-lg grid grid-cols-3 shadow-lg">
      <div className="flex justify-start w-28 p-2">
        <img
          src={'https://avatars.githubusercontent.com/u/24281509?v=4'}
          className="rounded-full"
          alt="logo"
        />
      </div>
      <div className="pl-6 col-span-2 flex justify-start text-3xl">
        <div className="grid align-middle content-center place-items-start">
          <p className="mb-2 text-xl sm:text-2xl md:text-4xl lg:text-4xl">{devData.person.name} {devData.person.surname}</p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl">{devData.person.title}</p>
          <div className="">
            <a
              href={`https://github.com/${devData.person.githubAccount}}`}
              target="_blank"
              className="text-blue-600 text-base flex border rounded-md px-2"
            >
              Github <img src={githubClaroSvg} alt="github svg" className="w-6" />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
