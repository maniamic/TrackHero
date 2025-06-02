import db from "$lib/db.js";
import { ObjectId } from "mongodb";

export async function load({ params }) {
  const trackId = params.id;

  const track = await db.getTrack(trackId);
  const lapTimes = await db.getTopLapTimesForTrack(trackId, 3);

  const enriched = await Promise.all(
    lapTimes.map(async (lap) => {
      const driver = await db.getDriver(lap.driver_id);
      const vehicle = await db.getVehicle(lap.vehicle_id);
      return {
        ...lap,
        driver,
        vehicle
      };
    })
  );

  return {
    track,
    topTimes: enriched
  };
}
