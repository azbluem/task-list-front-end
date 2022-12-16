import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  // const complete = props.isComplete;
  // let buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  const toggleComplete = () => {
    console.log('task');
    return props.updateComplete(props.id, props.isComplete);
  };

  // const taskClass = () => {
  //   return formatDict[props.isComplete];
  // }

  const formatDict = {
    true: 'tasks__item__toggle--completed',
    false: '',
  };
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${formatDict[props.isComplete]}`}
        onClick={toggleComplete}
      >
        {props.title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
