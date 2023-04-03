import k8s from "@kubernetes/client-node";
import { stringify } from "yaml";

export default defineEventHandler(async (event) => {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

  const res = await k8sApi.getAPIResources();

  console.log(res.body);
  return res.body;
});
