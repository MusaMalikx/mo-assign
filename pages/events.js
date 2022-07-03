import { useSelector } from "react-redux";
import Layout from "../components/layouts/Article";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineEmojiSad } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Card";
import Event from "../components/event/Event";
import FadeLoader from "react-spinners/FadeLoader";

const Events = () => {
  const search = useSelector((state) => state.search.value);
  const artist = useSelector((state) => state.artist.value);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Artist", artist);
  // const router = useRouter();
  // const artist = router.query;

  // console.log(artist);

  useEffect(() => {
    const getEvents = async () => {
      await axios
        .get(`https://rest.bandsintown.com/artists/${search}/events?app_id=abc`)
        .then((res) => {
          // console.log(res.data);
          setEvents(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getEvents();
  }, [search]);

  return (
    <Layout title="Events">
      <div className="py-20 space-y-10">
        <div>
          <Link href={"/"}>
            <div className="flex items-center tracking-wide cursor-pointer hover:underline underline-offset-1">
              <IoIosArrowBack className="me-1" />
              <p className="text-sm">Back to results</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div>
            <Card artist={artist} />
          </div>
        </div>
        <div className=" font-semibold tracking-widest text-gray-700">
          <span>
            {'"' + artist?.upcoming_event_count + '" '} upcoming events
          </span>
        </div>
        {loading ? (
          <div className="flex justify-center m-20">
            <FadeLoader className="text-3xl" />
          </div>
        ) : (
          <>
            {events.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {events.map((event) => (
                  <Event key={event.key} upcomming={event} />
                ))}
              </div>
            ) : (
              <div className=" font-semibold tracking-widest text-gray-500 mt-8 mb-4 flex  flex-col items-center justify-center">
                <p>No Upcoming Events Found!</p>
                <div className="text-9xl">
                  <HiOutlineEmojiSad />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Events;
