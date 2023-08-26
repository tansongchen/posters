import React, { Children, PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: #213547;
    background-color: #ffffff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    --julia-blue: #4063d8;
    --julia-green: #389826;
    --julia-purple: #9558b2;
    --julia-red: #cb3c33;
  }

  body {
    margin: 1in auto;
    border-radius: 0.2in;
    box-shadow: 0 0 1in hsla(0deg 0% 0% / 0.75);
    display: flex;
    flex-direction: column;
    width: 30in;
    height: 40in;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
`;

const Header = styled.header`
  height: 8in;
  width: 100%;
  background-image: linear-gradient(
    100deg,
    var(--julia-red) 0%,
    var(--julia-red) 30%,
    var(--julia-green) 35%,
    var(--julia-green) 65%,
    var(--julia-purple) 70%,
    var(--julia-purple) 100%
  );
  filter: saturate(60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 48pt;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "introduction results"
    "introduction results"
    "theory results"
    "theory results"
    "implementation conclusion"
    "implementation references";
`;

const Footer = styled.footer`
  width: 100%;
  height: 5in;
  display: flex;
  gap: 1in;
  justify-content: center;
  align-items: center;
  background-color: var(--julia-blue);
  filter: brightness(120%) saturate(60%);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 72pt;
`;

const Author = styled.p`
  margin: 0;
  font-size: 48pt;
`;

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <section style={{ gridArea: title.toLowerCase() }}>
    <SectionHeading>{ title }</SectionHeading>
    { children }
  </section>
);

const SectionHeading = styled.h2`
  font-size: 48pt;
  margin: 24pt 72pt 12pt 72pt;
  color: var(--julia-blue);
  text-align: center;
  border-bottom: black 3pt solid;
`;

const Figure = styled.figure`
  width: 3in;

  & > img {
    width: 100%;
  }
`;

const Logo = ({ url }: { url: string }) => (
  <Figure>
    <img src={url} />
  </Figure>
);

function Poster() {
  return (
    <>
      <Header>
        <Title>
          TaylorDiff.jl: A Fresh Approach To Higher-Order Differentiation
        </Title>
        <Author>Songchen Tan</Author>
      </Header>
      <Main>
        <Section title="Introduction" />
        <Section title="Theory" />
        <Section title="Implementation" />
        <Section title="Results" />
        <Section title="Conclusion" />
        <Section title="References" />
      </Main>
      <Footer>
        <Logo url="https://julialang.org/assets/infra/logo.svg" />
        <Logo url="https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" />
        <Logo url="https://avatars.githubusercontent.com/u/20145488?s=200&v=4" />
        <Logo url="https://math.mit.edu/dist/images/math-logo.svg" />
        <Logo url="https://www.csail.mit.edu/sites/default/files/2022-02/Screen%20Shot%202022-02-28%20at%204.01.44%20PM.png" />
      </Footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Poster />
  </React.StrictMode>
);
