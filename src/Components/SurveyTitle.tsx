import { useState } from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const TitleInput = styled.input``;

const TitleDiscription = styled.input``;

const SurveyTitle = () => {
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");

  const onChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeDiscription = (e: React.FormEvent<HTMLInputElement>) => {
    setDiscription(e.currentTarget.value);
  };

  return (
    <TitleBox>
      <TitleInput
        onChange={onChangeTitle}
        value={title}
        placeholder="제목 없는 설문지"
      />
      <TitleDiscription
        onChange={onChangeDiscription}
        value={discription}
        placeholder="설문지 설명"
      />
    </TitleBox>
  );
};

export default SurveyTitle;
