import { createSignal, onMount, createEffect } from 'solid-js';
import Add from '~/assets/icons/add_small.svg';
import Subs from '~/assets/icons/substract_small.svg';
import './slider.scss';
import { createStore } from 'solid-js/store';
import { _auxSlider } from '../_aux-slider/_aux-slider';
import { Margin } from '../margin/margin';

interface Props {
  startCount: number;
  onChange: (newValue: number) => void;
};

export function Slider({startCount = 0, onChange}: Props) {
  const [count, setCount]: Array<number, T> = createSignal(startCount);
  const [mouseDown, setMouseDown]: Array<boolean, T> = createSignal(false);
  const [thumbPosition, setThumbPosition]: Array<{x: number, y: number}, T> = createStore({x: -5, y: 70})
 
  const handleDown = () => setMouseDown(true);
  const handleUp = () => setMouseDown(false);

  const add = (value: number) => {
    const newValue: number = count() + value;
    setCount(
      newValue <= 100 && newValue >= 0 ?
        newValue :
        newValue >= 100 ?
          100 :
          0);
  }

  const handleChange = (e: Event) => {
    const newValue = parseInt(e.target.value);
    setCount(newValue);
  }

  createEffect(() => onChange?.(count()));

  return (
    <div class='slider'>
      <div class="input-range">
        <input
          type="range"
          style={{
            "background-size": `${count()}% 100%`
          }}
          value={count()}
          onChange={handleChange}
          
          onPointerDown={handleDown}
          onTouchStart={handleDown}
          
          onPointerUp={handleUp}
          onTouchEnd={handleUp}

          onPointerMove={handleChange}
          onTouchMove={handleChange}
        />
        <div class="range-background"></div>
      </div>
      <Margin large/>
      <div class="controls">
        <div class="add-icon" onClick={() => add(-1)}>
          <Subs />
        </div>
        <p class='roboto count'>{count()}</p>
        <div class="add-icon" onClick={() => add(1)}>
          <Add />
        </div>
      </div>
    </div>
  );
}