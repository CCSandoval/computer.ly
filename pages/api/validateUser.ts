import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Wrong method" });
  }
  const client = await clientPromise;
  const collection = client.db("computerly").collection("users");

  const user = await collection.findOne({ email: req.body.email });
  if (user) {
    // if (user.password == req.body.password) res.status(200).json(user);
    if (await bcrypt.compare(req.body.password, user.password))
      res.status(200).json(user);
    else res.status(401).json({ error: "Wrong password" });
  } else res.status(404).json({ error: "User not found" });
}
