const findBestEmployee = function(employees) {
  let mostProductive = 0;
  let employee;

  for (const key of Object.keys(employees)) {
    if (mostProductive < employees[key]) {
      mostProductive = employees[key];
      employee = key;
    }
  }
  return employee;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
