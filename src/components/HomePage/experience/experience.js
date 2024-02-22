import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineContent = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Timeline = () => {
  return (
    <TimelineWrapper>
      <h1>Experiência profissional</h1>
      <TimelineItem>
        <div>
          <h2>2020</h2>
          <p>Evento importante em 2020</p>
        </div>
        <TimelineContent>
          <h2>2020</h2>
          <p>Evento importante em 2020</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <div>
          <h2>2018</h2>
          <p>Outro evento em 2018</p>
        </div>
        <TimelineContent>
          <h2>2018</h2>
          <p>Outro evento em 2018</p>
        </TimelineContent>
      </TimelineItem>
    </TimelineWrapper>
  );
};

export default Timeline;
