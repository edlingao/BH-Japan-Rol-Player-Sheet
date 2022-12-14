import { createSignal } from 'solid-js';

import './_label.scss';

interface Props {
  title: string;
  value: string | number;
  type:  string;
  name: string;
  placeholder?: string;
  onChange?: ( value: string | number ) => void;
  onKeyDown?: ( value: string | number ) => void;
  onKeyPress?: ( value: string | number ) => void;
  onKeyUp?: ( value: string | number ) => void;
}

export function LabelInput({
  placeholder,
  type, 
  name,
  title,
  value,
  onChange,
  onKeyDown,
  onKeyPress,
  onKeyUp,
}: Props) {

  const [inputValue, setInputValue] = createSignal(value);  

  const change = (event: InputEvent) => {
    const { value } = event.target;
    onChange?.(value);
  }

  const keydown = (event: InputEvent) => {
    const {value} = event.target;
    onKeyDown?.(value);
  }

  const keypress = (event: InputEvent) => {
    const {value} = event.target;
    onKeyPress?.(value);
  }

  const keyup = (event: InputEvent) => {
    const {value} = event.target;
    onKeyUp?.(value);
  }

  return (
    <label class='label-input disable-dbl-tap-zoom'>
      <p class='title'>{title}</p>
      <input
        class='input'
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue()}
        onChange={change}
        onKeyDown={keydown}
        onKeyPress={keypress}
        onKeyUp={keyup}
        autocomplete="off"
      />
    </label>
  );
}
