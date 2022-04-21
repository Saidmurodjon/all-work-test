import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
function Signature() {
  let sigPad = useRef({});
  const [signature, setSignature] = useState("");
  const clear = () => {
    sigPad.current.clear();
    setSignature("");
  };
  const save = () => {
    setSignature(sigPad.current.toDataURL());
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-2">
          <div className="col-md-8 justify-content-center">
            <SignatureCanvas
              backgroundColor="rgb(240,230,140)"
              penColor="black"
              canvasProps={{ width: 800, height: 600 }}
              ref={sigPad}
            />
            <button className="btn btn-info" onClick={clear}>
              Clear
            </button>
            <button className="btn btn-danger" onClick={save}>
              Save
            </button>
          </div>
          <div className="col-md-12 justify-content-center">
            <img
              src={signature}
              className="img-thumbnail w-25 mt-5"
              alt="signature"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Signature;
