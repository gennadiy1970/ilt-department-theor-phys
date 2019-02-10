/*
 futher_name: {
    defaultMessage: " ", -- space must have!

    research_area - "тема1, тема2" разделяем темы запятой
*/

const charkina = {
  id: "charkina",
  name: {
    id: "first_name.oksana",
    defaultMessage: "Oksana",
    description: "Name",
    foto: "charkina.jpg"
  },
  surname: {
    id: "last_name.charkina",
    defaultMessage: "Charkina",
    description: "Surname"
  },
  futher_name: {
    id: "futher_name.victor.w",
    defaultMessage: " ",
    description: "Futher Name"
  },
  tel: {
    id: "tel",
    defaultMessage: "tel",
    tel: "341-08-12",
    description: "Phone number"
  },
  fax: {
    id: "fax",
    defaultMessage: "fax",
    description: "fax",
    fax: ""
  },
  email: {
    id: "email",
    defaultMessage: "email",
    email: "charkina@ilt.kharkov.ua",
    description: "Email"
  },
  positions: {
    id: "researcher",
    defaultMessage: "Researcher",
    description: "Researcher"
  },
  post_graduated_phd: {
    id: "post_graduated_phd",
    defaultMessage: "PhD Phys & Math",
    history: "ILTPE, 2011",
    description: "Post-graduate PhD"
  },
  post_graduated_phd_short: {
    id: "post_graduated_phd.short",
    defaultMessage: "PhD",
    history: "ILTPE, 2011",
    description: "Post-graduate PhD"
  },
  post_graduated_dsc: {
    id: "post_graduated_dsc",
    defaultMessage: "",
    history: "",
    description: "DSc"
  },
  post_graduated_dsc_short: {
    id: "post_graduated_dsc.short",
    defaultMessage: "",
    history: "",
    description: "DSc"
  },
  research_area: {
    id: "research_area.charkina",
    defaultMessage:
      "The theory of nonlinear phenomena in condensed matter physics based on the soliton concept and its applications for description of nonlinear effects in solids",
    description: "Research Area"
  },
  last_5_years_activity: {
    id: "last_5_years_activity.charkina",
    defaultMessage:
      "Subjects of current investigations include theoretical research of the non-stationary and internal dynamics of topological solitons, and conditions of formation and propagation of bound soliton complexes and breather excitations in nonlinear systems with the strong dispersion and complicated microstructure, computer simulation of the soliton-complexes nonstationary dynamics; exact theoretical description of spin waves scattering by moving domain walls in anisotropic antiferromagnets in a magnetic field; theory of the local negative magnetic permeability in nonlinear metamaterials and possibility of observation of breather excitations in such systems",
    description: "Last 5 years activity"
  }
};

export default charkina;
