import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import LoopIcon from "@material-ui/icons/Loop";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
const Footer = () => {
  const onButtonClick = (e) => {
    e.currentTarget.classList.toggle("footer__green");
  };
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cb/Ariana_Grande_-_Yours_Truly.png"
          alt="songImg"
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Turn up the speaker</h4>
          <p>DJ kienneik</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon onClick={onButtonClick} />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon
          style={{ fontSize: "50px" }}
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <LoopIcon onClick={onButtonClick} />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
