import React, { ReactNode, createContext, useContext, useState } from 'react';

import { INITIAL_ACTIVE_TICKET } from '../constants';
import { TicketKey } from '../types';
import useTicketState, { TicketStateReturnType } from './useTicketState';

type ActiveTicketState = [
  TicketKey,
  React.Dispatch<React.SetStateAction<TicketKey>>
];

type TicketContext = {
  activeTicketState: ActiveTicketState;
  ticketState: TicketStateReturnType;
};

export const TicketContext = createContext<TicketContext | null>(null);

type TicketProviderProps = {
  children: ReactNode;
};

export function TicketProvider(props: TicketProviderProps) {
  const activeTicketState = useState<TicketKey>(INITIAL_ACTIVE_TICKET);
  const ticketState = useTicketState();

  return (
    <TicketContext.Provider
      value={{
        activeTicketState,
        ticketState
      }}>
      {props.children}
    </TicketContext.Provider>
  );
}

export function useActiveTicketStateFromContext(): ActiveTicketState {
  const ticketContext = useContext(TicketContext);

  if (!ticketContext) {
    throw new Error(
      'useActiveTicketState has to be used within <TicketProvider>'
    );
  }

  return ticketContext.activeTicketState;
}

export function useTicketStateFromContext(): TicketStateReturnType {
  const ticketContext = useContext(TicketContext);

  if (!ticketContext) {
    throw new Error(
      'useTicketStateFromContext has to be used within <TicketProvider>'
    );
  }

  return ticketContext.ticketState;
}
