//Hasil akan menjadi kebalikan dari ekspetasi

test('string.not', () => {
  const name = 'Bima Agung Setya Budi'

  expect(name).not.toBe('Joko')
  expect(name).not.toEqual('Joko')
  expect(name).not.toMatch(/joko/)
})

test('number.not', () => {
  const number = 2 + 2

  expect(number).not.toBeGreaterThan(6)
  expect(number).not.toBeLessThan(3)
  expect(number).not.toBe(10)
})
