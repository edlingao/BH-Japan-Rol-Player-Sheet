import items from '../data/item';

import { Title } from "solid-start";
import { Table } from "~/components/table/table";
import { ItemType } from "~/types/item";
import { CreateModal } from '../components/create-modal/index';
import { showModal } from '../data/create-modal-show';
import { IconButton } from '../components/icon-button/index';
import Add from '~/assets/icons/add_small.svg';
import { Margin } from '~/components/margin/margin';
import { Item } from '../types/item';
import { addItem } from '../data/item';
import { Show } from 'solid-js';
import { EmptyMessage } from '~/components/empty-message/emptyMessage';


export default function Inventory() {
  console.log(items.inventory.length)
  return (
    <main class="main">
      <Title>Inventory</Title>
      <h1 class='main-title'>Inventario</h1>
      <Show when={items.inventory.length}
        fallback={<EmptyMessage />}
      >
        <Table source={items.inventory} type={ItemType.Inventory}/>
      </Show>
      <IconButton title="Agregar" floating rounded center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type={ItemType.Inventory} onSubmit={(item: Item) => addItem(ItemType.Inventory, item)}/>
    </main>
  )
}