import { hamburgers } from '../data/data'
import { accompagnement } from '../data/data'
import { boisson } from '../data/data'

const useFetch = () => {
  const hamburger = hamburgers
  const accompagnements = accompagnement
  const boissons = boisson
  return { hamburger, accompagnements, boissons }
}
export default useFetch
