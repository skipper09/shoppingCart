import axios from 'axios';

class SignupAction {

  signupUser(name, email, password) {
    axios.post('http://localhost:3001/signup', {
      name: name,
      email: email,
      password: password
    })
    // console.log('FIRST RES ============================== \n' + res)
    .then(res => console.log(res));
    // .then(res => this.setState({ name: res.data.name }))
    // .catch(err => console.log(err))
  }


}

export default SignupAction;