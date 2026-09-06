import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prev) => prev - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes, hours]);
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return (
    <View>
      <Text style={styles.timer}>
         {formattedHours} : {formattedMinutes} : {formattedSeconds}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
  fontSize: 17,
  fontWeight: '700',
  lineHeight:21,
  color: '#202020',
}
});
