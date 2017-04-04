/* jshint esversion: 6 */

module.exports = (() => {
  const bubbleSort = (collection) => {
    checkData(collection);

    let cleanPass = true;

    for (let i = 0; i < collection.length; i++) {
      if (collection[i] > collection[i + 1]) {
        let exchangeNum = collection[i];
        collection[i] = collection[i + 1];
        collection[i + 1] = exchangeNum;
        cleanPass = false;
      }
    }

    if (!cleanPass) {
      bubbleSort(collection);
    }

    return collection;
  };

  const checkData = (data) => {
    if (Array.isArray(data)) {
      return true;
    } else {
      throw new Error("Can Only Sort Arrays");
    }
  };

  return {
    bubbleSort
  };
})();