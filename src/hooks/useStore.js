import { reactive, computed } from 'vue'
import Movies from '@/services/movies'

/**
 * @name useStore
 * @description hooks which serve as a local store for the movies finder
 * app
 *
 * @export
 * @return { Object }
 */
export default function useStore () {
  // --------------------------------
  // STORE STATES
  // --------------------------------
  const state = reactive({
    movies: [],
    total: 0,
    loaded: false,
    hasError: false,
    error: ''
  })
  // --------------------------------
  // STORE MUTATIONS
  // --------------------------------

  /**
   * @name setMovies
   * @description This method are the representation of the Vuex mutations.
   * this method will do a mutations which will set a new state value for movies
   * state
   *
   * @param { Object } movies
   */
  function setMovies (movies) {
    state.movies = movies
  }

  /**
   * @name setMovies
   * @description This method are the representation of the Vuex mutations.
   * this method will do a mutations which will set a new state value for total
   * state
   *
   * @param { Number } total the total number of movies which come from the api
   * response
   */
  function setTotal (total) {
    state.total = total
  }

  /**
   * @name setError
   * @description This method are the representation of the Vuex mutations.
   * this method will do a mutations which will set a new state value for error
   * state
   *
   * @param { String } message the error message from the api response
   */
  function setError (message) {
    state.error = message
  }

  // --------------------------------
  // STORE ACTIONS
  // --------------------------------

  /**
   * @name loadData
   * @description Thi method is the representation of the Vuex actions and is
   * responsible to do a mutation for the state.
   *
   * @param { String } query
   * @return { Array } Array of movies object
   */
  async function loadData (query) {
    state.loaded = !state.loaded
    try {
      const movie = await Movies.fetchMovies(query)
      setMovies(movie.Search)
      setTotal(movie.totalResults)
      if (movie.Response === 'False') {
        setError(movie.Error)
        state.hasError = true
      }
    } catch (error) {
      setError(error)
      state.hasError = true
    } finally {
      state.loaded = false
    }
  }

  // --------------------------------
  // STORE GETTERS
  // --------------------------------
  const getMovies = computed(() => state.movies)
  const getTotal = computed(() => state.total)
  const getError = computed(() => state.error)
  const isLoading = computed(() => state.loaded)
  const hasError = computed(() => state.hasError)

  return {
    movies: getMovies,
    totalResult: getTotal,
    error: hasError,
    message: getError,
    loading: isLoading,
    loadData
  }
}