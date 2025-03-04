export const fetchRecipesList = async (searchParams: {
  query?: string;
  cuisine?: string;
  maxPrepTime?: string;
}) => {
  const { query, cuisine, maxPrepTime } = searchParams;

  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!API_KEY) throw new Error("Missing Spoonacular API Key");

  const params = new URLSearchParams({
    apiKey: API_KEY,
    number: "10",
  });

  if (query) params.append("query", query);
  if (cuisine) params.append("cuisine", cuisine);
  if (maxPrepTime) params.append("maxReadyTime", maxPrepTime);

  const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch recipes");
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
