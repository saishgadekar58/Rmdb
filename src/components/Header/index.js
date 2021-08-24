import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.jpg";
import TMDBLogo from "../../images/tmdb_logo.jpg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

Header.prototypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Header;
