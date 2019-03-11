import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../src/Modal";
import Button from "../src/Button";

storiesOf("Modal", module)
  .add("default", () => (
    <Modal
      trigger={<Button>Show</Button>}
      title="Lorem Ipsum"
    >
    </Modal>
  ))
  .add("without close icon", () => (
    <Modal
      trigger={<Button>Show</Button>}
      title="Lorem Ipsum"
      hideCloseIcon
    >
    </Modal>
  ));
