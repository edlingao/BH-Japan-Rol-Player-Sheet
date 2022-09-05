import items from '../data/item';

import { Title } from "solid-start";
import { Table } from "~/components/table/table";
import { ItemType } from "~/types/item";
import { CreateModal } from '../components/create-modal/index';
import { showModal } from '../data/create-modal-show';
import { IconButton } from '../components/icon-button/index';
import Add from '~/assets/icons/add_small.svg';
import { Margin } from '~/components/margin/margin';


export default function Edit() {

  return (
    <main class="main">
      <Title>Inventory</Title>
      <h1 class='main-title'>Inventario</h1>

      <Table source={items.inventory} type={ItemType.Inventory}/>
      <IconButton title="Agregar" floating rounded center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type={ItemType.Inventory} />
    </main>
  )
}