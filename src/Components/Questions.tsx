import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCircleOutline,
  ClearOutlined,
  ContentCopyOutlined,
  DeleteOutline,
  DragHandleOutlined,
  DragIndicatorOutlined,
} from "@mui/icons-material";
import TypeDropdown from "./Questions/TypeDropdown";
import store, { RootState } from "../store";
import { IconButton } from "@mui/material";
import questionsSlice from "../questionsSlice";

const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  border-radius: 10px;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  margin: 10px 0px;
  background-color: white;
  border-radius: 10px;
`;
const QuestionDrag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
  width: 100%;
  height: 24px;
`;
const QuestionTitleBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  padding: 0px, 24px;
`;
const QuestionTitle = styled.input``;

const QuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionOptionBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  display: flex;
  padding: 0px, 24px;
`;
const QuestionOptionDrag = styled.div`
  justify-content: center;
  align-items: center;
  cursor: move;
  width: 24px;
`;
const QuestionOption = styled.input``;
const QuestionFooter = styled.div`
  height: 65px;
  border-top: 1px solid #dadce0;
  display: flex;
  justify-content: space-between;
`;
const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => {
    return state.questions.value;
  });
  const onDragEnd = ({destination, source}: DropResult) => {
    if(!destination) return;
    dispatch(questionsSlice.actions.dragQuestion([destination.index, source.index]))
  };
  const addOption = (i: number) => {
    dispatch(questionsSlice.actions.addOption(i));
  };
  const deleteOption = (i: number, oi: number) => {
    dispatch(questionsSlice.actions.deleteOption([i, oi]));
  };
  const handleOptionChange =
    (i: number, oi: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(questionsSlice.actions.changeOption([i, oi, e.target.value]));
    };
  const deleteQuestion = (i: number) => {
    dispatch(questionsSlice.actions.deleteQuestion(i));
  };
  const duplicateQuestion = (i: number) => {
    dispatch(questionsSlice.actions.duplicateQuestion(i));
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
                        <TypeDropdown />
                      </QuestionTitleBox>
                      <QuestionOptions>
                        {q.options.map((option, optionIndex) => (
                          <QuestionOptionBox>
                            <QuestionOptionDrag>
                              <DragIndicatorOutlined />
                            </QuestionOptionDrag>
                            <QuestionOption
                              placeholder={optionIndex.toString()}
                              value={option}
                              onChange={handleOptionChange(i, optionIndex)}
                            />
                            <IconButton
                              onClick={() => deleteOption(i, optionIndex)}
                            >
                              <ClearOutlined />
                            </IconButton>
                          </QuestionOptionBox>
                        ))}
                      </QuestionOptions>
                      <QuestionFooter>
                        <IconButton onClick={() => addOption(i)}>
                          <AddCircleOutline />
                        </IconButton>
                        <IconButton>
                          <ContentCopyOutlined
                            onClick={() => duplicateQuestion(i)}
                          />
                        </IconButton>
                        <IconButton>
                          <DeleteOutline onClick={() => deleteQuestion(i)} />
                        </IconButton>
                      </QuestionFooter>
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
