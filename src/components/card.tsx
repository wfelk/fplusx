import React, { FC } from "react";

interface Props {
  alignment?: "center" | "left" | "right";
}

const Card: FC<Props> = ({ alignment = "center" }) => {
  return <article className={`card card--${alignment}`}>Test</article>;
};

export default Card;
