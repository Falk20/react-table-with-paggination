import React from 'react';
import { render } from '@testing-library/react';
import ReactTable from './ReactTable.jsx';
import ViewInfoPopup from './components/ViewInfoPopup.jsx';

test('Рендер кнопок для подгрузки данных', () => {
  const { getByText } = render(<ReactTable />);
  const smallData = getByText(/32 записи/i);
  expect(smallData).toBeInTheDocument();
  const bigData = getByText(/1000 записей/i);
  expect(bigData).toBeInTheDocument();
});

test('Рендер popup с выбранной записью', () => {
  let record = {
    "id": 423,
    "firstName": "Василий",
    "lastName": "Петрук",
    "email": "petruk0908@gmail.com",
    "phone": "89267151084",
    "address": {
      "streetAddress": "Кураганская, 46",
      "city": "Кувандык",
      "state": "Оренбургская область",
      "zip": "462243"
    },
    "description": "Начинающий разработчик"
  };
  const { getByText } = render(<ViewInfoPopup choosenRecord={record} />);

  const email = getByText(/petruk0908@gmail\.com/i);
  expect(email).toBeInTheDocument();
});