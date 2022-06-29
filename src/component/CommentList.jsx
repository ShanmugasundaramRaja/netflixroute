import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
  state = {
    comments: [],
    newComment: {
      comment: "",
      rate: 0,
      elementId: "",
    },
  };
  componentDidMount() {
    this.setState({
      newComment: {
        ...this.state.newComment,
        elementId: this.props.movieId,
      },
    });
    this.fetchComments();
  }
  fetchComments = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.movieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1Y2IxNmJjZmE4MzAwMTUxNTllNjQiLCJpYXQiOjE2NTYwODExNzUsImV4cCI6MTY1NzI5MDc3NX0.uc8zHWZpGPKeT0tuRdcva1yDK0-oecLl2HpcZKk3tZE",
        },
      }
    );
    let comments_json = await response.json();
    this.setState({ comments: comments_json }, () =>
      console.log(this.state.comments)
    );
  };
  handleChange = (e) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [e.target.id]: e.target.value,
      },
    });
  };
  submitComment = async () => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1Y2IxNmJjZmE4MzAwMTUxNTllNjQiLCJpYXQiOjE2NTYwODExNzUsImV4cCI6MTY1NzI5MDc3NX0.uc8zHWZpGPKeT0tuRdcva1yDK0-oecLl2HpcZKk3tZE",
      },
      body: JSON.stringify(this.state.newComment),
    });
    document.location.reload()
  };
  render() {
    // {
    //     "comment": "A good movie but definitely I don't like many parts of the plot",
    //     "rate": 3,
    //     "elementId": "tt1756545"
    // }
    return (
      <>
        <div className="modal__inner">
            {this.state.comments && this.state.comments.map((comm)=> <SingleComment comment={comm}/> )}
          <textarea placeholder='What did you think of the movie' className='new__comm' id="comment" onChange={this.handleChange}></textarea>
          <input placeholder='What did you think of the movie, in numbers...' className='new__comm' type="number" id="rate" onChange={this.handleChange} />
          <button className='comm__button' onClick={this.submitComment}>Comment</button>
        </div>
      </>
    );
  }
}
export default CommentList;