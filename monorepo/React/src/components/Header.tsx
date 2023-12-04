import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services, { IService } from "../services";
import back from "../assets/icons/back.png";
import { useStep } from "../hooks/useStep";

const Header = () => {
  const navigate = useNavigate();
  const { currentStep, goToPreviousStep, resetStep } = useStep();
  const { serviceId } = useParams();

  const [service, setService] = useState<IService | undefined>(undefined);
  
  useEffect(() => {
    console.log({services, serviceId});
    const service = services.find((service) => service.path === serviceId);
    setService(service || undefined);
    
  }, [serviceId]);

  useEffect(() => {
    !serviceId && resetStep();
  }, [serviceId, resetStep]);

  const onBackHandler = () => {
    goToPreviousStep();
    navigate("");
  };

  return (
    <header className="flex w-full items-center justify-between py-2 px-10 min-h-[max-content] border border-b-[1px] border-grey-100 shadow-sm">
      <div className="w-5 h-5">
        {currentStep !== 1 && (
          <img
            className="cursor-pointer"
            src={back}
            alt="back"
            onClick={onBackHandler}
          />
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="font-semibold">{service?.name || "Choose Service"}</div>
        <div className="text-gray-400 text-[.8rem]">Step {currentStep}/2</div>
      </div>
      <div className="w-5 h-5"></div>
    </header>
  );
};

export default Header;
