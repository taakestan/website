export const state = () => ({all: []});

export const mutations = {
  setItems(state, items) {
    state.all = items;
  },
  addItem(state, item) {
    state.all[item.id] = item.item;
  },
  updateItem(state, item) {
    state.all[item.id] = item;
  },
  deleteItem(state, id) {
    state.all = state.all.filter(item => item.id !== id);
  },
};

export const actions = {
  async prepare({commit}) {
    const {data} = await this.$axios.get('webinars2.json');
    commit('setItems', data);
  },
  addItem(state, item) {
    return this.$axios.$post('webinars2.json', item)
      .then(data => state.commit("addItem", {item, id: data.name}))
  },
  updateItem(state, item) {
    return this.$axios.$patch(`webinars2/${item.id}.json`, item)
      .then(data => state.commit("updateItem", item))
  },
  deleteItem(state, id) {
    return this.$axios.$delete(`webinars2/${id}.json`)
      .then(() => state.commit('deleteItem', id))
  },
};
