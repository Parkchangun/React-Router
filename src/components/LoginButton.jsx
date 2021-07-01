import { withRouter } from "react-router-dom";

export default withRouter(function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }

  return <button onClick={login}>Login</button>;
});

//Component 의 history 객체 Router null 해결법
//HoC Higher of Component
//Router
