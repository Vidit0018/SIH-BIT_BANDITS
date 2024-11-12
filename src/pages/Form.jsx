import { useState } from "react"
import InstitutionDetails from "../components/Forms/InstitutionDetails";
import Questionnaire from "../components/Forms/Questionnaire";
import RegistrarDetails from "../components/Forms/RegistrarDetails";

const Form = () => {

  const [formNo, setFormNo] = useState(1);

  const handleNextForm = () => {
    setFormNo(formNo + 1);
  }

  const handlePrevForm = () => {
    setFormNo(formNo - 1);
  }

  return (
    <div className="w-11/12 mx-auto mt-10 rounded-md  h-[80vh]">
      <div className="text-center text-xl font-semibold mb-3">
        Form number - {formNo}
      </div>

      <div className="border-[1px] border-blue-700 rounded-md h-[85%] overflow-auto px-3 py-5 w-full">
        {
          formNo == 1 &&
          <Questionnaire />
        }
        {
          formNo === 2 &&
          <InstitutionDetails />
        }
        {
          formNo === 3 &&
          <RegistrarDetails />
        }
      </div>

      <div className={`flex items-center ${formNo != 1 ? "justify-between" : "justify-end"} mt-3`}>
        {formNo != 1 && <button className="px-3 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 transition-all
		duration-200 ease-linear"
          onClick={handlePrevForm}>
          Previous Form
        </button>}
        <button className="px-3 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 transition-all
		duration-200 ease-linear"
          onClick={handleNextForm}>
          Next Form
        </button>
      </div>

    </div>
  )
}

export default Form