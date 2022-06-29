import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

class SingleComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 0
    },
    editMode: false
  }
  componentDidMount() {
    this.setState({
      comment: {
        comment: this.props.comment.comment,
        rate: this.props.comment.rate
      }
    })
  }
  handleDelete = async () => {
    await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.props.comment._id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1Y2IxNmJjZmE4MzAwMTUxNTllNjQiLCJpYXQiOjE2NTYwODExNzUsImV4cCI6MTY1NzI5MDc3NX0.uc8zHWZpGPKeT0tuRdcva1yDK0-oecLl2HpcZKk3tZE",
        },
      }
    );
    document.location.reload()
  };
  handleEdit = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [e.target.id]: e.target.value
      }
    })
  }
  submitComment = async () => {
    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.comment._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1Y2IxNmJjZmE4MzAwMTUxNTllNjQiLCJpYXQiOjE2NTYwODExNzUsImV4cCI6MTY1NzI5MDc3NX0.uc8zHWZpGPKeT0tuRdcva1yDK0-oecLl2HpcZKk3tZE",
          },
          body: JSON.stringify(this.state.comment)
        })
      this.setState({ editMode: false })
      document.location.reload()
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <div>
        {this.props.comment.comment},
        <BsPencilSquare className="icon" onClick={() => this.setState({ editMode: true })} />
        <AiFillDelete className="icon" onClick={this.handleDelete} />
        {this.state.editMode && <div><input type='text' id='comment' value={this.state.comment.comment} onChange={this.handleEdit} /> <input id='rate' type='number' value={this.state.comment.rate} onChange={this.handleEdit} /> <button onClick={this.submitComment}>EDIT</button></div>}
      </div>
    );
  }
}
export default SingleComment;