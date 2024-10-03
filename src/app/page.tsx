import React from "react";
import Card from "@/components/card";
import Lines from "@/components/lines";

export default function Home() {
  return (
    <main className="main">
      <Card />
      <Card alignment="left" />
      <Card alignment="right" />
      <Lines />
    </main>
  );
}
