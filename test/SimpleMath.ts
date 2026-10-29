import { expect, assert } from "chai";
import { network } from "hardhat";

// Create a local blockchain connection.
const { ethers } = await network.create();

describe("SimpleMath", function () {
  // Test the add function.
  it("should add two numbers correctly", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath");
    const result = await simpleMath.add(2n, 3n);

    // Compare the actual result with the expected result.
    assert.equal(result, 5n);
  });

  // Test the subtract function.
  it("should subtract two numbers correctly", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath");
    const result = await simpleMath.subtract(10n, 4n);

    assert.equal(result, 6n);
  });

  // Test the multiply function.
  it("should multiply two numbers correctly", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath");
    const result = await simpleMath.multiply(6n, 7n);

    assert.equal(result, 42n);
  });

  // Test the divide function.
  it("should divide two numbers correctly", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath");
    const result = await simpleMath.divide(20n, 5n);

    assert.equal(result, 4n);
  });

  // Test division by zero.
  it("should reject division by zero", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath");

    await expect(simpleMath.divide(10n, 0n)).to.be.revertedWith(
      "Cannot divide by zero",
    );
  });
});
