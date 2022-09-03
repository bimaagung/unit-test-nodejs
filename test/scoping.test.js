beforeAll(() => console.info('Before All Outer'))

afterAll(() => console.info('After All Outer'))

beforeEach(() => console.info('Before Each Outer'))

afterEach(() => console.info('After Each Outer'))

test('Test Outer', () => {
  console.info('Test Outer')
})

describe('Inner 1', () => {
  beforeEach(() => console.info('Before Each Inner'))

  afterEach(() => console.info('After Each Inner'))

  test('Test Inner', () => {
    console.info('Test Inner')
  })
})

describe('Inner 2', () => {
  beforeEach(() => console.info('Before Each Inner'))

  afterEach(() => console.info('After Each Inner'))

  test('Test Inner', () => {
    console.info('Test Inner')
  })
})
