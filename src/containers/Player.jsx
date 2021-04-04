import React, { useEffect } from "react";
import "../assets/styles/components/Player.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getVideoSource } from "../actions/index";
import NotFound from "../containers/NotFound";

const Player = (props) => {
  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <Link className="Player-back" to="/">
        <button type="button">Regresar</button>
      </Link>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = { getVideoSource };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
