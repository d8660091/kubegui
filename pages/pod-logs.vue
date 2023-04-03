<template>
  <div class="pt-2 ps-2">
    <h3>{{ route.query.namespace }}: {{ route.query.name }} logs</h3>
  </div>
  <ul class="nav nav-tabs mt-4 mb-2">
    <li class="nav-item" v-for="c in pod?.spec?.containers?.map((c) => c.name)">
      <NuxtLink
        class="nav-link"
        aria-current="page"
        :class="{ active: c === route.query.container }"
        :href="`/pod-logs?name=${route.query.name}&namespace=${route.query.namespace}&container=${c}`"
        >{{ c }}</NuxtLink
      >
    </li>
  </ul>
  <div
    class="form-check form-switch float-end"
    @click="handlePreviousClick"
    v-if="hasPrevious(route.query.container)"
  >
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="isPrevious"
      :checked="route.query['is-previous'] == 'true'"
    />
    <label class="form-check-label" for="isPrevious">Previous</label>
  </div>
  <div class="logs ps-2">
    <client-only>
      <highlightjs
        language="plaintext"
        :autodetect="false"
        :code="logs"
        v-if="logs"
      ></highlightjs>
    </client-only>
  </div>
</template>

<script setup>
const route = useRoute();
const name = ref(route.query.name);
const container = ref(route.query.container);
const isPrevious = ref(route.query["is-previous"]);

const { data: pod } = useFetch("/api/pod", {
  query: {
    name: name,
    namespace: route.query.namespace,
  },
});

let { data: logs } = useFetch("/api/pod-logs", {
  query: {
    name: route.query.name,
    namespace: route.query.namespace,
    container: container,
    "is-previous": isPrevious || "false",
  },
});

watch(useRoute(), (route) => {
  name.value = route.query.name;
  container.value = route.query.container;
  isPrevious.value = route.query["is-previous"];
});

const hasPrevious = (container) => {
  return (
    pod.value?.status.containerStatuses.find((s) => s.name === container)
      ?.restartCount > 0
  );
};

const handlePreviousClick = () => {
  const query = useRoute().query;
  navigateTo({
    path: "/pod-logs",
    query: {
      ...query,
      "is-previous": route.query["is-previous"] == "true" ? "false" : "true",
    },
  });
};
</script>

<style>
.logs {
  white-space: pre-line;
}
</style>
