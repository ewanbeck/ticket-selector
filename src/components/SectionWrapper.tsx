import React, { ReactNode } from 'react';

type Props = {
  heading: string;
  children: ReactNode;
};

export default function SectionWrapper(props: Props) {
  const { heading, children } = props;
  return (
    <div>
      <h4 className="mb-1 text-lg font-medium">{heading}</h4>
      {children}
    </div>
  );
}
