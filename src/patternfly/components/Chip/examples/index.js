import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipExampleRaw from '!raw!./chip-example.hbs';
import chipExample from './chip-example.hbs';

import ChipExampleDoc from '../docs/chip.md';
import docs from '../docs/code.md';
import '../chip.scss';

export const Docs = docs;

export default () => {
  const ChipExample = chipExample();
  const headingText = 'Chip';

  return (
    <Documentation heading={headingText}>
      <Example heading="Chip" handlebars={ChipExampleRaw} className="is-light-preview" docs={ChipExampleDoc}>
        {ChipExample}
      </Example>
    </Documentation>
  );
};
