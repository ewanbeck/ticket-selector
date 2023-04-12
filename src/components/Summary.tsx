import React, { useMemo } from 'react';

import {
  ADD_TO_CART_TEXT,
  GET_STARTED_PROMPT,
  TOTAL_HEADING
} from '../constants';
import { useTicketStateFromContext } from '../hooks';
import { calculateTotal } from '../utils/calculateTotal';
import numberAsCurrency from '../utils/numberAsCurrency';

export default function Summary() {
  const [ticketState, isStateEmpty] = useTicketStateFromContext();
  const total = useMemo(() => calculateTotal(ticketState), [ticketState]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-lg" key={TOTAL_HEADING}>
        <h4 className="font-medium" id={TOTAL_HEADING.toLowerCase()}>
          {TOTAL_HEADING}
        </h4>
        <span aria-labelledby={TOTAL_HEADING.toLowerCase()}>
          {numberAsCurrency(total)}
        </span>
      </div>
      <button
        className="mt-1 cursor-pointer rounded-full bg-blue-500 py-2 px-8 text-lg font-medium text-white hover:bg-blue-600 active:bg-blue-700 disabled:cursor-default disabled:bg-gray-400"
        type="button"
        disabled={isStateEmpty}
        onClick={() => console.log(ticketState)}>
        {isStateEmpty ? GET_STARTED_PROMPT : ADD_TO_CART_TEXT}
      </button>
    </div>
  );
}
