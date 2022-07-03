import Image from "next/image";
import { useRouter } from "next/router";

const Card = ({ artist }) => {
  const router = useRouter();

  const cardHandler = () => {
    router.push({
      pathname: "/events",
    });
  };

  return (
    <div className="" onClick={cardHandler}>
      {artist && (
        <div className="shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)] hover:bg-white hover:border-2 hover:border-gray-400 p-3 flex flex-col justify-center items-center hover:scale-90 transition-all ease-in-out duration-150 cursor-pointer rounded-md space-y-2">
          <div className="rounded-full">
            <Image
              src={artist.image_url}
              className="rounded-full"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="">
            <h2 className=" tracking-wider font-serif">{artist?.name}</h2>
          </div>
          <div className="">
            <h2 className=" tracking-wider font-serif text-xs">
              facebook.com
              {String(artist?.facebook_page_url).substring(
                23,
                String(artist?.facebook_page_url).length - 1
              )}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
