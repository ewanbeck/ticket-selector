import producer from 'immer';
import { Dispatch, useReducer } from 'react';

import { INITIAL_TICKET_STATE, TICKET_KEYS } from '../constants';
import {
  ActionTypes,
  TicketChangeAction,
  TicketVariants,
  TicketsState
} from '../types';

export type TicketStateReturnType = [
  TicketsState,
  boolean,
  Dispatch<TicketChangeAction>
];

export default function useTicketState(): TicketStateReturnType {
  const [ticketState, dispatch] = useReducer(
    producer((draft: TicketsState, action: TicketChangeAction) => {
      switch (action.actionType) {
        case ActionTypes.INCREMENT:
          switch (action.ticketVariant) {
            case TicketVariants.ADULT:
              draft[action.ticketType].adult =
                draft[action.ticketType].adult + 1;
              break;
            case TicketVariants.CHILD:
              draft[action.ticketType].child =
                draft[action.ticketType].child + 1;
              break;
          }
          break;
        case ActionTypes.DECREMENT:
          switch (action.ticketVariant) {
            case TicketVariants.ADULT:
              draft[action.ticketType].adult =
                draft[action.ticketType].adult - 1;
              break;
            case TicketVariants.CHILD:
              draft[action.ticketType].child =
                draft[action.ticketType].child - 1;
              break;
          }
          break;
        default:
          break;
      }
    }),
    INITIAL_TICKET_STATE
  );

  function isStateEmpty(): boolean {
    let stateEmpty = true;
    TICKET_KEYS.forEach((key) => {
      const ticket = ticketState[key];
      if (ticket.adult > 0 || ticket.child > 0) {
        stateEmpty = false;
      }
    });
    return stateEmpty;
  }

  return [ticketState, isStateEmpty(), dispatch];
}
