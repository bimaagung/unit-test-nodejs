// unit test khusus gagal

import {sayHello} from '../src/sayHello'

test('sayHello success', () => {
  expect(sayHello('Bima')).toBe('Hello Bima')
})

test.failing('sayHello error', () => {
  sayHello(null)
})

test('sayHello error matchers', () => {
  expect(() => sayHello(null)).toThrow()
})
