import React, { useState } from "react"
import styled from "styled-components"
import Map from "./api/Map"

const Container = styled.div`
  width: 1740px;
  height: 970px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.reviewPage.backgroundColor};
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

const MapContainer = styled.div`
  width: 1600px;
  height: 820px;
  border-width: thick;
  border-color: pink;
  bordr-style: solid;
  border-radius: 30px;
  position: relative;
`

const Search = styled.input`
  width: 300px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 70px;
  border-radius: 30px 0px 0px 30px;
  z-index: 2;
  font-size: 20px;
`

const SearchForm = styled.form``

const SearchBtn = styled.button`
  width: 50px;
  height: 45px;
  position: absolute;
  top: 10px;
  right: 20px;
  border-radius: 0px 30px 30px 0px;
  z-index: 2;
  background-color: #fff;
  color: #333;
  &:hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

function MapSection() {
  const [InputText, setInputText] = useState("")
  const [Place, setPlace] = useState("")

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText("")
  }

  return (
    <>
      <div
        className="section"
        style={{
          backgroundColor: `${(props) =>
            props.theme.questionPage.backgroundColor}`,
        }}
      >
        <Container>
          <MapContainer>
            <SearchForm className="inputForm" onSubmit={handleSubmit}>
              <Search
                placeholder="검색어를 입력하세요"
                onChange={onChange}
                value={InputText}
              />
              <SearchBtn type="submit">검색</SearchBtn>
            </SearchForm>
            <Map searchPlace={Place} />
          </MapContainer>
        </Container>
      </div>
    </>
  )
}

export default MapSection
