require('@testing-library/react');
import { render, screen } from '@testing-library/react';
import GlobalContextProvider from "../../states/context/GlobalContextProvider";
import { GlobalContext, GlobalContextType, StateDefaultValues } from "../../states/context/GlobalContext";
import React, { FC } from "react";

test("Test GlobalContextProvider and GlobalContext with a Stub component that consume a default value", () => {
    
    render(
      <GlobalContextProvider>
        <ConsumerStub />
      </GlobalContextProvider>
    );

    expect(screen.getByText(new RegExp(StateDefaultValues.name, "i"))).toBeInTheDocument();
  });

  //Stub component that consume a user.name default value
  const ConsumerStub: FC = () => {
    const { user } = React.useContext(
      GlobalContext
    ) as GlobalContextType;
    
    if (!user) return <div>`Error!`</div>;
    return <div>`Hello {user.name}!`</div>;
  }
