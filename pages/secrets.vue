<template>
  <div class="pt-3">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name Space</th>
          <th scope="col">Secret Name</th>
          <th scope="col">Type</th>
          <th scope="col">Data</th>
          <th scope="col">Age</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data?.items" class="position-relative">
          <td>{{ item.metadata.namespace }}</td>
          <td>{{ item.metadata.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.data ? Object.keys(item.data).length : 0 }}</td>
          <td>{{ fromNow(item.metadata.creationTimestamp) }}</td>
          <td>
            <NuxtLink :to="{ path: 'yaml', query: { name: item.metadata.name, namespace: item.metadata.namespace } }"
              class="stretched-link">
              detail
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { DateTime } from "luxon";

const fromNow = (datetime) => {
  return DateTime.fromISO(datetime).toRelative({ locale: "en" });
};

const { data, pending, error, refresh } = useFetch("/api/secrets");
</script>
