//const methods = require("src/components/header/controls/search/search.jsx");

function cloneObj(obj, sub) {
    let cloneArr = [];
    for (let key in obj) {
      for (let k in obj[key]) {
        console.log()
        if (k !== "title" && typeof obj[key][k] ==="string" ) {
          cloneArr.push({
            category: key,
            sub: sub,
            paragrath: k,
            text: obj[key][k],
          });
        }
      }
    }
    return cloneArr;
  }

describe('cloneObj', () => {
    const obj = {
      category1: {
        title: 'Category 1',
        paragraph1: 'This is paragraph 1',
        paragraph2: 'This is paragraph 2',
      },
      category2: {
        title: 'Category 2',
        paragraph3: 'This is paragraph 3',
        paragraph4: 123, // Should be skipped due to non-string value
      },
    };
  
    it('should return an array of objects with correct properties and values', () => {
      const result = cloneObj(obj, 'sub');
      expect(result).toEqual([
        {
          category: 'category1',
          sub: 'sub',
          paragrath: 'paragraph1',
          text: 'This is paragraph 1',
        },
        {
          category: 'category1',
          sub: 'sub',
          paragrath: 'paragraph2',
          text: 'This is paragraph 2',
        },
        {
          category: 'category2',
          sub: 'sub',
          paragrath: 'paragraph3',
          text: 'This is paragraph 3',
        },
      ]);
    });
  
    it('should handle an empty object', () => {
      const result = cloneObj({}, 'sub');
      expect(result).toEqual([]);
    });
  
    it('should skip non-string values', () => {
      const objWithNonString = {
        category1: {
          title: 'Category 1',
          paragraph1: 123,
          paragraph2: 'This is paragraph 2',
        },
      };
      const result = cloneObj(objWithNonString, 'sub');
      expect(result).toEqual([
        {
          category: 'category1',
          sub: 'sub',
          paragrath: 'paragraph2',
          text: 'This is paragraph 2',
        },
      ]);
    });
  });