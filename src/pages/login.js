import React from 'react';
import LoginPage, { Reset, Submit, Title, Logo, Footer, Email, Password } from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo-rect';
import LoginImg from '@react-login-page/page10/bg.png';
import dog1 from '../assets/images/dog1.jpg';


const Demo = () => {
  const [data, setData] = React.useState({});
  const [password, setPassword] = React.useState({});
  const [email, setemail] = React.useState({});
  
  const handle = (even) => {
    even.preventDefault();
    const formData = new FormData(even.target);
    const data = Object.fromEntries(formData);
    setData({ ...data });
    console.log(password,email);
   };

 return (
    <form onSubmit={handle}>
      <LoginPage style={{ height: 990, '--login-inner-height': '580px', backgroundImage: `url(${dog1})` }}>
        <Logo>
          <LoginLogo />
        </Logo>
        <Title />
        <Email keyname="subtitle" visible={false} index={0}>
          welcome to ADOPET
        </Email>
      
        <Email visible={false} />  {/* hide default Email field */}
        <Email keyname="fields" index={1} placeholder="xyz@gmail.com" onChange={(e)=>setemail(e.target.value)}/>
        <Password index={2} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

        <Footer>
          Not a member? <a href="#">Sign up now</a>
        </Footer>       <Submit>SUBMIT</Submit>
 
        <Email panel="signup" type="email" placeholder="xyz@gmail.com" keyname="e-mail" />
        <Password panel="signup" placeholder="Please confirm your password" keyname="confirm-password" />
        <Password panel="signup" placeholder="enter password" keyname="password" />
        <Submit keyname="signup-submit" panel="signup">
          submit
        </Submit>
        <Footer panel="signup">
           a member? <a href="#">Login now</a>
        </Footer>
      </LoginPage>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
};

export default Demo;
