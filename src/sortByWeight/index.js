/* eslint-disable-next-line */
// export function sortByWeight(arr) {
//   // var obj = {val: '123', weight: 6};
//   let newArr = arr.map(el => {
//     return {
//       val: el,
//       weight: el.split('').reduce(function(acc, item) {
//           return acc + parseInt(item, 10);
//       }, 0),
//     };
//   });

//   newArr.sort(function(a,b) {
//     if (a.weight > b.weight) {
//       return 1;
//     }
//     return -1;
//   });
//   return newArr.map(function(el) {
//     return el.val;
//   });


//   // console.log(newArr);
// }


export function sortByWeight (arr) {
  return arr.sort(function (a,b) {

    let x = a.split('').reduce(function (acc, item) {
      return acc + parseInt(item, 10);
    }, 0);
    let y = b.split('').reduce(function (acc, item) {
      return acc + parseInt(item, 10);
    }, 0);
    if (x > y) {
      return 1;
    }
    return -1;
  });
}






// const arr = ['123', '1', '72'];
// function sortByWeight(arr) {
//   // your logic here...

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let el = arr[i];
//         arr[i] = arr[j];
//         arr[j] = el;
//       }
//     }
//   }

//   return  arr;
// }

console.log(sortByWeight(['123', '1', '72']));
