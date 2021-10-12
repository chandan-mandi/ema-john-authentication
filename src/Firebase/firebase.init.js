import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;
/* 
// steps for authentication 
---------------------------------
Step 1: Initial Setup
1. firebase: create project
2. create web app
3. get configaration 
4. initialize firebase
5. Enable auth method

------------
Step 2: Setup Components
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

---------------------------
Step 3: Setup Auth System
1. Set up sign in method
2. Setup sign Out method
3. user state
4. special observer
5. return neccessary methods and states from useFirebase
----------------------
Step 4: Create auth Context hook/ context api
1. Create a auth context
2. Create Context 
3. set context Provider context value
4. use Auth Provider
5. Create useAuth Hook
---------------------
Step 5: create private route
1. Create private Route
2. set private route


----------------------
Step 6: Redirect after login
1. after login redirect user to their desire destination 
2. 

 */