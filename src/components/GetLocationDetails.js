
export async function OpenCageLoc(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
    );
    const data = await response.json();
    return (data.results[0].components.postcode); // Return the postcode from the response

  } catch (err) {
    console.log('Error fetching location:', err);
    return false
  }
}