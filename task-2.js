// Вы отдыхали с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, а ближайшая заправка находится в 50 милях от вас! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона.

// Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет.

// Функция должна возвращать true, если это возможно, и false, если нет.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    let fullPath = mpg * fuelLeft
//     if(fullPath >= distanceToPump){
//      return true;
//     }else{
//      return false
//   }

  return fullPath >= distanceToPump ? true : false

  };
  console.log(zeroFuel(5, 2, 25));
  

