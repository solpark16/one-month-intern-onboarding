import Box from "../components/common/Box";
import Title from "../components/common/Title";
import ProfileUpdateForm from "../components/myPage/ProfileUpdateForm";

function MyPage() {
  return (
    <Box>
      <Title title="마이 페이지" />
      <ProfileUpdateForm />
    </Box>
  );
}

export default MyPage;
