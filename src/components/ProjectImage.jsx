import React from "react";
import { SimpleImg } from "react-simple-img";

export default function ProjectImage({ id }) {
  return (
    <SimpleImg
      src={id}
      animationDuration="1"
      width={200}
      height={130}
      applyAspectRatio="true"
    />
  );
}
