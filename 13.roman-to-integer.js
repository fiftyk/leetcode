/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (51.55%)
 * Total Accepted:    366.4K
 * Total Submissions: 710.7K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 *
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 *
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 *
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 *
 * Example 1:
 *
 *
 * Input: "III"
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: "IV"
 * Output: 4
 *
 * Example 3:
 *
 *
 * Input: "IX"
 * Output: 9
 *
 * Example 4:
 *
 *
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 *
 *
 * Example 5:
 *
 *
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 */
const dict = {
  'I': 1,
  'IV': 4,
  'IX': 9,
  'V': 5,
  'X': 10,
  'XL': 40,
  'XC': 90,
  'L': 50,
  'C': 100,
  'CD': 400,
  'CM': 900,
  'D': 500,
  'M': 1000
};

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  const array = s.split('');
  const size = array.length;
  const getNextByIndex = (index) => {
      return array[index];
  };
  let skipIndex;

  return array.reduce((total, current, index) => {
      let next;

      debugger;

      if (skipIndex === index) {
          return total;
      }

      if (current === 'I' || current === 'X' || current === 'C') {
          if (index + 1 < size) {
              next = getNextByIndex(index + 1);
          }
      }

      if (current === 'I') {
          if (next === 'V') {
              skipIndex = index + 1;
              return total += 4;
          }
          if (next === 'X') {
              skipIndex = index + 1;
              return total += 9;
          }
      }

      if (current === 'X') {
          if (next === 'L') {
              skipIndex = index + 1;
              return total += 40;
          }
          if (next === 'C') {
              skipIndex = index + 1;
              return total += 90;
          }
      }

      if (current === 'C') {
          if (next === 'D') {
              skipIndex = index + 1;
              return total += 400;
          }
          if (next === 'M') {
              skipIndex = index + 1;
              return total += 900;
          }
      }

      return total += dict[current];
  }, 0);
};
