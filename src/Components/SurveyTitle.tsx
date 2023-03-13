import { Box, Input, TextField } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";

const TitleBox = styled(Box)`
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

const TitleInput = styled(Input)`
  padding: 0px;
`;

const TitleDiscription = styled(Input)`
  padding: 0%;
`;

const SurveyTitle = () => {
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeDiscription = (e: React.ChangeEvent<HTMLInputElement>) => {
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
