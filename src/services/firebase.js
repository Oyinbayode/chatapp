import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAImgIrmHmpkuPZc4CboYnYMR_FAjXiKms",
  authDomain: "chatapp-25109.firebaseapp.com",
  projectId: "chatapp-25109",
  storageBucket: "chatapp-25109.appspot.com",
  messagingSenderId: "375359735763",
  appId: "1:375359735763:web:72475ae5813c70c787d126",
  measurementId: "G-CJSV28911F",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Send a message to the Firebase DB
async function SendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      displayName: user,
      text: text.trim(),
      createdAt: serverTimestamp(),
      id: Math.random().toString(36).substring(7),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function AddUser(user) {
  try {
    await addDoc(collection(db, "users"), {
      displayName: user,
      createdAt: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function getMessages(roomId, callback) {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      callback(messages);
    }
  );
}

export { SendMessage, db, getMessages, AddUser };
