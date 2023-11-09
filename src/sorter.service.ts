/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SorterService {
  name: string;

  constructor() {
    this.name = 'SorterService';
  }

  sortAscending(a: Array<number>): Array<number> {
    const end = a.length - 1;
    for (let i = 0; i < end; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
          const n = a[i];
          a[i] = a[j];
          a[j] = n;
        }
      }
    }
    return a;
  }

  sortDescending(a: Array<number>): Array<number> {
    const end = a.length - 1;

    for (let i = 0; i < end; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
          const n = a[i];
          a[i] = a[j];
          a[j] = n;
        }
      }
    }
    return a;
  }
}