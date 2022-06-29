const MovieDetails = ({ movie, comments }) => (
    <div className="text-center">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt="movie poster" />
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
  
  export default MovieDetails;