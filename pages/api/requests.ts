import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const collection = client.db("computerly").collection("requests");

  if (req.method == "GET") {
    await collection
      .find({})
      .toArray()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else if ((req.method = "POST")) {
    console.log(req.body);
    await collection
      .insertOne(req.body)
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}
