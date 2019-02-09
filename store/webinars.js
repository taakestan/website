export const state = () => ({
  all: []
});

export const mutations = {
  async setWebinars(state, items) {
    state.all = items;
  }
};

export const actions = {
  async loadWebinars({ commit, state }) {
    if (!state.all.length) {
      const { data } = await this.$axios.get('webinars.json');
      const array = [];
      for (let index in data)
        array.push({
          id: index,
          ...data[index]
        });
      commit('setWebinars', array)
    }
  }
};
