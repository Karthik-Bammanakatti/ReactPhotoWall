import * as firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDSxluK4l56zqNbSjYYnM_DcHWlkK76hB0",
	authDomain: "photowall-6855c.firebaseapp.com",
	databaseURL: "https://photowall-6855c-default-rtdb.firebaseio.com",
	projectId: "photowall-6855c",
	storageBucket: "photowall-6855c.appspot.com",
	messagingSenderId: "392819547666",
	appId: "1:392819547666:web:7a0e738f01436f2b33c2cb",
	measurementId: "G-D5HB63MJQY",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { database };
