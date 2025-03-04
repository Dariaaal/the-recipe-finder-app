export const fetchRecipe = async (id: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!API_KEY) throw new Error("Missing Spoonacular API Key");

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch recipe data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};
