import React from 'react';
import MaterialTable from 'material-table';


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Employee's name", field: 'name' },
      { title: 'Division', field: 'division' },
      { title: 'Assignment', field: 'assignment' },
      { title: 'Deadline', field: 'deadline', type: 'date' },
      { title: 'Phone Number', field: 'phone', type: 'numeric' },
      
    ],
    data: [
      { name: 'Mehmet', division: 'Frontend', assignment: 'Create all pages', deadline: '6/26/2020', phone: 12345678 },
      {
        name: 'Zerya Betül',
        division: 'Backend',
        assignment: 'Create Database',
        deadline: '6/26/2020',
        phone: 12345678,
      },
    ],
  });

  return (
    <MaterialTable
      title="Assignment for Employee"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}