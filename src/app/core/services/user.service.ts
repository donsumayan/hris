import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private firebase: AngularFireAuth) {
        // firebase.auth.onAuthStateChanged(d => console.log(d))
    }

    isAuthenticated() {
        const user = this.getCurrentUser();
        return !!user;
    }

    getCurrentUser() {
        return this.firebase.auth.currentUser;
    }

    auth() {
        return this.firebase.auth;
    }

    signInWithEmailAndPassword(email: string, passwd: string) {
        return this.auth().signInWithEmailAndPassword(email, passwd).then(data => console.log(data)).catch(e => console.error(e));
    }

}
