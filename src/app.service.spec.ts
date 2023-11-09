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
    it.each([
      [[], []], // caso limite
      [[1], [1]],
      [
        [1, 2],
        [1, 2],
      ],
      [
        [2, 1],
        [1, 2],
      ],
      [
        [3, 2, 1],
        [1, 2, 3],
      ],
      [
        [1, 2, 3],
        [1, 2, 3],
      ],
      [
        [3, 1, 2],
        [1, 2, 3],
      ],
      [
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ],
    ])('should sort ascending the array %p', (arrayToSort, expectedArray) => {
      //act
      const sortedArray = sorterService.sortAscending(arrayToSort);

      //assert
      expect(sortedArray).toEqual(expectedArray);
    });
  });
});
