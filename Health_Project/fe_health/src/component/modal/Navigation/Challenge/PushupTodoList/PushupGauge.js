import React from "react"
import BatteryGauge from "react-battery-gauge"
import styled from "styled-components"

const Container = styled.div`
  width: 400px;
  height: 470px;
  position: absolute;
  top: -20px;
  left: -460px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PushupGauge = (props) => {
  return (
    <>
      <Container>
        <BatteryGauge
          maxValue={props.total === 0 ? 1000000 : 5000 / props.value}
          orientation={"vertical"}
          animated={true}
          style={{
            width: "400px",
            height: "400px",
          }}
        />
      </Container>
    </>
  )
}

export default PushupGauge
