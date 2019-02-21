const baseURL = 'api/providers';

export const state = () => ({all: []});

export const mutations = {
  setItems(state, item) {
    state.all = item;
  },
  createItem(state, item) {
    state.all.push(item);
  },
  updateItem(state, item) {
    const index = state.all.findIndex(value => value.id === item.id);
    state.all[index] = item;
  },
  deleteItem(state, id) {
    state.all = state.all.filter(item => item.id !== id);
  },
};

export const actions = {
  async prepare(state) {
    const {data} = await this.$axios.$get(baseURL);
    state.commit('setItems', data);
  },
  createItem(state, item) {
    return this.$axios.$post(baseURL, item)
      .then(response => state.commit("createItem", response.data));
  },
  updateItem(state, item) {
    return this.$axios.$put(`${baseURL}/${item.id}`, item)
      .then(() => state.commit("updateItem", item));
  },
  deleteItem(state, id) {
    return this.$axios.$delete(`${baseURL}/${id}`)
      .then(() => state.commit('deleteItem', id))
  },
};
