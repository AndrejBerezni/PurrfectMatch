import axios from 'axios'

export default async function getCatsList() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': import.meta.env.VITE_CAT_API_KEY,
      },
    })
    return response.data
  } catch (error: any) {
    console.error(error.message)
    return []
  }
}
