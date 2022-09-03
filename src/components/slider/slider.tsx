import { createSignal, onMount } from 'solid-js';
import Add from '~/assets/icons/add_small.svg';
import Subs from '~/assets/icons/substract_small.svg';
import './slider.scss';
import { createStore } from 'solid-js/store';
import { _auxSlider } from '../_aux-slider/_aux-slider';

interface Props {
  count: number;
  onChange: (newValue: number) => void;
};

export function Slider({}) {
  const [count, setCount]: Array<number, T> = createSignal(0);
  const [mouseDown, setMouseDown] = createSignal(false);
  const [thumbPosition, setThumbPosition] = createStore({x: -5, y: 70})
 
  const handleDown = () => setMouseDown(true);
  const handleUp = () => setMouseDown(false);
  const handleChange = (e: Event) => {
    setCount(e.target.value);
  }

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
          onPointerUp={handleUp}
          onPointerMove={handleChange}
        />
        <div class="range-background"></div>
      </div>
      <div class="controls">
        <div class="add-icon" onClick={() => setCount(count()<= 0 ? 0 : count() - 1)}>
          <Subs />
        </div>
        <p class='roboto'>{count()}</p>
        <div class="add-icon" onClick={() => setCount(count() >= 100 ? 100 : count() + 1)}>
          <Add />
        </div>
      </div>
    </div>
  );
}