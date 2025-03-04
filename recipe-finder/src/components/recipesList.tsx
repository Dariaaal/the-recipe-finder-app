"use client";

import Link from "next/link";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  recipes: Recipe[];
};

const RecipesList: React.FC<Props> = ({ recipes }) => {
  if (recipes.length === 0) return <p className="text-gray-500">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
          <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold group-hover:text-blue-500">
                {recipe.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipesList;
