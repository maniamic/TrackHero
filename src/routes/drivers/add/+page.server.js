import { createDriver } from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const newDriver = {
      name: data.get("name"),
      birth_year: Number(data.get("birth_year")),
      nationality: data.get("nationality")
    };

    try {
      await createDriver(newDriver);
      return { success: true };
    } catch (error) {
      console.error("Fehler beim Hinzufügen:", error);
      return { success: false };
    }
  }
};