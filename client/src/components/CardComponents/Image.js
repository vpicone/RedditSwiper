import React from 'react';

const Image = (props) => {
  const { preview, alt } = props;
  let imageResolutionIndex = preview.images[0].resolutions.length - 1;
  if (preview.images[0].resolutions.length > 3) {
    imageResolutionIndex = preview.images[0].resolutions.length - 3;
  }

  const imageSource = preview.images[0].resolutions[imageResolutionIndex].url;
  return <img style={{ objectFit: 'cover' }} src={imageSource} alt={alt} />;
};
export default Image;
