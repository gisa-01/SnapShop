import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor:'#000000',
        tabBarInactiveTintColor:'#004CFF',

        tabBarStyle: {
          height: 84,
          backgroundColor: "white",
          borderTopWidth: 0,
          paddingTop:25,
         
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Favorites"
        options={{
          title:'Favorites',
          tabBarIcon: ({ color }) =>(
            <FontAwesome name="heart" size={24} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Category"
        options={{
          title:'Category',
          tabBarIcon: ({ color }) =>(
            <FontAwesome name="list-ul" size={24} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="ShoppingCart"
        options={{
          title:'Shopping Cart',
          tabBarIcon: ({ color }) =>(
            <FontAwesome name="shopping-bag" size={24} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
