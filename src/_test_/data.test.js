const races = require('../data/races.json')
const nations = require('../data/nations.json')
const pantheon = require('../data/pantheon.json')
const backgrounds = require('../data/5eBackgrounds/backgrounds.json')

// NPM TEST files

// Ensure new data isn't added unintentionally.
describe('Array length check', () => {
  test('should be 24', () => {
    const expected = 24
    expect(races.length).toBe(expected)
  })

  test('should be 10', () => {
    const expected = 10
    expect(nations.length).toBe(expected)
  })

  test('should be 37', () => {
    const expected = 37
    expect(pantheon.length).toBe(expected)
  })

  test('should be 106', () => {
    const expected = 106
    expect(backgrounds.length).toBe(expected)
  })
})

describe('type check', () => {
  test('should be type string', () => {
    expect(typeof '').toBe('string')
  })

  test('should be type number', () => {
    expect(typeof 10).toBe('number')
  })

  test('should be type boolean', () => {
    expect(typeof true).toBe('boolean')
  })

  test('should be type undefined', () => {
    expect(typeof undefined).toBe('undefined')
  })

  test('should be type object', () => {
    expect(typeof { foo: 'bar' }).toBe('object')
  })

  test('should be type function', () => {
    expect(typeof function () {}).toBe('function')
  })

  test('should be type null', () => {
    expect(typeof null).toBe('object')
  })
})

describe('All object values', () => {
    test("should be filled", () => {
        var n = null
        expect(n).toBeNull()
        expect(Object.values(races)).not.toBeNull
      })
  })