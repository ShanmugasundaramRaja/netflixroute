import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

const ShowDetail = (match) => {
  const [info, setInfo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      let id = match.params.MovieID;
      if (id) {
        let response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=c82e0eba" + id
        );
        let movieInfo = await response.json();
        console.log("Data Movies", movieInfo);
        setInfo(movieInfo);
      }
    };
    getMovieData();
  }, [match.params.MovieID]);

  useEffect(() => {
    const getMovieComments = async () => {
      let id = match.params.MovieID;
      if (id) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + id,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1Y2IxNmJjZmE4MzAwMTUxNTllNjQiLCJpYXQiOjE2NTYwODExNzUsImV4cCI6MTY1NzI5MDc3NX0.uc8zHWZpGPKeT0tuRdcva1yDK0-oecLl2HpcZKk3tZE",
            },
          }
        );
        let moviComments = await response.json();
        console.log("Data Comments", moviComments);
        setComments(moviComments);
      }
    };
    getMovieComments();
  }, [match.params.MovieID]);
  return <div>{info && <MovieDetails movie={info} comments={comments} />}</div>;
};

export default ShowDetail;