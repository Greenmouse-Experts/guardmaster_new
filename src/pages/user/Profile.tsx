import { useState } from "react";
import useAuth from "../../hooks/authUser";
import ProfileAvatar from "../../lib/components/ui/ProfileAvatar";
import { FormatStatus } from "../../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateProfile } from "../../services/api/authApi";
import { uploadImage } from "../../services/api/routine";
import Button from "../../lib/components/ui/Button";
import { GoPasskeyFill } from "react-icons/go";
import useModal from "../../hooks/useModal";
import ChangePassword from "../../lib/components/user/profile/ChangePassword";
import UpdateProfile from "../../lib/components/user/profile/UpdateProfile";
import dayjs from "dayjs";

const UserProfile = () => {
  const { user, saveUser } = useAuth();
  const [isUpdate, setIsUpdate] = useState(false);
  const { Modal: Password, setShowModal: ShowPassword } = useModal();
  const { Modal: Edit, setShowModal: ShowEdit } = useModal();
  const Update = useMutation({
    mutationFn: updateProfile,
    mutationKey: ["update"],
  });
  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => {
      const payload = {
        picture: data.image,
      };
      Update.mutate(payload, {
        onSuccess: () => {
          saveUser({
            ...user,
            image: data.image,
          });
          toast.success("Profile Photo Updated Successfully");
          setIsUpdate(false);
        },
        onError: () => {
          toast.error("Something went wrong");
          setIsUpdate(false);
        },
      });
    },
    onError: () => {
      toast.error("Something went wrong");
      setIsUpdate(false);
    },
  });
  const handleChangePicture = async (e: any) => {
    setIsUpdate(true);
    if (!e.target.files) return;
    const files = e.target.files[0];
    const fd = new FormData();
    fd.append("image", files);
    mutation.mutate(fd);
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <div className="relative">
              <ProfileAvatar
                url={user.image}
                name={user.name}
                size={155}
                font={38}
                type="dark"
              />
            </div>
            <div>
              <p className="text-lg lg:text-3xl syne">{user.name}</p>
              <div className="mt-2">{FormatStatus["active"]}</div>
              <button className="bg-primary mt-6 relative px-6 py-2 rounded-lg shades text-white overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangePicture}
                  className="absolute top-0 left-0 w-full opacity-0"
                />
                {isUpdate ? "..." : "Update Photo"}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-44">
              <Button title={"Edit Profile"} onClick={() => ShowEdit(true)} />
            </div>
            <div
              className="w-12 h-12 place-center rounded-lg bg-primary text-white cursor-pointer"
              onClick={() => ShowPassword(true)}
            >
              <GoPasskeyFill className="text-xl" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="syne text-lg lg:text-3xl fw-600">My Profile</p>
          <div className="mt-6 lg:grid gap-4">
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Registration Date:
              </p>
              <p className="lg:text-xl syne">{user.joined? dayjs(user.joined).format('dddd DD, MMMM YYYY') : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Full Name:
              </p>
              <p className="lg:text-xl syne">{user.name}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Email:
              </p>
              <p className="lg:text-xl syne">{user.email}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Phone Number:
              </p>
              <p className="lg:text-xl syne">{user.phone}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                BIO:
              </p>
              <p className="lg:text-xl syne">{user.bio}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Address:
              </p>
              <p className="lg:text-xl syne">{user.address? user.address : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Facebook Link:
              </p>
              <p className="lg:text-xl syne">{user.facebookUrl? user.facebookUrl : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                Linkldn Link:
              </p>
              <p className="lg:text-xl syne">{user.linkedinUrl? user.linkedinUrl : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-2xl syne">
                X Link:
              </p>
              <p className="lg:text-xl syne">{user.twitterUrl? user.twitterUrl : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
      <Password title="Change Password" size="md" type="withCancel">
        <ChangePassword close={() => ShowPassword(false)} />
      </Password>
      <Edit title="Update Profile" size="lg" type="withCancel">
        <UpdateProfile close={() => ShowEdit()} />
      </Edit>
    </>
  );
};

export default UserProfile;
