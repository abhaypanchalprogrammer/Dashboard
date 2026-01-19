export const apiData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
