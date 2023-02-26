import Link from "next/link";
import React from "react";


const CasinoCard = ({ casino }) => {
  return (
    <Link href={"/casino/" + casino.slug}>
        <div className="mt-10 ml-5 w-[210px] h-[210px] duration-300 hover:-translate-y-3">
        <img className="rounded-t-2xl h-[170px] w-[210px]" src={casino.coverImage.url} alt={casino.title} />
        <h2 className="bg-elem rounded-b-2xl shadow-2xl text-sm p-2 font-bold">{casino.title}</h2>
        </div>
    </Link>
  );
};

export default CasinoCard;