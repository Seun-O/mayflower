import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import InputNumber from './index';
import InputNumberOptions from './InputNumber.knobs.options';
import InputNumberDocs from './InputNumber.md';

storiesOf('atoms/forms', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs({
    escapeHTML: false
  }))
  .add(
    'InputNumber', (() => {
      const inputTextOptionsWithKnobs = {};
      Object.getOwnPropertyNames(InputNumberOptions).forEach((key) => {
        inputTextOptionsWithKnobs[key] = InputNumberOptions[key]();
      });
      console.table(inputTextOptionsWithKnobs);
      // inputTextOptionsWithKnobs.hiddenLabel = boolean('InputNumber.blah2.hiddenLabel', false);

      // const inputTextOptionsWithKnobs = Object.assign(...Object.entries(InputNumberOptions).map(([k, v]) => {
      //   console.log(k, v());
      //   return({ [k]: v() });
      // }));
      const storyProps = {
        style: (inputTextOptionsWithKnobs.inline) ? { width: '400px' } : { width: '200px' }
      };
      if (inputTextOptionsWithKnobs.width > 0) {
        storyProps.style = { width: `${inputTextOptionsWithKnobs.width}px` };
      }
      return(
        <div {...storyProps}>
          <InputNumber {...inputTextOptionsWithKnobs} />
        </div>
      );
    }),
    {
      info: InputNumberDocs
    }
  );
