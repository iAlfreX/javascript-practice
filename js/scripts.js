const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

console.log(generateKey(5, characters));

function generateKey(length, characters) {
  const isNumber = typeof length === "number" && !isNaN(length);
  const isString = typeof characters === "string" && characters.trim().length > 0;

  if (isNumber && isString) {
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}
