import { Title } from "solid-start";
import { CreateModal } from "~/components/create-modal";
import { IconButton } from "~/components/icon-button";
import { player } from "~/data/character";
import { showModal } from '../data/create-modal-show';
import { LabelInput } from '../components/label-input/index';
import { createEffect, createSignal, For } from 'solid-js';
import { Slider } from "~/components/slider/slider";
import { Stat } from "~/components/stat/stat";
import { Table } from "~/components/table/table";
import items from "~/data/item";
import { editItem, addItem } from '../data/item';
import { ItemType } from "~/types/item";
import { v4 as uuidv4 } from 'uuid';
import { Margin } from "~/components/margin/margin";

import Add from '~/assets/icons/add_small.svg';

export default function Home() {

  const [value, setValue] = createSignal("");
  const [counter, setCounter] = createSignal(0);

  const handleChangeFromSlider = (value: number) => {
    console.log('Slider ', value);
  }

  createEffect(() => {
    console.log(value());
  })

  return (
    <main class="main">
      <Title>Home</Title>
      <h1 class="main-title">{player.name}</h1>
      <Table source={items.armor} type={ItemType.Armor} />
      <Margin small />
      <IconButton title="Agregar" right center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type="armor"/>
    </main>
  );
}
