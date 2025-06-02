import { createVehicle } from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const newVehicle = {
      brand: data.get("brand"),
      model: data.get("model"),
      year: Number(data.get("year")),
      horsepower: Number(data.get("horsepower"))
    };

    try {
      await createVehicle(newVehicle);
      return { success: true };
    } catch (error) {
      console.error("Fehler beim Speichern des Fahrzeugs:", error);
      return { success: false };
    }
  }
};
