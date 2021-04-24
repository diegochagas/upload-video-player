import { colors } from 'styles/theme'
import { getColorForNumber } from '.'

test('Getting colors for different numbers', () => {
  expect(getColorForNumber(1)).toBe(colors.rainbow1)
  expect(getColorForNumber(2)).toBe(colors.rainbow2)
  expect(getColorForNumber(3)).toBe(colors.rainbow3)
  expect(getColorForNumber(4)).toBe(colors.rainbow0)
  expect(getColorForNumber(5)).toBe(colors.rainbow1)
  expect(getColorForNumber(6)).toBe(colors.rainbow2)
  expect(getColorForNumber(7)).toBe(colors.rainbow3)
  expect(getColorForNumber(8)).toBe(colors.rainbow0)
  expect(getColorForNumber(9)).toBe(colors.rainbow1)
  expect(getColorForNumber(10)).toBe(colors.rainbow0)

  // it should get the last digit correctly
  expect(getColorForNumber(1231411)).toBe(colors.rainbow1)
  expect(getColorForNumber(9999994)).toBe(colors.rainbow0)

  // it should work with strings (example use case: gql ids)
  expect(getColorForNumber('1')).toBe(colors.rainbow1)
  expect(getColorForNumber('098904')).toBe(colors.rainbow0)

  // it should return gray when not a number
  expect(getColorForNumber('whaaat?')).toBe(colors.gray)
})
