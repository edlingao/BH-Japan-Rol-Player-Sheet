import { Title } from "solid-start";
import { CreateModal } from "~/components/create-modal";
import { IconButton } from "~/components/icon-button";
import { player } from "~/data/character";
import { showModal } from '../data/create-modal-show';
import Add from '~/assets/icons/add_small.svg'
import { LabelInput } from '../components/label-input/index';
import { createEffect, createSignal } from 'solid-js';
import { Slider } from "~/components/slider/slider";

export default function Home() {

  const [value, setValue] = createSignal("");

  const handleChangeFromSlider = (value: number) => {
    console.log('Slider ', value);
  }
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
      <Slider onChange={handleChangeFromSlider}/>
      <CreateModal type="armor"/>
    </main>
  );
}
