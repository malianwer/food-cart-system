import React from "react";
import classes from "../Meals/MealsSummary.module.css";
import { Link } from "react-router-dom";

const MealsSummary = () => {
  return (
    <div>
      <section className={classes.summary}>
        <h1>Delicious Food, Delivered To You. </h1>
        <p>
          Choose your favorite meal from our board selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>Enjoy a delicious lunch or dinner at home.</p>

        <Link to="/signup">
          <button className={classes["button-login"]}>Sign up</button>
        </Link>
        <Link to="/login">
          <button className={classes["button-login"]}>Login</button>
        </Link>
      </section>
    </div>
  );
};

export default MealsSummary;
