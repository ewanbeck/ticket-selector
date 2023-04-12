import React, { Dispatch, useRef } from 'react';

import {
  ADULT_TICKET_VARIANT_LABEL,
  CHILD_TICKET_VARIANT_LABEL,
  ticketsData
} from '../constants';
import {
  useActiveTicketStateFromContext,
  useTicketStateFromContext
} from '../hooks';
import { ActionTypes, TicketChangeAction, TicketVariants } from '../types';
import numberAsCurrency from '../utils/numberAsCurrency';

type TicketCountAdjusterProps = {
  caption: string;
  price: number;
  currentCount: number;
  dispatchFn: Dispatch<TicketChangeAction>;
  ticketType: TicketChangeAction['ticketType'];
  ticketVariant: TicketChangeAction['ticketVariant'];
};

export function TicketCountAdjuster({
  caption,
  currentCount,
  price,
  dispatchFn,
  ticketType,
  ticketVariant
}: TicketCountAdjusterProps) {
  const plusButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="flex flex-row items-center justify-between gap-7 rounded-md border border-slate-400 p-2">
      <span>{caption}</span>
      <span>{numberAsCurrency(price)}</span>
      <div className="flex items-center gap-2">
        <button
          disabled={currentCount === 0}
          className="grid aspect-square h-10 place-items-center rounded-md border border-solid border-slate-400 hover:border-slate-500 hover:bg-blue-100 active:bg-blue-300 disabled:cursor-not-allowed disabled:border-slate-400 disabled:bg-inherit disabled:text-gray-500"
          type="button"
          onClick={() => {
            dispatchFn({
              ticketType,
              actionType: ActionTypes.DECREMENT,
              ticketVariant
            });
            if (currentCount === 1) {
              plusButtonRef.current?.focus();
            }
          }}>
          <span className="material-symbols-rounded">remove</span>
        </button>
        <div className="grid min-w-[3ch] place-items-center">
          <span>{currentCount}</span>
        </div>
        <button
          ref={plusButtonRef}
          className="grid aspect-square h-10 place-items-center rounded-md border border-solid border-slate-400 hover:border-slate-500 hover:bg-blue-100 active:bg-blue-300"
          type="button"
          onClick={() =>
            dispatchFn({
              ticketType,
              actionType: ActionTypes.INCREMENT,
              ticketVariant
            })
          }>
          <span className="material-symbols-rounded">add</span>
        </button>
      </div>
    </div>
  );
}

export function TicketCountAdjustors() {
  const [activeTicket] = useActiveTicketStateFromContext();
  const [ticketState, , dispatch] = useTicketStateFromContext();

  return (
    <div className="flex flex-col gap-2">
      {[
        {
          caption: ADULT_TICKET_VARIANT_LABEL,
          currentCount: ticketState[activeTicket].adult,
          price: ticketsData[activeTicket].prices.adult,
          ticketVariant: TicketVariants.ADULT
        },
        {
          caption: CHILD_TICKET_VARIANT_LABEL,
          currentCount: ticketState[activeTicket].child,
          price: ticketsData[activeTicket].prices.child,
          ticketVariant: TicketVariants.CHILD
        }
      ].map((settings, i) => (
        <TicketCountAdjuster
          key={i}
          ticketVariant={settings.ticketVariant}
          caption={settings.caption}
          currentCount={settings.currentCount}
          dispatchFn={dispatch}
          price={settings.price}
          ticketType={activeTicket}
        />
      ))}
    </div>
  );
}
