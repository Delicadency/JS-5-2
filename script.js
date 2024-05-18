function filterItems(array, array2) {
  if (![array, array2].every(Array.isArray)) {
    return "Wprowadzone dane nie są tablicami. Wprowadź dwie tablice składające się z liczb.";
  } else {
    const numbersBiggerThan0 = [...array, ...array2].filter((n) => n > 0);
    return numbersBiggerThan0;
  }
}
