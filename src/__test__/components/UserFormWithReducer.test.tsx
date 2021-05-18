require("@testing-library/react");
import { render, fireEvent } from "@testing-library/react";
import UserFormWithReducer from "../../components/UserFormWithReducer";

it("test HTMLInputElement.value from UserFormWithReducer component", () => {
  const comp = render(<UserFormWithReducer />);
  const input: HTMLInputElement = comp.getByTestId(
    "TestId-form-name-input-reducer"
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Daro" } });
  fireEvent.click(input);
  expect(input.id).toBe("form-name-input-reducer");
  expect(input.value).toBe("Daro");
});
