  
export const onInitialClientRender = (_, pluginOptions) => {
  const smallchatId = pluginOptions.clientId;
  const delayLoad = pluginOptions.optimize;

  const source = `https://embed.small.chat/${smallchatId}.js`

  const smallchatScript = document.createElement("script");

  smallchatScript.src = source;

  smallchatScript.defer = true;

  const appendScript = () => {
    document.body.appendChild(smallchatScript);
  };

  if (!delayLoad) {
    appendScript();
  } else {
    setTimeout(() => {
      window["requestIdleCallback"]
        ? window.requestIdleCallback(appendScript)
        : appendScript();
      console.log("added script");
    }, 3000);
  }
};