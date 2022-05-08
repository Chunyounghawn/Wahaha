
import {
  Main, Thumbs_up, Placeholder, Headphone, Smartphone
} from '../image/index.js'

import styled from "styled-components"

const NavigationStyle = styled.div`
position:fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
right: 0;
top: 0;
height: 100% ;
background: #F9D9CA;
z-index: 100;

img{
  margin: 12px;
  width: 70px;
  height: 70px;
}

img.attrs{
  src:${props => props.src}
}
`



const Navigation = () => {
  return (
    <>
      <NavigationStyle>
        <ul>
          <li data-menuanchor="MainPage">
            <a href="#MainPage">
              <img src={Main} alt="메인페이지" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="StrengthPage" >
            <a href="#StrengthPage">
              <img src={Thumbs_up} alt="앱장점" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="ReviewPage" >
            <a href="#ReviewPage">
              <img src={Placeholder} alt="리뷰" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="MapPage" >
            <a href="#MapPage">
              <img src={Headphone} alt="지도" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="QuestionPage" >
            <a href="#QuestionPage">
              <img src={Smartphone} alt="고객센터" />
            </a>
          </li>
        </ul>
      </NavigationStyle>
    </>
  )
}

export default Navigation