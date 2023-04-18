import React from 'react';

import SectionWrapper from './components/SectionWrapper';
import Summary from './components/Summary';
import TicketButtons from './components/TicketButtons';
import { TicketCountAdjustors } from './components/TicketCountAdjustor';
import TicketSelection from './components/TicketSelection';
import { FARES_HEADING, TICKET_TYPE_HEADING } from './constants';
import { TicketProvider } from './hooks';

function App() {
  return (
    <div className="flex h-screen w-screen items-start justify-center sm:mt-4">
      <div className="flex min-w-[22rem] flex-col gap-y-3 rounded-lg bg-slate-100 p-4">
        <TicketProvider>
          <SectionWrapper heading={TICKET_TYPE_HEADING}>
            <TicketButtons />
          </SectionWrapper>
          <SectionWrapper heading={FARES_HEADING}>
            <TicketCountAdjustors />
          </SectionWrapper>
          <TicketSelection />
          <Summary />
        </TicketProvider>
      </div>
    </div>
  );
}

export default App;
