import React, { useContext, useState } from "react";
import mealsImages from "../../assets/meals.jpg";
import { SearchContext } from "../../store/context";
import Cart from "../Cart/Cart";
import classes from "../Layout/Header.module.css";
import SearchBox from "../SearchBox/SearchBox";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <SearchBox
          placeholder="Search"
          value={searchTerm}
          handleChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} />
      </div>
    </div>
  );
};

export default Header;
