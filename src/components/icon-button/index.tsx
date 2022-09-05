
import { children, PropsWithChildren } from 'solid-js';
import './_button.scss';

interface Props extends PropsWithChildren{
  onClick?: () => void;
  floating?: boolean;
  rounded?: boolean;
  left?: boolean;
  right?: boolean;
  title: string;
  center: boolean;
}

export function IconButton(props: Props) {
  const { 
    title,
    floating,
    rounded,
    left,
    right,
    center,
    onClick,
  } = props;

  const IconChild = children(() => props.children)

  const click = () => {
    onClick?.();
  }

  return (
    <button
      onClick={click}
      classList={{
        rounded: rounded != null,
        floating: floating != null,
        center: center != null,
        right: right != null
      }}
      class="icon-button"
    >
      {title}
      {IconChild()}
    </button>
  )
}
