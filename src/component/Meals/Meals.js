import React from "react";
import Header from "../Layout/Header";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <>
      <Header />
      <div>
        <MealsSummary />
        <AvailableMeals />
      </div>
    </>
  );
};

export default Meals;
