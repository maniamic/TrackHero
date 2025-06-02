import db from "$lib/db.js";

export async function load() {
  const drivers = await db.getDrivers();
  return { drivers };
}