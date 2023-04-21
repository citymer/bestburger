import { hamburgers } from '../data/data'
import { accompagnement } from '../data/data'

const useFetch = () => {
  const hamburger = hamburgers
  const accompagnements = accompagnement
  return { hamburger, accompagnements }
}
export default useFetch
