import { createStore } from 'solid-js/store';
import { Inventory, ArmorInfo, SpellBook, Armor, Spell, ItemType, Item } from '../types/item';
import { v4 as uuidv4 } from 'uuid';

const initialInventory: Inventory =  [
  {
    id: uuidv4(),
    name: "Coins",
    quantity: 99,
    favorite: true
  }
];


const initialArmorInfo: ArmorInfo = [
  {
    id: uuidv4(),
    name: "Piel",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Madera",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Papel",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Piel",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Madera",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Papel",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Piel",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "Madera",
    quantity: "2d6",
    favorite: true
  },
  {
    id: uuidv4(),
    name: "PapelUltimo",
    quantity: "2d6",
    favorite: true
  }
]


const initialSpellbook: SpellBook = [
  {
    id: uuidv4(),
    name: "fireball",
    information: "Deals 2d6 * lvl damage Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eaque sequi perspiciatis obcaecati nobis autem neque, nam, molestias necessitatibus delectus exercitationem sint quas ratione accusamus cupiditate! Nobis atque ab numquam?",
    favorite: false,
  },
  {
    id: uuidv4(),
    name: "charm",
    information: "Deals 2d6 * lvl damage Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eaque sequi perspiciatis obcaecati nobis autem neque, nam, molestias necessitatibus delectus exercitationem sint quas ratione accusamus cupiditate! Nobis atque ab numquam?",
    favorite: false,
  }
]

const [items, setItem] = createStore({
  inventory: initialInventory,
  armor: initialArmorInfo,
  spellbook: initialSpellbook,
})

export const changeItemOrderBasedOnFavorite = (type: ItemType) => 
  setItem(type, [
    ...items[type]
      .filter(item => item.favorite),
    ...items[type]
      .filter(item => !item.favorite)
  ]);

export const addItem = ( type: ItemType, newItem: Item | Spell | Armor ) => 
  setItem(type, [...items[type], newItem]);

export const editItem = (type: ItemType, id: string, property: string, newValue: string | number | boolean) => {
  setItem(
    type,
    (item: Spell | Armor | Item) => item.id == id,
    property,
    () => newValue,
  );
}

export default items;