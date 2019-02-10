import React from "react";
import { FormattedMessage } from "react-intl";

// import Layout from "../components/Layout/Layout";
import Layout from "../components/LanguageWrapper/LanguageWrapper";

const We_remember = () => {
  return (
    <Layout
      children={
        <div className="container pt-5">
          <div className="row my-5">
            <div className="col-12">
              <h1>
                {/* <FormattedMessage
                  id="contacts.h1.title"
                  defaultMessage="Contacts page"
                  description="Title of page"
                /> */}
                We Remember
              </h1>
              {/* <p>
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
              </p> */}
              <div>
                <img
                  width="200"
                  alt="КОСЕ́ВИЧ Арнольд Маркович"
                  src="../images/rip-kocevich.jpg"
                />
              </div>
              <p>
                <b>КОСЕ́ВИЧ Арнольд Маркович</b> (07. 07. 1928, м. Тульчин, нині
                Вінн. обл. – 10. 03. 2006, Харків) – фізик. Брат{" "}
                <a href="search_articles.php?id=5503">В. Косевича</a>. Д-р
                фіз.-мат. н. (1964), проф. (1967), чл.-кор. НАНУ (1990). Засл.
                діяч н. і т. України (1997). Держ. премії УРСР (1978) та України
                (2001) в галузі н. і т. Премія ім. К. Синельникова НАНУ (1999).
                Закін. Харків. ун-т (1951). Працював у Харків. політех. ін-ті
                (1953–54); Чернів. ун-ті (1954–57); Харків. фіз.-тех. ін-ті
                (1957–74): ст. н. с., від 1967 – нач. лаб. кристаліч. стану; у
                Фіз.-тех. ін-ті низьких т-р НАНУ (Харків, 1974–2006): зав.
                відділу теорії властивостей біол. молекул, від 1986 – відділу
                квант. теорії та неліній. динаміки макроскоп. систем, від 2003 –
                гол. н. с. За сумісн. 1964–72 – у Харків. ун-ті: від 1965 –
                проф. каф. теор. фізики. Дослі­­джував електронні властивості
                металів, динаміку реал. криста­­лів і магнітовпорядков. тіл.
                Спіль­­но з{" "}
                <span class="L">
                  <i>І. Ліфшицем</i>
                </span>{" "}
                відкрив явище квант. розмір. ефекту у плівках твердих тіл (1953)
                і встановив зв’язок осциляцій магніт. властивостей металів із
                формою їх поверхні Фермі (формула Ліф­­шиця–К., 1954). Розробив
                динам. теорію дислокацій як розділ теорії пружності реал.
                кристалів; теорію магніт. солітонів у феромагнетиках. Зробив
                вагомий внесок у розвиток теорії низькотемператур. магнетизму
                металів, неліній. фізики феромагнетиків, теорії кристаліч.
                ста­­ну речовини, зокрема щодо ди­­наміки кристаліч. ґратки з
                дефектами.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default We_remember;
