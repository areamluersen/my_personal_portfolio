import { useState } from 'react';
import { devData } from '../data/DevData';
import githubClaroSvg from '../icons/githubClaro.svg';
import userIconDefault from '../icons/userIconDefault.png'

export function CardUser() {
  const [avatarUrl, setAvatarUrl] = useState(userIconDefault);
  fetch(`https://api.github.com/users/${devData.person.githubAccount}`)
  .then(resp => resp.json())
  .then((data:  {avatar_url?: string}) => {
    if(data.avatar_url) setAvatarUrl(data.avatar_url)
  })
  return (
    <div className="bg-dark-900 p-2 mb-20 rounded-lg grid grid-cols-3 shadow-lg">
      <div className="flex justify-start w-28 p-2">
        <img
          src={avatarUrl} // TODO - get avatar from user
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
