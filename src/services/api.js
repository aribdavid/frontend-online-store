export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(url)
    .then((data) => data.json()).then((data) => data);
  return result;
}

export async function getProductsFromCategoryAndQuery(Id = '$CATEGORY_ID',
  query = '$QUERY') {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${Id}&q=${query}`;
  const result = await fetch(url)
    .then((data) => data.json())
    .then((data) => data.results);
  return result;
}
