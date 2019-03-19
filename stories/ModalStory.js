import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from '../src/Modal'
import Button from '../src/Button'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal trigger={<Button>Show</Button>} title='Lorem Ipsum'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A
      quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem
      voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus
      architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit
      voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
    </Modal>
  ))
  .add('without close icon', () => (
    <Modal trigger={<Button>Show</Button>} title='Lorem Ipsum' hideCloseIcon>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A
      quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem
      voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus
      architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit
      voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
    </Modal>
  ))
  .add('without actions', () => (
    <Modal
      trigger={<Button>Show</Button>}
      showDefaultActions={false}
      title='Lorem Ipsum'
      hideCloseIcon
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A
      quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem
      voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus
      architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit
      voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
    </Modal>
  ))
  .add('with custom logic', () => (
    <Modal
      trigger={<Button>Show</Button>}
      showDefaultActions={false}
      title='Lorem Ipsum'
      hideCloseIcon
    >
      {({ closeModal, onConfirmClick }) => (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi
          exercitationem
          <br />
          <br />
          <Button variant={'fill'} border accent={'grey'} onClick={closeModal}>
            Extended Close
          </Button>{' '}
          <Button variant={'fill'} accent={'positive'} onClick={onConfirmClick}>
            Extended Confirm
          </Button>
        </div>
      )}
    </Modal>
  ))
  .add('with custom labels and titles', () => (
    <Modal
      trigger={<Button>Show</Button>}
      title='Lorem Ipsum'
      onConfirmClick={closeModal => {
        alert(
          "You've clicked on Confirm button\n Model will be closed when you click okay!"
        )
        closeModal()
      }}
      confirmLabel='Say confirm'
      cancelLabel='Get Cancel'
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A
      quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem
      voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus
      architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit
      voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
    </Modal>
  ))
