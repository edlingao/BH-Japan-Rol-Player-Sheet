import { Component } from "solid-js";

export enum Icon {
  Home = 0,
  Inventory = 1,
  Book = 2,
  Edit = 3,
}

export interface Item {
  route: string;
  icon: Icon;
  component: Component;
}