
import React from 'react';
import Input from 'ps-react/Input';

/** Check console for returned value */
export default function ExampleInput() {
  return <Input onChange={doSomething} debounceDelay={500} />
}

function doSomething(value) {
  console.log(value);
}