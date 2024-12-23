import Image from "next/image";

interface HomeCardProps {
  photo: {
    id: number;
    src: { medium: string };
    photographer: string;
    url: string;
  };
}

const HomeCard: React.FC<HomeCardProps> = ({ photo }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <Image
        src={photo.src.medium}
        alt={photo.photographer}
        width={300}
        height={200}
        className="rounded-md"
      />
      <div className="mt-3 text-center">
        <h3 className="text-lg font-semibold">{photo.photographer}</h3>
        <a
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm underline"
        >
          Daha fazlasını gör
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
