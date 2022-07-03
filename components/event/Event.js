const Event = ({ upcomming }) => {
  const date = String(new Date(upcomming.datetime));
  //   console.log(date);

  return (
    <div className="tracking-wider p-4 flex flex-col bg-white m-3 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)] transition hover:scale-105">
      <div className="uppercase font-semibold text-sm">Event Details</div>
      <div className="my-2">
        <hr />
      </div>
      <div className="grid grid-cols-2">
        <div className="text-sm space-y-2">
          <div>
            <strong>Country</strong>
            <p>{upcomming.venue.country}</p>
          </div>
          <div>
            <strong>Venue</strong>
            <p>{upcomming.venue.name}</p>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <div>
            <strong>City</strong>
            <p>{upcomming.venue.city}</p>
          </div>
          <div>
            <strong>Date</strong>
            <p>
              {date.substring(8, 10) +
                " " +
                date.substring(4, 7) +
                ", " +
                date.substring(11, 15)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
