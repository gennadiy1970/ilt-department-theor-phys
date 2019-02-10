import React from "react";
import { FormattedMessage } from "react-intl";

import ilt_common from "../data/ilt_common";
import Layout from "../components/LanguageWrapper/LanguageWrapper";

const User = ({ extraProp }) => {
  return (
    <Layout
      children={
        <div className="container p-5 shadow">
          <div className="row">
            <div class="media">
              <img
                src={"../images/" + [extraProp.name.foto]}
                class="shadow-sm rounded m-3"
                alt={extraProp.name.defaultMessage}
                width="200"
              />
              <div class="media-body my-3">
                <h1 class="mt-0  text-center">
                  <FormattedMessage
                    id={extraProp.name.id}
                    defaultMessage={extraProp.name.defaultMessage}
                    description={extraProp.name.description}
                  />
                  &nbsp;
                  <FormattedMessage
                    id={extraProp.surname.id}
                    defaultMessage={extraProp.surname.defaultMessage}
                    description={extraProp.surname.description}
                  />
                </h1>
                <ul className="list-group">
                  <li
                    className="list-group-item mx-3"
                    key={ilt_common.ilt_name.id}
                  >
                    <a href={ilt_common.ilt_name.to} className="">
                      <FormattedMessage
                        id={ilt_common.ilt_name.id}
                        defaultMessage={ilt_common.ilt_name.defaultMessage}
                        description={ilt_common.ilt_name.description}
                      />
                    </a>
                  </li>
                  <li
                    className="list-group-item mx-3"
                    key={ilt_common.ilt_adress.id}
                  >
                    <FormattedMessage
                      id={ilt_common.ilt_adress.id}
                      defaultMessage={ilt_common.ilt_adress.defaultMessage}
                      description={ilt_common.ilt_adress.description}
                    />
                  </li>
                </ul>
                <ul className="list-group mt-3">
                  {extraProp.fax.fax ? (
                    <li
                      className="list-group-item mx-3"
                      key={extraProp.fax.fax}
                    >
                      <i class="fas fa-fax" />

                      <span className="mx-3">
                        {"+ (380)-57-" + extraProp.fax.fax}
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                  {extraProp.tel.tel ? (
                    <li
                      className="list-group-item mx-3"
                      key={extraProp.tel.tel}
                    >
                      <i class="fas fa-phone" />
                      <span className="mx-3">
                        {"+ (380)-57-" + extraProp.tel.tel}
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                  {extraProp.email.email ? (
                    <li
                      className="list-group-item mx-3"
                      key={extraProp.email.email}
                    >
                      <i class="fas fa-at" />
                      <a
                        href={"mailto:" + extraProp.email.email}
                        className="mx-3"
                      >
                        {extraProp.email.email}
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="text-center">
                <p>
                  <FormattedMessage
                    id={ilt_common.research_area.id}
                    defaultMessage={ilt_common.research_area.defaultMessage}
                    description={ilt_common.research_area.description}
                  />
                </p>
              </h3>
              <ul className="list-group col">
                {extraProp.research_area.defaultMessage.split(",").map(e => (
                  <li className="list-group-item mx-3" key={e.slice(-5)}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {extraProp.main_achievements ? (
            <div className="row">
              <div className="col">
                <h3 className="text-center">
                  <p>
                    <FormattedMessage
                      id={ilt_common.main_achievements.id}
                      defaultMessage={
                        ilt_common.main_achievements.defaultMessage
                      }
                      description={ilt_common.main_achievements.description}
                    />
                  </p>
                </h3>
                <ul className="list-group col">
                  {extraProp.main_achievements.defaultMessage
                    .split(",")
                    .map(e => (
                      <li className="list-group-item mx-3" key={e.slice(-5)}>
                        {e}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          {extraProp.ast_5_years_activity ? (
            <div className="row my-5">
              <div className="col">
                <h3 className="text-center">
                  <p>
                    <FormattedMessage
                      id={ilt_common.ast_5_years_activity.id}
                      defaultMessage={
                        ilt_common.ast_5_years_activity.defaultMessage
                      }
                      description={ilt_common.ast_5_years_activity.description}
                    />
                  </p>
                </h3>
                <p className="lead text-indent-to-span">
                  <FormattedMessage
                    id={extraProp.ast_5_years_activity.id}
                    defaultMessage={
                      extraProp.ast_5_years_activity.defaultMessage
                    }
                    description={extraProp.ast_5_years_activity.description}
                  />
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* <p>
            <FormattedMessage
              id={extraProp.name.id}
              defaultMessage={extraProp.name.defaultMessage}
              description={extraProp.name.description}
            />
          </p> */}
        </div>
      }
    />
  );
};
export default User;
