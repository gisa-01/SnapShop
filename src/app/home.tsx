import {StyleSheet,Text, View, ScrollView, Image, TouchableOpacity,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profilePicture from "@/assets/snapShopIcons/image.png";
import RecentlyView from "@/assets/snapShopIcons/RecentlyView.png";
import  StoryImage from "@/assets/snapShopIcons/Story.png";
import { Ionicons, Feather, Octicons } from "@expo/vector-icons";
import React, {useState} from "react";

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

const Home = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [activeOrderTab, setActiveOrderTab] = useState("To Receive");

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
          <Image
            key={item.id}
            source={item.image}
           />
        ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>My Orders</Text>
        <View style={styles.ordersRow}>
            <TouchableOpacity style={styles.orderTap}>
                <Text style={styles.orderTapText}>To Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orderTabActive}>
                <View style={styles.greenBadgeDot}/>
                    <Text style={[styles.orderTabText, styles.orderTabTextActive]}>TO Receive</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orderTap}>
                <Text style={styles.orderTapText}>To Review</Text>
            </TouchableOpacity>
            
        </View>

            <Text style={styles.sectionTitle}>Stories</Text>
            <ScrollView 
                horizontal showsHorizontalScrollIndicator={false}
                style={styles.storiesList}>
                {STORY.map((item) => (
                    <TouchableOpacity 
                       key={item.id} 
                       style={styles.storyCard}
                       activeOpacity={0.9}
                    >
                    <Image
                      source={item.image}
                      style={styles.storyImage} 
                    />

                     </TouchableOpacity>
                ))}
            </ScrollView>
            </ScrollView>
            <View style={styles.bottomTabBar}>
                <TouchableOpacity onPress={() => setActiveTab("home")}>
                    <Feather name="home" size={24} color="#0052FF"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("wishlist")}>
                    <Feather name="heart" size={24} color="#0052FF"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("orders")}>
                    <Ionicons name="receipt-outline" size={24} color="#0052FF"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("cart")}>
                    <Feather name="shopping-bag" size={24} color="#0052FF"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab("profile")}>
                    <Feather name="user" size={22} color="#0052FF"/>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: 20,
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
    gap: 12,
    marginBottom: 24,
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

  orderTabActive: {
    backgroundColor: "#EBF1FF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  orderTabText: {
    color: "#0052FF",
    fontSize: 14,
    fontWeight: "500",
  },
  
  orderTabTextActive: {
    fontWeight: "600",
  },

  greenBadgeDot: {
    position: "absolute",
    top: -2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },

  storiesList: {

  },

  storyCard: {

  },

  storyImage: {

  },

  playButtonOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -16 }, { translateY: -16 }],
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

});
