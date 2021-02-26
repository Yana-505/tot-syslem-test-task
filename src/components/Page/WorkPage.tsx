import React from "react";
import Dialog from "../Dialog/Dialog";

type WorkPageProps = {
  loginName: string,
}

const WorkPage: React.FC<WorkPageProps> = (props) => {
  return (
    <>
      <div className="col s3">Список рабочих чатов</div>
      <div className="col s9 App-message-list">
        <Dialog nameUser={props.loginName} dialogId="work"/>
      </div>
    </>
  );
}

export default WorkPage;