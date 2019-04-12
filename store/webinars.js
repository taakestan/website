const collectionName = 'webinars';

export const state = () => ({all: []});

export const mutations = {
  setItems(state, item) {
    state.all = item;
  },
};

export const actions = {
  async prepare({commit}) {
    const data = [];
    const response = await this.$fireStore.collection(collectionName).get();
    await response.forEach(doc => data.push({slug: doc.id, ...doc.data()}));
    commit('setItems', data);
  },
};
