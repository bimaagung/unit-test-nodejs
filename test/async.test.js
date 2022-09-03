import {sayHelloAsync} from '../src/async'

test('test async function', async () => {
  const result = await sayHelloAsync('Bima')
  expect(result).toBe('Hello Bima')
})

test('test async matcher', async () => {
  await expect(sayHelloAsync('Bima')).resolves.toBe('Hello Bima')
  await expect(sayHelloAsync()).rejects.toBe('Name is empty')
})
