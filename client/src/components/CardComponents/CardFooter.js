import React from "react";
import MediaQuery from "react-responsive";

const UndoButton = props => {
  if (props.desktop) {
    return (
      <button
        style={{ margin: "0" }}
        popover="'u' key"
        popoverposition="left"
        onClick={() => props.undoLastAction()}
        className="btn-medium"
      >
        undo
      </button>
    );
  }

  return (
    <button
      style={{ margin: "0" }}
      onClick={() => props.undoLastAction()}
      className="btn-small"
    >
      undo
    </button>
  );
};

const CardFooter = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
    className="card-footer"
  >
    <a
      popover={`${props.permalink.slice(0, 25)}...`}
      popoverplacement="top"
      style={{ margin: "0" }}
      href={`https://www.reddit.com${props.permalink}`}
    >
      permalink
    </a>
    <MediaQuery style={{ margin: "0px" }} minDeviceWidth={1024}>
      {matches => {
        return (
          <UndoButton desktop={matches} undoLastAcion={props.undoLastAcion} />
        );
      }}
    </MediaQuery>
  </div>
);

export default CardFooter;
