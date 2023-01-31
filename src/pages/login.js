import PublicTemplate from "component/templates/PublicTemplate";
import FormLoginUser from "component/organisms/FormLoginUser";

const pageTitle = "Login";

const Login = () => (<PublicTemplate pageTitle={pageTitle}>
    <h1>{pageTitle}</h1>
    <FormLoginUser/>
</PublicTemplate>);

export default Login;