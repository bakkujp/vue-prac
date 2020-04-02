<template>
  <div>
    <h1>Employee View</h1>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'EmployeeView',
    // data() {
    //   return {
    //     employee: {
    //       id: ''
    //     }
    //   }
    // },
    // created() {
    //   this.fetchData()
    // },
    // watch: {
    //   '$route': 'fetchData'
    // },
    // methods: {
    //   fetchData() {
    //     console.log(this.$router)
    //     this.employee.id =  this.$router.params.id
    //   }
    // },
  }
</script>

<style lang="scss" scoped>

</style>