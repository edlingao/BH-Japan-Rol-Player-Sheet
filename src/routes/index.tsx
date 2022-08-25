import { Title } from "solid-start";
import { CreateModal } from "~/components/create-modal";
import { IconButton } from "~/components/icon-button";
import { player } from "~/data/character";
import { showModal } from '../data/create-modal-show';
import Add from '~/assets/icons/add_small.svg'
import { LabelInput } from '../components/label-input/index';
import { createEffect, createSignal } from 'solid-js';
export default function Home() {

  const [value, setValue] = createSignal("");

  createEffect(() => {
    console.log(value());
  })

  return (
    <main class="main">
      <Title>{player.name}</Title>
      <h1>{value()}</h1>
      <IconButton title="Agregar" center onClick={showModal}>
        <Add />
      </IconButton>
      <LabelInput
        name="name"
        title="Nombre del PJ"
        type="text"
        placeholder="Nombre"
        onKeyUp={(value: string) => setValue(value)}
      />
      <CreateModal type="armor"/>
    </main>
  );
}
