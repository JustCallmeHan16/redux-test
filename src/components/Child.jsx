import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeals } from "../services/cardSlice";

const Child = () => {
  const meals = useSelector((state) => state.card.meals);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMeals(id))
  };

  return (
    <div className="list-container">
      {meals.map((recipe) => (
        <div className="list" key={recipe.idMeal}>
          <p>{recipe.strMeal}</p>
          <button onClick={() => handleDelete(recipe.idMeal)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Child;
