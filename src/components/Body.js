import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";


const Body = ({ spotify }) => {
  const [{shazam},dispatch] = useDataLayerValue()
  return (
    <div className="body">
      <div className="body__container">
        <Header spotify={spotify} />
        <div className="body__info">
          <img
            src={shazam?.images[0]?.url}
            alt="playlist_cover"
          />
          <div className="body__description">
            <h1>SHAZAM</h1>
            <p>
              {shazam?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" onClick=""/>
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon/>
        </div>

        {shazam?.tracks.items.map((item,index) =>(<SongRow  index={index} playSong="" track={item.track}/>))}
      </div>
    </div>
  );
};

export default Body;
