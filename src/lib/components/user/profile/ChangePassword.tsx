import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updatePassword } from "../../../../services/api/authApi";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";

interface Props{
    close: () => void
}
const ChangePassword:FC<Props> = ({close}) => {
  const [isBusy, setIsBusy] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      new_password: "",
      old_password: "",
      new_password_confirmation: "",
    },
  });
  const mutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      toast.success(data.message);
      setIsBusy(false);
      close();
    },
    onError: (error:any) => {
      toast.error(error.response.data.message);
      setIsBusy(false);
    },
  });
  const onSubmit = async (data: any) => {
    setIsBusy(true);
    const payload = {
      oldPassword: data.old_password,
      newPassword: data.new_password,
      newPasswordConfirmation: data.new_password_confirmation,
    };
    mutation.mutate(payload);
  };
  return (
    <>
      <div className="px-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Controller
              name="old_password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Old Password"
                  labelClassName="text-[#000000B2] fw-500"
                  placeholder="*********"
                  error={errors.old_password?.message}
                  type={InputType.password}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="new_password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="New Password"
                  labelClassName="text-[#000000B2] fw-500"
                  placeholder="*********"
                  error={errors.new_password?.message}
                  type={InputType.password}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="new_password_confirmation"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
                validate: (val) => {
                  if (watch("new_password") != val) {
                    return "Your passwords do no match";
                  }
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Confirm New Password"
                  labelClassName="text-[#000000B2] fw-500"
                  placeholder="*********"
                  error={errors.new_password_confirmation?.message}
                  type={InputType.password}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
          <div className="mt-7">
            <Button title={"Submit"} isBusy={isBusy} disabled={!isValid} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
