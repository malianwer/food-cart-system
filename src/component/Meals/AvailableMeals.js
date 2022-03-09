import React, { useContext, useState, useEffect } from "react";
import { DUMMY_MEALS } from "../../common/Data";
import { SearchContext } from "../../store/context";
import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItemsFrom from "./MealItemsFrom";

const AvailableMeals = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const List = ({ data = [] }) => {
    return (
      <>
        {data.map((item) => {
          return (
            <>
              <div className={classes.name}> {item.name}</div>
              <div className={classes.description}> {item.description}</div>
              <div className={classes.price}> ${item.price}</div>
              <MealItemsFrom itemToAdd={item} />
            </>
          );
        })}
      </>
    );
  };

  const filterData = (text) => {
    return DUMMY_MEALS.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <section className={classes.meals}>
      <Card>
        <List data={searchTerm ? filterData(searchTerm) : DUMMY_MEALS} />
      </Card>
    </section>
  );
};

export default AvailableMeals;
