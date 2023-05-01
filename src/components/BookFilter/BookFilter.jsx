import React from 'react';
import { FilterDiv, FilterInput } from './BookFilter.styled.jsx';

export function BookFilter({ handleChange, value }) {
  return (
    <FilterDiv>
      Filter
      <FilterInput
        type="text"
        value={value}
        onChange={handleChange}
        name="filter"
      />
    </FilterDiv>
  );
}
