//TODO: use DB
import { songs } from '$lib/server/db';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    songs,
  };
}
