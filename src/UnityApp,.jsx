import React, {useState, useCallback, useRef} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './unityStyle.css';

export default function UnityApp() {
  const [inputData, setInputData] = useState('');
  // const buildName = 'QuizzTemplateBuild';
  let isTesting = false;
  const buildName = 'SubterraTestV2';
  const path = isTesting ? '../public/Build' : '/Build';
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext({    
    // loaderUrl: `${path}/${buildName}.loader.js`,
    // dataUrl: `${path}/${buildName}.data.gz`,
    // frameworkUrl: `${path}/${buildName}.framework.js.gz`,
    // codeUrl: `${path}/${buildName}.wasm.gz`,
    loaderUrl: `${path}/${buildName}.loader.js`,
    dataUrl: `${path}/${buildName}.data.unityweb`,
    frameworkUrl: `${path}/${buildName}.framework.js.unityweb`,
    codeUrl: `${path}/${buildName}.wasm.unityweb`,
    // loaderUrl: "../build/Build/SubterraTest.loader.js",
    // dataUrl: `../build/Build/SubterraTest.data.gz`,
    // frameworkUrl: `../build/Build/SubterraTest.framework.js.gz`,
    // codeUrl: `../build/Build/SubterraTest.wasm.gz`,
    enableCommunication: true,
  });

  const canvasRef = useRef(null);

  function focusCanvas() {
    if (canvasRef.current) {
      canvasRef.current.focus();
    }
  }

  // function handleSetText() {
  //   // sendMessage("TextManager", "SetText", inputData);
  //   sendMessage("TextManager", "SetText", 'any text');
  // }

  // We'll use a state to store the device pixel ratio.
  // const [devicePixelRatio, setDevicePixelRatio] = useState(
  //   window.devicePixelRatio
  // );

  // const handleChangePixelRatio = useCallback(
  //   function () {
  //     // A function which will update the device pixel ratio of the Unity
  //     // Application to match the device pixel ratio of the browser.
  //     const updateDevicePixelRatio = function () {
  //       setDevicePixelRatio(window.devicePixelRatio);
  //     };
  //     // A media matcher which watches for changes in the device pixel ratio.
  //     const mediaMatcher = window.matchMedia(
  //       `screen and (resolution: ${devicePixelRatio}dppx)`
  //     );
  //     // Adding an event listener to the media matcher which will update the
  //     // device pixel ratio of the Unity Application when the device pixel
  //     // ratio changes.
  //     mediaMatcher.addEventListener("change", updateDevicePixelRatio);
  //     return function () {
  //       // Removing the event listener when the component unmounts.
  //       mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
  //     };
  //   },
  //   [devicePixelRatio]
  // );

  // const handleText = (e) => {
  //   let val = e.target.value
  //   console.log('>>> Val',val)
  //   setInputData(val)
  // }

  return (
    <>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", width: '100%', height:'100%' }}
        // devicePixelRatio={devicePixelRatio}
        className='unity-container'
      />
      {/* {
        isLoaded && 
        <button onClick={()=>handleSetText()}>Change text</button>
      } */}
      <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
      <p>Input data: {inputData}</p>
    </>
  );
}