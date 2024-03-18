import { faker } from '@faker-js/faker'

import { TicketsAgencyType } from './tools.models'

export const staticTicketsData: TicketsAgencyType[] = [
  {
    id: '1',
    source: 'Amsterdam',
    destination: 'Berlin',
  },
  {
    id: '2',
    source: 'Paris',
    destination: 'London',
  },
  {
    id: '3',
    source: 'London',
    destination: 'Amsterdam',
  },
]

// NOTE: The below lines can be commented on in case there is no possibility of installing the faker.js library
const staticMockCityName = faker.location.state()
export const ticketsMockData: TicketsAgencyType[] = new Array(5).fill(0).map(() => {
  return {
    id: faker.string.uuid(),
    source:
      faker.helpers.maybe(() => faker.location.state(), { probability: 0.5 }) ||
      staticMockCityName,
    destination: faker.location.state(),
  }
})
