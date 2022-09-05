import './table.scss';

import { For, children, Switch, Match, Show, createSignal } from 'solid-js';
import { Inventory, ArmorInfo, SpellBook, ItemType, Item, Spell, Armor } from '../../types/item';
import { Favorite } from '../favorite/favorite';
import { Margin } from '../margin/margin';
import { editItem, changeItemOrderBasedOnFavorite } from '../../data/item';
import Add from '~/assets/icons/add_small.svg';
import Subs from '~/assets/icons/substract_small.svg';
import Help from '~/assets/icons/help.svg';
import items from '~/data/item';

type Props = {
  source: Inventory | ArmorInfo | SpellBook;
  children: ChildNode,
  type: ItemType,
}

type NormalTableProps = {
  item: Spell | Item | Armor;
  type: ItemType;
}

type TitleProps = {
  title: string,
  count: string
}

function Title({title, count}: TitleProps) {
  return (
    <>
      <h1 class="title">{title}</h1>
      <h1 class="title">{count}</h1>
      <Margin medium/>
      <Margin medium/>
    </>
  )
}

function SpellbookDescription({description}: {description: string}) {
  return (
    <div class="description">
      {description}
    </div>
  )
}

function NormalTable({type, item}: NormalTableProps) {

  const changeFavoriteState = (id: string, oldValue: boolean) => {
    editItem(type, id, 'favorite', !oldValue); 
    changeItemOrderBasedOnFavorite(type);
  }

  const addCounter = (count: number, add: number, id: string) => 
    editItem(type, id, 'quantity', count + add);

  const [showInfo, setShowInfo] = createSignal(false)

  return (
    <>
      <div class="item-info">
        <div class="item-name">
          <p>{item.name}</p>
        </div>
        <div
          class="item-favorite"
          classList={{selected: item.favorite}}
          onClick={() => changeFavoriteState(item.id, item.favorite)}
        >
          <Favorite selected={item.favorite}/>
        </div>
      </div>
      <div class="item-count">
        <Show when={type === ItemType.Inventory} fallback={<p class="roboto">{item.quantity}</p>}>
          <div class="counter">
            <div class='button' onClick={() => addCounter(item.quantity, -1, item.id)}>
              <Subs />
            </div>
            <p class="roboto">{item.quantity}</p>
            <div class='button' onClick={() => addCounter(item.quantity, 1, item.id)}>
              <Add />
            </div>
          </div>
        </Show>

        <Show when={type === ItemType.Spellbook}>
          <div
            class="information"
            classList={{
              selected: showInfo(),
            }}
            tabIndex={-1}
            onClick={() => setShowInfo(!showInfo())}
          >
            <Help />
          </div>
        </Show>
      </div>
      <Show when={showInfo()}>
        <SpellbookDescription description={item.information}/>
        <Margin small />
        <Margin />
      </Show>
    </>
  )
}

export function Table(props: Props) {
  const { children, type } = props;

  return (
    <div class='table'>
      <Show when={type === ItemType.Armor || type === ItemType.Inventory}>
        <Title title='Nombre' count={type === ItemType.Armor ? 'AV' : 'Cantidad'} />
      </Show>
      <For each={props.source}>{(item) => 
        <NormalTable item={item} type={type}/>
      }</For>
    </div>
  );
}
