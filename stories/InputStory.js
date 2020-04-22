import React from 'react'
import { storiesOf } from '@storybook/react'
import Input, { InputWithIcon, MultiInput } from '../src/Input'
import Button from '../src/Button'
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
        <MultiInput defaultValue='Built-in value' values={['blockchain']} />
        <MultiInput
          placeholder='Enter a word or a phrase...'
          values={[
            'blockchain',
            'corona OR coronavirus OR covid-19',
            'buy OR bought OR bottom OR bottomed'
          ]}
        />
        <MultiInput placeholder='Enter a word or a phrase...' />
        <MultiInput placeholder='Enter a word or a phrase...' maxValues={5} />
        <MultiInput className={styles.input} values={['blockchain']}>
          <Button border className={styles.button}>
            +
          </Button>
        </MultiInput>
      </ColorModeComparison>
    </div>
  ))
