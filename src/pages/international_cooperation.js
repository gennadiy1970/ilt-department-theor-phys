import React from "react";
import { FormattedMessage } from "react-intl";

// import Layout from "../components/Layout/Layout";
import Layout from "../components/LanguageWrapper/LanguageWrapper";

const International_cooperation = () => {
  return (
    <Layout
      children={
        <div className="container pt-5">
          <div className="row my-5">
            <div className="col-12">
              <h1>
                <FormattedMessage
                  id="International_cooperation.title"
                  defaultMessage="International_cooperation page"
                  description="Title of page"
                />
              </h1>
              <p>
                <FormattedMessage
                  id="home.p"
                  defaultMessage="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eos
              quia natus, beatae mollitia quaerat harum, deserunt animi sit itaque
              nesciunt odit repellat, ipsum quasi sapiente voluptatibus
              reprehenderit quas omnis? Modi, rerum amet? Dolorum labore, magni
              ipsa molestiae consequatur, facere repellendus unde eius ratione
              commodi est illum, similique tenetur debitis incidunt reiciendis."
                  description="Title of page"
                />
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};
export default International_cooperation;
