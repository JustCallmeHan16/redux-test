import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "./services/cardSlice";
import Card from "./components/Card";

const App = () => {
  const meals = useSelector((state) => state.card.meals);
  const dispatch = useDispatch();

  const base_url =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async (base_url) => {
    const { data } = await axios.get(base_url);
    const meals = data?.meals;
    // setRecipes(meals);
    dispatch(getMeals(meals));
    setLoading(false);
  };

  useEffect(() => {
    fetchApi(base_url);
  }, []);


  return (
    <div>
      {meals !== null ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          <Card />
        )
      ) : (
        <p>Server Error</p>
      )}
    </div>
  );
};

export default App;
