/* Build-time prerender: render <App /> to static HTML and inline it into
 * dist/index.html so crawlers and link-preview bots see real content.
 * The client bundle then hydrates the same markup (see src/main.jsx). */
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const serverDir = path.join(root, 'dist-server');
const htmlFile = path.join(root, 'dist', 'index.html');
const placeholder = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
const html = await readFile(htmlFile, 'utf8');
if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}
await writeFile(htmlFile, html.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(serverDir, { recursive: true, force: true });
console.log('prerender: static HTML written to dist/index.html');
