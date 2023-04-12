import React from 'react';

import { SELECTION_HEADING } from '../constants';
import { useTicketStateFromContext } from '../hooks';
import LineItems from './LineItems';
import SectionWrapper from './SectionWrapper';

export default function TicketSelection() {
  const [, isStateEmpty] = useTicketStateFromContext();

  if (isStateEmpty) {
    return null;
  } else {
    return (
      <SectionWrapper heading={SELECTION_HEADING}>
        <LineItems />
      </SectionWrapper>
    );
  }
}
