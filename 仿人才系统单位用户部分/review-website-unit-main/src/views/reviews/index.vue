<template>
  <div id="reviews">
    <review-table class="table-wrapper"></review-table>
  </div>
</template>

<script>
import ReviewTable from '@/views/Reviews/components/ReviewTable'
export default {
  name: 'Reviews',
  components: {
    [ReviewTable.name]: ReviewTable
  }
}
</script>

<style lang="scss" scoped>
#reviews {
  width: 100%;
  height: 100%;
  background-color: white;
  .table-wrapper {
    padding: 8px;
  }
}
</style>
