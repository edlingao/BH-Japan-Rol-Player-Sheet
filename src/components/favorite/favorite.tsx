import { Show } from 'solid-js';
import Star from '~/assets/icons/star_fill.svg';
import StarEmpty from '~/assets/icons/star.svg';
 
import './favorite.scss';

type Props = {
  children: ChildNode,
  selected: boolean,
}

export function Favorite(props: Props) {
  const {children} = props;

  return (
    <div
      class='favorite-container'
      classList={{
        selected: props.selected 
      }}
    >
      <Show when={props.selected} fallback={() => <StarEmpty class='star-empty' />} >
        <Star class='star'/>
      </Show>
    </div>
  );
}
