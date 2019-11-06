/* eslint-disable-next-line */
export function doubleNum(num) {
  let length = num.toString().length;
  if (length % 2 === 0) {
    let arr = num.toString().split('');
    let str1 = arr.slice(0, length / 2).join();
    let str2 = arr.slice(length / 2, length).join();
    return str1 === str2 ? num : num * 2;
  }

  return num * 2;

}


// function doubleNum (num) {
//   // your logic here...
//   const str = num.toString();
//   const strReverse = str.split('').reverse().join('');
//   console.log(str)
//   console.log(strReverse)
//   // var arr = [1, 2, 3, 1, 2, 3];
//   // for (var i = 0 )
//   //console.log(str.slice(-1)[0]);
//   var flag = true;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = strReverse.length - 1; j >= 0; j--) {
//       if ( str[i] !== strReverse[j]) {
//         // console.log('str => ', str[i]);
//         // console.log('strReverse', strReverse[j]);
//         console.log(str[i], ' === ', strReverse[j]);
//         flag = false;
//       }
//     }
//   }

//   return flag ? num : num * 2;

// }
