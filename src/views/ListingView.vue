<template>
  <div class="listing">
    <AddListing />
    <app-listing />
  </div>
</template>

<script>
  import AppListing from '@/components/listing/AppListing.vue';
  import AddListing from '@/components/listing/AddListing.vue';

  export default {
    components: {
      AppListing,
      AddListing
    },
  };
</script>
