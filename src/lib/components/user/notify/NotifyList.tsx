import { FC, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Menu,
  Button,
  MenuItem,
  MenuList,
  MenuHandler,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { NotifyItem } from "../../../../contracts/routine";
import { markUserNotify } from "../../../../services/api/userApi";
import HourGlassLoading from "../../ui/loading/hourloading";
// dayjs time format
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { EmptyData } from "../../ui/empty/emptyStates";
dayjs.extend(relativeTime);

interface Props {
  status: string;
  data: NotifyItem[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}
const NotifyList: FC<Props> = ({ status, data, isLoading }) => {
  const [notify, setNotify] = useState<NotifyItem[]>([]);
  useEffect(() => {
    if (status === "unread") {
      const filtered = data?.filter((where) => !where.read);
      setNotify(filtered);
    } else setNotify(data);
  }, [status, data]);

  const markRead = useMutation({
    mutationFn: markUserNotify,
    mutationKey: ["markRead"],
  });
  const MarkNotify = async (item: string) => {
    markRead.mutateAsync(item, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };
  return (
    <>
      <div>
        {isLoading && (
          <div className="place-center py-16">
            <HourGlassLoading size={1.3} />
          </div>
        )}
        <div className="grid gap-4">
          {notify &&
            !!notify.length &&
            notify.map((item, i: number) => (
              <div
                key={i}
                className={`bg-primary p-3 rounded-[15px] text-white flex items-center justify-between hover:scale-105 duration-100 ${
                  !item.read && `border-[3px] border-blue-400`
                }`}
              >
                <div className="flex items-center gap-x-2">
                  {item?.body?.includes("signed") ? (
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705678152/rsh/gnup_eusaot.jpg"
                      alt="alt"
                      className="w-12 h-12 circle"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1705678152/rsh/gnup_eusaot.jpg"
                      alt="alt"
                      className="w-12 h-12 circle"
                    />
                  )}
                  <div>
                    <p className="">{item.body}</p>
                    <p className="text-[14px] text-[#808080]">
                      {dayjs(item.createdDate).fromNow()}
                    </p>
                  </div>
                </div>
                <div>
                  <Menu placement="bottom-end">
                    <MenuHandler>
                      <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-white capitalize">
                        <BsThreeDotsVertical className="text-xl" />
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-[#0D0D0D]">
                      <MenuItem
                        className="my-1 fw-500 text-white bg-primary pt-1"
                        onClick={() => MarkNotify(item.id)}
                      >
                        Mark as read
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            ))}
        </div>
        {notify && !notify.length && (
          <div>
            <EmptyData size="350" msg="No notification yet" />
          </div>
        )}
      </div>
    </>
  );
};

export default NotifyList;
