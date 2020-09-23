class MyError extends Error {}

function primitiveMultiply(val, secondVal) {
  const rand = Math.floor(Math.random() * 101);
  if (rand <= 20) {
    return val * secondVal;
  } else {
    throw new MyError();
  }
}

try {
  primitiveMultiply();
} catch (error) {
  if (error instanceof MyError) {
    console.log("Произошла ожидаемая ошибка");
  }
}
