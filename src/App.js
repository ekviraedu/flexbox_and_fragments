import "./styles.css";
import FlexDemo from "./flexbox";
import { Fragment } from "react";

export default function App() {
  return (
    <>
      <FlexDemo />
      <Row>
        <TwoColumns />
        <Column>
          <Box color="#2200ff" />
        </Column>
      </Row>
    </>
  );
}

function TwoColumns() {
  return (
    <>
      <Column>
        <Box color="#ff0055" />
      </Column>

      <Column>
        <Box color="#55ff44" />
      </Column>
    </>
  );
}

function Row(props) {
  return <div className="row">{props.children}</div>;
}

function Column(props) {
  return <div className="col">{props.children}</div>;
}

function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      Box
    </div>
  );
}
