import { useForm } from "react-hook-form";

const InstitutionDetails = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        console.log(data.appNumber)
        formData.append("applicationNumber", data.appNumber);
        formData.append("instituteId", data.instituteId);
        formData.append("academicYear", data.academicYear);
        formData.append("currentStatus", data.currentStatus);
        formData.append("applicationOpenDate", data.appDate);
        formData.append("overallDeficiency", data.deficiency);
        formData.append("scrutinyDate", data.scrutinyDate);

        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
    }

  return (
    <div className="flex flex-col items-center w-full gap-3">
        <h1 className="text-blue-800 text-3xl font-bold">
            Institution Details : Basic Details
        </h1>

        <div className="w-11/12 h-[0.2rem] bg-blue-800 rounded-full"></div>

        {/* form  */}

        <form className="flex flex-col items-end w-11/12 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[4rem] w-full">
                {/* application Number  */}

                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="appNumber" className="font-semibold">
                        Current Application No. :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="text"
                        id='appNumber'
                        placeholder='Enter application number'
                        {...register("appNumber", {required:true})}
                        className='bg-gray-200 w-full  rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.appNumber && (
                            <span className='text-red-700 text-sm text-start'>Application number is required</span>
                        )
                    }
                </div>

                {/* permanent institute id  */}
                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="instituteId" className="font-semibold">
                        Permanent Institute id :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="text"
                        id='instituteId'
                        placeholder='Enter Institute Id'
                        {...register("instituteId", {required:true})}
                        className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.instituteId && (
                            <span className='text-red-500 text-sm text-start'>Institute id is required</span>
                        )
                    }
                </div>

                {/* Academic Year  */}
                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="academicYear" className="font-semibold">
                        Academic Year :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="text"
                        id='academicYear'
                        placeholder='Enter academic year'
                        {...register("academicYear", {required:true})}
                        className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.academicYear && (
                            <span className='text-red-500 text-sm text-start'>Academic year is required</span>
                        )
                    }
                </div>
            </div>

            <div className="flex gap-[4rem] w-full">

                {/* current status  */}
                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="currentStatus" className="font-semibold">
                        Institute current Status :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="text"
                        id='currentStatus'
                        placeholder='Enter current status of institute'
                        {...register("currentStatus", {required:true})}
                        className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.currentStatus && (
                            <span className='text-red-500 text-sm text-start'>Current status of institute is required</span>
                        )
                    }
                </div>

                {/* application opened data  */}
                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="appDate" className="font-semibold">
                        Application Open Date :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="date"
                        id='appDate'
                        {...register("appDate", {required:true})}
                        className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.appDate && (
                            <span className='text-red-500 text-sm text-start'>Application open date is required</span>
                        )
                    }
                </div>
                
                {/* Overall Deficiency  */}
                <div className='flex flex-col gap-y-1 w-full'>
                    <label htmlFor="deficiency" className="font-semibold">
                        Overall Deficiency (Y/N) :<sup className='text-sm text-red-500'>*</sup>
                    </label>
                    <input 
                        type="text"
                        id='deficiency'
                        {...register("deficiency", {required:true})}
                        className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                    />
                    {
                        errors?.deficiency && (
                            <span className='text-red-500 text-sm text-start'>Required</span>
                        )
                    }
                </div>
            </div>

            <div className="flex gap-[4rem] w-full justify-start">

                {/* scrutiny date  */}
                <div className='flex flex-col gap-y-1 w-[30%]'>
                        <label htmlFor="scrutinyDate" className="font-semibold">
                            Attend Scrutiny committee date :<sup className='text-sm text-red-500'>*</sup>
                        </label>
                        <input 
                            type="date"
                            id='scrutinyDate'
                            {...register("scrutinyDate", {required:true})}
                            className='bg-gray-200 w-full rounded-lg px-3 py-3' 
                        />
                        {
                            errors?.scrutinyDate && (
                                <span className='text-red-500 text-sm text-start'>required</span>
                            )
                        }
                </div>
            </div>

            <div>
                <button type="submit" className="px-5 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 duration-200 transition-all
                ease-linear">
                    Save
                </button>
            </div>
        </form>
    </div>
  )
}

export default InstitutionDetails;