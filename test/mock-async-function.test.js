import {getBalance} from '../src/async'

test('mock async function', async () => {
  const from = jest.fn()
  from.mockResolvedValueOnce(1000)

  await expect(getBalance('Bima', from)).resolves.toEqual({
    name: 'Bima',
    balance: 1000,
  })

  expect(from.mock.calls.length).toBe(1)
  await expect(from.mock.results[0].value).resolves.toBe(1000)
})

// ketika kondisi error

test.failing('mock async function rejected', async () => {
  const from = jest.fn()
  from.mockRejectedValueOnce(new Error('Ups'))

  await getBalance('Bima', from)
})

// menggunakan error matchers
test('mock async function error matchers', async () => {
  const from = jest.fn()
  from.mockRejectedValueOnce('Rejected')

  await expect(getBalance('Bima', from)).rejects.toBe('Rejected')
})
