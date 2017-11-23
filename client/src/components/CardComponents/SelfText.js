import React from "react";
import showdown from "showdown";
import ReactMarkdown from "react-markdown";
var converter = new showdown.Converter();

const SelfText = props => {
  const textPreview = `${props.children.slice(0, 250)} ${
    props.children.length > 250 ? "..." : null
  }`;

  // const sentenceNumber = sentences.length >= 3 ? 3 : sentences.length;

  // if (sentences.length === 1) {
  //   return <p className="card-text">{props.children}</p>;
  // }
  return (
    <ReactMarkdown
      className="card-text"
      escapeHtml={false}
      source={converter.makeHtml(textPreview)}
    />
  );
};

export default SelfText;

// sentences
// .slice(0, sentenceNumber)
// .map(
//   (sentence, index) =>
//     `${sentence}${index === sentenceNumber - 1 ? "..." : "."}`
// )
