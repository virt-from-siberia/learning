import { FaAddressBook } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";

import { TopLevelCategory } from "../interfaces/toppage.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <FaAddressBook />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <FaMicrosoft />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <FaBook />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <FaGripHorizontal />,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");
