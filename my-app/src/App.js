import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./WebBuild/Build/WebBuild.loader.js",
  dataUrl: "./WebBuild/Build/WebBuild.data",
  frameworkUrl: "./WebBuild/Build/WebBuild.framework.js",
  codeUrl: "./WebBuild/Build/WebBuild.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Octocat World</h1>
      </div>
    </div>
  );
}

export default App;