import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function App() {

  // 주의! API_KEY와 location 변수는 url보다 먼저 선언되어야 한다.
  const API_KEY = "229cba0e603289b81331e83cb26a9502";
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}`;

  const searchWeather = async (e) => {
    // 비동기 처리 : async, await
    // 동기 처리? setTimeout, callback, promise
    if(e.key === 'Enter') {
      try {
        const data = await axios ({
          method: 'get', // 방식 : 조회(get)
          url: url
        })
        console.log(data);

      } 
      catch (err) {
        alert(err);

      }
    }
  }

  return (
    <ApppWrap>
      <div className="appContentWrap">
        <input
        placeholder='도시를 입력하세요'
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        type='text'
        onKeyDown={searchWeather} // 값 입력 후 엔터를 누르면 날씨정보 호출
        />

      </div>
    </ApppWrap>
  );
}

export default App;

const ApppWrap = styled.div`
width: 100ww;
height: 100vh;
border: 1px black solid;

.appContentWrap {
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  position: absolute;
  border: 1px solid blue;
  padding: 20px;

}

`;