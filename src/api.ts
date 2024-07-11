import { eventHandler } from 'vinxi/http';

export default eventHandler(async (event) => {
  const method = event.method;
  const path = event.path;

  if (method === 'GET' && path === '/posts') {
    const res = await fetch('https://www.learnwithjason.dev/api/v2/episodes');

    if (!res.ok) {
      return { error: true };
    }

    const data = await res.json();

    return data;
  }

  return { test: 'on' };
});
