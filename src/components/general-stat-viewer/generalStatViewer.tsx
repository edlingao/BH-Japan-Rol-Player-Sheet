import Sword from '~/assets/icons/swords.svg';
import Shield from '~/assets/icons/shield.svg';
import Heart from '~/assets/icons/heart.svg';

import './generalStatViewer.scss';
import { player } from '~/data/character';
import { createSignal } from 'solid-js';

export function GeneralStatViewer() {
  
  const percentageDamage = (hp: number, currentDamage: number) =>
    ((hp - currentDamage) / hp) * 100;

  return (
    <div class='general-stat'>
      <div class="row">
        <div class="col">
          <p class='stat'>HD</p>
          <Shield />
        </div>
        <p class='col stat roboto'>{player.hd}</p>
      </div>
      <div class="row">
        <div class="col">
          <p class="stat">AD</p>
          <Sword />
        </div>
        <p class='col stat roboto'>{player.ad}</p>
      </div>
      <div class="row">
        <div class="col">
          <p class="stat">HP</p>
          <Heart />
        </div>
        <div class='col health'
          style={{
            "background-size": `${percentageDamage(player.hp, player.currentDamage)}% 100%`
          }}
        >
          <div class="life-left">
            <p class="roboto">{player.hp - player.currentDamage}/{player.hp}</p>
          </div>
          <div class="empty-health"></div>
        </div>
      </div>
    </div>
  );
}
