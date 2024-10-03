import React, { FC } from "react";

interface Props {
  alignment?: "center" | "left" | "right";
}

const Card: FC<Props> = ({ alignment = "center" }) => {
  return <article className={`card card--${alignment}`}></article>;
};

export default Card;
