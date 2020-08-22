import { sendJson } from "next/dist/next-server/server/api-utils";

export default async (req, res) => {
  const varr = { say: "My Name", name: "Heisenberg" };
  res.end(JSON.stringify(varr));
};
