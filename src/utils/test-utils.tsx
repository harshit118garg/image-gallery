import { cleanup, render } from "@testing-library/react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

afterEach(() => {
  cleanup();
});

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ProviderWrapper,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
