package group8.demo;


public class User {
    private String email;
    private String password;

    private User(){
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User {" +
                "name='" + this.email + '\'' +
                '}';
    }
}
