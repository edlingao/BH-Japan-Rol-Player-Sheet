import { Icon, Item } from "~/types/menuItem";

export const menuItems: Item[] = [
  {
    route: "/",
    icon: Icon.Home,
  },
  {
    route: "/inventory",
    icon: Icon.Inventory,
  },
  {
    route: "/spellbook",
    icon: Icon.Book,
  },
  {
    route: "/edit",
    icon: Icon.Edit,
  },
]