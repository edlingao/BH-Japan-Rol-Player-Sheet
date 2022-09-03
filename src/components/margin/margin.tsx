import './margin.scss';

interface Props {
  small: boolean;
  medium: boolean;
  large: boolean;
}

export function Margin({small = false, medium = false, large = false}: Props) {
  return (
    <div
      classList={{
        small,
        medium,
        large
      }}
      class="margin">
    </div>
  );
}