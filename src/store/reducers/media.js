import {
  GET_VIDEO_LIST,
  GET_AUDIO_LIST,
} from "../actionTypes";

const initialState = {
  video: [],
  audio : {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_LIST:
      return {
        ...state,
        video: action.payload
      };
    case GET_AUDIO_LIST:
      return {
        ...state,
       audio: action.payload
      };

    default:
      return state;
  }
}
