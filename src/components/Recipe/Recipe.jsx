import { list } from "postcss";
import "./Recipe.css";
const Recipe = ({ recipe }) => {
  const {
    recipe_img,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="Recipe">
      <img src={recipe_img} alt="" />
      <h1>{recipe_name}</h1>
      <p>{short_description}</p>
      <hr></hr>
      <h2>Ingredients: {ingredients.length}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {ingredients.map((item) => (
          <li className="text-gray-700">{item}</li>
        ))}
      </ul>
      <hr />
      <div className="flex flex-row justify-between">
        {preparing_time}
        {calories}
      </div>
      <button className="btn recipe-btn">Want to Cook</button>
    </div>
  );
};

export default Recipe;
