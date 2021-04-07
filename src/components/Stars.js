import React from "react";
import { Star, StarBorder } from "@material-ui/icons";

function Stars({ maxStars, stars }) {
  return (
    <>
      {[...Array(stars)].map((e, i) => (
        <Star key={i} fontSize="small" />
      ))}
      {[...Array(maxStars - stars)].map((e, i) => (
        <StarBorder key={i} fontSize="small" />
      ))}
    </>
  );
}

export default Stars;
