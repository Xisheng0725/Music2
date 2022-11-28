import React, {Component} from 'react';
import { useNavigate } from "react-router-dom";
import 'Account.css';

class Account extends Component {

    constructor(props) {
        super(props);
        this.info = {
            "email": "example@gmail.com",
            "password": "placeholder",
            "censoredPassword": "",
            "passwordShown": false
        };

        if (props.isGuest) {

        } else {
            this.info.email = props.email;
            this.info.password = props.password;
            censorPassword();
        }
    }

    //window.onload
    componentDidMount(){
        window.addEventListener('load', this.onLoadUp);
    }

    componentWillUnmount() { 
        window.removeEventListener('load', this.onLoadUp)  
    }

    onLoadUp() {
        document.getElementById('email').innerHTML = email+"<br>";
        document.getElementById('password').innerHTML = censoredPassword+"<br>";
    };

    showHidePass() {
        if (passwordShown) {
            document.getElementById('showHidePass').innerHTML="Show Password";
            document.getElementById('password').innerHTML=censoredPassword+"<br>";
        } else {
            document.getElementById('showHidePass').innerHTML="Hide Password";
            document.getElementById('password').innerHTML=password+"<br>";
        }
        passwordShown=!passwordShown;
    }
    
    censorPassword() {
        this.info.censoredPassword=this.info.password.charAt(0);
        for (let i=1; i<this.info.password.length; ++i) {
            this.info.censoredPassword+="*";
        }
    }

    returnToSearch() {

    }
    
    render() {
        return(
            <div className="container" style={{background: '#16295A', padding: '20px'}}>
                <div style="margin-bottom: 60px;">
                    <h1 id="title">#pro-aux</h1>
                    <div id="user">
                        <img id="avatar" src="fonts_images/avatar.png" alt="avatar" />
                        <span id="display-user">username</span>
                    </div>
                </div>
                <br />
                <hr />
                <div id="saved-info">
                    <span>My saved songs</span>
                </div>
                <div id="account-info">
                    <h6 style="font-family: 'IBMPlexSans'; color: white; font-size: 18px; letter-spacing: 0.2em; font-weight: 400; margin-bottom: 15px;">My Account Information</h6>
                    <span class="email-pass">Email:<br /></span>
                    <span id="email" class="email-pass"><br /></span>
                    <br />
                    <span class="email-pass">Password:<br /></span>
                    <span id="password" class="email-pass"><br /></span>
                    <br />
                    <button class="account-buttons" id="showHidePass" onclick="showHidePass()">Show Password</button>
                    <br />
                    <button class="account-buttons">Change password</button>
                </div>
            </div>
        );
    }

}

export default Account;
