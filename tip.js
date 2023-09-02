function calculateTip(customPercentage) {
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  const numberOf = document.getElementById("bill__inputt").value;
  const numberOfPeo = Number(numberOf);
  const convert = Number(input);
  const convertResult = (convert / numberOfPeo) * (customPercentage / 100);

  console.log(input);
  console.log(convert);
  console.log(numberOf);
  console.log(numberOfPeo);
  console.log(convertResult);

  if (!isNaN(convertResult)) {
      result.textContent = convertResult.toFixed(2);

      const convertResultt = convert / numberOfPeo + convertResult;
      resultt.textContent = convertResultt.toFixed(2);
  } else {
      result.textContent = "0.00";
      resultt.textContent = "0.00";
  }
}

document.getElementById("customInput").addEventListener("input", function () {
  const customPercentage = parseFloat(this.value);
  if (!isNaN(customPercentage)) {
      calculateTip(customPercentage);
  }
});
