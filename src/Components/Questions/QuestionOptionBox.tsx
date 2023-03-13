import { useDispatch } from "react-redux";
import { ClearOutlined, DragIndicatorOutlined } from "@mui/icons-material";
import { Box, IconButton, Input } from "@mui/material";
import { styled } from "@mui/system";
import questionsSlice from "../../questionsSlice";
import { DraggableProvided } from "react-beautiful-dnd";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  display: flex;
  padding: 0px, 24px;
`;
const QuestionOptionDrag = styled(Box)`
  justify-content: center;
  align-items: center;
  cursor: move;
  width: 24px;
`;
const QuestionOption = styled(Input)``;
type OptionProps = {
  provided: DraggableProvided;
  questionIndex: number;
  option: string;
  optionIndex: number;
};

const QuestionOptionBox: React.FC<OptionProps> = ({
  provided,
  questionIndex,
  option,
  optionIndex,
}) => {
  const dispatch = useDispatch();
  const handleOptionChange =
    (i: number, oi: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(questionsSlice.actions.changeOption([i, oi, e.target.value]));
    };
  const deleteOption = (i: number, oi: number) => {
    dispatch(questionsSlice.actions.deleteOption([i, oi]));
  };

  return (
    <Wrapper ref={provided.innerRef} {...provided.draggableProps}>
      <QuestionOptionDrag {...provided.dragHandleProps}>
        <DragIndicatorOutlined />
      </QuestionOptionDrag>
      <QuestionOption
        placeholder={optionIndex.toString()}
        value={option}
        onChange={handleOptionChange(questionIndex, optionIndex)}
      />
      <IconButton onClick={() => deleteOption(questionIndex, optionIndex)}>
        <ClearOutlined />
      </IconButton>
    </Wrapper>
  );
};

export default QuestionOptionBox;
