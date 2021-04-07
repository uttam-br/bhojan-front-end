import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  display: flex;
  align-items: center;
`;
const IndicatorIcon = styled.div`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
const RedIndicator = styled(IndicatorIcon)`
  background-color: tomato;
`;
const GreenIndicator = styled(IndicatorIcon)`
  background-color: green;
`;

function StatusIndicator({ text, indicatorStatus }) {
  return (
    <Indicator>
      {indicatorStatus ? <GreenIndicator /> : <RedIndicator />}
      <p>{text}</p>
    </Indicator>
  );
}

export default StatusIndicator;
