require('@testing-library/react');
import { renderHook, act } from '@testing-library/react-hooks'
import { useAtom } from "jotai";
import { UserAtom, userInitialState } from "../../states/UserAtom";

test('Test if state is initialized with default values when use UserAtom', () => {
    const { result } = renderHook(() => useAtom(UserAtom));
    const state = result.current[0];
    expect(state.name).toBe(userInitialState.name);
    expect(state.email).toBe(userInitialState.email);
});

test('Test if state is setting with new values when use UserAtom', () => {
    //Test "const [state, setFunction] = useAtom(UserAtom)",
    // where "const [state, setFunction] = result.current" or
    // result.current[0] is equal to state and result.current[1] is equal to setFunction
    const { result } = renderHook(() => useAtom(UserAtom));

    const newUser = {
        name: "Name for Test",
        email: "email@for.test.com",
    };

    act(() => {
        result.current[1](newUser); // Excecute setFunction
    })

    const state = result.current[0];
    expect(state.name).toBe("Name for Test");
    expect(state.email).toBe("email@for.test.com");
});
