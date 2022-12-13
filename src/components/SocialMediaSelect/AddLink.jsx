import FormProvider from "../Context/Form/FormProvider";
import Input from "../Input/Input";
import { SiLeetcode } from "react-icons/si";

const AddLink = () => {
  return (
    <Input name="leetcode" size="sm" startIcon={<SiLeetcode size="20px" />} />
  );
};

export default AddLink;
