import { createStore } from 'solid-js/store';
import { Player } from '../types/player';
import axios, { AxiosResponse } from 'axios';
import { session } from './session';
import toastr from 'toastr';
import { editItem } from './item';
import { editStatRoute } from '../endpoints/index';

const initialPlayer: Player = {
    name: 'Jhon Doe Caster Large',
    class: 'Warrior',
    race: 'hito',
    hd: '1d6',
    hp: 15,
    currentDamage: 0,
    ad: '1d6 0 2',
    str: 12,
    dex: 12,
    con: 12,
    int: 12,
    wis: 12,
    cha: 12,
  };

export const [player, setPlayerStats] = createStore(initialPlayer);

export const getDamage = (damage: number) => 
  setPlayerStats('currentDamage', (player.currentDamage + damage));

export const heal = (healPoints: number) => 
  setPlayerStats('currentDamage', (player.currentDamage - healPoints));

export const editPlayer = (player: Player) => setPlayerStats(player);

export const setStat = (stat, newValue) => {
  axios.post(editStatRoute, {
    type: stat,
    newValue,
    token: session(),
  })
  .then(({data}: AxiosResponse) => setPlayerStats(stat, data.newValue))
  .catch(err => toastr.error(JSON.stringify(err)))
  setPlayerStats(stat, newValue);
}
