import image from "./images/250px-006Charizard.webp";

function Showcase() {
  const favPokemon = "Charizard";
  const pokeCharacteristics = {
    type: "Fire",
    move: "Dragon Breath"
  };
  return (
    <div>
      <h1> {favPokemon}'s Showcase Component</h1>
      <img src={image} alt={favPokemon}></img>
      <h2>
        {favPokemon}'s type is {pokeCharacteristics.type} and one of their moves
        is
        {pokeCharacteristics.move}
      </h2>
    </div>
  );
}

export default Showcase;
