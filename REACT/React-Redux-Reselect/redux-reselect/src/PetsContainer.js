import React from "react";
import { useSelector } from "react-redux";
import { selectAllCats, selectAllDogs, SlectDogsAndCats } from "./selectors";

function PetsContainer() {
  const dogs = useSelector(selectAllDogs);
  const cats = useSelector(selectAllCats);
  const allPets = useSelector(SlectDogsAndCats);

  React.useEffect(() => {
    console.log(dogs);
  }, [dogs]);

  return (
    <>
      <h1>Dogs</h1>
      <pre>{JSON.stringify(dogs, null, 2)}</pre>
      <h1>Cats</h1>
      <pre>{JSON.stringify(cats, null, 2)}</pre>
      <h1>Dogs and CATS</h1>
      <pre>{JSON.stringify(allPets, null, 2)}</pre>
    </>
  );
}

export default PetsContainer;
