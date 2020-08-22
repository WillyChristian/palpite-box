export default async (req, res) => {
  const varr = { say: "My Name", name: "Heisenberg" };
  res.end(JSON.stringify(varr));
};
