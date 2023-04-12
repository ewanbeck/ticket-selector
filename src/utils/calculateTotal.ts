import { ticketsData } from '../constants';
import { TicketsState } from '../types';

export function calculateTotal(tickets: TicketsState) {
  let runningTotal = 0;
  runningTotal += tickets['2day'].adult * ticketsData['2day'].prices.adult;
  runningTotal += tickets['2day'].child * ticketsData['2day'].prices.child;
  runningTotal += tickets['3day'].adult * ticketsData['3day'].prices.adult;
  runningTotal += tickets['3day'].child * ticketsData['3day'].prices.child;
  runningTotal += tickets['4day'].adult * ticketsData['4day'].prices.adult;
  runningTotal += tickets['4day'].child * ticketsData['4day'].prices.child;
  runningTotal += tickets['5day'].adult * ticketsData['5day'].prices.adult;
  runningTotal += tickets['5day'].child * ticketsData['5day'].prices.child;
  return runningTotal;
}
