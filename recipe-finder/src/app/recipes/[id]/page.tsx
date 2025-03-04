import Recipe from "@/components/recipe";
import { fetchRecipe } from "@/lib/fetchRecipe";
import SuspenseWrapper from "@/components/suspense";

const RecipeDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recipe</h1>
      <SuspenseWrapper>
        <RecipeFetcher id={params.id} />
      </SuspenseWrapper>
    </div>
  );
};

const RecipeFetcher = async ({ id }: { id: string }) => {
  const recipe = await fetchRecipe(id);
  return <Recipe recipe={recipe} />;
};

export default RecipeDetailsPage;
