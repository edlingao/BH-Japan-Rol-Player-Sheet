import { createStore } from 'solid-js/store';
import { Inventory, ArmorInfo, SpellBook, Armor, Spell, ItemType, Item } from '../types/item';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosResponse } from 'axios';
import { addItemRoute, editItemRoute, setOrderRoute } from '../endpoints/index';
import { session } from './session';
import { itemID } from './create-modal-show';
import { createEffect } from 'solid-js';

const initialInventory: Inventory =  [];


const initialArmorInfo: ArmorInfo = []


const initialSpellbook: SpellBook = []

export const [items, setItem] = createStore({
  inventory: initialInventory,
  armor: initialArmorInfo,
  spellbook: initialSpellbook,
})

export const changeItemOrderBasedOnFavorite = async (type: ItemType) => {
  const newOrder = [
    ...items[type]
      .filter(item => item.favorite),
    ...items[type]
      .filter(item => !item.favorite)
  ]
  const {data}:AxiosResponse = await axios.post(setOrderRoute, {
    token: session(),
    type,
    items: newOrder,
  });
  setItem(type, newOrder);
}

export const addItem = ( type: ItemType, newItem: Item | Spell | Armor ) => {
  axios.post(addItemRoute, {
    token: session(),
    item: newItem,
    type,
  })
    .then(({data}: AxiosResponse) => setItem(type, data[type]))
    .catch(err => toastr.error(err));

  setItem(type, [...items[type], newItem]);
}

export const editItem = (type: ItemType, id: string, property: string, newValue: string | number | boolean) => {
  axios.post(editItemRoute, {
    token: session(),
    itemID: id,
    type,
    property,
    newValue
  })
    .then(({data}: AxiosResponse) => console.log(data))
    .catch(err => toastr.error(err));
  setItem(
    type,
    (item: Spell | Armor | Item) => item.id == id,
    property,
    () => newValue,
  );
}

export const editMultipleItemProperties = async (type: ItemType, id: string, properties: string[], newValue: string[] | number[] | boolean[]) => {
  for(let index = 0; index < properties.length; index++) {
    const property = properties[index];
    const {data}:AxiosResponse = await axios.post(editItemRoute, {
      token: session(),
      itemID: id,
      type,
      property,
      newValue: newValue[index]
    })
    setItem(
      type,
      (item: Spell | Armor | Item) => item.id == id,
      property,
      () => newValue[index],
    );
  }
}


export default items;