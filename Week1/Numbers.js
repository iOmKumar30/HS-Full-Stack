function explainParseInt(value) {
  console.log("Original value:", value);
  console.log("Value after parseInt:", parseInt(value));
}
// Examples of parseInt
explainParseInt("10");
explainParseInt("10.5");
explainParseInt("10px");

function explainParseFloat(value) {
  console.log("Original value:", value);
  console.log("Value after parseFloat:", parseFloat(value));
}
// Examples of parseFloat
explainParseFloat("10");
explainParseFloat("10.5");
explainParseFloat("10px");
