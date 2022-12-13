const CELCIUSInput = document.querySelector('#CELCIUS > input');
const FAHRENHEITInput = document.querySelector('#FAHRENHEIT > input');
const KELVINInput = document.querySelector('#KELVIN > input');

const roundToTwoDP = (num) => {
  return num.toFixed(2);
};


const CELCIUSToFaAndKe = () => {
  const CELCIUSTemp = parseFloat(CELCIUSInput.value);
  const FAHRENHEITTemp = (CELCIUSTemp * 1.8) + 32;
  const KELVINTemp = CELCIUSTemp + 273.15;

  FAHRENHEITInput.value = roundToTwoDP(FAHRENHEITTemp);
  KELVINInput.value = roundToTwoDP(KELVINTemp);
};


const FAHRENHEITToCeAndKe = () => {
  const FAHRENHEITTemp = parseFloat(FAHRENHEITInput.value);
  const CELCIUSTemp = (FAHRENHEITTemp - 32) * (5 / 9);
  const KELVINTemp = (FAHRENHEITTemp + 459.67) * (5 / 9);

  CELCIUSInput.value = roundToTwoDP(CELCIUSTemp);
  KELVINInput.value = roundToTwoDP(KELVINTemp);
};

const KELVINToCeAndFa = () => {
  const KELVINTemp = parseFloat(KELVINInput.value);
  const CELCIUSTemp = KELVINTemp - 273;
  const FAHRENHEITTemp =  1.8 * (KELVINTemp - 273) + 32;

  CELCIUSInput.value = roundToTwoDP(CELCIUSTemp);
  FAHRENHEITInput.value = roundToTwoDP(FAHRENHEITTemp);
};


const main = () => {
  CELCIUSInput.addEventListener('input', CELCIUSToFaAndKe);
  FAHRENHEITInput.addEventListener('input', FAHRENHEITToCeAndKe);
  KELVINInput.addEventListener('input', KELVINToCeAndFa);
};

main();