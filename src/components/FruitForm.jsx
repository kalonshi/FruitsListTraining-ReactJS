import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  //State
  const [nouveauFruit, setNouveauFruit] = useState(" ");

  // comportement
  const handleSubmitFruit = (event) => {
    event.preventDefault();

    //2. manipulation sur la copie du state

    const id = new Date().getTime();
    const nom = nouveauFruit;
    const addFruit = { id, nom };
    //fruitsCopy.push(addFruit);
    handleAdd(addFruit);
    setNouveauFruit(""); //Pour rafraichir l'input
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNouveauFruit(event.target.value);
  };
  // Affichage (Render)

  return (
    <form action="submit" onSubmit={handleSubmitFruit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="ajouter un fruit..."
        onChange={handleChange}
      />
      <button>ajouter</button>
    </form>
  );
}
