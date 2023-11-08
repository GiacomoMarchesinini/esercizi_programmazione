import { Test, TestingModule } from '@nestjs/testing';
import { SorterService } from './sorter.service';

describe('SorterService', () => {
  let sorterService: SorterService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SorterService],
    }).compile();

    sorterService = app.get<SorterService>(SorterService);
  });

  describe('sort', () => {
    it('should sort ascending the array', () => {
      //prepare
      const arrayToSort = [2, 3, 1];

      //act
      const sortedArray = sorterService.sortAscending(arrayToSort);

      //assert
      expect(sortedArray).toBe([1, 2, 3]);
    });
  });
});
