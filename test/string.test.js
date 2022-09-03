test('string', () => {
  const name = 'Bima Agung Setya Budi'

  expect(name).toBe('Bima Agung Setya Budi')
  expect(name).toMatch(/gung/)
})
