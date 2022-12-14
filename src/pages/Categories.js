import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>
        Status :
        {status}
      </h1>
      <button
        type="button"
        className="check-status-button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};
export default Categories;
