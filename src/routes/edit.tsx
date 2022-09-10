import { Title } from "solid-start";
import { LabelInput } from '../components/label-input/index';
import { player } from '~/data/character';
import { IconButton } from "~/components/icon-button";
import Save from '~/assets/icons/save_small.svg';
import { For } from "solid-js";
import { inputObj } from '../assets/constants/InputObjects';
import { Stat } from "~/components/stat/stat";
import { Slider } from "~/components/slider/slider";
import { Margin } from "~/components/margin/margin";
import { setStat } from '../data/character';


export default function Edit() {
  let playerData =  [];
  const numericStats = [];
  const stringStats = [];
  Object.keys(player).forEach((key) => {
    const stadisticInfo = inputObj[key];
    if (stadisticInfo) {
      playerData.push(stadisticInfo);
    } else if (key != 'currentDamage' && key != '_id' && key != '__v' && key != 'date' && key != 'armor' && key != 'inventory' && key != 'spellbook' && key != 'password') {
      numericStats.push(key);
    }
  });

  return(
    <main class="main">
      <Title>Editar</Title>
      <form class="edit-pj">

        <For each={playerData}>{({title, placeholder, key}) =>
          <LabelInput
            name="name"
            title={title}
            type="text"
            placeholder={placeholder}
            value={player[key]}
            onChange={(value: string ) => setStat(key, value)}
          />
        }
        </For>
        <For each={numericStats} >{(numericStat) =>
          <>
            <div class="flex-container">
              <Stat name={numericStat.toUpperCase()} value={player[numericStat]}/>
              <Slider startCount={player[numericStat]} onChange={(value: number) => setStat(numericStat, value)}/>
            </div>
            <Margin large />
          </>
        }</For>
      </form>
    </main>
  )
}