<template>
    <div class="pt-3">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name Space</th>
                    <th scope="col">Pod Name</th>
                    <th scope="col">Ready</th>
                    <th scope="col">Status</th>
                    <th scope="col">Restarts</th>
                    <th scope="col">Log Link</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data?.items" class="position-relative">
                    <td>{{ item.metadata.namespace }}</td>
                    <td>{{ item.metadata.name }}</td>
                    <td>{{ item.status.containerStatuses.length }}/{{ item.status.containerStatuses.filter(s =>
                        s.ready === true).length }}</td>
                    <td>{{ Object.keys(item.status.containerStatuses[0].state)[0] }}</td>
                    <td>{{ item.status.containerStatuses[0].restartCount }}</td>
                    <td>
                        <NuxtLink
                            :href="`/pod-logs?name=${item.metadata.name}&namespace=${item.metadata.namespace}&container=${item.spec.containers[0].name}`"
                            class="btn btn-link stretched-link">Logs</NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
const { data, pending, error, refresh } = useFetch('/api/pods')
</script>