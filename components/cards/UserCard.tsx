"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";



interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

function UserCard({ id, name, username, imgUrl, personType }: Props) {
  const router = useRouter();

  const isCommunity = personType === "Community";

  return (
    <article className='user-card'>
      <div className='user-card_avatar'>
        <div className='relative h-12 w-12' onClick={() => {
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}>
          <Image
            src={imgUrl}
            alt='user_logo'
            fill
            className='rounded-full object-cover cursor-pointer'
          />
        </div>

        <div className='flex-1 text-ellipsis ' onClick={() => {
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}>
          <h4 className='text-base-semibold text-light-1 cursor-pointer'>{name}</h4>
          <p className='text-small-medium text-gray-1'>@{username}</p>
        </div>
      </div>


    </article>
  );
}

export default UserCard;