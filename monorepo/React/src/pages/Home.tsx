import { Link } from "react-router-dom";
import back from "../assets/icons/back.png";
import services from "../services";
import { useStep } from "../hooks/useStep";

const Home = () => {
  const { goToNextStep } = useStep();

  return (
    <div className="w-2/5 h-full flex flex-col gap-5 mb-20">
      <menu className="bg-white p-4 pb-7 shadow-sm flex flex-col gap-3">
        {services.map((service) => (
          <Link to={`/service/${service.path}`} key={service.path}>
            <li
              className="flex gap-5 px-3 py-1 border items-center cursor-pointer shadow-sm"
              onClick={goToNextStep}
            >
              <img
                className="w-10 h-10 rotate-180 border"
                src={service.image}
                alt="back"
              />
              <span className="grow">{service.name}</span>
              <img className="w-3 h-3  rotate-180" src={back} alt="back" />
            </li>
          </Link>
        ))}
      </menu>
      <section className="bg-white p-4 shadow-sm text-center">
        <div>
          Not sure about consultation type? Please, call{" "}
          <a className="text-blue-500" href="tel:+02037959063">
            0203 7959063
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
