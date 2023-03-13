import { Box } from "@mui/material";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import questionsSlice from "../../questionsSlice";
import { RootState } from "../../store";
import QuestionOptionBox from "./QuestionOptionBox";

const Wrapper = styled(Box)``;
type OptionsProps = {
  questionIndex: number;
};
const QuestionOptions: React.FC<OptionsProps> = ({ questionIndex }) => {
  const dispatch = useDispatch();
  const options = useSelector((state: RootState) => {
    return state.questions.value[questionIndex].options;
  });
  const typeOfQuestion = useSelector((state: RootState) => {
    return state.questions.value[questionIndex].type;
  });

  const onDragEnd = ({ destination, source }: DropResult) => {
    dispatch(
      questionsSlice.actions.dragOption([
        questionIndex,
        destination?.index,
        source.index,
      ])
    );
  };
  return typeOfQuestion === "장문형" || typeOfQuestion === "단답형" ? (
    <Box style={{ height: "62.5px" }}></Box>
  ) : (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="options">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {options?.map((option, optionIndex) => (
                <Draggable
                  key={option.name}
                  draggableId={option.name}
                  index={optionIndex}
                >
                  {(provided) => (
                    <QuestionOptionBox
                      provided={provided}
                      questionIndex={questionIndex}
                      option={option.value}
                      optionIndex={optionIndex}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
};
export default QuestionOptions;
