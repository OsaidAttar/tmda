import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewTv() {
  let [review, setٌReview] = useState({});
  let params = useParams();
  let getDetailsTv = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}/reviews?api_key=2a18feb51ed3c91e90e74912211de26a&language=en-US`);
    console.log(data);
    setٌReview(data.results[0]);
    console.log("reviewdata");
  };
  useEffect(() => {
    getDetailsTv();
  }, []);
  console.log("review");
  console.log(review);
  return (
    <div className="my-5">
      {/* <img src={"https://image.tmdb.org/t/p/w500"+review.backdrop_path} alt="" /> */}

      <h2>{review.author}</h2>
      <h4>{review.content}</h4>
      <h4>{review.created_at}</h4>
      <p>Rating/10 : {review.vote_average} </p>
    </div>
  );
}
