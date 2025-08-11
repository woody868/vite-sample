import { useState } from 'react' // 리액트 기능 가져오기 (useState는 리액트 훅 중 하나로, 컴포넌트의 상태를 관리하는 데 사용됩니다.)
import reactLogo from './assets/react.svg' // 이미지들
import viteLogo from '/vite.svg'
import './App.css' //스타일

function App() {
  const [count, setCount] = useState(0) // 숫자 기억하는 상자
  // count = 현재 숫자, setCount = 숫자 바꾸는 함수

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>글을 바꿔보았다.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {/* 버튼 누르면 숫자 증가! */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
