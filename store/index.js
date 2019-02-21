export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('webinars/prepare');
    // await dispatch('providers/prepare');
  }
};
