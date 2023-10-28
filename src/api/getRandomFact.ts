import axios from 'axios'

export default async function getRandomFact() {
  try {
    const response = await axios.get('https://meowfacts.herokuapp.com/')
    const fact = response.data.data[0]
    return fact
  } catch (error: any) {
    throw new Error(error.message)
  }
}
