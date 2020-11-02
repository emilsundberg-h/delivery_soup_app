import { v4 as uuidv4 } from "uuid";

  const proteinItems = [
    {
      id: uuidv4(),
      name: "Fried Tofu",
      price: 30,
      image: "Fried_Tofu",
      weight: "100 G ",
      carb: "/ 30 SEK / 95 KCAL",
      description: "Doubble fried tofu in sunflower oil",
      quantity: 1,
      uid: "",
    },
    {
      id: uuidv4(),
      name: "Grilled Chicken",
      price: 30,
      image: "Grilled_Chicken",
      weight: "100 G",
      carb: "/ 30 SEK / 226 KCAL",
      description: "Chicken, Rapeseed oil, Spice",
      quantity: 1,
      uid: "",
    },
    {
      id: uuidv4(),
      name: "Smoked Shrimps",
      price: 30,
      image: "Hand_peeled_Shripms",
      weight: "1 PORTION 75 G ",
      carb: "/ 30 SEK / 80 KCAL",
      description: "Shrimps from Skagerack",
      quantity: 1,
      uid: "",
    },
    {
      id: uuidv4(),
      name: "Grilled Beef",
      price: 30,
      image: "Grilled_Beef",
      weight: "1 PORTION 50 G",
      carb: "/ 30 SEK / 160 KCAL",
      description: "Beef, Rapeseed oil, Spice",
      quantity: 1,
      uid: "",
    },
  ];


export default proteinItems;
