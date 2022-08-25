import Home from '~/assets/icons/home.svg';
import Inventory from '~/assets/icons/inventory.svg';
import Book from '~/assets/icons/book.svg';
import Edit from '~/assets/icons/edit.svg';
import { Icon } from '~/types/menuItem';
import { Match, Switch } from 'solid-js';

const styles = {

}

interface Props {
  iconOption: Icon;
}

export function IconElement({ iconOption }: Props) {
  return(
    <Switch >
      <Match when={iconOption === 0}>
        <Home class="icon"/>
      </Match>
      <Match when={iconOption === 1}>
        <Inventory class="icon"/>
      </Match>
      <Match when={iconOption === 2}>
        <Book class="icon"/>
      </Match>
      <Match when={iconOption === 3}>
        <Edit class="icon"/>
      </Match>
    </Switch>
  )
}