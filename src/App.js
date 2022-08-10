import React, { useState } from 'react';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar'
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import format from 'date-fns/format'

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';
const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
]

const App = () => {

  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  })

  const handleDateSelect = (date) => {
    setSelectionConfiguration({
      type: CALENDAR_SELECTION_TYPE.single,
      date: date,
    })
  }

  const onClick = () => {
    alert("it works!")
  }
  return (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <div>
      <BpkCalendar
        id='calendar'
        onDateSelect={handleDateSelect}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        daysOfWeek={daysOfWeek}
        weekStartsOn={0}
        changeMonthLabel="Change month"
        nextMonthLabel="Next month"
        previousMonthLabel="Previous month"
        selectionConfiguration={selectionConfiguration}      
      />
      </div>
      <BpkButton onClick={onClick}>Continue</BpkButton>
    </main>
  </div>
);}

export default App;