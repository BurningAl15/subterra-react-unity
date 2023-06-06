import React, { useState, useCallback, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './unityStyle.css';

export default function UnityApp(props) {
  const [inputData, setInputData] = useState('');
  let isTesting = false;
  const { buildName, directoryName } = props;

  const path = isTesting ? `../public/${directoryName}/Build` : `/${directoryName}/Build`;
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext({
    loaderUrl: `${path}/${buildName}.loader.js`,
    dataUrl: `${path}/${buildName}.data.unityweb`,
    frameworkUrl: `${path}/${buildName}.framework.js.unityweb`,
    codeUrl: `${path}/${buildName}.wasm.unityweb`,
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
      {
        buildName === "SubterraTestV2" &&
        <>
          <p>If the screen looks black when the percentage finished to load, download this extension</p>
          <a href={'https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es'}>Access-Control-Allow-Origin</a>
        </>
      }

      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}

      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", width: '100%', height: '100%' }}
        // devicePixelRatio={devicePixelRatio}
        className='unity-container'
      />
    </>
  );
}