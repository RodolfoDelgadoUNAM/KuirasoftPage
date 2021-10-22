import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalDetalles = (props) => {
  const {
    buttonLabel,
    className,
    linkPago,
    lista1,
    lista2,
    lista3,
    lista4,
    lista5,
    lista6,
    lista7,
    lista8,
    lista9,
    lista10,
    lista11,
    lista12,
    lista13,
    lista14,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Alcance</ModalHeader>
        <ModalBody>
          <ul>
            <ol>
              {lista1}
            </ol>
            <ol>
              {lista2}
            </ol>
            <ol>
              {lista3}
            </ol>
            <ol>
              {lista4}
            </ol>
            <ol>
              {lista5}
            </ol>
            <ol>
              {lista6}
            </ol>
            <ol>
              {lista7}
            </ol>
            <ol>
              {lista8}
            </ol>
            <ol>
              {lista9}
            </ol>
            <ol>
              {lista10}
            </ol>
            <ol>
              {lista11}
            </ol>
            <ol>
              {lista12}
            </ol>
            <ol>
              {lista13}
            </ol>
            <ol>
              {lista14}
            </ol>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="success" href={linkPago}>Comprar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDetalles;