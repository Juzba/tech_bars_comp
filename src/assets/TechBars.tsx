import "./TechBars.scss";
import StackIcon from "tech-stack-icons";

const TechBars = () => {
	return (
		<div className="tech-bars">
			<h1>Tech Bars</h1>
			<div className="box">
				<StackIcon className="icon" name="reactjs" />
				<div className="bar react"></div>
			</div>

      <div className="box">
				<StackIcon className="icon" name="typescript" />
				<div className="bar ts"></div>
			</div>

      <div className="box">
				<StackIcon className="icon" name="csharp" />
				<div className="bar csharp"></div>
			</div>
		</div>
	);
};

export default TechBars;
