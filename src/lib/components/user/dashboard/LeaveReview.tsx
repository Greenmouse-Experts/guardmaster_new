import useDialog from "../../../../hooks/useDialog"
import TestimonyForm from "./TestimonyForm"

const LeaveReview = () => {
    const {Dialog, setShowModal} = useDialog()
  return (
   <div>
     <div className="shadow-xl bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1706870702/GuardMaster/Rectangle_3_8_ahgohc.png)] bg-cover bg-center text-white p-6 rounded-lg w-7/12">
        <div>
            <div>
            <p className="lg:text-xl fw-700 syne">Leave Us A Review</p>
            <p className="mt-4 fw-500 lg:w-8/12">
                Add your take to the hundred of testimonials we've received on this platform. 
            </p>
            </div>
            <div className="flex justify-end mt-4">
                <p className="btn-primary px-4 py-2 cursor-pointer" onClick={() => setShowModal(true)}>Share Your Experience</p>
            </div>
        </div>
    </div>
    <Dialog title="Write A Testimony" size="md">
        <TestimonyForm close={() => setShowModal(false)}/>
    </Dialog>
   </div>
  )
}

export default LeaveReview