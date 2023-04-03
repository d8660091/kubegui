<template>
  <div class="pt-3">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name Space</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data?.resources" class="position-relative">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = useFetch("/api/api-resources");
console.log(data);
</script>
