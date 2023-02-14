
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(typeof matrix != 'object'){ // если приходи пустой аргумент, возвращаем пустой массив
    return [];
  };

  matrix.forEach((el, index) => { // четные элементы сортируем по возрастанию, нечетные по убывани 
    if(index % 2 === 0){
      el.sort(function(a, b){
        return a - b;
      });
    }else{
      el.sort(function(a, b){
        return b - a;
      });
    };
  });

  let resArr = [];

  for(let i = 0; i < matrix.length; i++){ // из двхумерного массива matrix, делаем одномерный массив resArr
    resArr = resArr.concat(matrix[i]);
  };

  return resArr;
};
