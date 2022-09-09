import { showModal, hideModal, showingModal } from '../../data/create-modal-show';
import { createSignal, Match, Show, Switch, createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';
import Back from '~/assets/icons/arrow_small.svg';
import Add from '~/assets/icons/add.svg';
import Save from '~/assets/icons/save_small.svg';
import { Item, Spell, Armor, ItemType } from '../../types/item';

import './_modal.scss';
import { IconButton } from '../icon-button';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  type: ItemType;
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
    const {name, quantity} = Object.fromEntries(new FormData(e.target));
    const newItem: Item | Spell | Armor = {
      id: uuidv4(),
      name,
      quantity,
      favorite: false,
    }
    hideModal();
    onSubmit?.(newItem)
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
          when={type === ItemType.Spellbook || type === ItemType.Armor}
          fallback={
            <label>
              <h1>Cantidad</h1>
              <input type="number" name='quantity' />
            </label>
          }
        >
          <label>
            <h1>{type === ItemType.Armor ? 'AV o Dado' : 'Descripcion'}</h1>
            <input type="text" name='quantity' />
          </label>
        </Show>

        <IconButton title='Guardar'>
          <Save />
        </IconButton>
      </form>
    </main>
  )
}