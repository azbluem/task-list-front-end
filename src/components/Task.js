import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const complete = props.isComplete;
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  function getColorFromPrice() {
    if (props.isComplete===true) {
      return '--completed';
    } else {
      return '';
    }
  }
  // tasks__item__toggle ${buttonClass}
  const updateComplete = props.updateComplete;
  console.log('task');
  // const formatDict = {
  //   true: 'tasks__item__toggle--completed',
  //   false: 'tasks__item__toggle'
  // }
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle${getColorFromPrice}`}
        onClick={() => updateComplete(props.id)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete:PropTypes.func.isRequired
};

export default Task;
