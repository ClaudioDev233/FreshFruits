import FruitDetails from "../../components/fruitsDetails";
import Container from "../../components/container";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import BackToHome from "../../components/backToHome";

export default function Details() {
  return (
    <>
      <Menu></Menu>
      <Container>
        <BackToHome></BackToHome>
        <FruitDetails></FruitDetails>
      </Container>
      <Footer></Footer>
    </>
  );
}
