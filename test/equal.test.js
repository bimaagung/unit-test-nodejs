test('test toBe', () => {
  const name = 'Bima'
  const hello = `Hello ${name}`

  expect(hello).toBe('Hello Bima')
})

// Membandingkan khusus object atau array
test('test toEqual', () => {
  let person = {id: 'Bima'}
  Object.assign(person, {name: 'Bima'})

  expect(person).toEqual({id: 'Bima', name: 'Bima'})
})
