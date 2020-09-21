import config from '@/config'

/**
 * @name Movies
 * @description class which contains all the CRUD method to communicate with
 * the API
 *
 * @export
 * @class Movies
 */
export default class Movies {
  /**
   * @name fetchMovies
   * @description GET method which retrieve all the movies from the API endpoint
   *
   * @static
   * @param { String } query term to use for fetching movies from the API
   * endpoint
   * @return { Array } will an array of movies objects.
   * @memberof Movies
   */
  static async fetchMovies (query) {
    try {
      const req = await fetch(`${config.API_URI}/?s=${query}&apikey=${config.API_KEY}`)
      const payload = req.json()
      return payload
    } catch (error) {
      throw new Error(error)
    }
  }
}
