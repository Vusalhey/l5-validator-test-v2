/* eslint-disable class-methods-use-this */
class StringSchema {
  constructor() {
    this.startsWithUpperCase = false;
    this.currLength = null;
    this.exclamant = false;
  }

  startsFromUpperCase() {
    this.startsWithUpperCase = true;
    return this;
  }

  length(currLength) {
    this.currLength = currLength;
    return this;
  }

  hasExclamation() {
    this.exclamant = true;
    return this;
  }

  startCharUpperCase = (str) => {
    const firstChar = str.charAt(0);
    const erChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '?', ' ', ''];
    if (erChar.indexOf(firstChar) !== -1) {
      return firstChar === firstChar.toUpperCase();
    }
    return false;
  };

  isValid(data) {
    if (typeof data !== 'string') {
      return false;
    }
    if (this.exclamant && !data.includes('!')) { // hasExclamation()
      return false;
    }
    if (this.startsWithUpperCase && this.startCharUpperCase(data)) {
      // startsFromUpperCase()
      return false;
    }
    if (this.currLength !== null && data.length !== this.currLength) { // length()
      return false;
    }
    return true;
  }
}

export default StringSchema;
