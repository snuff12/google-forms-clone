import { styled } from "@mui/system";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DragHandleOutlined } from "@mui/icons-material";
import TypeDropdown from "./Questions/TypeDropdown";
import { RootState } from "../store";
import questionsSlice from "../questionsSlice";
import QuestionFooter from "./Questions/QuestionFooter";
import QuestionOptions from "./Questions/QuestionOptions";
import { Box, Input } from "@mui/material";

const QuestionBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  border-radius: 10px;
`;
const Question = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  margin: 10px 0px;
  background-color: white;
  border-radius: 10px;
`;
const QuestionDrag = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
  width: 100%;
  height: 24px;
`;
const QuestionTitleBox = styled(Box)`
  width: 100%;
  height: 64px;
  display: flex;
  padding: 0px, 24px;
`;
const QuestionTitle = styled(Input)`
  padding: 0px;
`;

const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => {
    return state.questions.value;
  });
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    dispatch(
      questionsSlice.actions.dragQuestion([destination.index, source.index])
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <QuestionBox>
        <Droppable droppableId="questions">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ width: "100%" }}
            >
              {questions?.map((q, i) => (
                <Draggable key={q.name} draggableId={q.name} index={i}>
                  {(provided) => (
                    <Question
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <QuestionDrag {...provided.dragHandleProps}>
                        <DragHandleOutlined />
                      </QuestionDrag>
                      <QuestionTitleBox>
                        <QuestionTitle placeholder={`Question-${i}`} />
                        <TypeDropdown questionIndex={i} />
                      </QuestionTitleBox>
                      <QuestionOptions questionIndex={i} />
                      <QuestionFooter questionIndex={i} />
                    </Question>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </QuestionBox>
    </DragDropContext>
  );
};

export default Questions;
