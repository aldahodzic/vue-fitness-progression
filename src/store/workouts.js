import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters, activityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const entity = ENTITY.workouts // Entity type for curried functions

const defaultState = () => {
  return { [entity]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), entity),
}

export const actions = {
  ...entityActions(entity),
}

export const getters = {
  ...entityGetters(entity),
  ...activityGetters(entity),
}
