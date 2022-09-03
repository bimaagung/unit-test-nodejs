import {UserService} from '../src/user-service'
import {UserRepository} from '../src/user-repository'

jest.mock('../src/user-repository')

// create mock repository
const repository = new UserRepository()

// parameter repository has been mock (tiruan)
const service = new UserService(repository)

test('test mock user save', () => {
  const user = {
    id: '1',
    name: 'Bima',
  }

  service.save(user)

  expect(repository.save).toHaveBeenCalled()
  expect(repository.save).toHaveBeenCalledWith(user)
})

test('test mock class findById', () => {
  const user = {
    id: '1',
    name: 'Bima',
  }

  repository.findById.mockReturnValueOnce(user)

  expect(service.findById(1)).toEqual(user)
  expect(repository.findById).toHaveBeenCalled()
  expect(repository.findById).toHaveBeenCalledWith(1)
})

test('test mock class findAll', () => {
  const users = [
    {
      id: '1',
      name: 'Bima',
    },
    {
      id: '2',
      name: 'Bima',
    },
  ]

  repository.findAll.mockReturnValueOnce(users)

  expect(service.findAll()).toEqual(users)
  expect(repository.findAll).toHaveBeenCalled()
})
