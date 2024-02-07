import TILLists from "../_commons/TILLists";
import * as T from "@/app/(providers)/styles";

function TrendingPage() {
  return (
    <div>
      <h2 className={`${T.TitleStyle} mb-0 mt-2`}>Trending Page</h2>
      <div className={T.SubTitleStyle}>작성된 순서대로 정렬됩니다.</div>
      <TILLists memu="trending" />
    </div>
  );
}

export default TrendingPage;
