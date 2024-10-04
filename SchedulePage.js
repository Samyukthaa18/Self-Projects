import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SchedulePage = ({ userProfile }) => {
  
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    if (!userProfile || !userProfile.skinType) {
      console.log('No user profile or skin type found.');
      return;
    }

    let scheduleData = [];

    switch (userProfile.skinType) {
      case 'dry':
        scheduleData = [
          { day: 'Day 1 - Exfoliation', routine: 'Cleansing Oil + Foaming Face wash + AHA/BHA Serum + Moisturizer' },
          { day: 'Day 2 - Hydration', routine: 'Cleansing Oil + Foaming Face wash + Hydration Mask + Hyaluronic Acid' },
          { day: 'Day 3 - Calming', routine: 'Cleansing Oil + Foaming Face wash + Ampoule + Moisturizer' },
          { day: 'Day 4 - Calming', routine: 'Cleansing Oil + Foaming Face wash + Ampoule + Moisturizer' },
        ];
        break;
      case 'oily':
        scheduleData = [
          { day: 'Day 1 - Exfoliation', routine: 'Oil-Free Cleanser + Salicylic Acid + Moisturizer' },
          { day: 'Day 2 - Hydration', routine: 'Oil-Free Cleanser + Hydration Serum + Lightweight Moisturizer' },
          { day: 'Day 3 - Oil Control', routine: 'Oil-Free Cleanser + Niacinamide Serum + Mattifying Moisturizer' },
          { day: 'Day 4 - Calming', routine: 'Oil-Free Cleanser + Soothing Gel + Oil-Free Moisturizer' },
        ];
        break;
      case 'sensitive':
        scheduleData = [
          { day: 'Day 1 - Exfoliation', routine: 'Gentle Cleanser + Lactic Acid + Soothing Cream' },
          { day: 'Day 2 - Hydration', routine: 'Gentle Cleanser + Hyaluronic Acid + Barrier Repair Moisturizer' },
          { day: 'Day 3 - Calming', routine: 'Gentle Cleanser + Niacinamide + Moisturizer' },
          { day: 'Day 4 - Calming', routine: 'Gentle Cleanser + Ceramide Cream + Sunscreen' },
        ];
        break;
      case 'combination':
        scheduleData = [
          { day: 'Day 1 - Exfoliation', routine: 'Gel Cleanser + AHA/BHA + Lightweight Moisturizer' },
          { day: 'Day 2 - Hydration', routine: 'Gel Cleanser + Hyaluronic Acid + Gel Moisturizer' },
          { day: 'Day 3 - Balancing', routine: 'Gel Cleanser + Niacinamide + Lightweight Moisturizer' },
          { day: 'Day 4 - Calming', routine: 'Gel Cleanser + Soothing Serum + Gel Moisturizer' },
        ];
        break;
      default:
        scheduleData = [
          { day: 'Day 1 - Routine', routine: 'Basic Routine: Cleanser + Moisturizer + Sunscreen' },
        ];
        break;
    }

    setScheduleData(scheduleData);  
  }, [userProfile]);

  
  if (!scheduleData.length) return <p>Loading schedule...</p>;

  return (
    <ScheduleContainer>
      <h2>Your Skincare Schedule</h2>
      <ScheduleList>
        {scheduleData.map((item, index) => (
          <ScheduleItem key={index}>
            <Day>{item.day}</Day>
            <Routine>{item.routine}</Routine>
          </ScheduleItem>
        ))}
      </ScheduleList>
      <NotifyButton>Notify Me</NotifyButton>
    </ScheduleContainer>
  );
};

export default SchedulePage;

// Styled Components
const ScheduleContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ScheduleList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const ScheduleItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`;

const Day = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Routine = styled.p`
  font-size: 16px;
  color: #555;
`;

const NotifyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
