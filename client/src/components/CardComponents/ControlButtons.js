import React from "react";
import MediaQuery from "react-responsive";

export default props => (
  <div style={{ textAlign: "center" }}>
    <MediaQuery minWidth={769}>
      <button
        className="margin-small"
        popover="Left-arrow"
        popoverposition="left"
        onClick={() => props.unsavePost(props.post)}
      >
        Unsave
      </button>
      <button
        className="margin-small"
        popover="Right-arrow"
        popoverposition="right"
        onClick={() => props.keepPost(props.post)}
      >
        Save
      </button>
    </MediaQuery>
  </div>
);
