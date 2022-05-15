import { Timestamp } from "firebase/firestore";

export type MessageType = {
    message: string,
    name: string,
    time: Timestamp,
    photoUrl: string,
  }