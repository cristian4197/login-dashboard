import { ContentService } from './content.service';

describe('@ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    service = new ContentService();
  });

  describe('When call findItems',() => {
    it('#Should return objects of AudioVisualContent', () => {
      const itemsToFind ='a';
      const typeContent = 'movies';
      let result;
      result = service.findItems(itemsToFind,typeContent);

      expect(result.length).toBeGreaterThan(0);
    });
  });
});
