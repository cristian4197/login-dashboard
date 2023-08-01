import { ContentService } from './content.service';

describe('@ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    service = new ContentService();
  });

  describe('When call findItems',() => {
    it('#Should listMovies length is greater than zero when item is found', () => {
      const itemsToFind ='a';
      const typeContent = 'movies';
      let result;
      result = service.findItems(itemsToFind,typeContent);

      expect(result.length).toBeGreaterThan(0);
    });

    it('#Should return list objects of AudioVisualContent when item is not found', () => {
      const itemsToFind ='#';
      const typeContent = 'movies';
      let result;
      result = service.findItems(itemsToFind,typeContent);

      expect(result.length).toBeGreaterThan(0);
    });
  });
});
