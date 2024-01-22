export type Song = {
  id: string;
  name: string;
  lyrics: SongSection[];
};

export type SongSection = {
  name: string;
  lines: string[];
};
