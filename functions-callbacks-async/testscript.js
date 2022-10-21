const logger = arg1 => {
  return arg1;
};
undefined
logger(returnsOne);
VM175:1 Uncaught ReferenceError: returnsOne is not defined
  at <anonymous>:1:8
(anonymous) @ VM175:1
const returnsOne = () => 1;
undefined
logger(returnsOne);
() => 1
const answer = returnsOne();
undefined
console.log(answer);
VM359:1 1
undefined
console.log(returnsOne);
VM434:1 () => 1
undefined
console.log(returnsOne());
VM552:1 1
undefined
console.log(1);
VM593:1 1
undefined
function returnsNothing() {
  const x = 3 + 5;
  // doesn't have a return statement
  // the x variable is basically thrown
}
undefined
const answer2 = returnsNothing();
undefined
console.log(answer2);
VM1021:1 undefined
undefined
// logs undefined!
undefined
console.log('where is my console');

