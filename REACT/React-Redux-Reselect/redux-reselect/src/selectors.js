import { createSelector } from "reselect";

const selectAllPets = (state) => state.data;

export const selectAllDogs = createSelector(selectAllPets, (allPets) =>
  allPets.filter((pet) => pet.type === "dog")
);

export const selectAllCats = createSelector(selectAllPets, (allPets) =>
  allPets.filter((pet) => pet.type === "cat")
);

export const SlectDogsAndCats = createSelector(
  //зависимости
  [selectAllDogs, selectAllCats],
  (dogs, cats) => [...dogs, ...cats]
);
