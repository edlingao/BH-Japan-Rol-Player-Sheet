import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

// Convert mouse position from screen space to coordinates of el
function inElementSpace(evt: MouseEvent, pt, svg: HTMLElement){
  pt.x=evt.clientX; pt.y=evt.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}


export function _auxSlider() {
  
  let svg: HTMLElement;
  const [mouseDown, setMouseDown] = createSignal(false);
  const [thumbPosition, setThumbPosition] = createStore({x: -5, y: 70})

  const handleDown = () => setMouseDown(true);
  const handleUp = () => setMouseDown(false);
  const handlePosition = (e: MouseEvent) => {
    if(mouseDown()) {
      const pt = svg.createSVGPoint();
      const {x, y} = inElementSpace(e, pt, svg);
      const maxHeightOrWidth = 70;
      const minHeightOrWidth = -70;

      if(x < 0) {
        setThumbPosition('x', -5)
        setThumbPosition('y', 70);
      }

      if(x >= 0 && x <= 140) {
        const secondResultAux = 65 + ( Math.sqrt(
          Math.pow(maxHeightOrWidth, 2) - Math.pow(x + minHeightOrWidth, 2)
        )) * -1;
        setThumbPosition('x', x);
        setThumbPosition('y', secondResultAux);
        console.log({
          x: thumbPosition.x,
          y: thumbPosition.y,
          calculatedY: secondResultAux
        })
      }
    }
  }

  return (
    <div class="slider">
      <h1>Dragging: {mouseDown().toString()}</h1>
      <svg
        overflow='visible'
        width="200"
        height="200"
        viewBox="0 0 150 150"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        ref={svg}
        onPointerDown={handleDown}
        onPointerUp={handleUp}
        onPointerMove={handlePosition}
      >
        <path d="M0 75C1.73895e-06 55.1088 7.90176 36.0322 21.967 21.967C36.0322 7.90177 55.1088 2.13402e-06 75 0C94.8912 -2.13402e-06 113.968 7.90176 128.033 21.967C142.098 36.0322 150 55.1087 150 75L142.045 75C142.045 57.2185 134.982 40.1653 122.408 27.5919C109.835 15.0185 92.7815 7.95482 75 7.95482C57.2185 7.95482 40.1653 15.0185 27.5919 27.5919C15.0185 40.1653 7.95482 57.2185 7.95482 75L0 75Z" fill="#4F4F4F"/>
        <path d="M0 75C1.43108e-06 58.6304 5.35565 42.7102 15.2497 29.669L21.587 34.477C12.7424 46.135 7.95482 60.3666 7.95482 75L0 75Z" fill="#F5DC0C"/>
        <rect class='thumb' x={thumbPosition.x} y={thumbPosition.y} width="15" height="15.1" rx="7.5" fill="#F2994A"/>
      </svg>
    </div>
  );
}