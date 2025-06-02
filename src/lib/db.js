import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb+srv://admin:2z8sS4mkbrYeonoi@project1.2tlrn.mongodb.net/?retryWrites=true&w=majority&appName=Project1";
const client = new MongoClient(uri);

await client.connect();
const db = client.db("TrackHeroDB");

// TRACKS

export async function getTracks() {
  const collection = db.collection("tracks");
  const tracks = await collection.find({}).toArray();
  return tracks.map((t) => ({ ...t, _id: t._id.toString() }));
}

export async function getTrack(id) {
  const collection = db.collection("tracks");
  const track = await collection.findOne({ _id: new ObjectId(id) });
  if (track) track._id = track._id.toString();
  return track;
}

// DRIVERS

export async function getDrivers() {
  const collection = db.collection("drivers");
  const drivers = await collection.find({}).toArray();
  return drivers.map((d) => ({ ...d, _id: d._id.toString() }));
}

export async function getDriver(id) {
  const collection = db.collection("drivers");
  const driver = await collection.findOne({ _id: new ObjectId(id) });
  if (driver) driver._id = driver._id.toString();
  return driver;
}

export async function createDriver(driver) {
  const collection = db.collection("drivers");
  const result = await collection.insertOne(driver);
  return result.insertedId.toString();
}

// VEHICLES

export async function getVehicles() {
  const collection = db.collection("vehicles");
  const vehicles = await collection.find({}).toArray();
  return vehicles.map((v) => ({ ...v, _id: v._id.toString() }));
}

export async function getVehicle(id) {
  const collection = db.collection("vehicles");
  const vehicle = await collection.findOne({ _id: new ObjectId(id) });
  if (vehicle) vehicle._id = vehicle._id.toString();
  return vehicle;
}

export async function createVehicle(vehicle) {
  const collection = db.collection("vehicles");
  const result = await collection.insertOne(vehicle);
  console.log("Inserted vehicle:", result.insertedId);
  return result.insertedId.toString();
}


export async function updateVehicle(id, updateData) {
  const collection = db.collection("vehicles");
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
}
// LAPTIMES

export async function getTopLapTimesForTrack(trackId, limit = 3) {
  const collection = db.collection("laptimes");
  const lapTimes = await collection
    .find({ track_id: new ObjectId(trackId) })     
    .sort({ time_seconds: 1 })
    .limit(limit)
    .toArray();

  return lapTimes.map((lt) => ({ ...lt, 
    _id: lt._id.toString(), 
    driver_id: lt.driver_id.toString(), 
    track_id: lt.track_id.toString(), 
    vehicle_id: lt.vehicle_id.toString() }));
}

export async function createLapTime(lapTime) {
  const collection = db.collection("laptimes");

  lapTime.track_id = new ObjectId(lapTime.track_id);
  lapTime.driver_id = new ObjectId(lapTime.driver_id);
  lapTime.vehicle_id = new ObjectId(lapTime.vehicle_id);
  lapTime.date = new Date();

  const result = await collection.insertOne(lapTime);
  return result.insertedId.toString();
}

// EXPORT DEFAULT

export default {
  getTracks,
  getTrack,
  getDrivers,
  getDriver,
  createDriver,
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  getTopLapTimesForTrack,
  createLapTime
};