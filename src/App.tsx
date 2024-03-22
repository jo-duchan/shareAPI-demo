import styled from "styled-components";
import Colors from "@styles/color-system";
import Fonts from "@styles/typography-system";
import media from "@styles/media";
import cardDataList from "@/data/card-data";
import useModal from "@hook/useModal";
import Card from "@components/Card";
import Notify from "@assets/notify-icon.png";

function App() {
  const [modal, setModal] = useModal({
    icon: Notify,
    title: "Share API not available",
    text: (
      <p>
        A device that does not support Share API.
        <br />
        Please check the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#Browser_compatibility"
          target="_blank"
          rel="noopener"
        >
          here link.
        </a>
      </p>
    ),
    onClose: () => setModal(false),
  });

  const onClick = (data: ShareData) => {
    if (!navigator.canShare) {
      // Fail: copy 기능으로 대응!
      setModal(true);
      return;
    }

    shareHandler(data);
  };

  const shareHandler = async (data: ShareData) => {
    try {
      // Success!
      await navigator.share(data);
    } catch {
      // Cancel!
    }
  };

  return (
    <Container>
      {modal}
      <Content>
        <Title>
          <h3>Share API Demo</h3>
          <p>
            This demo site was created using React, Typescript,
            styled-component, and Vite.
          </p>
        </Title>
        <List>
          {cardDataList.map((item) => (
            <Card key={item.id} data={item} action={onClick} />
          ))}
        </List>
      </Content>
      <Footer>
        <p>Designed by Jo Du-chan in Korea.</p>
      </Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.section`
  flex-grow: 1;
  max-width: 1000px;
  width: 100%;
  margin-inline: auto;

  ${media.small`
    padding-inline: 24px;
    box-sizing: border-box;
  `};
`;

const Title = styled.div`
  width: 100%;
  margin-top: 160px;
  margin-bottom: 40px;
  & h3 {
    ${Fonts.Heading.H1};
    color: ${Colors.Basic[900]};
    margin-bottom: 8px;
  }

  & p {
    ${Fonts.Body.Reqular.M};
    color: ${Colors.Basic[600]};
  }

  ${media.small`
    margin-top: 80px;

    & h3 {
      ${Fonts.Heading.H2};
    }

    & p {
      ${Fonts.Body.Reqular.M};
    }
  `};
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;

  ${media.small`
    flex-direction: column;
    gap: 24px;
    margin-bottom: 100px;
  `};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  min-height: 80px;
  background-color: ${Colors.Basic[700]};

  & p {
    ${Fonts.Body.Reqular.S};
    color: ${Colors.Basic[500]};
  }

  ${media.small`
    height: 62px
  `};
`;
