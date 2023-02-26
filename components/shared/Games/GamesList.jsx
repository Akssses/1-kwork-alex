import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GamesCard from "./GamesCard";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const GamesList = ({ onGameSelect, selectedGame }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.post("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clebon8ld2usg01uoh3zodojg/master", {
          query: `
            query MyQuery {
              posts {
                title
                slug
                content {
                  html
                }
                multiText {
                  html
                }
                coverImage{
                  url
                }
              }
            }
          `,
        });

        setGames(response.data.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  const [search, setSearch] = React.useState('')
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    

  return (
    <div className="ml-5 z-20">
      <Slider {...settings}>
      {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GamesCard
              key={game.slug}
              game={game}
              onSelect={() => onGameSelect(game)}
              isSelected={selectedGame?.slug === game.slug}
            />
          ))}
      </Slider>
    </div>
  );
};

export default GamesList;