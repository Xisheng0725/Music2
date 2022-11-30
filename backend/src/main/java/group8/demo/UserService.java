package group8.demo;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.*;
import com.google.api.core.ApiFuture;
@Service
public class UserService {

    public String storedEmail="";

    private static final String COLLECTION = "accounts";
  
    public void setEmail(String email) {
        storedEmail=email;
    }

    public String getEmail() {
        if (storedEmail.equals("null"))
            return null;
        return storedEmail;
    }

    public boolean findEmail(String email) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference col = db.collection(COLLECTION);
        ApiFuture<QuerySnapshot> entry = col.whereEqualTo("email", email).get();
        return (entry.get().getDocuments().size()>0);
    }
 
    public String getPasswordByEmail(String email) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference col = db.collection(COLLECTION);
        ApiFuture<QuerySnapshot> entry = col.whereEqualTo("email", email).get();
        return entry.get().getDocuments().get(0).get("password").toString();
    }

    public String createUser(User user) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> res = db.collection(COLLECTION).document(user.getEmail()).set(user);
        return res.get().getUpdateTime().toString();
    }
}
