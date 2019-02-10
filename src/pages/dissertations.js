import React from "react";
import { FormattedMessage } from "react-intl";

// import Layout from "../components/Layout/Layout";
import Layout from "../components/LanguageWrapper/LanguageWrapper";

const Dissertations = () => {
  return (
    <Layout
      children={
        <div className="container pt-5">
          <div className="row my-5">
            <div className="col-12">
              <h1 className="text-center">
                {/* <FormattedMessage
                  id="about.h1.title"
                  defaultMessage="About page"
                  description="Title of page"
                /> */}
                Диссертации
              </h1>
              <h3 className="text-center">ДОКТОРСКИЕ ДИССЕРТАЦИИ</h3>

              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Год защиты</th>
                    <th scope="col">Диссертант</th>
                    <th scope="col">Место защиты</th>
                    <th scope="col">Название диссертации</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2018</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2016</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2015</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-center">КАНДИДАТСКИЕ ДИССЕРТАЦИИ</h3>

              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Год защиты</th>
                    <th scope="col">Диссертант</th>
                    <th scope="col">Научный руководитель</th>
                    <th scope="col">Место защиты</th>
                    <th scope="col">Название диссертации</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2018</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2016</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2015</th>
                    <td colspan="2">Larry the Bird</td>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
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
export default Dissertations;
