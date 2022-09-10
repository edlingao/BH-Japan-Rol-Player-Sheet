import { createSignal, onMount } from 'solid-js';
import { setPlayerStats } from '~/data/character';
import { Player } from '../types/player';
import { getPlayerByToken } from '../endpoints/index';
import axios, { AxiosResponse } from 'axios';
import { setItem } from '~/data/item';


export const [session, setSession] = createSignal(null);

export const logged = () => session() != null;

export const login = (session: string) => 
  setSession(session);


onMount(() => {
  if(localStorage.getItem('session') != null) {
    const sessionToken = localStorage.getItem('session');
    axios.get(getPlayerByToken(sessionToken)).then( ({data}: AxiosResponse) => {
      setSession(sessionToken);
      setItem('armor', data.armor);
      setItem('spellbook', data.spellbook);
      setItem('inventory', data.inventory);
      setPlayerStats(data);
    })
  }
})
