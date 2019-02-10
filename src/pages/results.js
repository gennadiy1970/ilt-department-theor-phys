import React from "react";
// import { FormattedMessage } from "react-intl";

// import Layout from "../components/Layout/Layout";
import Layout from "../components/LanguageWrapper/LanguageWrapper";

const Results = () => {
  return (
    <Layout
      children={
        <div className="container pt-5">
          <div className="row my-5">
            <div className="col-12">
              <h1>ОСНОВНЫЕ РЕЗУЛЬТАТЫ ЗА 50 ЛЕТ (1969–2019)</h1>
              <p>
                В 1969 году ... организовал в Физико-техническом институте
                низких температур АН Украины отдел теоретической физики, который
                в 80–90-е годы стал одним из ведущих исследовательских центров в
                мире в области ...
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Results;
