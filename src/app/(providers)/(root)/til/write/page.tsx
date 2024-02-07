import TILForm from "./_components/TILForm";
import * as T from "../../../styles";

function TILWritePage() {
  return (
    <div>
      <h1 className={T.TitleStyle}>Write Your TIL</h1>
      <TILForm />
    </div>
  );
}

export default TILWritePage;
