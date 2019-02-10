import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Layout from "../components/LanguageWrapper/LanguageWrapper";
import stuff_list from "../data/stuff_list";
import head from "../data/krive";

const Home = () => {
  return (
    <Layout
      children={
        <div className="container my-5">
          <div className="row">
            <h4 className="col-12 my-3">Head of the Department</h4>
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card w-100">
                <div className="card-header">
                  <h4>
                    <a href="./user/krive">
                      <FormattedMessage
                        id={head.name.id}
                        defaultMessage={head.name.defaultMessage}
                        description={head.name.description}
                      />
                      &nbsp;
                      <FormattedMessage
                        id={head.surname.id}
                        defaultMessage={head.surname.defaultMessage}
                        description={head.surname.description}
                      />
                    </a>
                  </h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-at" />{" "}
                    <a href="mailto:krive@ilt.kharkov.ua" className="mx-3">
                      krive@ilt.kharkov.ua
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-phone" />
                    <span className="mx-3">+38(057) 341-09-90</span>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-fax" />
                    <span className="mx-3">+(38)-057-340-33-70</span>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-fax" />
                    <span className="mx-3">+38(057)-333-55-93</span>
                  </li>
                  <li className="list-group-item">
                    Secretary: <i className="h5">Obryadova Eleonora</i>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-at" />{" "}
                    <a href="mailto:obryadova@ilt.kharkov.ua" className="mx-3">
                      obryadova@ilt.kharkov.ua
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <h4 className="col-12 my-3">Stuff</h4>
            <ul className="list-group list-group-flush list-unstyled">
              {stuff_list.map(e => (
                <li key={e.id} className="list-group-item my-3 ml-5">
                  <h5>
                    <Link to={"/user/" + e.id} className="" id={e.id}>
                      <FormattedMessage
                        id={e.name.id}
                        defaultMessage={e.name.defaultMessage}
                        description={e.name.description}
                      />
                      &nbsp;
                      <span className="">
                        {/* {e.futher_name.defaultMessage ? ( */}
                        <FormattedMessage
                          id={e.futher_name.id}
                          defaultMessage={e.futher_name.defaultMessage}
                          description={e.futher_name.description}
                        />
                        {/* ) : (
                          ""
                        )} */}
                      </span>
                      &nbsp;
                      <FormattedMessage
                        id={e.surname.id}
                        defaultMessage={e.surname.defaultMessage}
                        description={e.surname.description}
                      />
                    </Link>
                    ,
                    <span className="mx-2">
                      <FormattedMessage
                        id={e.positions.id}
                        defaultMessage={e.positions.defaultMessage}
                        description={e.positions.description}
                      />
                      ,
                    </span>
                    <span className="mx-2">
                      {e.post_graduated_dsc_short.defaultMessage ? (
                        <FormattedMessage
                          id={e.post_graduated_dsc_short.id}
                          defaultMessage={
                            e.post_graduated_dsc_short.defaultMessage
                          }
                          description={e.post_graduated_dsc_short.description}
                        />
                      ) : e.post_graduated_phd_short.defaultMessage ? (
                        <FormattedMessage
                          id={e.post_graduated_phd_short.id}
                          defaultMessage={
                            e.post_graduated_phd_short.defaultMessage
                          }
                          description={e.post_graduated_phd_short.description}
                        />
                      ) : (
                        ""
                      )}
                    </span>
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Home;
