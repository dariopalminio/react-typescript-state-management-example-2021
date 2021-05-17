require('@testing-library/react');
import { renderHook, act } from '@testing-library/react-hooks'
import { useReducer } from "react";
import {
    UserReducer,
    userInitialState,
    ActionType,
} from "../../states/UserReducer";

test('Test if UserReducer changes the initial state with payload new value', () => {

    const state = UserReducer(userInitialState, {
        type: ActionType.UPDATE_USER,
        payload: { name: "Daro Tester", email: "daro@gmail.com" }
    });
    expect(state.name).toEqual("Daro Tester");

});


test('Test if dispatch works in UserReducer', () => {
    //Test "const [state, setFunction] = useAtom(UserAtom)",
    // where "const [state, setFunction] = result.current" or
    // result.current[0] is equal to state and result.current[1] is equal to setFunction
    const { result } = renderHook(() => useReducer(UserReducer, userInitialState));
    const [state1, dispatch] = result.current;

    expect(state1.name).toBe(userInitialState.name);
    expect(state1.email).toBe(userInitialState.email);

    const newUser = {
        name: "Name for Test",
        email: "email@for.test.com",
    };

    act(() => {
        dispatch({ type: ActionType.UPDATE_USER, payload: newUser });
    })

    const state2 = result.current[0];
    expect(state2.name).toBe("Name for Test");
    expect(state2.email).toBe("email@for.test.com");
});
