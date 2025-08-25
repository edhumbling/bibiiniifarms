import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "q63oyk6u",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
