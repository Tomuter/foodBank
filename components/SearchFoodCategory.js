import { View, Text, Image } from "react-native";

const SearchFoodCategory = () => {
  return (
    <View className="">
      <View className="flex flex-row items-center space-x-3">
        <View>
          <Image
            source={require("../assets/food1.jpg")}
            className="w-24 h-24 rounded-lg"
          />
        </View>
        <View className='space-y-2'>
          <Text className="text-white font-semibold ">Food Name</Text>
          <Text className="text-slate-500 w-72 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            quod dolores! Reiciendis provident fugit
          </Text>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-white">$300.00</Text>
            <View className="bg-red-500 w-24 px-3 py-2 rounded-full">
              <Text className="text-white font-semibold">Add Cart</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="bg-slate-500 w  h-[0.5] my-5 " />
    </View>
  );
};

export default SearchFoodCategory;
