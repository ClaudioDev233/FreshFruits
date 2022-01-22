import Container from "../../components/container";
import Footer from "../../components/footer";
import FruitsCards from "../../components/fruitsCards";
import Logo from "../../components/logo";
import Menu from "../../components/menu";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <Logo></Logo>
      <Container>
        <FruitsCards></FruitsCards>
      </Container>
      <Footer></Footer>
    </>
  );
}
