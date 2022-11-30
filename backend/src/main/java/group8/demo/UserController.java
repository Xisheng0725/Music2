package group8.demo;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/setEmail")
    public void setEmail(@RequestBody Email email) throws InterruptedException, ExecutionException {
        userService.setEmail(email.getEmail());
    }

    @GetMapping("/getEmail")
    public String getEmail() throws InterruptedException, ExecutionException {
        return userService.getEmail();
    }

    @PostMapping("/findEmail")
    public boolean findEmail(@RequestBody Email email) throws InterruptedException, ExecutionException {
        return userService.findEmail(email.getEmail());
    }

	@PostMapping("/match-credentials")
	public boolean getPassword (@RequestBody User user) throws InterruptedException, ExecutionException {
        return (userService.getPasswordByEmail(user.getEmail()).equals(user.getPassword()));
	}

    @PostMapping("/new-user")
    public void createUser(@RequestBody User user) throws ExecutionException, InterruptedException{
        userService.createUser(user);
    }
}
