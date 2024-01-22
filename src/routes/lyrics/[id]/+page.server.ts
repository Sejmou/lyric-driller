import { songs } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const song = songs.find(song => song.id === params.id);
  if (!song) {
    return redirect(302, '/lyrics');
  }
  return {
    song,
  };
}
