import { useNavigate } from "react-router-dom";
import Box from "../components/common/Box";
import Title from "../components/common/Title";
import ProfileUpdateForm from "../components/myPage/ProfileUpdateForm";

function MyPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Title title="마이 페이지" />
      <ProfileUpdateForm />
      <button
        onClick={() => navigate("/")}
        className="w-full bg-gray-300 rounded text-white p-2 text-center cursor-pointer mt-3"
      >
        메인 페이지로
      </button>
    </Box>
  );
}

export default MyPage;
