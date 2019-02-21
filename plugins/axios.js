export default function ({ $axios, redirect, app, store }) {
  $axios.onResponse(response => {
    if (response.status === 201) store.dispatch('errors/clear');
    if (response.status === 204) app.$toast.success('حذف با موفقیت انجام شد.');
    if (response.data.message) app.$toast.success(response.data.message);
  });

  $axios.onError(error => {
    app.$toast.error(error.response.data.message);
    if (error.response.status === 422)
      store.dispatch('errors/record', error.response.data.errors)
  });
}
