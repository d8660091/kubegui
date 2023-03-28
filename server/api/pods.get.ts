import k8s from '@kubernetes/client-node'

export default defineEventHandler((event) => {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

  return k8sApi.listPodForAllNamespaces().then((res) => {
    return res.body
  })
})
