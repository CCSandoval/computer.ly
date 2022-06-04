import { NextApiRequest, NextApiResponse } from "next";
import { RequestData } from "../../src/interfaces";
import clientPromise from "../../lib/mongo";
import { CreateUser, SearchUser } from "../../lib/functions/users";
import bcrypt from "bcrypt";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    identification: string;
    message: string;
    email: string;
    age: number;
    celNumber: string;
    senaCenter: string;
    date: string;
    formation?: string;
    status?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const collection = client.db("computerly").collection("requests");

  if (req.method == "GET") {
    await collection
      .find({})
      .toArray()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error finding the requests", error: err });
      });
  } else if ((req.method = "POST")) {
    const user = await SearchUser(req.body.email);
    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedId = await bcrypt.hash(req.body.identification, salt);
      console.log("está acá");
      await CreateUser({
        email: req.body.email,
        password: hashedId,
        name: req.body.name,
        role: "user",
      }).catch((err) =>
        res.status(500).json({ message: "Error creating user", err: err })
      );
    }
    await collection
      .insertOne({ ...req.body, status: "pending" })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: "Error creating request", err: err });
      });
  }
}
