import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipe }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-center">Our Recipe {recipe.length}</h1>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          error iure, sed eligendi fugiat sequi asperiores ut deserunt, natus
          quidem minima beatae hic aspernatur sunt impedit quaerat suscipit
          dolor provident!
        </p>
      </div>
      <div className="flex">
        {recipe.map((recipe, idx) => (
          <Recipe recipe={recipe} key={idx}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
