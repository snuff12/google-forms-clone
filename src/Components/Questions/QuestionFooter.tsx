import { useDispatch, useSelector } from "react-redux";
import {
  AddCircleOutline,
  ContentCopyOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { Box, FormControlLabel, FormGroup, IconButton, Switch } from "@mui/material";
import styled from "styled-components";
import questionsSlice from "../../questionsSlice";
import { RootState } from "../../store";
import React from "react";

const Wrapper = styled(Box)`
  height: 65px;
  border-top: 1px solid #dadce0;
  display: flex;
  justify-content: space-between;
`;

type FooterProps = {
  questionIndex: number;
};

const QuestionFooter: React.FC<FooterProps> = ({ questionIndex }) => {
  const dispatch = useDispatch();
  const handleRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      questionsSlice.actions.handleRequired([questionIndex, e.target.checked])
    );
  };
  const addOption = (i: number) => {
    dispatch(questionsSlice.actions.addOption(i));
  };
  const deleteQuestion = (i: number) => {
    dispatch(questionsSlice.actions.deleteQuestion(i));
  };
  const duplicateQuestion = (i: number) => {
    dispatch(questionsSlice.actions.duplicateQuestion(i));
  };
  return (
    <Wrapper>
      <IconButton onClick={() => addOption(questionIndex)}>
        <AddCircleOutline />
      </IconButton>
      <IconButton>
        <ContentCopyOutlined onClick={() => duplicateQuestion(questionIndex)} />
      </IconButton>
      <IconButton>
        <DeleteOutline onClick={() => deleteQuestion(questionIndex)} />
      </IconButton>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleRequired} />}
          label="필수"
          labelPlacement="start"
        />
      </FormGroup>
    </Wrapper>
  );
};

export default QuestionFooter;
