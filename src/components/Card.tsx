import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  ViewStyle,
  View,
  TextStyle,
} from "react-native";

type cardProps = {
  title?: string;
  image: ImageSourcePropType;
  description?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  discount?: string;
  viewStyle?: ViewStyle;

};

const Card = ({
  title,
  image,
  description,
  style,
  textStyle,
  discount,
  viewStyle,
}: cardProps) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <View style={[styles.imageContainer, viewStyle]}>
        <Image style={[styles.image]} source={image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>{discount}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.description, textStyle]}>{description}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 326,
    height: 614,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    elevation: 8,
  },
  imageContainer: {
    width: 326,
    height: 338,
  },
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  textContainer: {
    paddingVertical: 40,
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    color: "#202020",
    fontWeight: 700,
    fontSize: 28,
    marginBottom: 10,
  },
  description: {
    fontSize: 19,
    lineHeight: 27,
  },
  discountContainer: {
    position:'absolute',
    width:39,
    height:20,
    backgroundColor:'hsl(0, 84%, 57%)',
    right:0,
    borderRadius: 3
  },
  discount: {
    fontSize: 17,

  },
});
