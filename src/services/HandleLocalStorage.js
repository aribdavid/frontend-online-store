export function getProductItem() {
  const result = [];
  Object.keys(localStorage).forEach((key) => {
    result.push(JSON.parse(localStorage.getItem(key)));
  });
  return result;
}

export function saveProductItem(item) {
  localStorage.setItem(item.id, JSON.stringify(item));
}

export function removeProductItem(item) {
  localStorage.removeItem(item.id, JSON.stringify(item));
}

export function itemQuantity(arr, val) {
  return arr.reduce((counter, item) => (item.title === val ? counter + 1 : counter), 0);
}
export function removeDuplicates(array) {
  const result = array.reduce((unique, o) => {
    if (!unique.some((obj) => obj.id === o.id)) {
      unique.push(o);
    }
    return unique;
  }, []);
  return result;
}
