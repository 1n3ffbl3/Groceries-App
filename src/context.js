import React from 'react';

export const ItemContext = React.createContext('itemContext');
export const UIContext = React.createContext('uiContext');

export const MultipleContextProvider = ({
  itemCtxValue,
  uiCtxValue,
  children
}) => {
  return (
    <ItemContext.Provider value={itemCtxValue}>
      <UIContext.Provider value={uiCtxValue}>{children}</UIContext.Provider>
    </ItemContext.Provider>
  );
};

export const MultipleContextConsumer = ({ children }) => {
  return (
    <UIContext.Consumer>
      {(uiCtx) => {
        return (
          <ItemContext.Consumer>
            {(itemCtx) => {
              return children({ uiCtx, itemCtx });
            }}
          </ItemContext.Consumer>
        );
      }}
    </UIContext.Consumer>
  );
};
