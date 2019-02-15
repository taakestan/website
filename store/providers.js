export const state = () => ({
  all: []
});

export const mutations = {
  setItems(state, items) {
    state.all = items;
  },
  addItem(state, item) {
    state.all[item.id] = item.item;
  }
};

export const actions = {
  async prepare({commit}) {
    const {data} = await this.$axios.get('providers.json');
    commit('setItems', data);
  },
  addItem(vuexContext, item) {
    return this.$axios.$post('providers.json', item)
      .then(data => vuexContext.commit("addItem", {item, id: data.name}))
      .catch(error => console.error(error));
  },
};
