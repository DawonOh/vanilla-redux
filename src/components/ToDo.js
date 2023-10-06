import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
//   };
// };

// export default connect(null, mapDispatchToProps) (ToDO);
export default ToDo;
