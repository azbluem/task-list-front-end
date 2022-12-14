# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
   - id, title, isComplete
   - they come from TaskList
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
    - Answer: Any instance of title, id or isComplete has to be preceded by props.
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
3. How is the ~~strikethrough~~ style applied when the task title is clicked?
   Answer: through a function with ternary expression, the style is changed to tasks_item_toggle--completed and the text decoration line-through is added
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.
4. What `props` does `TaskList` have? Where do they come from?
   Answer: it takes tasks, these come from the app
5. Where is the function `getTaskListJSX` called in `TaskList`?
    Answer: in the return statement
    - How would the code change without this helper function?
    - Answers: you can stick the function, and anonymize it in the return statement of TaskList
6. What component is `TASKS` passed to in `App`?
    - How does the component pass `TASKS`?
    - Answer: it is passed to the tasklist element as an array of objects
    - What element is the component wrapped in?
    - Answer: div

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








