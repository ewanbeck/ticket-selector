import { TicketKey, TicketsData, TicketsState } from './types';

export const ticketsData: TicketsData = {
  '2day': {
    displayName: '2 Days / 48hr Travel Card',
    prices: {
      adult: 14.76,
      child: 0
    }
  },
  '3day': {
    displayName: '3 Days / 72hr Travel Card',
    prices: {
      adult: 21.42,
      child: 0
    }
  },
  '4day': {
    displayName: '4 Days / 96hr Travel Card',
    prices: {
      adult: 27.9,
      child: 0
    }
  },
  '5day': {
    displayName: '5 Days / 120hr Travel Card',
    prices: {
      adult: 34.38,
      child: 0
    }
  }
};

export const INITIAL_ACTIVE_TICKET: TicketKey = '2day';

export const INITIAL_TICKET_STATE: TicketsState = {
  '2day': {
    adult: 0,
    child: 0
  },
  '3day': {
    adult: 0,
    child: 0
  },
  '4day': {
    adult: 0,
    child: 0
  },
  '5day': {
    adult: 0,
    child: 0
  }
};

export const TICKET_KEYS: TicketKey[] = ['2day', '3day', '4day', '5day'];

export const TICKET_TYPE_HEADING = 'Ticket Type';
export const FARES_HEADING = 'Fares';
export const SELECTION_HEADING = 'Selection';
export const TOTAL_HEADING = 'Total';
export const ADD_TO_CART_TEXT = 'Add selection to cart';
export const GET_STARTED_PROMPT = 'Start by selecting a ticket';

export const ADULT_TICKET_VARIANT_LABEL = 'Adult';
export const CHILD_TICKET_VARIANT_LABEL = 'Child';
