// import firebaseConfig from './config/firebase';
import { config as firebaseConfig } from '../config/firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let initialized = false;
export class FirebaseWrapper {
  public app: any; // firebase.app.App doesn't work
  public auth: firebase.auth.Auth;
  public database: firebase.database.Database;
  public drugsDbRef: firebase.database.Reference;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.auth = app.auth();
    this.database = app.database();
    this.drugsDbRef = this.database.ref('/'); // /drugs
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export const firebase = new FirebaseWrapper();
