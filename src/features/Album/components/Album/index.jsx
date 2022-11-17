import React from "react";
import PropTypes from "prop-types";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div>
      <div>
        <img src={album.thumbnaiUrl} alt={"loading"}></img>
      </div>
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
