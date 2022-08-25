import { showModal, hideModal, showingModal } from '../../data/create-modal-show';
import { createSignal, Match, Show, Switch, createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';
import Back from '~/assets/icons/arrow_small.svg';
import Add from '~/assets/icons/add.svg';
import Save from '~/assets/icons/save_small.svg';
import { Item, Spell, Armor } from '../../types/item';

import './_modal.scss';
import { IconButton } from '../icon-button';


enum Type {
  Inventory = "inventory",
  Spell = "spell",
  Armor = "armor",
}

interface Props {
  type: Type;
  onCancel: () => void;
  onSubmit: (item: Item | Spell | Armor) => void;
}

export function CreateModal({type, onCancel, onSubmit}: Props) {

  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const returnTo = () => pathname() === "/" ? 'home' :  pathname().split('/')[1]

  const cancel = () => {
    hideModal();
    onCancel?.();
  }

  const submit = (e: SubmitEvent) => {
    e.preventDefault();
    const newItem: Item | Spell | Armor = Object.fromEntries(new FormData(e.target));

    hideModal();
    onSubmit?.()
  }

  return(
    <main
      classList={{
        show: showingModal()
      }}
      class="create-modal"
    >
      <header class="modal-header" onClick={cancel} >
        <Back />
        <p class='modal-header-title'>{ returnTo() }</p>
      </header>
      <form class='modal-form' onSubmit={submit}>
        <label>
          <h1>Nombre del objeto</h1>
          <input type={type} name="name" />
        </label>
        <Show
          when={type === "spell"  || type === "armor"}
          fallback={
            <label>
              <h2>{type}</h2>
              <input type="number" name={type} />
            </label>
          }
        >
          <label>
            <h1>{type === 'armor' ? 'AV o Dado' : 'Descripcion'}</h1>
            <input type="text" name={type} />
          </label>
        </Show>

        <IconButton title='Guardar'>
          <Save />
        </IconButton>
      </form>
    </main>
  )
}