import {
  getTrack,
  getDrivers,
  getVehicles,
  createLapTime
} from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const track = await getTrack(params.id);
  const drivers = await getDrivers();
  const vehicles = await getVehicles();

  return {
    track,
    drivers,
    vehicles
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params }) => {
    const form = await request.formData();

    const newLap = {
      track_id: params.id,
      driver_id: form.get('driver_id'),
      vehicle_id: form.get('vehicle_id'),
      time_seconds: parseFloat(form.get('time_seconds')),
    };

    
try {
      await createLapTime(newLap);
      return { success: true };
    } catch (error) {
      console.error("Fehler beim Einfügen der Zeit:", error);
      return { success: false };
    }
  }
};