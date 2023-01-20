import React from "react";
import { SimpleImg } from "react-simple-img";

export default function BioImage({ id }) {
  return (
    <SimpleImg
      src={id}
      animationDuration="1"
      width={200}
      height={200}
      applyAspectRatio="true"
    />
  );
}
