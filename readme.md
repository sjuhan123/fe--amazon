# 코드스쿼드 개인 프로젝트 - 아마존 홈페이지 구현

## 목차

- 프로젝트 소개
- 주차별 학습계획
  - [Week1 - header 영역, sidebar 영역구현](#week1---header-영역-구현)
  - [Week2 - sidebar 동적 기능 개발](#week2---아마존2-sidebar-레이아웃--애니매이션-구현)
- 주차별 마스터 피드백 및 회고
  - [Week1 - midpoint](#1주차-midpoint)
  - [Week1 - final](#1주차-final)

---

## 주차별 학습계획

### Week1 - header 영역 구현

#### :one: 월요일 학습계획

- [x] : git 학습
  - [x] : PR 보내는 방법 학습
  - [x] : 커밋 컨벤션 best practice 검색 및 비교 학습
- [x] : 코딩 컨벤션 best practice 검색 및 비교 학습
- [x] : html 기초 파트 학습
  - [x] : html 구조 학습
  - [x] : html 대표적인 태그 탐색
  - [x] : html 속성 학습
  - [x] : html 주석 작성 방법 학습

#### :two: 화요일 학습계획

- [x] : 개념 공부
  - [x] : css 학습
    - [x] : css properties 학습
    - [x] : flex-box 학습
    - [x] : border-box 학습
    - [x] : content-box vs border-box
    - [x] : bem 학습
- [x] : 프로젝트 수행
  - [x] : main 화면 상단 header 영역 구현
    - [x] : html 구현
      - [x] : header-top 구역

#### :three: 수요일 학습계획

- [ ] : 개념 공부
  - [ ] : eslint, prettier 학습 & 설치
  - [ ] : css root 변수 사용법 학습
- [ ] : 프로젝트 수행 
  - [x] : main 화면 상단 header 영역 구현
    - [x] : html 구현
      - [x] : header-bottom 구역
    - [x] : css 구현
      - [x] : header 영역 스타일 구현
        - [x] : 레이아웃
        - [ ] : 폰트, 폰트 사이즈
        - [x] : 아이콘 색상 변경 
    - [ ] : 현재까지 구현 한 html,css 리팩

#### :four: 목요일 학습계획

- [ ] : crong 리뷰 고려 코드 리팩 시도 해보기
  - [ ] : html 리팩
    - [ ] : class명 점검하기
    - [x] : header-bottom left 레이아웃 변경 
  - [ ] : css 리팩
    - [ ] : font 변수화 시도해보기
    - [ ] : font-size 점검
    - [x] : display:flex 속성 점검
    - [x] : position:absolute 점검
- [x] : 로그인 모달창 호버 속성 점검
- [x] : 모달창 팝업시 딤 처리 기능 구현
- [x] : header-top shipping-address 모달창 구현

#### :five: 금요일 학습계획

- [x] : sidebar 레이아웃 구현
 - [x] : sidebar 탑 영역 구현
 - [x] : sidebar 메뉴 영역 구현
 - [x] : sidebar 부서별 쇼핑 모두 보기 영역 구현

--- 

### Week2 - 아마존#2 sidebar 레이아웃 & 애니매이션 구현

#### :one: 월요일 학습계획

- [x] : sidebar 애니매이션 구현
  - [x] : sidebar 부서별 쇼핑 모두 보기 영역 애니매이션 구현
  - [x] : sidebar 자동차 용품 클릭시 sub menu 애니매이션 구현
- [ ] : 이번 주 학습자료 'DOM API' 학습
  - [ ] : 크롱 강의 자료 학습
  - [ ] : 관련 내용 노션 정리
    - [ ] : DOM 탐색
    - [ ] : DOM 조작
    - [ ] : 문자열 기반으로 DOM 조작
- [ ] : 코드 리팩토링 진행
  - [ ] : font style 변수화 및 적용
  - [ ] : 클래스명 점검

---

## 주차별 피드백 및 회고

### 1주차 Midpoint

- 피드백

> "css코드 적용을 잘 하셨고요. 다양한 속성들을 이해하고 수정할 수 있도록 학습해보세요. absolute 로 배치하는것 말고도 다른 방법도 있으니, absolute 를 줄여보는 연습도 해보시고요."

absolute 속성을 이해해보고, 이를 대체할 속성을 학습해보자. 이후 코드 리팩 시도해보기.

> font-size 설정이 많네요. 기본적으로는 부모노드의 설정값을 상속받는것도 잘 기억해두시고요. 단위가 자주 사용되는 것이라면 css variables로 설정해두는것도 좋겠군요.

자주 사용되는 단위 root 클래스에 변수로 설정해줘서 변수화의 장점(재활용이 용이 등)을 적극 활용해보자.

- 회고

- html,css를 거의 접해보지 못해서, 미션과 관련된 개념 공부와 미션 구현에 너무 급급했다.
  - 그로 인해 기능별 커밋을 하지 못 했다.  
    -> **midpoint를 기점으로 추가 기능 구현시 커밋 생활화 하기.**
  - 리드미에 미션 구현에 대한 내용을 적지 않았다.  
    -> **이 부분 또한 midpoint를  기점으로 틈틈히 작성하기!**  
    -> **코드 구현 전에 리드미에 설게를 먼저하자**
- 마스터 강의에서 몰랐던 개념들과 중요 point를 아직 학습하지 못 했다.  
  -> **틈틈히 하기!**
- html 각각의 tag의 class 명이 일관된 룰 안에서 작성되지 못 했다.
- css 리팩을 여러 방식으로 할 수 있지 않을까?
  - css font 스타일 변수화 해보기.
  - 또 있을까?

### 1주차 Final

- 피드백 

> 즉시실행하는 함수군요. 아래 다른 부분은 이런식으로 하지 않는 이유는 뭘까요?

js 코드에서 변수들을 전역에 놓지 말고, 함수와 클래스를 활용하는 방향으로 리팩토링 진행 하기. 기능 별로 함수 혹은 클래스로 역활을 나눠보자.

> modal1 ,2 이런이름은 순서만 뜻하니 보다 구체적인 네이밍으로 하시면 더 좋을듯합니다.

변수명 혹은 클래스명 등 이름을 지을 때 의미 있는 이름으로 짓자. 이름만 보고 어떤 역할을 하는지 알 수 있게!

- 회고

계획 후 실행의 중요성을 뼈저리게 느꼈던 한 주다. 미션 수행에 급급하다보니, 코드를 구현하고 나서 다시 여러가지 변수로 인해 코드를 수정하는 일이 자주 발생했다. 앞으로는 어느정도 틀을 잡아 놓고 코드 구현을 진행할 예정이다.
