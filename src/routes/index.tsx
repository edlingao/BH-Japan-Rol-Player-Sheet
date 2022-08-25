import { Title } from "solid-start";
import { CreateModal } from "~/components/create-modal";
import { IconButton } from "~/components/icon-button";
import { player } from "~/data/character";
import { showModal } from '../data/create-modal-show';
import Add from '~/assets/icons/add_small.svg'
export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      {player.name}<br />
      {player.currentDamage}
      <IconButton title="Agregar" center onClick={showModal}>
        <Add />
      </IconButton>
      <CreateModal type="armor"/>
    </main>
  );
}
