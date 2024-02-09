import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../../hooks/authUser";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../../../services/api/authApi";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../ui/TextInput";
import Button from "../../ui/Button";

interface Props {
  close: () => void;
}
const UpdateProfile: FC<Props> = ({ close }) => {
  const [isBusy, setIsBusy] = useState(false);
  const { user, firstName, lastName, saveUser } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      address: user.address || "",
      facebookUrl: user.facebookUrl || "",
      twitterUrl: user.twitterUrl || "",
      linkedinUrl: user.linkedinUrl || "",
      bio: user.bio || "",
    },
  });
  const mutation = useMutation({
    mutationFn: updateProfile,
    mutationKey: ["profileUpdate"],
  });
  const onSubmit = async (datas: any) => {
    setIsBusy(true);
    mutation.mutate(datas, {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsBusy(false);
        saveUser({
          ...user,
          ...datas,
        });
        close();
      },
      onError: (error) => {
        toast.error(error.message);
        setIsBusy(false);
      },
    });
  };
  return (
    <>
      <div className="lg:px-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-4">
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Value is required",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="First Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.firstName?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Value is required",
                },
              }}
              render={({ field }) => (
                <TextInput
                  label="Last Name"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.lastName?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <div className="lg:col-span-2">
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Profile Bio"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.linkedinUrl?.message}
                  type={InputType.textarea}
                  {...field}
                  ref={null}
                />
              )}
            />
            </div>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Address"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.address?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="facebookUrl"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Facebbok Link"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.facebookUrl?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="twitterUrl"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Twitter Link"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.twitterUrl?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
            <Controller
              name="linkedinUrl"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="LinkedIn Url"
                  labelClassName="text-[#000000B2] fw-500"
                  error={errors.linkedinUrl?.message}
                  type={InputType.text}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
          <div className="mt-7">
            <Button title={"Update"} isBusy={isBusy} disabled={!isValid} />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
