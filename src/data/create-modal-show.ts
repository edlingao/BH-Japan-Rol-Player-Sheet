import { createSignal } from 'solid-js';

export const [showingModal, setShowModal] = createSignal(false);

export const toggleModal = () => setShowModal(!showModal());

export const hideModal = () => setShowModal(false);

export const showModal = () => setShowModal(true);
 