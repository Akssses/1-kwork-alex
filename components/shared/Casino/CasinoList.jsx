import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CasinoCard from "./CasinoCard";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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

const CasinoList = () => {
  const [casino, setCasino] = useState([]);

  useEffect(() => {
    const fetchCasino = async () => {
      try {
        const response = await axios.post("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clebon8ld2usg01uoh3zodojg/master", {
          query: `
            query MyQuery {
              posts {
                createdAt
                title
                slug
                coverImage {
                  url
                }
              }
            }
          `,
        });

        setCasino(response.data.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCasino();
  }, []);

  const [search, setSearch] = React.useState('')
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }

  return (
    <div className="ml-5 w-[90vh]">
      <Slider {...settings}>
            {casino.filter(casino => casino.title.toLowerCase().includes(search.toLowerCase())).map((casino) => (
              <CasinoCard key={casino.slug} casino={casino} />
            ))}
      </Slider>
    </div>
  );
};

export default CasinoList;