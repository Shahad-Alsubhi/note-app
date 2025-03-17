interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const AddNoteBtn = ({ text, onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="add new note button"
      className="max-lg:absolute max-lg:bottom-4 max-lg:shadow-2xl text-white bg-blue-500 rounded-lg py-3 w-full font-medium max-lg:w-15 mt-4  max-lg:rounded-full text-sm max-lg:text-3xl end-4 "
    >
      {text}
    </button>
  );
};

export default AddNoteBtn;
