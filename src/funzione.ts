 export class Filter {
 
    increase(a) {
        let end = a.length - 1;
 
    for (let i = 0; i < end; i++) {
    for (let j = i + 1; j < a.length; j++) {
 
     if (a[i] > a[j]) {
      let n = a[i]
     a[i] = a[j];
      a[j] = n;
               }
            }
        }
       return a;
    }
 
    decrease(a) {
        let end = a.length - 1;
 
     for (let i = 0; i < end; i++) {
     for (let j = i + 1; j < a.length; j++) {
 
      if (a[i] < a[j]) {
         let n = a[i]
         a[i] = a[j];
        a[j] = n;
                }
            }
        }
    return a;
    }
 
}
 
let a = [10, 25, 36, 67, 4, 11]
 
let increase = new Filter();
let increaseResult = increase.increase(a);
console.log(increaseResult);
 
let decrease = new Filter();
let decreaseResult = decrease.decrease(a);
console.log(decreaseResult);