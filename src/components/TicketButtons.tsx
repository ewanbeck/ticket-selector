import classNames from 'classnames';
import React from 'react';

import { TICKET_KEYS, ticketsData } from '../constants';
import { useActiveTicketStateFromContext } from '../hooks';

type TicketButtonProps = {
  displayName: string;
  onClickFn: () => void;
  isActive: boolean;
};

function TicketButton(props: TicketButtonProps) {
  const { displayName, onClickFn, isActive } = props;

  return (
    <button
      className={classNames(
        'rounded-md border border-slate-400 p-3 text-left hover:cursor-pointer active:bg-blue-400',
        {
          'bg-blue-300': isActive,
          'hover:bg-blue-200': !isActive
        }
      )}
      onClick={() => onClickFn()}>
      {displayName}
    </button>
  );
}

export default function TicketButtons() {
  const [activeTicket, setActiveTicket] = useActiveTicketStateFromContext();

  return (
    <div className="flex flex-col gap-2">
      {TICKET_KEYS.map((key, i) => {
        return (
          <TicketButton
            key={i}
            displayName={ticketsData[key].displayName}
            isActive={activeTicket === key}
            onClickFn={() => setActiveTicket(key)}
          />
        );
      })}
    </div>
  );
}
