import React from "react";
import Dialog from "../Dialog/Dialog";

type FloodPageProps = {
  loginName: string,
}

const FloodPage: React.FC<FloodPageProps> = (props) => {
  return (
    <>
      <div className="col s3">Список личных чатов</div>
      <div className="col s9 App-message-list">
        <Dialog nameUser={props.loginName} dialogId="flood" />
      </div>
    </>
  );
}

export default FloodPage;