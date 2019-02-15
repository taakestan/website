export const state = () => ({
  all: []
});

export const mutations = {
  async setItems(state, items) {
    state.all = items;
  }
};

export const actions = {
  async prepare({commit}) {
    const {data} = await this.$axios.get('webinars.json');
    commit('setItems', data);
  }
};
