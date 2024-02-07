import LogInForm from "./_components/LogInForm";
import * as L from "../../styles";

function LogInPage() {
  return (
    <div>
      <h1 className={L.TitleStyle}>Log In Your Account</h1>
      <LogInForm />
    </div>
  );
}

export default LogInPage;
