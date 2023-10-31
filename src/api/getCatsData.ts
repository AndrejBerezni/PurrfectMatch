import axios from 'axios'

export const catsListUrl = 'https://api.thecatapi.com/v1/breeds'
export const randomImagesUrl =
  'https://api.thecatapi.com/v1/images/search?limit=10'

export default async function getCatsData(url: string) {
  try {
    const response = await axios.get(url, {
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
