import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

export const firestoreDataApi = createApi({
  reducerPath: "firestoreDataApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Message"],
  endpoints: (build) => ({
    getMessages: build.query({
      async queryFn() {
        try {
          let messagesArray = [];

          // const sub = onSnapshot(
          //   query(
          //     collection(db, "chat-rooms", "general", "messages"),
          //     orderBy("timestamp", "asc")
          //   ),
          //   (querySnapshot) => {
          //     querySnapshot.docs.forEach((doc) => {
          //       console.log(doc.id, " => ", doc.data());
          //     });
          //   }
          // );

          const useRef = collection(db, "chat-rooms", "general", "messages");
          const querySnapshot = await getDocs(useRef, {
            orderBy: "createdAt",
          });

          querySnapshot?.forEach((doc) => {
            messagesArray.push(doc.data());
          });
          return { data: messagesArray };
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
    }),
  }),
});

export const { useGetMessagesQuery } = firestoreDataApi;
