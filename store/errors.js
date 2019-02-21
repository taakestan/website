export const state = () => ({all: []});

export const mutations = {
  clearItems(state) {
    state.all = [];
  },
  setItems(state, item) {
    state.all = item;
  },
};

export const actions = {
  clear(state) {
    state.commit('clearItems');
  },
  record(state, errors) {
    state.commit('setItems', errors);
  },
};
