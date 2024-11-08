import LogInForm from "../components/auth/logIn/LogInForm";
import { useNavigate } from "react-router-dom";
import Title from "../components/common/Title";
import Box from "../components/common/Box";

function LogIn() {
  const navigate = useNavigate();

  return (
    <Box>
      <Title title="로그인" />
      <LogInForm />
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="w-full bg-gray-300 rounded text-white p-2 mt-3"
      >
        회원가입 페이지로
      </button>
    </Box>
  );
}

export default LogIn;
