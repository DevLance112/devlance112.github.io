import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import { routes } from './App.tsx';

const handler = createStaticHandler(routes);

/** Render the same route tree used by the browser, including the complete article body. */
export async function render(url: string): Promise<string> {
  const context = await handler.query(new Request(new URL(url, 'https://devlance112.github.io')));
  if (context instanceof Response) {
    throw new Error(`Unexpected response when prerendering ${url}: ${context.status}`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
