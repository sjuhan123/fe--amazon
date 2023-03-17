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
- [x] : 이번 주 학습자료 'DOM API' 학습
  - [x] : 크롱 강의 자료 학습
  - [x] : 관련 내용 노션 정리
    - [x] : DOM 탐색
    - [x] : DOM 조작
    - [x] : 문자열 기반으로 DOM 조작
- [x] : 코드 리팩토링 진행
  - [x] : font style 변수화 및 적용
  - [x] : 클래스명 점검

# :two: 화요일 학습계획 

- [x] : header 영역 레이아웃 변경, js 코드 리팩토링
  - [x] : header 영역 불필요한 태그 삭제
  - [x] : header 영역 불필요한 속성 삭제
  - [x] :  header 영역 요소 클래스명 통일화, css 통일화
  - [x] : header 영역 버튼 요소에 hover 적용 - border 라인
  - [x] : header, sidebar 영역 관련 js 코드 전체적으로 리팩토링 진행

# :three: 수요일 학습계획 

- [x] : js prototype, scope 개념 공부
- [x] : header 영역 js 및 css 오류 해결

# :four: 목요일 학습계획

- [ ] : 리팩토링
  - [ ] : js 코드 무거운 함수들 기능별로 나누기
  - [x] : js 코드 고차함수로 대체 가능한 조건문 고차함수로 변경
  - [x] : js  코드 Array.prototype.indexOf.call() 사용 부분, 대체 방식 고민 해보기
  - [x] : html 전체적인 클래스명 점검
- [x] : 오류 수정
  - [x] : sidebar 내부 요소 클릭 이벤트 요류 수정
  - [x] : sub menu list css 속성 수정
  - [x] : dimlayer 상황별 z-index 부여

# :five: 금요일 학습계획

- [ ] : 리팩토링
  - [ ] : js 파일에서 노드의 속성 값을 직접적으로 할당하는 기능 수정
    - [ ] : classList 활용 - js 의존성 고려
  - [ ] : 함수 기능별로 분리 - 함수명만 보고 이 함수가 어떤 역할하는지 알 수 있게 수정해보기
- [ ] : sidebar css 오류 수정

---

## 주차별 피드백 및 회고

### 1주차 Midpoint

**피드백**

> "css코드 적용을 잘 하셨고요. 다양한 속성들을 이해하고 수정할 수 있도록 학습해보세요. absolute 로 배치하는것 말고도 다른 방법도 있으니, absolute 를 줄여보는 연습도 해보시고요."

absolute 속성을 이해해보고, 이를 대체할 속성을 학습해보자. 이후 코드 리팩 시도해보기.

> font-size 설정이 많네요. 기본적으로는 부모노드의 설정값을 상속받는것도 잘 기억해두시고요. 단위가 자주 사용되는 것이라면 css variables로 설정해두는것도 좋겠군요.

자주 사용되는 단위 root 클래스에 변수로 설정해줘서 변수화의 장점(재활용이 용이 등)을 적극 활용해보자.

**회고**

- html,css를 거의 접해보지 못해서, 미션과 관련된 개념 공부와 미션 구현에 너무 급급했다. 그로 인해 기능별 커밋을 하지 못 했다. midpoint를 기점으로 추가 기능 구현시 커밋 생활화 해볼 생각이다.  
- 리드미에 미션 구현에 대한 내용을 적지 않았다. 이 부분 또한 midpoint를 기점으로 틈틈히 작성해야겠다. 코드 구현 전에 리드미에 설계를 먼저 하면 좋을 것 같은데, 아직까지는 설계까지 생갈할 엄두가 안난다. 
- 마스터 강의에서 몰랐던 개념들과 중요 point를 아직 학습하지 못 했다. 뒤로 미루지 말고 틈틈히 해야지. 
- html 각각의 tag의 class 명이 일관된 룰 안에서 작성되지 못 했다.
- css 리팩을 여러 방식으로 할 수 있지 않을까? css font 스타일 변수화도 시도해보고 다른 방법이 있을지 더 검색해봐야겠다.

### 1주차 Final

**피드백**

> 즉시실행하는 함수군요. 아래 다른 부분은 이런식으로 하지 않는 이유는 뭘까요?

js 코드에서 변수들을 전역에 놓지 말고, 함수와 클래스를 활용하는 방향으로 리팩토링 진행 하기. 기능 별로 함수 혹은 클래스로 역활을 나눠보자.

