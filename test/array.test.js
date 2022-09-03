test('array', () => {
  const name = ['bima', 'agung', 'setya', 'budi']

  expect(name).toEqual(['bima', 'agung', 'setya', 'budi'])
  expect(name).toContain('bima')
})

// Array dengan value object
test('array object', () => {
  const person = [
    {
      name: 'Bima',
    },
    {
      name: 'Agung',
    },
  ]

  expect(person).toContainEqual({name: 'Bima'})
})
