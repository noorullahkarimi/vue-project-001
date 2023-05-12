<template>
    <div>
        <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col" v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(body, index) in bodys" :key="index">
                <th scope="row">{{ body.userId }}</th>
                <td>{{ body.id }}</td>
                <td>{{ body.title }}</td>
                <td>{{ body.body }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import urls from "@/assets/js/constants.js";

export default ({
    data(){
    return{
        headers: '',
        bodys: '',
      errorMessage: null,
      isLoading: false
    }
    },
    mounted(){
    this.getData();
  },
  methods:{
    getData: function() {
      const axios = require("axios");
      this.isLoading = true;
      axios
        .get(urls.apiPosts)
        .then((response) => {
          this.isLoading = false;
          if (response.status == 200) {
            const data = response.data;
            if (data.length > 0) {
              this.headers = Object.keys(data[0]);
            }
            this.bodys = data;
          } else {
            this.errorMessage = "Error loading data";
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.errorMessage = "Error loading data";
        });
    }
  }
})
</script>
    