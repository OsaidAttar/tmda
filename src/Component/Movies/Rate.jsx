import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Rate() {
  let [rate, setRate] = useState("");
  let params = useParams();
  let getDetails = async () => {
    let { data } = await axios.post(
      `https://api.themoviedb.org/3/movie/${params.id}/rating?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US`
    );
    setRate(data);

    console.log("data");
    console.log(data);
  };
  useEffect(() => {
    getDetails();
  }, []);
  console.log("details");
  console.log(rate);
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + rate.backdrop_path}
        alt=""
      />

      <h2>{rate.title}</h2>
      <p>{rate.vote_average}</p>
    </div>
  );
}
