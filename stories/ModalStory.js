import React from "react";
import { storiesOf } from "@storybook/react";
import ColorModeComparison from './ColorModeComparison'
import Modal, { ModalContent } from "../src/Modal";
import Button from "../src/Button";

storiesOf("Modal", module)
  .add("default", () => (
    <ColorModeComparison>
      <Modal
        trigger={<Button>Show</Button>}
        title="Lorem Ipsum"
      >
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
        </ModalContent>
      </Modal>
    </ColorModeComparison>
  ))
  .add('without close icon', () => (
    <ColorModeComparison>
      <Modal
        trigger={<Button>Show</Button>}
        title="Lorem Ipsum"
        hideCloseIcon
      >
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
        </ModalContent>
      </Modal>
    </ColorModeComparison>
  ))
  .add('with custom labels and titles', () => (
    <ColorModeComparison>
      <Modal
        trigger={<Button>Show</Button>}
        title="Lorem Ipsum"
        onConfirmClick={(e, closeModal) => {
          alert('You\'ve clicked on Confirm button\n Model will be closed when you click okay!');
          closeModal();
        }}
        confirmLabel="Say confirm"
        cancelLabel="Get Cancel"
      >
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
        </ModalContent>
      </Modal>
    </ColorModeComparison>
  ));
