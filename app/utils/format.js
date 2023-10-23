export const priceKor = (price) => {
  const priceKor = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${priceKor}원`;
};

export const priceEng = (price) => {
  const priceEng = Math.floor(price);
  return `$${priceEng}`;
};