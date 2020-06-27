import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Pattern extends React.Component{
  render(){

    let array = [], tmp;

    let rows = 0;
    for (let i = 0; i <= size; i++) {
      tmp = '';

      for (let z = 0; z <= (size - i); z++) tmp += ' ';

      for (let x = 0; x <= (2 * i); x++) tmp += '*';

      for (let z = 0; z <= (size - i); z++) tmp += ' ';

      array[rows] = tmp;

      rows += 1;
  }

  for (let i = size; i >= 0; i--) {
      tmp = '';

      for (let z = (size - i); z >= 0; z--) tmp += ' ';

      for (let x = (2 * i); x >= 0; x--) tmp += '*';

      for (let z = (size - i); z >= 0; z--) tmp += ' ';

      array[rows] = tmp;

      rows += 1;
  }

  return aray;
}


combine(x) {
  const numberOfArrays = x.length;
  const numberOfElement = x[0].length;

  const finalArray = [];

  for (let i = 0; i < numberOfElement; i++) {
      let tmp = '';

      for (let j = 0; j < numberOfArrays; j++) tmp += x[j][i];

      finalArray.push(tmp);
  }

  return finalArray;
}

display(array) {
  for (let i = 0; i < array.length; i++) console.log(array[i]);
}
}

    
export default Pattern;
const n1 = new Pattern();



const size = 5;

let x1 = n1.combine([n1.pattern(boyut), n1.pattern(boyut), n1.pattern(boyut)]);
let x2 = n1.combine([n1.pattern(boyut), n1.pattern(boyut)]);
let x3 = n1.combine([n1.pattern(boyut), n1.pattern(boyut), n1.pattern(boyut)]);



n1.combine(x1.concat(x2).concat(x3));



