import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useHttp } from "../../hooks/use-http";
import { useState, useEffect } from "react";
import Fetch from "../UI/Fetch";

export default () => {
  const { loading, error, fetchData } = useHttp();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    //  src/component/Meals/Meals.json
    fetchData("https://fakestoreapi.com/products", (data) => {
      setMeals(data);
    });
  }, []);
  return (
    <Card className="p-0">
      <Fetch loading={loading} error={error}>
        {meals.map((meal) => (
          <MealItem key={meal.id} data={meal} />
        ))}
      </Fetch>
    </Card>
  );
};
