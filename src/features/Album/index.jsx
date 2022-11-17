import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";
import hinh from "./picture.jpg";
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "bai hat so 1",
      thumbnaiUrl:
        "https://images.unsplash.com/photo-1668611109415-5ddba19b937e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80",
    },
    {
      id: 2,
      name: "bai hat so 2",
      thumbnaiUrl:
        "https://images.unsplash.com/photo-1668611109415-5ddba19b937e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80",
    },
    {
      id: 3,
      name: "bai hat so 3",
      thumbnaiUrl: { hinh },
    },
    {
      id: 4,
      name: "bai hat so 4",
      thumbnaiUrl: "./../../logo.svg",
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
