import { fetchPexelsData } from "../../utils/fetchData";
import { CustomFilter, SearchBar } from "./components";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";

interface Photo {
  id: number;
  src: { medium: string };
  photographer: string;
  url: string;
}

const Home = async () => {
  // Sunucu tarafında veri alma
  const photos: Photo[] = await fetchPexelsData();

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Dekor Kataloğu</h1>
          <p>Daha Fazlasını Keşfedin</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="" />
            <CustomFilter title="" />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <HomeCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
