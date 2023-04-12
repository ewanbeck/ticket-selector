export type TicketKey = '2day' | '3day' | '4day' | '5day';

export type TicketData = {
  displayName: string;
  prices: {
    adult: number;
    child: number;
  };
};

export type TicketsData = {
  [K in TicketKey]: TicketData;
};

export type TicketState = {
  adult: number;
  child: number;
};

export type TicketsState = {
  [K in TicketKey]: TicketState;
};

export enum TicketVariants {
  ADULT = 'ADULT',
  CHILD = 'CHILD'
}

export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export type TicketChangeAction = {
  actionType: typeof ActionTypes.DECREMENT | typeof ActionTypes.INCREMENT;
  ticketType: keyof TicketsData;
  ticketVariant: typeof TicketVariants.ADULT | typeof TicketVariants.CHILD;
};
