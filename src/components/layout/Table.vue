<template>
  <v-data-table
    :headers="header"
    :items="body"
    :items-per-page="5"
    class="elevation-1"
    ></v-data-table>
   <p>kk</p>
</template>
<script>
export default {
  props:['headers','body'],
    data () {
      return {
        header: [],
        body: [],
      }
    },
    mounted(){
      this.setData();
    },
    methods:{
      setData:function(){
        console.log(this.headers);
        console.log(this.body);
        // this.header = Object.keys(this.datas.data[0]);
        // console.log(this.header);
        // this.body = this.body;  
      }
    }
  }
</script>
<style scoped>

</style>