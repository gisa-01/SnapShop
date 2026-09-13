import { Text, TextInput } from "react-native";
import { act, create, ReactTestRenderer } from "react-test-renderer";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Timer from "@/components/Timer";

jest.mock("@expo/vector-icons/FontAwesome", () => () => null);

const findPressableNode = (component: ReactTestRenderer) => {
  const pressableNodes = component.root.findAll(
    (node) => typeof node.props.onPress === "function",
  );

  return pressableNodes[pressableNodes.length - 1];
};

describe("Button", () => {
  it("calls onPress when the button is pressed", () => {
   
    const onPress = jest.fn();
    let component: ReactTestRenderer;

    act(() => {
      component = create(<Button title="Continue" onPress={onPress} />);
    });

    
    act(() => {
      findPressableNode(component!).props.onPress();
    });

    // Assert
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

describe("Input", () => {
  it("passes typed text to onChangeText", () => {
    // Arrange
    const onChangeText = jest.fn();
    let component: ReactTestRenderer;

    act(() => {
      component = create(
        <Input placeholder="Email" value="" onChangeText={onChangeText} />,
      );
    });

  
    act(() => {
      component!.root.findByType(TextInput).props.onChangeText("angel@example.com");
    });

  
    expect(onChangeText).toHaveBeenCalledWith("angel@example.com");
  });

  it("shows a password after the visibility button is pressed", () => {
    
    let component: ReactTestRenderer;

    act(() => {
      component = create(
        <Input
          placeholder="Password"
          value="secret"
          onChangeText={jest.fn()}
          secureTextInput
        />,
      );
    });

    
    const visibilityButton = findPressableNode(component!);
    act(() => {
      visibilityButton.props.onPress();
    });

   
    expect(component!.root.findByType(TextInput).props.secureTextEntry).toBe(false);
  });
});

describe("Timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("counts down from ten minutes after one second", () => {
   
    let component: ReactTestRenderer;

    act(() => {
      component = create(<Timer />);
    });

  
    act(() => {
      jest.advanceTimersByTime(1000);
    });

  
    expect(component!.root.findByType(Text).props.children).toEqual([
      "00",
      " : ",
      "09",
      " : ",
      "59",
    ]);

    act(() => {
      component!.unmount();
    });
  });
});
