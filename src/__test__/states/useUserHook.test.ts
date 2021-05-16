import { renderHook, act } from '@testing-library/react-hooks'
import useUserHook from "../../states/useUserHook";

test('should update name and email', () => {
    const { result } = renderHook(() => useUserHook())
 
    act(() => {
      result.current.updateUserHook("Daro","daro@gmail.com")
    })
  
    expect(result.current.name).toBe("Daro")
    expect(result.current.email).toBe("daro@gmail.com")
  });
