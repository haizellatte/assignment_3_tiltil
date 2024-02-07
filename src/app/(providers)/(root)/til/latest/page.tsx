import * as L from "@/app/(providers)/styles";
import TILLists from "../_commons/TILLists";

function LatestPage() {
  return (
    <div>
      <h2 className={`${L.TitleStyle} mb-0 mt-2`}>Latest Page</h2>
      <div className={L.SubTitleStyle}>최신순으로 정렬됩니다.</div>
      <TILLists memu="latest" />
    </div>
  );
}

export default LatestPage;
