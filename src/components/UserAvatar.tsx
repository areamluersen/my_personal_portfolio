import { useState } from 'react';
import { devData } from '../data/DevData';
import userIconDefault from '../icons/userIconDefault.png';

export function UserAvatar({ className }: { className?: string }) {
  const [avatarUrl, setAvatarUrl] = useState(userIconDefault);
  fetch(`https://api.github.com/users/${devData.person.githubAccount}`)
    .then((resp) => resp.json())
    .then((data: { avatar_url?: string }) => {
      if (data.avatar_url) setAvatarUrl(data.avatar_url);
    });
  return (
    <div className={`flex justify-start w-full ${className}`}>
      <img
        src={avatarUrl} // TODO - get avatar from user
        className="rounded-full border-2 p-[1px]"
        alt="logo"
      />
    </div>
  );
}
