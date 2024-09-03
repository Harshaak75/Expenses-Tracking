import { useField } from "formik";

const CustomInput = ({label, ...props}) =>{
    const [field , meta] = useField(props);

    return (
        <div className="ml-6 mt-5 flex flex-col">

        <label className={`block mb-2 text-sm font-medium text-gray-900 md:max-lg:text-xl lg:max-xl:text-xl xl:max-2xl:text-xl 2xl:text-xl`}>{label}</label>
        <input  {...field} {...props}  
        className={` w-[85%] sm:max-lg:w-[70%] md:max-lg:w-[90%] md:max-lg:text-lg  lg:max-xl:w-[90%]  lg:max-xl:text-lg xl:max-2xl:w-[90%] xl:max-2xl:text-lg 2xl:w-[90%] 2xl:text-lg  bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-black border-[2px] block p-2.5 ${meta.touched && meta.error ? "border-[#fc8181] border-[2px]" : " "}`}  />
        
        {meta.touched && meta.error && <div className="text-[#fc8181]">{meta.error}</div>}
        </div>
    );

}

export default CustomInput;