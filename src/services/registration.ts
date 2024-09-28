import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";

type Barber = {
    nomComplet: string;
    courriel: string;
    telephone: string;
    motDePasse: string;
}

export async function createUser(formData: Barber) {
    const auth = getAuth(app);
    const db = getFirestore(app);
    try {
        // Verify if email already exists
        const q = query(collection(db, "barbers"), where("courriel", "==", formData.courriel));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return 405;
        } 
        // Create an account for authentication service
        const user = await createUserWithEmailAndPassword(auth, formData.courriel, formData.motDePasse);
        // Create new document in database
        await addDoc(collection(db, "barbers"), {
            ...formData, authID: user.user.uid
        });
        return 200;
    } catch (error:any) {
        console.log(error)
        return 404;
    }
}