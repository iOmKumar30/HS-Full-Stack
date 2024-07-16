import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenCount } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
        <EvenRenderer />
      </div>
    </RecoilRoot>
  );
}

function EvenRenderer() {
  const isEven = useRecoilValue(evenCount);
  const count = useRecoilValue(countAtom);
  return <div>{isEven ? `${count} is even` : null}</div>;
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

export default App;
