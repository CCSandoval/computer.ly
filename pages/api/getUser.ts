import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const collection = client.db("computerly").collection("users");
  const user = await collection.findOne({ name: req.body.name });
  if (user) {
    if (user.password == req.body.password) res.status(200).json(user);
    else res.status(401).json({ error: "Wrong password" });
  } else res.status(404).json({ error: "User not found" });
}
