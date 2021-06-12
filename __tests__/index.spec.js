(function () {
  require('../src');

  describe('api.basic test', () => {
    test.only('nx.it fiter simple array', () => {
      var arr = [0, 1, true, false, null, '', undefined];
      var filter1 = arr.filter(nx.it('@'));
      var filter2 = arr.filter(nx.it('!@'));
      expect(filter1).toEqual([ 1, true ]);
      expect(filter2).toEqual([0, false, null, '', undefined]);
    });

    test('nx.it filterd deep object', function () {
      var data = require('./pic.json');
      var filter1 = data.filter(nx.it('file.size'));
      var filter2 = data.filter(nx.it('!file.size'));
      expect(filter1).toEqual([
        {
          url: 'http://tmp/rYOV8lwCrW6885969266efbb54c322548e83ddd399e0.png',
          file: {
            path: 'http://tmp/rYOV8lwCrW6885969266efbb54c322548e83ddd399e0.png',
            size: 792
          }
        }
      ]);

      expect(filter2).toEqual([
        {
          url: 'https://demo.com/api/static/images/f7128c5454ef48d431315169ac1c8faf.png',
          file: {
            path: 'https://demo.com/api/static/images/f7128c5454ef48d431315169ac1c8faf.png',
            size: 0
          }
        },
        {
          url: 'https://demo.com/api/static/images/8ea7935faede52aa3891436fa5f0dd68.png',
          file: {
            path: 'https://demo.com/api/static/images/8ea7935faede52aa3891436fa5f0dd68.png',
            size: 0
          }
        }
      ]);
    });
  });
})();
