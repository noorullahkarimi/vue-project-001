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
            <th scope="row">{{ body.id }}</th>
            <td>{{ body.name }}</td>
            <td>{{ body.username }}</td>
            <td>{{ body.email }}</td>
            <td>{{ body.address.city }}</td>
            <td>{{ body.phone }}</td>
            <td>{{ body.website }}</td>
            <td>{{ body.company.name }}</td>	
        </tr>
    </tbody>
    </table>
</div>

</template>
<script>
import urls from "@/assets/js/constants.js";
export default ({
    name: 'ShowTable',
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
        .get(urls.apiUsers)
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
});
</script>
