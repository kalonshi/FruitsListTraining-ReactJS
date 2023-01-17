import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
function App() {
  //State ( état, données dynamique)

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Ananas" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Mangue" },
    { id: 4, nom: "Papaye" },
    { id: 5, nom: "Orange" }
  ]);

  // Comportements
  const handleDeleteFruit = (id) => {
    console.log("handleDeleteFruit   =" + id);
    //1.copy du state
    const fruitCopy = [...fruits]; //Spread operator pour créer une copie d'un tableau

    // 2.manipuler le state
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id); // methode filter() des tableau JS créer un deuxieme tableau a partir du premier selon des conditions

    //3. modifier mon state avec le setter
    setFruits(fruitCopyUpdated); // Mis à jour des données
  };
  const handleAdd = (addFruit) => {
    //1. copie du state
    const fruitsCopy = [...fruits]; //Spread operator pour créer une copie d'un tableau
    //2. manipulation sur la copie du state
    fruitsCopy.push(addFruit);
    //3. modifier le state avec le setter
    setFruits(fruitsCopy); // Ajouter un nouveau fruit
  };

  // Render ( affichage) Les accolades permettent de récupérer un state
  return (
    <div>
      <h1> Liste de Fruits Exotiques </h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDeleteFruit}
            key={fruit.id}
          /> //Insertion du component, ne pas oublier d'importer le component
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
export default App;

//Gestion du formulaire:

//1. Creation du formulaire
//2. Soumission  du formulaire
//3. Collecte des données du formulaire
//3a. méthode 1:documentGetElementById "React" avec useRef
//3b. méthode 2: sync decendante / ascendante (onChange / handleChange)
