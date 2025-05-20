import { useSearchParams } from "react-router-dom";

function DetailsPage() {
  const [searchParams] = useSearchParams();
  const title: string = searchParams.get("title") || "Title";
  const vote_average: number = parseFloat(
    searchParams.get("vote_average") || "0"
  );
  const release_date: string =
    searchParams.get("release_date") || "Release Date";
  const overview: string = searchParams.get("overview") || "Overview";
  const poster_path: string = searchParams.get("poster_path") || "Poster Path";
  const backdrop_path: string = searchParams.get("backdrop_path") || "Backdrop";

  return (
    <div className="flex-column items-center justify-center bg-[#030014] w-screen, h-screen px-5 sm:px-10 md:px-10 lg:px-70 py-5 md:py-8 overflow-y-scroll">
      <button
        className="hidden lg:block absolute left-15 shadow-custom bg-[#0F0D23] text-[#A8B5DB] text-2xl text-3xl rounded-lg p-2 hover:cursor-pointer border-1 border-[#D6C7FF]"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
      <div className="w-full h-full shadow-custom bg-[#0F0D23] flex flex-col p-5">
        <header className="flex items-center justify-between max-w-full">
          <h2 className="max-w-50 sm:max-w-full lg:text-4xl">{title}</h2>
          <div className="flex gap-0.5 items-center">
            <img
              src="star.svg"
              alt="rating star"
              className="items-end lg:size-6"
            />
            <div className="text-white text-2xl lg:text-3xl">
              {vote_average ? vote_average.toFixed(1) : "N/A"}/10
            </div>
          </div>
        </header>

        <section className="flex gap-3 max-w-full overflow-hidden mt-3 max-h-80 lg:max-h-full">
          <img
            className="hidden h-auto md:block md:max-w-1/3"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "/no-poster.png"
            }
            alt="poster"
          />
          <img
            className="mx-auto h-auto w-full md:max-w-2/3"
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w780/${backdrop_path}`
                : "/no-poster-backdrop.png"
            }
            alt="backdrop"
          />
        </section>

        <section className="text-white text-justify flex-col md:grid md:grid-cols-[100px_1fr] md:gap-2">
          <h3 className="text-[#A8B5DB] mt-2">Overview</h3>
          <p className="text-[#D6C7FF] md:mt-2">
            {overview ? overview : "N/A"}
          </p>

          <h3 className="text-[#A8B5DB] mt-2">Release Date</h3>
          <p className="text-[#D6C7FF] md:mt-2">
            {release_date
              ? `${release_date.split("-")[0]}/${release_date.split("-")[1]}`
              : "N/A"}
          </p>
        </section>
      </div>
        <button
          className="w-full mt-2 lg:hidden shadow-custom bg-[#0F0D23] text-[#A8B5DB] text-2xl rounded-lg p-1 hover:cursor-pointer border-1 border-[#D6C7FF]"
          onClick={() => window.history.back()}
        >
        Go Back
        </button>
    </div>
  );
}

export default DetailsPage;
