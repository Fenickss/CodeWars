// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая [34, 15, 88, 2], ваше решение вернет 2
// Учитывая [34, -345, -1, 100], ваше решение вернет -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);;
    }
  }

  let smallestIntegerFinder = new SmallestIntegerFinder();
  console.log(smallestIntegerFinder.findSmallestInt([34, 15, 88, 2]));
  console.log(smallestIntegerFinder.findSmallestInt([34, -345, -1, 100]));
  
  