// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.34;

contract SimpleMath {
  // Add two numbers.
  function add(uint x, uint y) public pure returns (uint) {
    return x + y;
  }

  // Subtract y from x.
  function subtract(uint x, uint y) public pure returns (uint) {
    return x - y;
  }

  // Multiply two numbers.
  function multiply(uint x, uint y) public pure returns (uint) {
    return x * y;
  }

  // Divide x by y.
  function divide(uint x, uint y) public pure returns (uint) {
    // Do not allow division by zero.
    require(y != 0, "Cannot divide by zero");
    return x / y;
  }
}
