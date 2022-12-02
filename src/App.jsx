import WithLayout from "./hoc/WithLayout";
import RoutesConf from "./RoutesConf";
import WithProfileProvider from "./hoc/WithProfileProvider";
import { useEffect } from "react";
import { Data } from "./constants";



const AppComponent = WithProfileProvider( WithLayout(RoutesConf));

// manually setting the dummy profile in local storage

function App() {
  useEffect(() => {
    localStorage.setItem("profiledata",JSON.stringify(Data))
  },[])
  return <AppComponent />;
}

export default App;
