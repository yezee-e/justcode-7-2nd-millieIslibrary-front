# 밀리는 서재

<br/>

**URL** http://15.164.216.64:3000/

<br/>

**선택한 이유?**  
국내 최대 전자책 플랫폼으로 깔끔하고 귀여운 UI가 눈길을 끌었고                
유저를 위한 편리한 서비스를 많이 제공하고 있기 때문에 B2C 영역을 경험해볼 수 있는 좋은 모델이라고 생각하여 선택하였습니다. 

<br/>

## 재작기간&참여인원
2022.11.14-2022.11.25   
Front(3명) Backend(3명)

  <br/>
  
## 사용기술
**Front-end >**            
JavaScript(ES6+)    
React   
SCSS  
HTML5       
Axios     

**Back-end >**            
Node.js     
Express     
typeORM     
Mysql       
Axios     

<br/>

## 협업도구     
Github, Trello, Slack, discode

<br/>

## 핵심기능
`하이라이트 => 내가 구현한 기능!!`  
페이지별로 나눠서 기능구현=>welcome,로그인,메인,검색,내서재,상세    

* welcome페이지    
`스크롤 에니메이션 구현`    
`자동케러셀 구현`    
* 로그인페이지    
로그인,회원가입,비밀번호 변경 구현   
* 메인페이지   
`nav, footer 구현`    
`자동캐러셀 및 드레그슬라이드구현`   
`다크모드기능 구현`   
`top버튼 기능구현`    
`장르 카테고리 구현`    
* 검색페이지   
검색 기능 구현    
카테고리 필터 기능구현    
* 내서재페이지    
내 서재 페이지 구현   
* 상세페이지   
도서 상세페이지 구현   
도서 찜, 서재 담기,댓글기능, 링크복사 구현   

<br/>

## 트러블슈팅
### 마우스 드레그로 좌우 스크롤 구현       
마우스를 움직였을 때 더 이상 스크롤을 할 수 없는 상태에서, 반대쪽으로 스크롤을 움직이고 싶을 때, 처음 마우스를 클릭한 지점을 지나쳐야 스크롤이 움직입니다. ( startX(현재 클릭한 pageX와 움직인 스크롤의 길이 scrollLeft를 합친 값의 scrollLeft 값이 변하지 않기 때문에 )

=>[해결방법] DOM의 속성을 이용해서 해결해주었습니다.            
    1. 가장 왼쪽일 때, 움직이고 있는 마우스의 x좌표가 곧 startX로 설정.            
    2. 가장 오른쪽일 때, 움직이고 있는 마우스의 x좌표에 현재 스크롤된 길이 scrollLeft의 합으로 설정               
    
```js
if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
```  

<br/>

### 성능저하
**1. 드레그 슬라이드**      
구현 과정에서 너무 많은 마우스 이벤트로 스크롤 이벤트가 발생하고 성능저하를 야기하였다.       

=>[해결방법]
 throttling을 사용해서 delay를 시켜주는 방식으로 성능을 개선하고자 하였습니다.         

```js
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 50; //속도 50ms만큼 느려짐
  const onThrottleDragMove = throttle(onDragMove, delay);
```

<br/>

**2. 다크모드**         
전역에서 다크모드를 사용할 수 있도록 라우터 페이지에서 useContext를 이용해서 ThmeContext를 만들었습니다         
createContext는 내부에 공유하길 원하는 데이터의 초기값을 넣어두고 value 변수로 묶어줬습니다         
이 때 value는 객체이므로 리렌더링의 주범이 되어 이 데이터를 쓰는 모든 컴포넌트가 매번 리렌더링되었습니다         

=>[해결방법]   
`useMemo,useCallback를 사용한다`           
`객체(함수)자체를 Memoization해준다(값과 콜백을 메모리 어딘가에 저장해두고 필요할 때 가져다 쓴다)`  
toggleTheme 함수로 인해 계속 렌더링되지 않도록 useCallback()을 넣어주었습니다      
useCallback의 디펜던시로 setTheme을 넣어 theme에 변화가 생겼을 때만 랜더링이 되도록 해주었습니다

```js
export const ThemeContext = createContext('light');

function Router() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme(cur => (cur === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme,theme }}>
      <div id={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          		{/*생략*/}
          <Route path="/bookDetail" element={<BookDetail />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
```

<br/>

## 회고 및 느낀점
프론트 개발자로서 편리한 UI와 기능을 제공하는 것만이 중요한 요소라 생각하고 성능 저하를 신경 쓰는 것은 벡엔드의 영역이라고 생각하였습니다. 
프로젝트에서 다양한 마우스 이벤트를 사용하면서 많은 스크롤 이벤트가 발생하였고 프론트에서도 좋은 유저 경험으로 속도 개선을 중요하게 고려해함을 느끼게 되었습니다. 
성능 저하를 막기 위한 방법으로 Debouncing과 Throttling을 학습하였고
이번 프로젝트에서는 스크롤 에벤트를 제어하기 위해 throttling을 사용해서 delay를 시켜주는 방식으로 성능을 개선하고자 하였습니다. 
단순히 보이는 측면만이 아니라 실제로 프로덕트를 이용했을 때 경험할 수 있는 영역까지 생각하는 프론트 개발자가 되겠습니다.


[블로그 회고글]
https://velog.io/@yezee/2%EC%B0%A8-%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%B0%80%EB%A6%AC%EB%8A%94%EC%84%9C%EC%9E%AC
