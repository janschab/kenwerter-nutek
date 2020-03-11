import {TYPES} from "./constants";

export default (song) => {
  let lines = song.split(/\n/);

  return lines.map((line) => {
    if (/^[A-H #-12]+$/.test(line)) {
      return {
        type: TYPES.notes,
        value: line.split(/[ ]+/)
      };
    } else {
      return {
        type: TYPES.text,
        value: line
      }
    }
  });
};
