import items from "~/data/item"
import { Title } from "solid-start";
import { Table } from "~/components/table/table";
import { ItemType } from "~/types/item";
import { CreateModal } from '../components/create-modal/index';
import { showModal } from '../data/create-modal-show';
import { IconButton } from '../components/icon-button/index';
import Add from '~/assets/icons/add_small.svg';
import { Margin } from "~/components/margin/margin";

export default function Spellbook() {

  return (
    <main class="main">
      <Title>Spellbook</Title>
      <h1 class='main-title'>Libro de Hechizos</h1>
      <Table source={items.spellbook} type={ItemType.Spellbook}/>
      <IconButton title="Agregar" floating rounded center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type={ItemType.Spellbook} />
    </main>
  )
}