import React from 'react';

const Image = (props) => {
  const { preview, alt } = props;
  const maxResolutionIndex = preview.images[0].resolutions.length - 1;
  const imageResolutionIndex = Math.min(maxResolutionIndex, 3);
  const imageSource = preview.images[0].resolutions[imageResolutionIndex].url;

  return (
    <div
      style={{
        maxHeight: '15rem',
        overflow: 'hidden',
        margin: 'auto',
      }}
    >
      <img src={imageSource} alt={alt} />
    </div>
  );
};
export default Image;
