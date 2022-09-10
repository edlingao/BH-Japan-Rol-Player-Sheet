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
import { Item, Spell, Armor } from '../types/item';
import { inputObj } from '../assets/constants/InputObjects';
import { GeneralStatViewer } from "~/components/general-stat-viewer/generalStatViewer";
import { setStat } from '../data/character';
import { loggout } from '../data/session';

export default function Home() {
  const playerData = [];
  const numericStats = [];

  Object.keys(player).forEach((key) => {
    const stadisticInfo = inputObj[key];
    if (stadisticInfo) {
      playerData.push(stadisticInfo);
    } else if (key != 'hp' && key != 'currentDamage' && key != '_id' && key != '__v' && key != 'date' && key != 'armor' && key != 'inventory' && key != 'spellbook' && key != 'password') {
      numericStats.push(key);
    }
  });

  const setDamage = (value: number) => 
    setStat('currentDamage', (player.currentDamage + value) <= 0 ? 0 : player.currentDamage + value);

  return (
    <main class="main">
      <Title>Home</Title>
      <h1 class="main-title disable-dbl-tap-zoom" onClick={loggout}>{player.name}</h1>
      <Margin large />
      <GeneralStatViewer />
      <Margin large />
      <div class="damage-heal-buttons">
        <button class="damage disable-dbl-tap-zoom" onClick={() => setDamage(+1)}>Damage</button>
        <button class="heal disable-dbl-tap-zoom" onClick={() => setDamage(-1)}>Heal</button>
      </div>
      <Margin large />
      <div class="numeric-stat">
        <For each={numericStats} >{(numericStat) =>
          <Stat name={numericStat.toUpperCase()} value={player[numericStat]}/>
        }</For>
      </div>
      <Margin large />
      <Table source={items.armor} type={ItemType.Armor} />
      <Margin small />
      <IconButton title="Agregar" right center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type="armor" onSubmit={(item: Item | Spell | Armor) => addItem(ItemType.Armor, item)}/>
    </main>
  );
}
