import { Title } from "solid-start";
import { LabelInput } from '../components/label-input/index';
import { player } from '~/data/character';
import { IconButton } from "~/components/icon-button";
import Save from '~/assets/icons/save_small.svg';
import { For } from "solid-js";
import { inputObj } from '../assets/constants/InputObjects';


export default function Edit() {
  let playerData =  [];
  Object.keys(player).forEach((key) => {
    const stadisticInfo = inputObj[key];
    
    if (stadisticInfo) {
      playerData.push(stadisticInfo);
    }
  });
  console.log(playerData);

  return(
    <main className="main">
      <Title>Editar</Title>
      <form className="edit-pj">

        <For each={playerData}>{({title, placeholder}) =>
          <LabelInput
            name="name"
            title={title}
            type="text"
            placeholder={placeholder}
          />
        }
        </For>
        <IconButton title="Guardar">
          <Save />
        </IconButton>
      </form>
    </main>
  )
}