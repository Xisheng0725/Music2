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

    @PostMapping("/setEmail/{email}")
    public void setEmail(@PathVariable String email) throws InterruptedException, ExecutionException {
        userService.setEmail(email);
    }

    @GetMapping("/getEmail")
    public String getEmail() throws InterruptedException, ExecutionException {
        return userService.getEmail();
    }

    @GetMapping("/findEmail/{email}")
    public boolean findEmail(@PathVariable String email) throws InterruptedException, ExecutionException {
        return userService.findEmail(email);
    }

	@GetMapping("/match-credentials/{email}/{password}")
	public boolean getPassword (@PathVariable String email, @PathVariable String password) throws InterruptedException, ExecutionException {
        return (userService.getPasswordByEmail(email).equals(password));
	}

    @PostMapping("/new-user")
    public void createUser(@RequestBody User user) throws ExecutionException, InterruptedException{
        userService.createUser(user);
    }
}
