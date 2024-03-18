import { staticTicketsData, ticketsMockData } from './tools.constants'
import { TicketsAgencyType } from './tools.models'

// NOTE: a function filters the repetitive items and returns a string including all of the items
// NOTE: if you wanted to make it custom, you can Pass a generic type like T instead of TicketsAgencyType[], it would be a general function
export const getSortTicketsItemsInString: (tickets: TicketsAgencyType[]) => string = (
  tickets
) => {
  const allItems: string[] = []

  tickets.forEach((p) => {
    allItems.push(p.destination, p.source)
  })

  const filteredItems = allItems.reduce(
    (prev: string[], curr) => (prev.includes(curr) ? prev : [...prev, curr]),
    []
  )

  return filteredItems.toString()
}

// NOTE: result part
getSortTicketsItemsInString(ticketsMockData) // => return mock data
getSortTicketsItemsInString(staticTicketsData) // => 'Berlin,Amsterdam,London,Paris'
