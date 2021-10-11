import styled, { keyframes } from "styled-components";
/** STYLED COMPONENTS */
/** los estilos se agregan en runtime , en una etiqueta <style> */

/** STYLED COMPONENTS basic examples */
const PRIMARY_COLOR = "#9c27b0"; /// variable
const SECONDARY_COLOR = "blue"; /// variable
const P = styled.p`
  font-size: 24px;
  color: ${PRIMARY_COLOR};
`;
const Content = styled.div`
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90vh;
  justify-content: space-around;
`;
/** Styled-Component with FUNCTIONS - dynamic */
/** ALSO add info class for children */
const Button = styled.button`
  background-color: ${(props) => (props.primary ? PRIMARY_COLOR : "white")};
  color: ${(props) => (props.primary ? "white" : PRIMARY_COLOR)};
  padding: 10px 15px;
  border: solid 2px ${PRIMARY_COLOR};
  border-radius: 5px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }
  &.secondary {
    background-color: ${SECONDARY_COLOR};
    border: solid 2px ${SECONDARY_COLOR};
    color: #fafafa;
  }
  .info {
    font-size: 28px;
  }
`;
/** Styled-Component that extends another styled component */
const BlockButton = styled(Button)`
  width: 90%;
  font-size: 24px;
`;

/** Styled-Component based on a Component: it means ADD STYLES to a logic-component */
const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};
const StyledLink = styled(Link)`
  color: blue;
`;

/** Styled-Component with attributes */
const Input = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "red",
}))`
  font-size: 16px;
  border: 1px solid red;
  border-radius: 5px;
  outline: none;
  color: ${(props) => props.color};
`;

/** Styled-Component that extends and overwrite attributes */
// const Password = styled(Input).attrs({ type: "password" })``;

/** Animaciones */
const girar = keyframes`
  from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;
const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`;

/** SECURITY */
// las props utilizadas en los estilos ej:${props.primary}
// deben estar sienod seteadas por lxs devs
// *no deben* venir de una ddbb

const App = () => {
  return (
    <Content>
      <P>Simple p with text</P>
      <Button>Button 1</Button>
      <Button primary>Button primary</Button>
      <Button>
        Button with<p className="info">information</p>
      </Button>
      <BlockButton>Block button</BlockButton>
      <BlockButton primary as="a" href="#">
        Block button primary
      </BlockButton>
      <Link>Simple link</Link>
      <StyledLink>Link with overwridden styles</StyledLink>
      <Button className="secondary">Button secondary</Button>
      <Input color="blue" placeholder="Input with text in blue" />
      {/* <Password /> */}
      <br></br>
      <Rotar>Estoy girando</Rotar>
    </Content>
  );
};

export default App;
