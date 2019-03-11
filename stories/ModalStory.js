import React from "react";
import { storiesOf } from "@storybook/react";
import Modal, { ModalContent, ModalActions } from "../src/Modal";
import Button from "../src/Button";

storiesOf("Modal", module)
  .add("default", () => (
    <Modal
      trigger={<Button>Show</Button>}
      title="Lorem Ipsum"
    >
      <ModalContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
      </ModalContent>
      <ModalActions>
        <Button
          accent="negative"
          onClick={() => alert("you pressed Cancel")}
        >
          Cancel
        </Button>
        <Button
          variant="fill"
          accent="positive"
          onClick={() => alert("you pressed OK")}
        >
          OK
        </Button>
      </ModalActions>
    </Modal>
  ))
  .add("without close icon", () => (
    <Modal
      trigger={<Button>Show</Button>}
      title="Lorem Ipsum"
      hideCloseIcon
    >
      <ModalContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat? A quos ab pariatur fugiat blanditiis, esse eum odit eligendi exercitationem voluptatem quod maiores nesciunt sapiente modi dolorem nisi accusamus architecto eius ipsa facere soluta? Magni nisi fuga voluptate, velit voluptas, eaque nobis cum deserunt eligendi reiciendis unde sit nesciunt.
      </ModalContent>
      <ModalActions>
        <Button
          accent="negative"
          onClick={() => alert("you pressed Cancel")}
        >
          Cancel
        </Button>
        <Button
          variant="fill"
          accent="positive"
          onClick={() => alert("you pressed OK")}
        >
          OK
        </Button>
      </ModalActions>
    </Modal>
  ));
