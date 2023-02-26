import Link from "next/link";
import React from "react";


const GamesCard = ({ game, onSelect, isSelected }) => {
  return (
    <Link href={"/games/" + game.slug}>
      <div className="mt-10 ml-6 w-[160px] h-[160px] duration-300 hover:-translate-y-3">
        <img className="rounded-t-2xl h-[120px] w-[160px]" src={game.coverImage.url} alt={game.title} />
        <h2 className="bg-elem rounded-b-2xl shadow-2xl text-sm p-2 font-bold">{game.title}</h2>
      </div>
    </Link>
    // <div
    //   className={`mt-10 w-[160px] h-[160px] duration-300 hover:-translate-y-3 ${
    //     isSelected ? "opacity-50" : ""
    //   }`}
    //   onClick={() => onSelect(game)}
    // >
    //   <img
    //     className="rounded-t-2xl h-[120px] w-[160px]"
    //     src={game.coverImage.url}
    //     alt={game.title}
    //   />
    //   <h2 className="bg-elem rounded-b-2xl shadow-2xl text-sm p-2 font-bold">
    //     {game.title}
    //   </h2>
    // </div>
  );
};

export default GamesCard;