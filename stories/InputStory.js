import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input, { InputWithIcon, MultiInput } from '../src/Input'
import Button from '../src/Button'
import Toggle from '../src/Toggle'
import ColorModeComparison from './ColorModeComparison'
import styles from './InputStory.module.scss'

storiesOf('Input', module)
  .add('Simple', () => (
    <div>
      <ColorModeComparison>
        <Input defaultValue='Built-in value' />
        <Input placeholder='Placeholder' />
        <Input defaultValue='Disabled Built-in value' disabled />
        <Input defaultValue='Read-only Built-in value' readOnly />
        <Input isError defaultValue='Error case' />
        <Input defaultValue='inplace username' inplace />
      </ColorModeComparison>
    </div>
  ))
  .add('WithIcon', () => (
    <div>
      <ColorModeComparison>
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          defaultValue='Built-in value'
        />
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          placeholder='Placeholder'
        />
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          defaultValue='Disabled Built-in value'
          disabled
        />
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          defaultValue='Read-only Built-in value'
          readOnly
        />
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          isError
          defaultValue='Error case'
        />
        <InputWithIcon
          icon='search-small'
          iconPosition='left'
          defaultValue='inplace username'
          inplace
        />
      </ColorModeComparison>
    </div>
  ))
  .add('MultiInput', () => (
    <div>
      <ColorModeComparison>
        <h5 className={styles.heading}>
          with defaultValue, placeholder and maxValues = 5:
        </h5>
        <MultiInput
          onValueAdd={action('onValueAdd')}
          onValueRemove={action('onValueRemove')}
          onInputChange={action('onInputChange')}
          maxValues={5}
          defaultValue='Built-in value'
          placeholder='Enter a word or a phrase...'
          defaultValues={['blockchain']}
        />
        <h5 className={styles.heading}>with custom value component:</h5>
        <MultiInput
          onValueAdd={action('onValueAdd')}
          onValueRemove={action('onValueRemove')}
          onInputChange={action('onInputChange')}
          defaultValues={['bitcoin']}
          placeholder='Enter a word or a phrase...'
          valueContent={text => (
            <div className={styles.content}>
              <Toggle className={styles.toggle} />
              {text}
            </div>
          )}
        />
        <h5 className={styles.heading}>with button:</h5>
        <MultiInput
          onValueAdd={action('onValueAdd')}
          onValueRemove={action('onValueRemove')}
          onInputChange={action('onInputChange')}
          className={styles.input}
          defaultValues={[
            'blockchain',
            'corona OR coronavirus OR covid-19',
            'buy OR bought OR bottom OR bottomed'
          ]}
        >
          <Button border className={styles.button}>
            +
          </Button>
        </MultiInput>
      </ColorModeComparison>
    </div>
  ))
