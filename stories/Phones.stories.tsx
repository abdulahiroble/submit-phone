import React, { Children } from "react";
import { Phones } from "./Phones";

export default {
  title: "Phones",
};

export const cars = () => [
    { car: "BE 66 684", fuelLevel: 25, carSeats: 3, range: "long range" },
    { car: "CE 49 296", fuelLevel: 50, carSeats: 2, range: "green car" },
    { car: "BE 69 503", fuelLevel: 75, carSeats: 4, range: "green car" },
    { car: "BG 75 163", fuelLevel: 45, carSeats: 5, range: "long range" },
    { car: "BC 65 553", fuelLevel: 89, carsSeats: 3 },
    { car: "BJ 27 813", fuelLevel: 66, carSeats: 4, range: "green car" },
    { car: "CE 58 923", fuelLevel: 29, carSeats: 2, range: "green car" },
    { car: "BD 12 818", fuelLevel: 5, carSeats: 4, range: "long range" },
    { car: "BD 12 805", fuelLevel: 10, carSeats: 3, range: "green car" },
    { car: "BV 73 117", fuelLevel: 80, carSeats: 2, range: "green car" },
  ];

  
  

export const DefaultComponent = () => {
  return (
    <div>
      <Phones cars={cars()} />
    </div>
  );
};
