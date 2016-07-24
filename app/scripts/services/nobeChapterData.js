/**
 * Created by George Ruan on July 16, 2016.
 *
 * nobeChapterData defines static data regarding NOBE's chapters across the nation.
 */

/**
 * Color codes of chapters:
 * - Drexel.                                     234, 193, 99 || #eac163
 * - Georgia Tech.                               237, 174, 46 || #edae2e
 * - McGill University.                          209, 44, 46 || #d12c2e
 * - National.                                   168, 203, 84 || #a8cb54
 * - New York University.                        86, 20, 140 || #56148c
 * - Penn State Behrend.                         3, 17, 150 || #031196
 * - Penn State University.                      59, 119, 193 || #3b77c1
 * - University of Illinois at Urbana Champaign. 222, 128, 51 || #de8033
 * - University of Minnesota.                    121, 20, 30 || #79141e
 * - University of Southern California.          254, 204, 48 || #fecc30
 * - University of Texas At Austin.              194, 85, 33 || #c25521
 * - University of Wisconsin.                    194, 35, 62 || #c2233e
 */

(function() {
  'use strict';
  angular.module('nobe')
    .factory('nobeChapterData', nobeChapterData);

  function nobeChapterData() {
    let _chapters = {
      'National': {
        chapter: 'National',
        color: '#a8cb54',
        link: 'https://www.nobenational.org/national/home.php'
      },
      'Drexel': {
        chapter: 'Drexel',
        color: '#eac163',
        link: 'https://www.nobenational.org/drexel/home.php'
      },
      'Georgia Tech': {
        chapter: 'Georgia Tech',
        color: '#edae2e',
        link: 'https://www.nobenational.org/gt/home.php'
      },
      'McGill University': {
        chapter: 'McGill University',
        color: '#d12c2e',
        link: 'http://nobe.mcgilleus.ca/affiliate.html'
      },
      'New York University': {
        chapter: 'New York University',
        color: '#56148c',
        link: 'https://www.nobenational.org/nyu/home.php'
      },
      'Penn State Behrend': {
        chapter: 'Penn State Behrend',
        color: '#031196',
        link: 'https://www.nobenational.org/psb/home.php'
      },
      'Penn State University': {
        chapter: 'Penn State University',
        color: '#3b77c1',
        link: 'https://www.nobenational.org/psu/home.php'
      },
      'University of Illinois at Urbana-Champaign': {
        chapter: 'University of Illinois at Urbana-Champaign',
        color: '#de8033',
        link: 'https://www.nobenational.org/illinois/home.php'
      },
      'University of Minnesota': {
        chapter: 'University of Minnesota',
        color: '#79141e',
        link: 'https://www.nobenational.org/minnesota/home.php'
      },
      'University of Southern California': {
        chapter: 'University of Southern California',
        color: '#fecc30',
        link: 'https://www.nobenational.org/usc/home.php'
      },
      'University of Texas At Austin': {
        chapter: 'University of Texas At Austin',
        color: '#c25521',
        link: 'https://www.nobenational.org/texas/home.php'
      },
      'University of Wisconsin': {
        chapter: 'University of Wisconsin',
        color: '#c2233e',
        link: 'https://www.nobenational.org/wisconsin/home.php'
      }
    };

    function _arrayOfChapters() {
      return _.values(_chapters);
    }

    function _chapterLogo(chapter) {
      if (!chapter || !(chapter in _chapters)) {
        return '/images/chapter_logos/national.png';
      }

      let arrayOfStrings = chapter.split(/[\ -]/);
      let chapterLogo = `/images/chapter_logos/${arrayOfStrings[0]}`;
      for (let i = 1; i < arrayOfStrings.length; ++i) {
        chapterLogo += `_${arrayOfStrings[i]}`;
      }
      chapterLogo += '.png';

      return chapterLogo.toLowerCase();
    }

    // Public
    let nobeChapterDataObj = {
      arrayOfChapters: _arrayOfChapters,
      chapterLogo: _chapterLogo
    };

    return nobeChapterDataObj;
  }
})();
