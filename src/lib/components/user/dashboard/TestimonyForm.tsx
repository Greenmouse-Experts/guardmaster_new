import React, { useState } from "react";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";
import { submitTestimony } from "../../../../services/api/routine";
import { toast } from "react-toastify";

interface Props {
  close: () => void;
}
const TestimonyForm: React.FC<Props> = ({ close }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [inputDetail, setInputDetail] = useState({
    testimony: "",
  });
  const handleChange = (name: string, value: string) => {
    setInputDetail({ ...inputDetail, [name]: value });
  };
  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    setIsBusy(true)
    await submitTestimony(inputDetail)
    .then((res) => {
        toast.success(res.message)
        setIsBusy(false)
        close()
    })
    .catch((err) => {
        setIsBusy(false)
        toast.error(err.response.data.message)
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <TextInput
            label="Testimony"
            labelClassName="text-[#000000B2] fw-500"
            type={InputType.textarea}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("testimony", e.target.value)
            }
          />
        </div>
        <div className="mt-6">
          <Button title={isBusy ? "Submitting..." : "Submit"}  />
        </div>
      </form>
    </div>
  );
};

export default TestimonyForm;
