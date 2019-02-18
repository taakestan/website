export const state = () => ({all: []});

export const mutations = {
  setItems(state, items) {
    state.all = items;
  },
  createItem(state, item) {
    state.all[item.id] = item.item;
  },
  updateItem(state, item) {
    state.all[item.id] = item;
  },
  deleteItem(state, id) {
    delete state.all[id];
  },
};

export const actions = {
  async prepare({commit}) {
    const {data} = await this.$axios.get('providers.json');
    commit('setItems', data);
  },
  createItem(vuexContext, item) {
    return this.$axios.$post('providers.json', item)
      .then(data => vuexContext.commit("createItem", {item, id: data.name}))
      .catch(error => console.error(error));
  },
  updateItem(state, item) {
    return this.$axios.$patch(`providers/${item.id}.json`, item)
      .then(() => state.commit("updateItem", item))
  },
  deleteItem(state, id) {
    return this.$axios.$delete(`providers/${id}.json`)
      .then(() => state.commit('deleteItem', id))
  },
};
