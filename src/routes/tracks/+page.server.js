import { getTracks } from "$lib/db.js";

export async function load() {
  return {
    tracks: await getTracks()
  };
}