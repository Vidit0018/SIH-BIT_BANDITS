import { useForm } from "react-hook-form";

const RegistrarDetails = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("firstName", data.firstName);
        formData.append("middleName", data.middleName);
        formData.append("lastName", data.lastName);
        formData.append("address", data.address);
        formData.append("designation", data.designation);
        formData.append("state", data.state);
        formData.append("district", data.district);
        formData.append("city", data.city);
        formData.append("postalCode", data.postalCode);
        formData.append("stdCode", data.stdCode);
        formData.append("landlineNumber", data.landlineNumber);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("altMobileNumber", data.altMobileNumber);
        formData.append("emailAddress", data.emailAddress);
        formData.append("altEmailAddress", data.altEmailAddress);

        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
    };

    return (
        <div className="flex flex-col items-center w-full gap-3">
            <h1 className="text-blue-800 text-3xl font-bold">
                Registrar Details
            </h1>

            <div className="w-11/12 h-[0.2rem] bg-blue-800 rounded-full"></div>

            {/* Form */}
            <form className="flex flex-col items-end w-11/12 gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-[4rem] w-full">
                    {/* Title */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="title" className="font-semibold">
                            Title (Mr/Mrs) :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <select
                            id="title"
                            {...register("title", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        >
                            <option value="">Select Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                        {errors?.title && (
                            <span className="text-red-700 text-sm text-start">Title is required</span>
                        )}
                    </div>

                    {/* First Name */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="firstName" className="font-semibold">
                            First Name :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter first name"
                            {...register("firstName", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.firstName && (
                            <span className="text-red-700 text-sm text-start">First name is required</span>
                        )}
                    </div>

                    {/* Middle Name */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="middleName" className="font-semibold">
                            Middle Name :
                        </label>
                        <input
                            type="text"
                            id="middleName"
                            placeholder="Enter middle name"
                            {...register("middleName")}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="lastName" className="font-semibold">
                            Last Name :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter last name"
                            {...register("lastName", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.lastName && (
                            <span className="text-red-700 text-sm text-start">Last name is required</span>
                        )}
                    </div>
                </div>

                <div className="flex gap-[4rem] w-full">
                    {/* Address */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="address" className="font-semibold">
                            Address :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter address"
                            {...register("address", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.address && (
                            <span className="text-red-700 text-sm text-start">Address is required</span>
                        )}
                    </div>

                    {/* Designation */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="designation" className="font-semibold">
                            Designation :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="designation"
                            placeholder="Enter designation"
                            {...register("designation", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.designation && (
                            <span className="text-red-700 text-sm text-start">Designation is required</span>
                        )}
                    </div>
                </div>

                <div className="flex gap-[4rem] w-full">
                    {/* State */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="state" className="font-semibold">
                            State/UT :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="state"
                            placeholder="Enter state/UT"
                            {...register("state", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.state && (
                            <span className="text-red-700 text-sm text-start">State/UT is required</span>
                        )}
                    </div>

                    {/* District */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="district" className="font-semibold">
                            District :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="district"
                            placeholder="Enter district"
                            {...register("district", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.district && (
                            <span className="text-red-700 text-sm text-start">District is required</span>
                        )}
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="city" className="font-semibold">
                            Town/City/Village :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter town/city/village"
                            {...register("city", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.city && (
                            <span className="text-red-700 text-sm text-start">City is required</span>
                        )}
                    </div>
                </div>

                <div className="flex gap-[4rem] w-full">
                    {/* Postal Code */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="postalCode" className="font-semibold">
                            Postal Code :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            placeholder="Enter postal code"
                            {...register("postalCode", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.postalCode && (
                            <span className="text-red-700 text-sm text-start">Postal code is required</span>
                        )}
                    </div>

                    {/* STD Code */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="stdCode" className="font-semibold">
                            STD Code :
                        </label>
                        <input
                            type="text"
                            id="stdCode"
                            placeholder="Enter STD code"
                            {...register("stdCode")}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                    </div>

                    {/* Landline Number */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="landlineNumber" className="font-semibold">
                            Landline Number :
                        </label>
                        <input
                            type="text"
                            id="landlineNumber"
                            placeholder="Enter landline number"
                            {...register("landlineNumber")}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                    </div>
                </div>

                <div className="flex gap-[4rem] w-full">
                    {/* Phone Number */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="phoneNumber" className="font-semibold">
                            Phone Number :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="Enter phone number"
                            {...register("phoneNumber", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.phoneNumber && (
                            <span className="text-red-700 text-sm text-start">Phone number is required</span>
                        )}
                    </div>

                    {/* Alternate Mobile Number */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="altMobileNumber" className="font-semibold">
                            Alternate Mobile Number :
                        </label>
                        <input
                            type="text"
                            id="altMobileNumber"
                            placeholder="Enter alternate mobile number"
                            {...register("altMobileNumber")}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                    </div>
                </div>

                <div className="flex gap-[4rem] w-full">
                    {/* Email Address */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="emailAddress" className="font-semibold">
                            Email Address :<sup className="text-sm text-red-500">*</sup>
                        </label>
                        <input
                            type="email"
                            id="emailAddress"
                            placeholder="Enter email address"
                            {...register("emailAddress", { required: true })}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                        {errors?.emailAddress && (
                            <span className="text-red-700 text-sm text-start">Email address is required</span>
                        )}
                    </div>

                    {/* Alternate Email Address */}
                    <div className="flex flex-col gap-y-1 w-full">
                        <label htmlFor="altEmailAddress" className="font-semibold">
                            Alternate Email Address :
                        </label>
                        <input
                            type="email"
                            id="altEmailAddress"
                            placeholder="Enter alternate email address"
                            {...register("altEmailAddress")}
                            className="bg-gray-200 w-full rounded-lg px-3 py-3"
                        />
                    </div>
                </div>

                {/* Submit */}
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-5">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegistrarDetails;
