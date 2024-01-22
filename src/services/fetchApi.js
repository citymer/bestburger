import { hamburger } from '../data/data'
import { accompagnement } from '../data/data'
import { boisson } from '../data/data'

const useFetch = () => {
  const hamburgers = hamburger
  const accompagnements = accompagnement
  const boissons = boisson
  return { hamburgers, accompagnements, boissons }
}
export default useFetch
