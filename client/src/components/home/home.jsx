import React from 'react';
import { ActionAddEmployeeUI } from '../../state/action';
import useData from '../../state/dataLayer';

function Home() {
  const [{ uiStates }, dispatch] = useData();

  console.log(uiStates);
  const updateState = () =>
    ActionAddEmployeeUI(dispatch, !uiStates.employee.addEmpDrawer);
  return (
    <div>
      <p> Am in home</p>
    </div>
  );
}

export default Home;
