import { Title } from "solid-start";
import { IconButton } from "~/components/icon-button";
import { LabelInput } from "~/components/label-input";
import { Margin } from "~/components/margin/margin";
import { login, session, setSession, logged } from '../data/session';
import { register, loginRoute } from '../endpoints/index';
import { createSignal, createEffect, onMount } from 'solid-js';
import fetchHeader from "~/lib/fetchHeaders";
import axios, { AxiosResponse } from "axios";
import { setPlayerStats } from "~/data/character";
import { Player } from '../types/player';
import { setItem } from "~/data/item";
import toastr from "toastr";

export default function Login() {

  const [username, setUsername] = createSignal('');
  const [pswd, setPswd] = createSignal('');

  const setStoreEvent = ({data}: AxiosResponse) => {
    const player: Player = data[data.length - 1] as Player;
    setPlayerStats(player);
    setItem('armor', player.armor);
    setItem('spellbook', player.spellbook);
    setItem('inventory', player.inventory);
    setSession(data[data.length -1]._id);

    localStorage.setItem('session', data[data.length -1]._id);
  };

  const loginEvent = (e: MouseEvent) => {
    axios.post(loginRoute, {
      username: username(),
      password: pswd(),
    })
      .then(setStoreEvent)
      .catch(err => toastr.error(err));
  };

  const registerEvent = (e: MouseEvent) => {
    axios.post(register, {
      username: username(),
      password: pswd(),
    })
      .then(setStoreEvent)
      .catch(err => console.error(err));
  };

  return (
    <main class="main">
      <Title>Home</Title>
      <h1 class="main-title">THE GREAT JAPAN ADVENTURE OR SOMETHING</h1>
      <Margin large />
      <Margin large />
      <form class="center-container" onSubmit={(e: SubmitEvent) => e.preventDefault()}>
        <LabelInput
          title="Nombre"
          name="username"
          type="text"
          placeholder="Nombre del PJ"
          value=""
          onKeyUp={(value) => setUsername(value)}
        />
        <LabelInput
          title="Contraseña"
          name="password"
          type="password"
          placeholder="Contraseña del PJ"
          value=""
          onKeyUp={(value) => setPswd(value)}
        />
        <Margin large />
        <Margin large />
        <div class="buttons-container">
          <IconButton title="Ingresar" center onClick={loginEvent}/>
          <IconButton title="Registrar" center background="#2F80ED" onClick={registerEvent}/>
        </div>
      </form>
    </main>
  );
}
