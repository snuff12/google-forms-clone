import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { DragHandleOutlined } from "@mui/icons-material";

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
const QuestionDrag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
  width: 100%;
  height: 24px;
`;
const QuestionTitle = styled.input``;

const QuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const QusetionOption = styled.input``;
const Questions = () => {
  const onDragEnd = () => {
    console.log("Dragged");
  };
  const questions = ["q1", "q2"];
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
              {questions.map((q, i) => (
                <Draggable key={q} draggableId={q} index={i}>
                  {(provided) => (
                    <Question
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <QuestionDrag>
                        <DragHandleOutlined />
                      </QuestionDrag>
                      <QuestionTitle placeholder={q}></QuestionTitle>
                      <QuestionOptions>
                        <QusetionOption placeholder="옵션" />
                        <QusetionOption placeholder="옵션" />
                      </QuestionOptions>
                    </Question>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </QuestionBox>
    </DragDropContext>
  );
};

export default Questions;
