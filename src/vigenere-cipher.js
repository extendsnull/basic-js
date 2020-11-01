class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) this.throwError();

    const formattedMessage = message.toUpperCase();
    const formattedKey = key.toLowerCase();

    let result = '';

    for (let i = 0, j = 0; i < formattedMessage.length; i++, j++) {
      j = (j === formattedKey.length) ? j = 0 : j;

      if (formattedMessage[i].charCodeAt() >= 'A'.charCodeAt() && formattedMessage[i].charCodeAt() <= 'Z'.charCodeAt()) {
        let shift = formattedKey[j].charCodeAt() - 'a'.charCodeAt();

        if ((formattedMessage[i].charCodeAt() + shift) > 'Z'.charCodeAt()) {
          shift = 'A'.charCodeAt() + (formattedMessage[i].charCodeAt() + shift - 'Z'.charCodeAt()) - 1;
        } else {
          shift = formattedMessage[i].charCodeAt() + shift;
        }

        result = (this.direction === false) ? String.fromCharCode(shift) + result : result + String.fromCharCode(shift);
      } else {
        result = (this.direction === false) ? formattedMessage[i] + result : result + formattedMessage[i];
        j--;
      }
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) this.throwError();

    const formattedMessage = message.toUpperCase();
    const formattedKey = key.toLowerCase();

    let result = '';

    for (let i = 0, j = 0; i < formattedMessage.length; i++, j++) {
      j = (j === formattedKey.length) ? j = 0 : j;

      if (formattedMessage[i].charCodeAt() >= 'A'.charCodeAt() && formattedMessage[i].charCodeAt() <= 'Z'.charCodeAt()) {
        let shift = formattedKey[j].charCodeAt() - 'a'.charCodeAt();

        if ((formattedMessage[i].charCodeAt() - shift) < 'A'.charCodeAt()) {
          shift = 'Z'.charCodeAt() + (formattedMessage[i].charCodeAt() - shift - 'A'.charCodeAt()) + 1;
        } else {
          shift = formattedMessage[i].charCodeAt() - shift;
        }

        result = (this.direction === false) ? String.fromCharCode(shift) + result : result + String.fromCharCode(shift);
      } else {
        result = (this.direction === false) ? formattedMessage[i] + result : result + formattedMessage[i];
        j--;
      }
    }

    return result;
  }

  throwError() {
    throw new Error('Строка или кодовое слово отсутствуют');
  }
}

module.exports = VigenereCipheringMachine;