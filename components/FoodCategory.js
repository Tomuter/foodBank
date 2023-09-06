import { View, Text, Image, ScrollView } from "react-native";

const FoodCategory = () => {
  return (
    <View>
      <View className="flex flex-row items-end space-x-3 mt-8">
        <Text className="text-white text-2xl font-semibold">Food Category</Text>
        <View className="bg-white w-52  h-[0.5]" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="mt-5 flex flex-row space-x-5">
        <View>
          <View>
            <Image
              source={require("../assets/food3.jpg")}
              className=" h-36 w-36 rounded-lg"
            />
          </View>
          <View className="space-y-1 mt-1">
            <Text className="text-white font-semibold text-lg">Food Name</Text>
            <Text className="text-slate-500 text-base font-medium">$300.00</Text>
            <View className="bg-red-500 w-24 px-3 py-2 rounded-full">
              <Text className="text-white font-semibold">Add Cart</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Image
              source={require("../assets/food3.jpg")}
              className=" h-36 w-36 rounded-lg"
            />
          </View>
          <View className="space-y-1 mt-1">
            <Text className="text-white font-semibold text-lg">Food Name</Text>
            <Text className="text-slate-500 text-base font-medium">$300.00</Text>
            <View className="bg-red-500 w-24 px-3 py-2 rounded-full">
              <Text className="text-white font-semibold">Add Cart</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Image
              source={require("../assets/food3.jpg")}
              className=" h-36 w-36 rounded-lg"
            />
          </View>
          <View className="space-y-1 mt-1">
            <Text className="text-white font-semibold text-lg">Food Name</Text>
            <Text className="text-slate-500 text-base font-medium">$300.00</Text>
            <View className="bg-red-500 w-24 px-3 py-2 rounded-full">
              <Text className="text-white font-semibold">Add Cart</Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default FoodCategory;
