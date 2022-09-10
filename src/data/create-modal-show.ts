import { createSignal, createEffect } from 'solid-js';

export const [showingModal, setShowModal] = createSignal(false);
export const [editingMode, setEditingMode] = createSignal(false);

export const [primaryValue, setPrimaryValue] = createSignal("");
export const [secondaryValue, setSecondaryValue] = createSignal("");
export const [itemID, setItemID] = createSignal("");

export const toggleModal = () => setShowModal(!showModal());
export const hideModal = () => setShowModal(false);
export const showModal = () => setShowModal(true);

export const enableEditMode = () => setEditingMode(true);
export const disableEditMode = () => setEditingMode(false);
