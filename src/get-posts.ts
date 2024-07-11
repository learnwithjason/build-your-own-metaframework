'use server';

export async function getPosts() {
  const res = await fetch('https://www.learnwithjason.dev/api/v2/episodes');

  if (!res.ok) {
    return { error: true };
  }

  const data = await res.json();

  console.log('server!');

  return data;
}
