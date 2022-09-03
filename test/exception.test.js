import {callMe, MyException} from '../src/exception'

// unit test khusus gagal
test('exception', () => {
  expect(() => callMe('Bima')).toThrow()
  expect(() => callMe('Bima')).toThrow(MyException)
  expect(() => callMe('Bima')).toThrow('Ups my exceptions happens')
})

test('exception not happens', () => {
  expect(callMe('Budi')).toBe('OK')
})
