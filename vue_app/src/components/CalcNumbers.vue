<template>
    <div class="calculator">
      <div class="display">
        &nbsp;
        {{ displayValue }}
        &nbsp;&nbsp;&nbsp;
        {{ operator !== null ? `(${operator})`: '' }}
      </div>
      <div class="buttons">
        <div class="row">
          <button @click="appendToDisplay('7')">7</button>
          <button @click="appendToDisplay('8')">8</button>
          <button @click="appendToDisplay('9')">9</button>
        </div>
        <div class="row">
          <button @click="appendToDisplay('4')">4</button>
          <button @click="appendToDisplay('5')">5</button>
          <button @click="appendToDisplay('6')">6</button>
          
        </div>
        <div class="row">
          <button @click="appendToDisplay('1')">1</button>
          <button @click="appendToDisplay('2')">2</button>
          <button @click="appendToDisplay('3')">3</button>
          
        </div>
        <div class="row">
          <button @click="appendToDisplay('0')">0</button>
          <button @click="appendToDisplay('.')">.</button>
          <button @click="calculate()">=</button>
          <button @click="clearDisplay">C</button>
        </div>
        <div class="row">
            <button @click="performOperation('+')">+</button>
            <button @click="performOperation('-')">-</button>
            <button @click="performOperation('*')">*</button>
            
            <button @click="performOperation('/')">/</button>
            
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const displayValue = ref('');
  const storedValue = ref(null);
  const operator = ref(null);
  const waitingForOperand = ref(false);
  
  const appendToDisplay = (value) => {
    if (waitingForOperand.value) {
      displayValue.value = '';
      waitingForOperand.value = false;
    }
    displayValue.value += value;
  };
  
  const performOperation = (op) => {
    if (storedValue.value === null) {
      storedValue.value = parseFloat(displayValue.value);
      operator.value = op;
      waitingForOperand.value = true;
    } else {
      calculate();
      operator.value = op;
    }
  };
  
  const clearDisplay = () => {
    displayValue.value = '';
    storedValue.value = null;
    operator.value = null;
    waitingForOperand.value = false;
  };
  
  const calculate = () => {
    const currentValue = parseFloat(displayValue.value);
    switch (operator.value) {
      case '+':
        displayValue.value = (storedValue.value + currentValue).toString();
        break;
      case '-':
        displayValue.value = (storedValue.value - currentValue).toString();
        break;
      case '*':
        displayValue.value = (storedValue.value * currentValue).toString();
        break;
      case '/':
        displayValue.value = (storedValue.value / currentValue).toString();
        break;
    }
    storedValue.value = null;
    operator.value = null;
    waitingForOperand.value = true;
  };
  </script>
  
  <style scoped>
  /* Styles same as the previous example */
  .calculator {
    border: 1px solid gray;
    width: 20em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  div.buttons {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    font-size: xx-large;
    

  }
 

  button {
    font-size:1em;
    width: 2em;
    color: rgba(187, 87, 87, 0.551);
    background-color: transparent;
    border: .01px solid gray;
  }
  button:hover {
    background-color: rgb(97, 91, 91);
  }
  .display {
    font-size: xx-large;
    color: rgba(78, 235, 169, 0.716);
    position: relative;
    display: block;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(83, 78, 78);
    width: 95%;
    height: 3em;
  }

  </style>
  