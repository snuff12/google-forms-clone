import { useDispatch } from "react-redux";
import { AddCircleOutline, VisibilityOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import questionsSlice from "../questionsSlice";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0%;
  z-index: 10;
`;
const FooterBox = styled.div`
  display: flex;
  background-color: white;
  height: 60px;
  margin: 0 16px;
  padding: 0 4px;
  border-radius: 8px 8px 0px 0px;
  justify-content: space-around;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const clickAddButton = () => {
    dispatch(questionsSlice.actions.addQuestion('new'));
  };
  return (
    <FooterWrapper>
      <FooterBox>
        <IconButton color="primary" component="label" onClick={clickAddButton}>
          <AddCircleOutline />
        </IconButton>
        <IconButton color="primary" component="label">
          <VisibilityOutlined />
        </IconButton>
      </FooterBox>
    </FooterWrapper>
  );
};
export default Footer;
