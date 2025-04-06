export default function handler(req, res) {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;

    console.log(`Received Latitude: ${latitude}, Longitude: ${longitude}`);

    // You can handle the data as needed here (e.g., save it to a database)

    res.status(200).json({ message: 'Location received successfully', latitude, longitude });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
