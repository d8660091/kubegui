import k8s from "@kubernetes/client-node";
import { stringify } from "yaml";

export default defineEventHandler(async (event) => {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

  const query = getQuery(event);

  return getSecret(k8sApi, query.namespace as string, query.name as string);
});

async function getSecret(
  k8sApi: k8s.CoreV1Api,
  namespace: string,
  name: string
) {
  const secret = await k8sApi.readNamespacedSecret(name, namespace);

  return stringify(secret.body, { lineWidth: 1000 });
}
