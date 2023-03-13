import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState: {
    value: [
      {
        name: `qName`,
        type: "객관식 질문",
        options: ["1", "2", "3"],
      },
    ],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.value = [
        ...state.value,
        {
          name: `q${state.value.length}`,
          type: "객관식 질문",
          options: [""],
        },
      ];
    },
    duplicateQuestion: (state, action) => {
      const date = new Date();
      state.value.splice(action.payload + 1, 0, {
        ...state.value[action.payload],
        name: date.getTime().toString(),
      });
    },
    deleteQuestion: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    dragQuestion: (state, action) => {
      const source = state.value.splice(action.payload[1], 1)[0];
      state.value.splice(action.payload[0], 0, source);
    },
    addOption: (state, action) => {
      state.value[action.payload].options.push("");
    },
    deleteOption: (state, action) => {
      state.value[action.payload[0]].options.splice(action.payload[1], 1);
    },
    changeOption: (state, action) => {
      state.value[action.payload[0]].options.splice(
        action.payload[1],
        1,
        action.payload[2]
      );
    },
    dragOption: (state, action)=>{
        const source = state.value[action.payload[0]].options.splice(action.payload[2],1)[0]
        state.value[action.payload[0]].options.splice(action.payload[1],0,source)
    }
  },
});

export default questionsSlice;
