import React, { useEffect } from "react";

export default function Testes() {
  useEffect(() => {
    if (window.isElectronApp) {
      window.ipcRenderer.on("async-reply", (event, args) => {
        alert(args);
      });
    }
  });

  const handleIPCClick = () => {
    if (window.isElectronApp) {
      window.ipcRenderer.send("async-msg", "FRONT-TO-ELECTRON - PING");
    }
  };

  return (
    <div>
      <h2>Página para Testes</h2>
      <button type="button" onClick={() => handleIPCClick()}>
        Electron IPC
      </button>
    </div>
  );
}
