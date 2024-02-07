import { useEffect, useState } from "react";
import axios from "axios";
import { DataType } from "@/types/DataType";

function useDataFetch() {
  const [data, setData] = useState([]);

  const TILDataFetch = async () => {
    const TILUrl =
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
    const fetchData = await axios.get(TILUrl).then((res) => res.data);
    const VaildData = fetchData.filter((data: DataType) => data.title !== "");
    setData(VaildData);
  };

  useEffect(() => {
    TILDataFetch();
  }, [data]);

  const reverseData = [...data].reverse();

  return { data, reverseData };
}

export default useDataFetch;
