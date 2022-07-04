export const getProduct = (id) => {
  return new Promise((resolve) => {
    fetch(`https://api.digikala.com/v1/product/${id}/`, {
      method: "GET",
    }).then((respons) => {
      resolve(respons.json());
    });
  });
};

export const getProducts = (page) => {
  return new Promise((resolve) => {
    fetch(
      `https://api.digikala.com/v1/search/?page=${page}&rows=15&price[min]=90000&price[max]=100000&has_selling_stock=1&sort=4&q=سیب/ `,
      {
        method: "GET",
      }
    ).then((respons) => resolve(respons.json()));
  });
};
