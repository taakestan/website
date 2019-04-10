<template>
  <card
          :title="webinar.title" :provider="providerName(webinar.provider_id)"
          :image-path="webinar.image" :href="href">
    {{ webinar.description }}
  </card>
</template>

<script>
  import Card from "./Card";
  import {mapState} from 'vuex';

  export default {
    name: "WebinarCard",
    props: {
      webinar: {
        required: true
      },
      href: {
        type: String,
        required: true
      }
    },
    components: {Card},
    computed: mapState(['providers']),
    methods: {
      providerName(providerID) {
        const provider = this.providers.all.find(item => item.id == providerID);
        return provider.first_name + ' ' + provider.last_name;
      }
    }
  }
</script>
