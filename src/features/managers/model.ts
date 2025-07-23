import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { ICreateAdminInput } from "./type";
import { db } from "@/utils/filebase";
import { COLLECTION } from "@/constants/common";
import { hashPassword } from "@/utils/common/common";

export const createAdmin = async (data: ICreateAdminInput) => {
  const adminRef = collection(db, COLLECTION.ADMIN);

  const existedAdmin = await getDocs(
    query(adminRef, where("email", "==", data.email))
  );

  if (existedAdmin.docs.length) throw Error("Email is existed!");

  const hashedPassword = await hashPassword(data.password);

  const newAdminRef = await addDoc(adminRef, {
    email: data.email,
    password: hashedPassword,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
  });

  const newAdmin = await getDoc(newAdminRef);

  return {
    id: newAdmin.id,
    ...newAdmin.data(),
  };
};
