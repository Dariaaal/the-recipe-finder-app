"use client";

type RecipeProps = {
  recipe: any;
};

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>
        <strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients?.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
