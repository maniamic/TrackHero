import { getVehicles } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const vehicles = await getVehicles();

  // Sortieren (absteigend)
  const sorted = vehicles.sort((a, b) => b.horsepower - a.horsepower);

  const topVehicles = sorted.slice(0, 3);
  const otherVehicles = sorted.slice(3);

  return {
    topVehicles,
    otherVehicles
  };
}