import { createSignal } from 'solid-js';


export const [session, setSession] = createSignal(null);

export const logged = () => session() != null;

export const login = (session: string) => 
  setSession(session);

