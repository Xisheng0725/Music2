package group8.demo;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.*;
import com.google.api.core.ApiFuture;

import java.util.ArrayList;

@Service
public class SongService {
 
    public String[] getSongs(String email) {
        Firestore db = FirestoreClient.getFirestore();
        // CollectionReference col = db.collection(COLLECTION);
        // ApiFuture<QuerySnapshot> entry = col.whereEqualTo("username", username).get();
    }

    //get the list of searched tags from database
    //sort tags by most searched
    //return array of tags in order
    public String[] getTags(String email) {
        Firestore db = FirestoreClient.getFirestore();
        ArrayList<String, Integer> tags = new ArrayList<String, Integer>();
    }

    public void updateTags(String email) {
        Firestore db = FirestoreClient.getFirestore();

    }

    public void addSong(String email) {
        Firestore db = FirestoreClient.getFirestore();

    }
}
