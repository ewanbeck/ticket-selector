import React from 'react';

import {
  ADULT_TICKET_VARIANT_LABEL,
  CHILD_TICKET_VARIANT_LABEL,
  TICKET_KEYS,
  ticketsData
} from '../constants';
import { useTicketStateFromContext } from '../hooks';

export default function LineItems() {
  const [ticketState] = useTicketStateFromContext();
  return (
    <>
      {TICKET_KEYS.map((key, i) => {
        const { adult: adultTicketCount, child: childTicketCount } =
          ticketState[key];
        if (!adultTicketCount && !childTicketCount) {
          return null;
        } else {
          return (
            <div key={i}>
              <p className="font-medium">{ticketsData[key].displayName}</p>
              {[
                [adultTicketCount, ADULT_TICKET_VARIANT_LABEL],
                [childTicketCount, CHILD_TICKET_VARIANT_LABEL]
              ].map(([count, label], i) => {
                if (count === 0) return;
                return (
                  <div
                    key={i}
                    className="flex justify-between pl-4 text-gray-700">
                    <span>{label}</span>
                    <span>x {count}</span>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
}
