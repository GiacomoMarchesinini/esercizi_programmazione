import { Injectable } from '@nestjs/common';

@Injectable()
export class SorterService {
  name: string;

  constructor() {
    this.name = 'SorterService';
  }

  sortAscending(a: Array<number>): Array<number> {
    
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

  sortDescending(arrayToSort: Array<number>): Array<number> {
    return arrayToSort;
  }

increase(a) {
  
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