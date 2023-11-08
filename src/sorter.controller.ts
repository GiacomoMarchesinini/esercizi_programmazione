import { Body, Controller, Post } from '@nestjs/common';
import { SorterService } from './sorter.service';
import { SortNumberDto } from './dto/SortNumberDto';

// /sorter
@Controller('sorter')
export class SorterController {
  constructor(private readonly sorter: SorterService) {}

  // /sorter/sort-ascending
  @Post('sortascending')
  sortAscending(
    @Body() sortNumberDto: SortNumberDto,
  ): Array<number> /*: restituisce questo tipo ed la stessa cosa con number[] */ {
    // const sorter = new SorterService();
    return this.sorter.sortAscending(sortNumberDto.arrayToSort);
  }

  // /sorter/sort-ascending
  @Post('sortdescending')
  sortDescending(
    @Body() sortNumberDto: SortNumberDto,
  ): Array<number> /*: restituisce questo tipo ed la stessa cosa con number[] */ {
    // const sorter = new SorterService();
    return this.sorter.sortDescending(sortNumberDto.arrayToSort);
  }
}
