import './stat.scss';

interface Props {
  name: string;
  value: number;
}

export function Stat(props: Props) {
  const { name } = props;

  return (
    <div class='stat'>
      <h1 class='stat-name'>{name}</h1>
      <div class="stat-container">
        {/* Destructuring destroys the reactive of solidjs  */}
        <p class='roboto'>{props.value}</p>
      </div>
    </div>
  );
}
