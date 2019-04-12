const collectionName = 'providers';

export const state = () => ({all: Object});

export const mutations = {
  setItems(state, item) {
    state.all = item;
  },
};

export const actions = {
  async prepare(state) {
    const data = Object();
    const response = await this.$fireStore.collection(collectionName).get();
    await response.forEach(doc => data[doc.id] = doc.data());
    state.commit('setItems', data);
  },
};
