import React from 'react';

export function About() {
  return (
    <React.Fragment>
      <h2 style={contentStyle}>About Todo App</h2>

      <p style={contentStyle}>
      ToDo is  app that generally used to maintain our day-to-day tasks everything that we have to do. It is helpful in planning our daily schedules.
      </p>
      <p style={contentStyle}>
        This is React Todo App which user can able to add the To Do to List and can be deleted once its Completed.
      </p>
    </React.Fragment>
  );
}

const contentStyle = {
  margin: '10px 0',
  padding: '20px'
};


