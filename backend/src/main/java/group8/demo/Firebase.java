package group8.demo;
import org.springframework.stereotype.Service;
import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.FirebaseApp;


@Service
public class Firebase {

    @PostConstruct
    public void initialization() {
        try {
        
        FileInputStream serviceAccount = new FileInputStream("backend/src/main/java/group8/demo/serviceAccountKey.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
        .build();

        FirebaseApp.initializeApp(options);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}