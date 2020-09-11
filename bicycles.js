const bicycles = [];

const addBicycle = ({ id, name, type, price }) => {
  const existingBicycle = bicycles.find((bicycle) => bicycle.id === id);

  if (!name || !type || !price)
    return { error: "All fields should be filled." };
  if (existingBicycle) return { bicycle };

  const bicycle = { id, name, type, price };

  bicycles.push(bicycle);

  return { bicycle };
};

const removeBicycle = (id) => {
  const index = bicycles.findIndex((bicycle) => bicycle.id === id);

  if (index !== -1) return bicycles.splice(index, 1)[0];
};

const getBicycle = (id) => bicycles.find((bicycle) => bicycle.id === id);

const getBicycles = () => bicycles;

module.exports = { addBicycle, removeBicycle, getBicycle, getBicycles };
