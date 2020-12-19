import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaChevronRight, FaCalculator, FaPlus, FaBeer, FaSpinner, FaRegSurprise, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import {
  BodyPage,
  Title, Subtitle, Container, Profile, PictureBorder, RepositoryList, RepositoryInfos,
  SocialMedias, SocialMedia, RepositoryTitle,
  RepositoryDescription, GithubContainer, GithubStats, Easteregg, Links, LoadingContainer, Footer
} from './styles'

import api from '../../services/api'

export default class Main extends Component {
  state = {
    repositories: [],
    colorRnd: '#00b386',
    easterEggCounter: 0,
    profilePicture: 'https://avatars1.githubusercontent.com/u/6742811?s=400&u=08e0915ca288e05e885b4bde2193c5cc23d763c9&v=4'
  };

  async componentDidMount() {
    this.setState({ repositories: [] });

    const response = await api.get('/users/rcolzani/repos?sort=updated&direction=desc');

    if (response) {
      this.setState({
        repositories: response.data.sort((a, b) => a.updated_at < b.updated_at).slice(0, 5)
      })
    }
    this.myInterval = setInterval(() => {
      this.setState({ colorRnd: this.randomColor() });
    }, 7000)

  }

  async _onMouseMove(e) {
    // this.setState({ colorRnd: this.randomColor() });
  }

  getIntegerRandom() {
    const min = Math.ceil(0);
    const max = Math.floor(255);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  randomColor() {
    return "#" + this.componentToHex(this.getIntegerRandom()) + this.componentToHex(this.getIntegerRandom()) + this.componentToHex(this.getIntegerRandom());
  }

  render() {
    const { repositories, easterEggCounter } = this.state;

    return (
      <BodyPage colorRnd={this.state.colorRnd}>
        <Container>
          <Profile>
            <PictureBorder colorRnd={this.state.colorRnd} onClick={() => this.setState({ easterEggCounter: easterEggCounter + 1 })}>
              <img alt="Foto perfil do Github" src={this.state.profilePicture} />
            </PictureBorder>
            <Title colorRnd={this.state.colorRnd}>Ricardo Colzani</Title>
            <Subtitle>Apaixonado por tecnologia <FaHeart color={this.state.colorRnd} /> e desenvolvedor de soluções: VB.net, JavaScript, CSS, ReactJS, React Native, NodeJS...

          </Subtitle>
            <SocialMedias>
              <SocialMedia href="https://www.linkedin.com/in/ricardocolzani/">
                <FaLinkedin />
                <span>/ricardocolzani</span>
              </SocialMedia>
              <SocialMedia href="https://github.com/rcolzani">
                <FaGithub />
                <span>/rcolzani</span>
              </SocialMedia>
            </SocialMedias>
            {easterEggCounter >= 10 &&
              <Easteregg>
                <span>Surpriseeee!!! <FaRegSurprise size={35} /></span>
                <Links>
                  <Link to="/calculator">
                    <div><FaCalculator /><FaPlus /><FaBeer /></div>
                    <span>Calculador CxB</span>
                  </Link>
                </Links>

              </Easteregg>
            }
          </Profile>
          <GithubContainer>
            <h2>GitHub</h2>
            <span>Últimos 5 repositórios atualizados</span>
            {repositories.length > 0 ?
              <RepositoryList colorRnd={this.state.colorRnd}>
                {repositories.map(repository => (
                  <li key={repository.name}>
                    <RepositoryInfos>
                      <RepositoryTitle>{repository.name}</RepositoryTitle>
                      <RepositoryDescription>{new Date(repository.updated_at).toLocaleDateString('pt-BR', { dateStyle: "short" })}</RepositoryDescription>
                    </RepositoryInfos>
                    <a href={repository.html_url}>Acessar <FaChevronRight /> </a>
                  </li>
                ))}
              </RepositoryList>
              : <LoadingContainer>
                <span id="loadingrepos">Buscando repositórios no Github <FaSpinner color={this.state.colorRnd} size={50} /></span>
                <Typical steps={[
                  'Esta busca é bem rápida 😁', 2000,
                  'Ué, deve ter algum problema 🤔', 2000,
                  'Não consegui alcançar a API do Github. Mas você pode acessar através do botão que tem ali em cima ☝', 2000
                ]}
                />
              </LoadingContainer>}
            <GithubStats>
              <img src="https://github-readme-stats.vercel.app/api?username=rcolzani&show_icons=true&theme=dark" />
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rcolzani&layout=compact&theme=dark" />
              {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rcolzani&theme=dark" /> */}

            </GithubStats>
          </GithubContainer>

        </Container>

      </BodyPage>

    );
  }
}

