import { Title } from "solid-start";
import { player } from "~/data/character";
export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      {player.name}<br />
      {player.currentDamage}
    </main>
  );
}
