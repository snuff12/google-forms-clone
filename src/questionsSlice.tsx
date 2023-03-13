import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState: {
    value: [
      {
        name: `qName`,
        type: "객관식 질문",
        required: false,
        options: [
          { name: "one", value: "" },
          { name: "two", value: "" },
          { name: "three", value: "" },
        ],
      },
    ],
  },
  reducers: {
    addQuestion: (state, action) => {
      const date = new Date();
      state.value = [
        ...state.value,
        {
          name: date.getTime().toString(),
          type: "객관식 질문",
          required: false,
          options: [{ name: date.getTime().toString(), value: "" }],
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
    changeTypeOfQuestion: (state, action) => {
      state.value[action.payload[0]].type = action.payload[1];
    },
    handleRequired: (state, action) => {
      state.value[action.payload[0]].required = action.payload[1];
    },
    addOption: (state, action) => {
      const date = new Date();
      state.value[action.payload].options.push({
        name: date.getTime().toString(),
        value: "",
      });
    },
    deleteOption: (state, action) => {
      state.value[action.payload[0]].options.splice(action.payload[1], 1);
    },
    changeOption: (state, action) => {
      state.value[action.payload[0]].options[action.payload[1]].value =
        action.payload[2];
    },
    dragOption: (state, action) => {
      const source = state.value[action.payload[0]].options.splice(
        action.payload[2],
        1
      )[0];
      state.value[action.payload[0]].options.splice(
        action.payload[1],
        0,
        source
      );
    },
  },
});

export default questionsSlice;
