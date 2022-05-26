import githubClaroSvg from '../icons/github_claro.svg';

export function CardUser() {
  return (
    <div className="bg-dark-900 p-2 mb-20 rounded-lg grid grid-cols-3 shadow-lg">
      <div className="flex justify-start w-40 p-2">
        <img
          src={'https://avatars.githubusercontent.com/u/24281509?v=4'}
          className="rounded-full"
          alt="logo"
        />
      </div>
      <div className="pl-6 col-span-2 flex justify-start text-3xl">
        <div className="grid align-middle content-center place-items-start">
          <p className="mb-2">Aream Luersen</p>
          <p className="text-2xl">Full Stack Developer</p>
          <div className="">
            <a
              href="https://github.com/areamluersen"
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
