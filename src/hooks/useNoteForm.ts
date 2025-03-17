import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { actions } from "../store";
import { formatDate } from "../utils";

const useNoteForm = () => {
  const dispatch = useDispatch();
  const id = Date.now().toString();

  const [formData, setFormData] = useState({
    id: id,
    archived: false,
    title: "untitled",
    content: "",
    tags: "",
  });

  const debouncedInput = useCallback(
    debounce(
      (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        setFormData((prevData) => {
          const newData = { ...prevData, [e.target.id]: e.target.value };

          dispatch(
            actions.AddNote({
              note: {
                ...newData,
                tags: newData.tags.split(",").map((tag) => tag.trim()), 
                date: formatDate(new Date()), 
              },
            })
          );

          return newData; 
        });
      },
      1000 
    ),
    [dispatch]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    debouncedInput(e); 
  };

  return {
    formData,
    handleChange,
  };
};

export default useNoteForm;
