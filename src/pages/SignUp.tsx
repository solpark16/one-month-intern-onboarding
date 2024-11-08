import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/auth/signUp/SignUpForm";
import Title from "../components/common/Title";
import Box from "../components/common/Box";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Box>
      <Title title="회원가입" />
      <SignUpForm />
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="w-full bg-gray-300 rounded text-white p-2 mt-3"
      >
        로그인 페이지로
      </button>
    </Box>
  );
}

export default SignUp;
