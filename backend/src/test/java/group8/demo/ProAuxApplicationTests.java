package group8.demo;

import java.util.concurrent.ExecutionException;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProAuxApplicationTests {

	UserService userservice = new UserService();
	User user;

	@Test
	void contextLoads() {
	}

	// public void createUserData() throws ExecutionException, InterruptedException {
	// 	User user = new User();
	// 	user.setEmail("kbarber0199@gmail.com");
	// 	user.setPassword("Password");
	// 	userService.createUser(user);
	// }

	// @Test
	// public void testUserData() throws ExecutionException, InterruptedException {
	// 	createUserData();
	// 	boolean res = userservice.existsUser("kentster");
	// 	assertEquals(true, res);
	// }

	// @Test
	// public void testNotUser() throws ExecutionException, InterruptedException {
	// 	boolean res = userservice.existsUser("notHere");
	// 	assertEquals(false, res);
	// }

	// @Test
	// public void matchPasswords() throws ExecutionException, InterruptedException {
	// 	createUserData();
	// 	String res = userservice.getPasswordByUsername("kentster");
	// 	assertEquals("Password", res);
	// }

}
