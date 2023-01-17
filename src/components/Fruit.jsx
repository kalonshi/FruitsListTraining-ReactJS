export default function Fruit(props) {
  //State

  // comportement

  // Affichage (Render)

  return (
    <li>
      {props.fruitInfo.nom}{" "}
      <button onClick={() => props.onFruitDelete(props.fruitInfo.id)}>X</button>
    </li>
  );
}
