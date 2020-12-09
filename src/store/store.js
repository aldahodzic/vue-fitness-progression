import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './modules/exercises.js'
import * as workouts from './modules/workouts.js'
import * as activeExercises from './modules/active-exercises.js'
import * as activeWorkout from './modules/active-workout.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async initApp({ dispatch }) {
      try {
        const promises = [dispatch('exercises/load'), dispatch('workouts/load')]
        await Promise.all(promises)
      } catch (error) {
        console.error(new Error('Error loading exercises and workouts.'))
      }
    },
  },
  getters: {},
  modules: {
    exercises,
    workouts,
    activeExercises,
    activeWorkout,
  },
})
