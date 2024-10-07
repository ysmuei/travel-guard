https://travel-guard-git-main-ysmueis-projects.vercel.app/

# Travel Guard - 안전 여행 웹사이트

## 프로젝트 소개
Travel Guard는 전 세계의 여행자들에게 각 국가의 안전 정보를 제공하는 웹 애플리케이션입니다. 
사용자들은 국가별로 제공되는 여행 경보 상태, 대사관 정보, 입국 허가 요건 등을 한눈에 확인할 수 있으며, 이를 통해 보다 안전하고 계획적인 여행을 준비할 수 있습니다.

## 주요 기능
- **여행 경보 상태 시각화**: 각 국가의 여행 경보 단계를 지구본 위에 색상으로 시각화하여 직관적으로 확인할 수 있습니다.
- **대사관 정보 제공**: 대사관의 위치, 연락처 및 긴급 연락처 등의 정보를 제공하여 여행 중 도움이 필요한 상황에 대비할 수 있습니다.
- **입국 허가 요건 제공**: 국가별 입국 가능 여부 및 필요 서류 등을 확인할 수 있어, 여행 준비에 필요한 정보를 쉽게 얻을 수 있습니다.
- **검색 및 필터링**: 국가별 이름으로 정보를 검색하거나, 여행 경보 단계별로 국가를 필터링할 수 있는 기능을 제공합니다.
- **반응형 디자인**: 모바일 환경에서도 사용하기 쉽게 반응형으로 디자인되었습니다.

## 기술 스택
- **프론트엔드**:
  - **React**: 사용자 인터페이스를 구축하기 위해 사용했습니다.
  - **TypeScript**: 타입 안정성을 높여 코드의 유지 보수를 용이하게 하고 오류를 줄였습니다.
  - **Emotion**: CSS-in-JS 라이브러리로 컴포넌트 스타일링을 관리했습니다.
  - **React Router**: 페이지 간 라우팅을 관리하여 사용자가 다양한 정보를 손쉽게 탐색할 수 있게 했습니다.
  - **React Query**: 서버 상태 관리 및 데이터 페칭을 효율적으로 처리하기 위해 사용했습니다.
  - **react-globe.gl**: 지구본 시각화를 통해 국가별 경보 상태를 표현하였습니다.
  - **Vite**: 빠른 개발 환경 세팅과 빌드를 위해 사용했습니다.

## 폴더 구조
- **src/components**: 공통으로 사용하는 컴포넌트가 위치한 폴더입니다.
- **src/pages**: 각 주요 페이지 컴포넌트가 위치한 폴더입니다.
- **src/api**: 서버와의 통신을 위한 API 호출 함수들이 위치해 있습니다.
- **src/hooks**: 반복되는 데이터 페칭 로직을 커스텀 훅으로 관리합니다.
- **src/styles**: Emotion을 사용하여 작성된 스타일 파일들이 위치한 폴더입니다.
  <img width="266" alt="폴더구조" src="https://github.com/user-attachments/assets/eeaf489a-13bc-4e18-99ed-532e91e0fa94">




## 주요 페이지 설명
1. **메인 페이지 (MainPage)**: 국가별로 여행 경보 상태를 검색 및 필터링할 수 있는 페이지입니다.
2. **상세 정보 페이지 (DetailPage)**: 특정 국가를 클릭하면, 해당 국가의 안전 정보, 대사관 정보 및 입국 요건을 확인할 수 있습니다.
3. **대사관 정보 페이지 (EmbassyPage)**: 전 세계 대사관의 이름, 위치, 전화번호 등의 정보를 제공합니다.
4. **입국 허가 요건 페이지 (PermissionPage)**: 각 국가의 입국 가능 여부 및 입국 시 필요한 정보를 제공합니다.
