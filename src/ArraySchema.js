/* eslint-disable class-methods-use-this */
class ArraySchema {
  constructor() {
    this.depthValue = 0;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (this.depthValue > 0) {
      return this.getArrayDepth(data, 0) <= this.depthValue;
    }
    return true;
  }

  maxDepth(newValue) {
    this.depthValue = newValue;
    return this;
  }

  getArrayDepth = (arr, depth = 0) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return depth;
    }
    const depths = [depth];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of arr) {
      if (Array.isArray(item)) {
        depths.push(this.getArrayDepth(item, depth + 1));
      }
    }
    return Math.max(...depths);
  };
}
export default ArraySchema;
