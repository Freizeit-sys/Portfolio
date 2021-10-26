export const state = () => ({
  form: {}
})

export const actions = {
  // action to setup form data
  // you can also do an api call as well
  init({ commit }) {
    const data = {
      name: '',
      email: '',
			message: '',
    }

    // add a commit mutuation for changing the state
    commit('setFormData', data)
  }
}

export const mutations = {
  // mutation to change the state
  setFormData(state, data) {
    state.form = data
  }
}
