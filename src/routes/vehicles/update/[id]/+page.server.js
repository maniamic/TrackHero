import db from "$lib/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const vehicle = await db.getVehicle(params.id);
  return { vehicle };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    const updated = {
      brand: data.get("brand"),
      model: data.get("model"),
      year: Number(data.get("year")),
      horsepower: Number(data.get("horsepower"))
    };

    await db.updateVehicle(params.id, updated);

    return { success: true };
  }
};