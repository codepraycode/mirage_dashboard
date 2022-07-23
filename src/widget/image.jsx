import React from 'react'

// Assets
import { img_placeholder } from '../constants/filepaths';

const Image = ({src,alt,...rest}) => {
    console.log(src);
  return (
      <img
          src={src}
          alt={alt || "A picture/diagram"}
          onError={
              ({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = img_placeholder;
              }
          }
          {...rest}
      />
  )
}

export default Image