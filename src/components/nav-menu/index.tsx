import { Link, useLocation, } from "@solidjs/router";
import { createEffect, createMemo, For } from "solid-js";
import { menuItems } from "~/assets/menu-items";
import { IconElement } from "./icon";

import './_nav.scss';

export function NavMenu() {

  const location = useLocation();
  const pathname = createMemo(() => location.pathname);
  
  const isSelectedRoute = (route: string): boolean => 
    route === pathname() || location.pathname === route;

  return (
    <nav class="nav-menu">
      <For each={menuItems}>{({icon, route}) =>
        <Link 
          class={`menu-option ${isSelectedRoute(route) ? 'selected' : ''}`}
          href={route}
        >
          <IconElement iconOption={icon}/>         
        </Link>
      }</For>
    </nav>
  )
}