import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Create a deployment module.
export default buildModule("SimpleMathModule", (m) => {
  // Deploy the SimpleMath contract.
  const simpleMath = m.contract("SimpleMath");
  return { simpleMath };
});
