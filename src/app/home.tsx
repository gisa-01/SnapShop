import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profilePicture from "@/assets/snapShopIcons/image.png";
import RecentlyView from "@/assets/snapShopIcons/RecentlyView.png";
import StoryImage from "@/assets/snapShopIcons/Story.png";
import { Ionicons, Feather, Octicons } from "@expo/vector-icons";
import image from "@/assets/snapShopIcons/image2.png";
import React from "react";

const RECENTLY_VIEWED = [
  { id: "1", image: RecentlyView },
  { id: "2", image: RecentlyView },
  { id: "3", image: RecentlyView },
  { id: "4", image: RecentlyView },
];

const STORY = [
  { id: "1", image: StoryImage },
  { id: "2", image: StoryImage },
  { id: "3", image: StoryImage },
];

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View>
          <Image source={profilePicture} style={styles.avatar} />

          <TouchableOpacity style={styles.activityButton}>
            <Text style={styles.activityText}> My Activity</Text>
          </TouchableOpacity>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconCircle}>
              <Feather name="message-square" size={18} color={"#0052FF"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconCircle}>
              <View style={styles.notificationDot} />
              <Octicons name="sliders" size={18} color="#0052ff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconCircle}>
              <Feather name="settings" size={18} color="#0052FF" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.greeting}> Hello, Angel!</Text>
        <View style={styles.announcementCard}>
          <View style={styles.announcementTextContainer}>
            <Text style={styles.announcementTitle}>Announcement</Text>
            <Text style={styles.announcementBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit luctus libero.
            </Text>
          </View>

          <TouchableOpacity style={styles.arrowButton}>
            <Feather name="arrow-right" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recently Viewed</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentList}
        >
          {RECENTLY_VIEWED.map((item) => (
            <Image key={item.id} source={item.image} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>My Orders</Text>
        <View style={styles.ordersRow}>
          <TouchableOpacity style={styles.orderTap}>
            <Text style={styles.orderTapText}>To Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderTap}>
            <Text style={styles.orderTapText}>To Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderTap}>
            <Text style={styles.orderTapText}>To Review</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Stories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesList}
        >
          {STORY.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.storyCard}
              activeOpacity={0.9}
            >
              <Image source={item.image} style={styles.storyImage} />
              <View style={styles.playButtonOverlay}>
                <Ionicons name="play" size={22} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
   marginHorizontal:10,
    paddingBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  avatar: {
    width: 44,
    height: 44,
    top: 15,
  },

  activityButton: {
    backgroundColor: "#0052FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginLeft: 60,
    bottom: 20,
    width: 100,
  },

  activityText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },

  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 8,
  },

  iconCircle: {
    width: 36,
    height: 36,
    bottom: 50,
    borderRadius: 18,
    backgroundColor: "#F4F7FF",
    justifyContent: "center",
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: 6,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#0052FF",
    zIndex: 1,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#070101",
    bottom: 20,
  },

  announcementCard: {
    backgroundColor: "#F7F8FA",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  announcementTextContainer: {
    flex: 1,
    paddingRight: 10,
  },

  announcementTitle: {
    fontSize: 15,
    color: "#070101",
    marginBottom: 4,
  },

  announcementBody: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 16,
  },

  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0052FF",
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#070101",
    marginBottom: 16,
  },

  recentList: {
    flexDirection: "row",
    marginBottom: 24,
  },

  ordersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  orderTap: {
    backgroundColor: "#EBF1FF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  orderTapText: {
    color: "#0052FF",
    fontSize: 14,
    fontWeight: "500",
  },
  
  storiesList: {},

  storyCard: {},

  storyImage: {},

  playButtonOverlay: {},
});
