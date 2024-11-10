# 한달인턴 프론트엔드 개발 온보딩 과제 (React)

## 프로젝트 소개

기본적인 JWT 기반의 인증/인가가 구현되어있고 프로필 수정이 가능한 간단한 웹 사이트

- 개발 기간 : 2024/11/07 ~ 2024/11/10
- 기술 스택 : Vite, Zustand, Tanstack Query, Tailwind CSS, axios

## 페이지 구성

- 메인 페이지
  - JSON Placeholder 테스트
  - 마이 페이지 이동
  - 로그아웃 기능
  - 로그인 여부 상관 없이 접속 가능
- 로그인 페이지
  - 로그인 시 접속 불가
- 회원가입 페이지
  - 로그인 시 접속 불가
- 마이 페이지
  - 프로필 변경 가능
  - 로그인 시에만 접속 가능

## 기술적 의사결정

- zustand를 사용하여, 전역으로 유저 정보를 관리해 매번 서버에서 가져오지 않고 클라이언트 측에서 가져올 수 있도록 설정했습니다.
- PrivateRoute, PublicRoute로 감싸 Access Token에 따라 접속 가능한 페이지를 제한하도록 설정했습니다.
- input을 비롯하여 반복되는 컴포넌트의 경우에 components 내 common 폴더에 제작하여 재사용성을 높였습니다.

## Blog 작성

[JWT 기술분석 : access, refresh token의 개념과 관리전략](https://velog.io/@solpark16/access-refresh-token)

[유닛 테스트 기술분석](https://velog.io/@solpark16/unit-test)

[기술분석 : 프론트엔드 에러 모니터링, 로그 데이터 수집의 필요성](https://velog.io/@solpark16/frontend-error-monitoring)
