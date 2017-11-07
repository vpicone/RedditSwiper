import React from 'react';
import PropTypes from 'prop-types';

const SelfText = (props) => {
  const { text } = props;
  const sentences = text.split('.');
  const sentanceNumber = sentences.length > 3 ? 3 : sentences.length + 1;
  return (
    <p className="card-text">
      {sentences
        .slice(0, sentanceNumber)
        .map(
          (sentence, index) =>
            `${sentence}${index === sentanceNumber - 1 ? '...' : '.'}`,
        )}
    </p>
  );
};

SelfText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SelfText;
