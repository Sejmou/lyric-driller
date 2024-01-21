//TODO: use DB

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    songs: ['In The End', 'Numb', "What I've Done"],
  };
}
