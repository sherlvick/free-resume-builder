import WithLayout from "./hoc/WithLayout";
import RoutesConf from "./RoutesConf";

const AppComponent = WithLayout(RoutesConf);

function App() {
  return <AppComponent />;
}

export default App;
