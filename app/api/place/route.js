import axios from 'axios';
export const GET = async (request, response) => {
    
    try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
          {
            params: {
              input: '카이스트탐앤탐스', // Replace with your desired input
              inputtype: 'textquery',
              fields: 'formatted_address,name,rating,opening_hours,geometry',
              key: 'AIzaSyB4NTiapTJ8zZtWxrWb2W8QUQsAL1P5Hfw', // Replace with your Google Maps API key
            },
          }
        );
        const data = response.data;
        return new Response(JSON.stringify(data), {status: 200})
    } catch (error) {
        return new Response("no", {status: 500})
    }
}