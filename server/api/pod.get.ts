import k8s from '@kubernetes/client-node'

export default defineEventHandler(async (event) => {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    const query = getQuery(event)

    const resp = await k8sApi.readNamespacedPod(
        query.name as string,
        query.namespace as string)

    return resp.body;
})
