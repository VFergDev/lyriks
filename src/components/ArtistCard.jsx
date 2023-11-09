import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col p-4 cursor-pointer w-[250px] bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg animate-slideup"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img src={track?.images?.coverart} alt="artist" className="h56 w-full rounded-lg" />
      <p className="mt-4 font-semibold text-lg truncate text-white">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
