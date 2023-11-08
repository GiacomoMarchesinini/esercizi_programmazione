import { Controller, Post } from '@nestjs/common';
import { SorterService } from './sorter.service';

// /sorter
@Controller('sorter')
export class SorterController {
  constructor(private readonly sorter: SorterService) {}

  // /sorter/sort-ascending
  @Post('sortascending')
  sortAscending(): Array<number> /*: restituisce questo tipo ed la stessa cosa con number[] */ {
    // const sorter = new SorterService();
    return this.sorter.sortAscending([1, 2, 3]);
  }

  // /sorter/sort-ascending
  @Post('sortdescending')
  sortDescending(): Array<number> /*: restituisce questo tipo ed la stessa cosa con number[] */ {
    return [];
  }
}
