import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHtKMOAyfMXAmRPKCkdoncGNrwtZiorxk",
  authDomain: "catch-of-the-day-jenny.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jenny.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
