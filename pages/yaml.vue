<template>
  <client-only>
    <div v-if="!pending">
      <highlightjs language="yaml" :code="code"></highlightjs>
    </div>
  </client-only>
</template>

<script setup>
const route = useRoute();

const { data: code, pending } = useFetch("/api/yaml", {
  query: {
    name: route.query.name,
    namespace: route.query.namespace,
  },
});
</script>
