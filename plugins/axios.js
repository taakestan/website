export default function ({ $axios, redirect, app, store }) {
  $axios.onResponse(response => {
    if (response.data.data.message) app.$toast.success(response.data.data.message);
  });

  $axios.onError(error => {
    app.$toast.error(error.response.data.message);
  });
}
