export default function* rootSaga() {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
  yield 4;
}

const generator = rootSaga();
generator.next(); // 1
generator.next(); // 2
generator.next(); // 3...