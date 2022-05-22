import { UserData } from "../../src/interfaces";
import clientPromise from "../mongo";

export async function SearchUser(email: string) {
  const client = await clientPromise;
  const user = await client
    .db("computerly")
    .collection("users")
    .findOne({ email: email });
  return user;
}

export async function CreateUser(data: UserData) {
  const client = await clientPromise;
  const collection = client.db("computerly").collection("users");
  const createdUser = await collection.insertOne(data);
  return createdUser;
}
