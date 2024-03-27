import { TicketsAgencyType } from "./tools.models";

// NOTE: a function sort the destination and source and help the agent to find the path
// NOTE: if you wanted to make it custom, you can Pass a generic type like T instead of TicketsAgencyType[], it would be a general function
export const getSortTicketsItemsInString: (
  tickets: TicketsAgencyType[]
) => string = (tickets) => {
  // Sort the tickets based on destination
  const sortedTickets = [];
  const visited = new Set();

  // Helper function to find the next ticket
  function findNextTicket(currentDestination: string) {
    for (const ticket of tickets) {
      if (!visited.has(ticket) && ticket.source === currentDestination) {
        visited.add(ticket);
        return ticket;
      }
    }
  }

  // Start with the ticket having a source that does not appear as a destination
  let currentTicket = tickets.find(
    (ticket) => !tickets.some((t) => t.destination === ticket.source)
  );
  if (!currentTicket) return ""; // Invalid input

  while (currentTicket) {
    sortedTickets.push(currentTicket);
    currentTicket = findNextTicket(currentTicket.destination);
  }

  // Check if all tickets are used
  if (sortedTickets.length !== tickets.length) return ""; // Invalid input

  const filteredItems =
    sortedTickets.map((ticket) => ticket.source).join(", ") +
    ", " +
    sortedTickets[sortedTickets.length - 1].destination;

  return filteredItems;
};
