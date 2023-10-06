import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
  const id = useParams().id;
  const toDo = useSelector((state) => state);
  const toDoObj = toDo.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDoObj?.text}</h1>
      <h5>Created at: {toDoObj?.id}</h5>
    </>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   const {
//     match: {
//       params: { id },
//     },
//   } = ownProps;
//   return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
// };

// export default connect(mapStateToProps)(Detail);
export default Detail;
