<template>
    <pre><code class="language-yaml">{{ data }}</code></pre>
</template>

<script setup>
import hljs from 'highlight.js/lib/core';
import yaml from 'highlight.js/lib/languages/yaml';
hljs.registerLanguage('yaml', yaml);

onMounted(hljs.highlightAll)

onUpdated(hljs.highlightAll)


const route = useRoute();

const { data } = useFetch("/api/yaml", {
    query: {
        name: route.query.name,
        namespace: route.query.namespace,
    },
});
</script>