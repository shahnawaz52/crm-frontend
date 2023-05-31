import { useState } from "react";
import './EntryPage.css';
import Login from '../../components/Login/Login';
import PasswordReset from '../../components/PasswordReset/PasswordReset';


const EntryPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
        console.log(name, value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            alert('Fill up all the form!');
        }
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if(!email) {
            alert('Fill up all the form!');
        }
    }

    const handleFormSwitch = (formType) => {
        setFormLoad(formType);
    }

    return (
        <div className="entry-page bg-info">
            <div className="jumbotron form-box">
                {formLoad === 'login' &&
                (<Login handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} handleFormSwitch={handleFormSwitch} email={email} password={password} />)}
                {formLoad === 'reset' &&
                (<PasswordReset handleOnChange={handleOnChange} handleFormSwitch={handleFormSwitch} handleOnResetSubmit={handleOnResetSubmit} email={email} />)}
            </div>
        </div>
    )
}

export default EntryPage;
