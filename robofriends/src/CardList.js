import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, index) => {
        return (
          <Card
            key={index}
            name={robot.name}
            email={robot.email}
            id={robot.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
