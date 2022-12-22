import React, {useState} from 'react';
import PropTypes from 'prop-types';

const INITIAL_FORM_DATA = {
    title:'',
    description:''
};

const NewTaskForm = (props) => {
  const [taskData,setTaskData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
        ...taskData,
        [e.target.name]:e.target.value
    };
    setTaskData(newFormData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addTaskCallbackFunc(taskData);
  };

  return (
    <form onSubmit={submitForm}>
        <label htmlFor="title">Task Title</label>
        <input type='text' id='title' name='title' value={taskData.title} onChange={handleChange}/>
        <br></br>
        <label htmlFor="description">Task Description</label>
        <input type='text' id='description' name='description' value={taskData.description} onChange={handleChange}/>
        <br></br>
        <input type='submit' value='submit'/>
    </form>
  );
};

NewTaskForm.propTypes = {
    addTaskCallbackFunc:PropTypes.func.isRequired,
};

export default NewTaskForm;
