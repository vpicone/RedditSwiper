import React from "react";

const SelfText = props => {
  const sentences = props.children.split(".");
  const sentenceNumber = sentences.length >= 3 ? 3 : sentences.length;
  if (sentences.length === 1) {
    return <p className="card-text">{props.children}</p>;
  }
  return (
    <p className="card-text">
      {sentences
        .slice(0, sentenceNumber)
        .map(
          (sentence, index) =>
            `${sentence}${index === sentenceNumber - 1 ? "..." : "."}`
        )}
    </p>
  );
};

export default SelfText;
