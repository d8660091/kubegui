
import k8s from '@kubernetes/client-node'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const kc = new k8s.KubeConfig();

    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    const resp = await k8sApi.readNamespacedPodLog(
        query.name as string,
        query.namespace as string,
        query.container as string,
        false,
        true,
        undefined,
        "false",
        query['is-previous'] == 'true'
    )

    return resp.body;
})
