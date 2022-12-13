import "./socialMediaSelect.scss";
import Input from "../Input/Input";
import { AiFillCloseCircle } from "react-icons/ai";

const AddLink = ({ links, deleteLink }) => {
  return (
    <div className="add-link">
      {links &&
        links.map(({ id, value, icon: Icon }) => (
          <Input
            key={id}
            name={value}
            size="sm"
            startIcon={<Icon/>}
            endIcon={
              <div
                onClick={() => deleteLink(id,value)}
              >
                <AiFillCloseCircle className="close-icon" />
              </div>
            }
          />
        ))}
    </div>
  );
};

export default AddLink;
