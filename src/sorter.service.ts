import { Injectable } from '@nestjs/common';

@Injectable()
export class SorterService {
  name: string;

  constructor() {
    this.name = 'SorterService';
  }

  sortAscending(arrayToSort: Array<number>): Array<number> {
    return arrayToSort;
  }

  sortDescending(arrayToSort: Array<number>): Array<number> {
    return arrayToSort;
  }
}
