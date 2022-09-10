// @refresh reload
import { Show, Suspense } from "solid-js";
import { NavMenu } from './components/nav-menu/index';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import '~/styles/main.scss';
import { logged } from './data/session';
import Login from "./routes/login";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Player Sheet</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Show when={logged()} fallback={
              <Login />
            }>
              <div class="scroll">
                <Routes>
                  <FileRoutes />
                </Routes>
                <NavMenu />
              </div>
            </Show>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
