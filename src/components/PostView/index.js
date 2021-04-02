import React from "react";
//import styled from "styled-components";

// custom components
import AuthorInfo from "../AuthorInfo";
import Body from "../Body";
import StatusIndicator from "../StatusIndicator";

// const Post = styled.div`
//   background-color: white;
//   padding: 40px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// `;

// const Image = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const post = {
  title: "Veg Pizza",
  available: false,
  veg: true,
  description: "Approx 2kg, enough for 2 people",
  distance: "8.1km away",
  image: "https://via.placeholder.com/400",
  author: {
    name: "Uttam Rabari",
    phone: "9313958351",
    stars: 4,
    image: "https://via.placeholder.com/50",
  },
};

function PostView() {
  return (
    <Body id="post-view">
      <div className="post">
        <div className="post-image-container">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-details">
          <div className="post-details-heading">
            <h1>{post.title}</h1>
            <p>{post.distance}</p>
          </div>

          <div className="post-details-description">
            <p>{post.description}</p>
          </div>

          <div className="post-details-request-button-container">
            <div>
              <StatusIndicator
                text={post.veg === true ? "Veg" : "Non-Veg"}
                indicatorStatus={post.veg}
              />
              <StatusIndicator
                text={post.available === true ? "Available" : "Not Available"}
                indicatorStatus={post.available}
              />
              <div> </div>
            </div>
            <div>
              <button className="request-button" disabled={!post.available}>
                Request
              </button>
            </div>
          </div>
          <br />
          <AuthorInfo author={post.author} />
        </div>
      </div>
    </Body>
  );
}

export default PostView;

// <Body>
// <Post>
//   <Image>
//     <img src={post.image} alt={post.title} />
//   </Image>
//   <div className="post-image-container"></div>
// </Post>
// </Body>
