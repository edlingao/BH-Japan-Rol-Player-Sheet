
export enum ItemType {
  "Armor" = "armor";
  "Inventory" = "inventory";
  "Spellbook" = "spellbook";
}

export interface Item {
  id: string;
  name: string;
  quantity?: number;
  favorite?: boolean;
};

export interface Armor extends Item {
  quantity: string;
}

export interface Spell extends Item {
  information: string;
};

export type Inventory = Item[];

export type SpellBook = Spell[];

export type ArmorInfo = Armor[];
