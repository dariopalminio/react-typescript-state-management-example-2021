require('@testing-library/react');
import { renderHook, act } from '@testing-library/react-hooks'
import useUserHook from "../../states/useUserHook";

test('Should update name and email by useUserHook', () => {
    const { result } = renderHook(() => useUserHook());
 
    act(() => {
      result.current.updateUserHook("Daro Tester","daro@gmail.com");
    })
  
    expect(result.current.name).toBe("Daro Tester");
    expect(result.current.email).toBe("daro@gmail.com");
  });
