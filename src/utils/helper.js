export const generateCaptcha = (length = 5) => {
  const generateNumber = () =>
    String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);

  const generateUppercase = () =>
    String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);

  const notUsed = ["0", "O", "1", "I"];

  const capchaArr = Array.from({ length: length }, (_, index) => {
    let value = index % 2 === 0 ? generateUppercase() : generateNumber();

    while (notUsed.includes(value)) {
      value = index % 2 === 0 ? generateUppercase() : generateNumber();
    }

    return value;
  });
  return capchaArr.join("");
};

//Helper function to style each character with a random rotation and skew
export const getCharStyle = () => {
  const rotation = Math.floor(Math.random() * 31) - 15;
  const skew = Math.floor(Math.random() * 11) - 5;

  return {
    display: "inline-block",
    transform: `rotate(${rotation}deg) skew(${skew}deg)`,
    margin: "0 2px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    textShadow: "1px 1px #ccc",
  };
};
