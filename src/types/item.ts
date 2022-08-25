export interface Item {
  name: string;
  quantity: number;
  favorite?: boolean;
};

export interface Armor extends Item {
  quantity: string;
}

export interface Spell extends Item {
  information: string;
};

export interface Inventory {
  items: Item[];
};

export interface SpellBook {
  spells: Spell[];
};

export interface ArmorInfo {
  armors: Armor[];
};
