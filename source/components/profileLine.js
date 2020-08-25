import * as React from "react";
import { SafeAreaView, Image } from "react-native";
import Button from "./button";
import BoxCenter from "./box-center";
import Text from "./Text";
import { Settings } from "./icons"



const profileLine = ({ navigation }) => {
    return (
        <BoxCenter flexDirection="row" flex={2} as={SafeAreaView} borderRadius="full">
            <BoxCenter m={20} bg="rgb(198,0,0)" borderRadius="normal" >
                <Button flex={1} flexDirection="column" onPress={() => navigation.navigate("Profile")}>
                        style={{ width: 75, height: 75, borderRadius: 999 }}
                    />
                    <Text mt={15} alignSelf="center" fontWeight="bold">kıdemli</Text>
                </Button>
            </BoxCenter>
            <BoxCenter p={15} flex={2} mr={20} bg="rgb(198,0,0)" borderRadius="normal">
                <Button mr={15} alignSelf="flex-end"><Settings stroke="white" width={15} height={15} />
                </Button>
                <Text ml={10} fontSize={2} alignSelf="flex-start">Muhammed Tarık Uçar</Text>
                <Text ml={10} fontSize={2} alignSelf="flex-start">kalan bütçen : <Text fontWeight="bold">12.30₺</Text></Text>
            </BoxCenter>
        </BoxCenter>

    );
};

export default profileLine;