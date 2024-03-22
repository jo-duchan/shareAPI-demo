import styled from "styled-components";
import Colors from "@styles/color-system";
import Fonts from "@styles/typography-system";
import media from "@styles/media";
import { type CardDataType } from "@data/card-data";
import Button from "./Button";

interface Props {
  data: CardDataType;
  action: (data: ShareData) => void;
}

function Card({ data, action }: Props) {
  const onClick = () => {
    action({
      title: data.title,
      url: data.url,
    });
  };

  return (
    <Container>
      <Thumbnail src={data.img} alt="" />
      <TextSection className="text-section">
        <h4 className="title">{data.title}</h4>
        <p className="description">{data.description}</p>
      </TextSection>
      <Button action={onClick} />
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 312px;
  height: auto;
  padding: 18px;
  box-sizing: border-box;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  background-color: ${Colors.Basic[100]};

  ${media.small`
    width: 100%;
  `};
`;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 172px;
  object-fit: cover;
  border-radius: 4px;
  overflow: hidden;

  ${media.small`
    height: 47.7777vw;
  `};
`;

const TextSection = styled.div`
  width: 100%;

  & .title {
    ${Fonts.Heading.H4};
    color: ${Colors.Basic[900]};
    margin-bottom: 8px;
  }

  & .description {
    ${Fonts.Body.Reqular.M};
    color: ${Colors.Basic[600]};
  }
`;