> modal1, 2 이런이름은 순서만 뜻하니 보다 구체적인 네이밍으로 하시면 더 좋을듯합니다.

변수명 혹은 클래스명 등 이름을 지을 때 의미 있는 이름으로 짓자. 이름만 보고 어떤 역할을 하는지 알 수 있게!

**회고**

계획 후 실행의 중요성을 뼈저리게 느꼈던 한 주다. 미션 수행에 급급하다보니, 코드를 구현하고 나서 다시 여러가지 변수로 인해 코드를 수정하는 일이 자주 발생했다. 앞으로는 어느정도 틀을 잡아 놓고 코드 구현을 진행할 예정이다.

### 2주차 피드백 Midpoint

> 이 정도 함수는 비교적 너무 크긴해요. 더 작은 부분으로 분리해보면 좋겠네요. 어떤 부분을 분리할지 생각해보세요.  

이전에는 하나의 함수 안에 여러가지 역할들을 하는 코드가 모아져 있었다. 예를 들어, nav 바의 이벤트를 관리해주는 부분과 관련된 모든 코드를 한 함수안에 넣어 줬었는데, 의미 있는 기능 단위로 1차적으로 리팩토링 진행했다. 

> 해체할당 문법을 사용해보세요. 

addeventlistner를 사용할 때, 콜백함수 내에서 target 혹은 classtarget 등 event 객체에 있는 속성값을 사용할 때가 있다. 그 동안은 이런 상황에서 콜백함수의 매개변수로 event를 통으로 받아왔었다. 이러면 함수 내에서 다시 event의 속성값을 불러오거나 새로운 변수를 만들어서 불러온 속성값을 새로운 변수에 할당해서 활용 했었는데, 이러면 비효율적이니, 애초에 매개변수로 `{ target, currentTarget }` 을 받아오면 훨씬 효율적이고 직관적이라는 것을 이번 기회에 알게 됐다. 이 부분은 다른 메서드나 dom api 등을 사용할 때도 고민해볼 부분이다.

> 메시지 문자열이라면 SHOW_ALL 이렇게 대문자 표현방법도 자주 사용합니다.

**대문자 표현 방법으로 어떻게 변환할지 고민 더 해보기**

> 1. 2,4가 매직넘버 같은 느낌인데.. 없애면 더 좋겠네요.
> 2. Array.prototype.indexOf.call 이 코드가 어떻게 동작하는지 설명해보세요! 그리고 이 방법말고 다른 방법도 있는지 알아보세요.

```js
findSibling(ontarget, 2).style.display = 'none';
findSibling(ontarget, 4).style.display = 'none';

const findSibling = (node, targetIndex) => {
  const parent = node.parentNode;
  const children = parent.childNodes;
  const index = Array.prototype.indexOf.call(children, node);
  if (index < children.length - 1 && index >= 0) return children[index + targetIndex];
  else return null; // index가 children 배열크기를 넘어가는 경우
};
```

두 개의 피드백을 2번 피드백이 달린 코드를 수정하면서 동시에 해결했다.  
원래 findSibling 함수는 매개변수 node 기준 부모 node를 우선 찾고, 부모 node의 childNodes에서 targetIndex에 해당하는 형제 노드를 찾기 위해 만든 함수였다. 이 과정에서 childNodes의 데이터구조가 NodeList라서 index를 가지고는 원하는 노드를 찾을 수 없다고 생각했다.  

그래서 `Array.prototype.indexOf.call(children, node);`로 배열의 indexOf 메소드를 children에 할당(상속)해서, children 데이터 구조 내 특정 노드를 index를 활용해서 찾을 수 있게끔 구현했다.  

하지만, 피드백을 듣고 난 후 찾아보니.... NodeList 인스턴스 속성 중에는 무려 형제 노드를 찾는 `Node.nextSibling`과 `Node.previousSibling`가 있다는 것을 알게 됐다. 이 속성들과 반복문을 활용해 call을 굳이 쓰지 않아도 되는 코드로 변경했다. 변경 후 매직넘버도 사용할 필요가 없어졌고, call도 사용할 필요가 없어졌다. 아래는 변경된 코드다.

```js
const findSiblingForward = (node, targetNode) => {
    let nextSibling = node.nextElementSibling;
    while(true) {
      if(nextSibling.className === targetNode) return nextSibling;
      nextSibling = nextSibling.nextElementSibling;
    }
  };
```

결론. 다음 부터 이런 유틸 함수를 구현하기 전에, 원하는 기능이 이미 구현되어 있나 잘 알아보자.