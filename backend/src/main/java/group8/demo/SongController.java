package group8.demo;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/songs")
public class SongController {
    
    @Autowired
    private SongService songService;

    @CrossOrigin
    @PostMapping("/setEmail")
    public void setEmail(@PathVariable String email) throws InterruptedException, ExecutionException {
        songService.setEmail(email);
    }


    @CrossOrigin
    @GetMapping("/getEmail")
    public String getEmail() throws InterruptedException, ExecutionException {
        return songService.getEmail();
    }

    @CrossOrigin
    @GetMapping("/get-songs/{email}")
    public String[] getSongs(@PathVariable String email) throws InterruptedException, ExecutionException {
        return songService.getSongs(email);
    }

    @CrossOrigin
    @GetMapping("/get-tags/{email}")
    public String[] getTags(@PathVariable String email) throws InterruptedException, ExecutionException {
        return songService.getTags(email);
    }

    @CrossOrigin
    @PostMapping("/update-tags/{email}")
    public void updateTags(@PathVariable String email) throws InterruptedException, ExecutionException {
        songService.updateTags(email);
    }    
    
    @CrossOrigin
    @PostMapping("/add-song/{email}")
    public void addSong(@PathVariable String email) throws InterruptedException, ExecutionException {
        songService.addSong(email);
    }
}
