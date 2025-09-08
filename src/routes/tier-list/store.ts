import { writable } from 'svelte/store';
import type { Item, Row } from './types';

export const rows = writable<Row[]>([]);
export const startItems = writable<Item[]>([]);

export const flipMs = writable<number>(100);
export const defaultRowsAdded = writable<boolean>(false);