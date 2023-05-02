import Input from "../ui/input";
import TextArea from "../ui/text-area";
import { useSelector } from "react-redux";

const Form = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
    btnText,
  } = props;

  const { isLoading } = useSelector((state) => state.article);
  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea
        label={"Body"}
        state={body}
        setState={setBody}
        height={"300px"}
      />
      <button
        type="submit"
        className="btn btn-lg btn-primary mt-2 w-100"
        disabled={isLoading}>
        {isLoading ? "Loading..." : btnText}
      </button>
    </form>
  );
};

export default Form;
