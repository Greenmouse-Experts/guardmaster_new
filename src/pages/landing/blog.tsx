import { useQuery } from "@tanstack/react-query";
import PostHeader from "../../lib/components/layout/landing/PostHeader";
import { getBlogPost, getBlogTags } from "../../services/api/publicApi";
import { useState } from "react";
import { toast } from "react-toastify";
import HourGlassLoading from "../../lib/components/ui/loading/hourloading";
import BlogItem from "../../lib/components/landing/blog/BlogItem";

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState("");
  const [page, setPage] = useState(1);
  const { data: tags } = useQuery({
    queryKey: ["getTags"],
    queryFn: getBlogTags,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["getPosts", page, activeTag],
    queryFn: () => getBlogPost(page, activeTag),
  });
  const handleNext = () => {
    if (page * 6 <= data?.count) {
      setPage((old) => old + 1);
    } else {
      toast.success("This is the last page");
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((old) => old - 1);
    } else {
      toast.success("This is the first page");
    }
  };
  return (
    <>
      <div className="pb-12">
        <PostHeader
          image={
            "https://res.cloudinary.com/greenmouse-tech/image/upload/v1707231565/GuardMaster/Rectangle_3_10_stgoyx.png"
          }
          title="Blog"
          nav="Blog"
        />
      </div>
      <div className="box">
        <p className="text-2xl fw-600">All Blog Post</p>
        <div className="mt-4">
          <div className="flex gap-x-2 items-center w-full scroll-pro overflow-x-auto relative z-10">
            {tags?.data?.map((item: any, i: number) => (
              <p
                className={`px-3 py-1 bg-blue-50 rounded-xl fs-400 cursor-pointer hover:bg-blue-400 whitespace-nowrap ${activeTag === item.slug && 'bg-blue-400'}`}
                key={i}
                onClick={() => setActiveTag(item.slug)}
              >
                {item.tag}
              </p>
            ))}
          </div>
          <div></div>
        </div>
        <div className="mt-6 pb-24">
          {isLoading && (
            <div className="place-center py-16">
              <HourGlassLoading size={1.3} />
            </div>
          )}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-9">
            {!isLoading &&
              data &&
              data?.data?.map((item: any, i: number) => (
                <BlogItem data={item} key={i} />
              ))}
          </div>
          <div>
            {!isLoading && data && (
              <div className="box mt-6 flex justify-end">
                <div className="flex gap-x-4 items-center">
                  <p className="fw-600">Page {page}</p>
                  <div className="flex gap-x-2 items-center">
                    <div
                      onClick={handlePrev}
                      className={`px-2 py-1 rounded ${
                        page === 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-primary text-white cursor-pointer"
                      }`}
                    >
                      Prev
                    </div>
                    <div
                      onClick={handleNext}
                      className={`px-2 py-1 rounded ${
                        page * 6 >= data?.count
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-primary text-white cursor-pointer"
                      }`}
                    >
                      Next
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
