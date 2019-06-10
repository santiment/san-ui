import React from 'react'
import { storiesOf } from '@storybook/react'
import styles from './GridWrap.module.scss'
import Panel from '../src/Panel/Panel'

const Content = () => (
  <>
    <Panel padding>
      Quibusdam, eos esse dolorum facere voluptatem eius, dolore quas totam
      aspernatur obcaecati harum? Nihil eligendi eos minus odit minima earum
      incidunt rem fugit reprehenderit, molestiae possimus eveniet itaque
      laudantium excepturi.
    </Panel>
    <Panel padding>
      Ducimus quibusdam inventore delectus doloribus dignissimos. Dignissimos
      quos officia minus exercitationem perspiciatis harum iusto molestiae
      deleniti quod sunt amet recusandae autem, neque doloremque ad alias eaque
      consequuntur nesciunt quis eius!
    </Panel>
    <Panel padding>
      Cumque aspernatur ex ipsum dolorum eius, tempore omnis minus sequi
      architecto totam sunt maxime nemo, ab repellendus. Aut voluptatem saepe
      voluptatibus nisi ipsum. Debitis corporis culpa ipsa error nemo doloribus.
    </Panel>
    <Panel padding>
      Consequatur dolore, architecto quos saepe consequuntur libero minus totam?
      Enim optio provident commodi corporis officiis, sunt maiores? Cupiditate
      consequuntur, cumque natus corporis velit sunt ad magni aliquid facere
      deleniti molestiae.
    </Panel>
    <Panel padding>
      Voluptatibus similique modi voluptatum voluptatem quo quod minima ducimus
      facere, sequi libero accusamus nisi nobis? Minima error tempore quo esse
      quod odit, deleniti labore nulla ullam velit nemo neque sint!
    </Panel>
  </>
)

storiesOf('GridWrap mixin', module)
  .add('2 columns', () => (
    <div className={styles.two}>
      <Content />
    </div>
  ))
  .add('3 columns', () => (
    <div className={styles.three}>
      <Content />
    </div>
  ))
  .add('4 columns', () => (
    <div className={styles.four}>
      <Content />
    </div>
  ))
