import React from "react";
import "./SongRow.css";
const SongRow = ({ index, track, playSong }) => {
    console.log(track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
        <p>{index+1}</p>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h4>{track.name}</h4>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
