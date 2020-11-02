import { v4 as uuidv4 } from "uuid";

  const treatItems = [
    {
      id: uuidv4(),
      name: "American Pancakes",
      price: 15,
      description: "with lemon and blueberrys",
      image: "American_Pancakes",
    },
    {
      id: uuidv4(),
      name: "Pancakes",
      price: 15,
      description: "with cream and jam",
      image: "Pancakes",
    },
  ];


export default treatItems;
