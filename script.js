const items = [
  { id: 1, item: "Item 1", price: 10 },
  { id: 2, item: "Item 2", price: 20 },
  { id: 3, item: "Item 3", price: 15 },
  { id: 4, item: "Item 4", price: 25 }
];

const itemListContainer = document.querySelector("#itemList");
const totalCostContainer = document.querySelector("#totalCost");
const averageCostContainer = document.querySelector("#averageCost");

const itemList = items.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.item} - $${item.price}`;
  itemListContainer.appendChild(listItem);
  return item.price;
});

const totalCost = itemList.reduce((acc, curr) => acc + curr, 0);
totalCostContainer.textContent = `$${totalCost}.00`;

const averageCost = totalCost / items.length;
averageCostContainer.textContent = `$${averageCost}`;
