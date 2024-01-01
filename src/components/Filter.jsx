import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <>
      <h2 className="title">Contacts</h2>
      <label htmlFor="filter" className="filter-label">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className="filter-input"
        onChange={handleFilter}
      />
    </>
  );
};

export default Filter;
