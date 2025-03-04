import RecipesList from "@/components/recipesList";
import SuspenseWrapper from "@/components/suspense";
import { fetchRecipesList } from "@/lib/fetchRecipesList";

const RecipesPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <SuspenseWrapper>
        <RecipesFetcher searchParams={searchParams} />
      </SuspenseWrapper>
    </div>
  );
};

const RecipesFetcher = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const recipes = await fetchRecipesList(searchParams);
  return <RecipesList recipes={recipes} />;
};

export default RecipesPage;
