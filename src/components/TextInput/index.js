import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../assets/resources/theme";

export default function AppTextInput({
  label,
  multiline,
  isRequired,
  secureTextEntry,
  policy,
  showPolicy,
  color,
  ...props
}) {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View style={{ marginVertical: 8 }}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text style={{ color: "red" }}>* </Text>}
          {policy && (
            <MaterialCommunityIcons
              name="help-circle"
              color={colors.primary}
              onPress={() => showPolicy(true)}
            />
          )}
        </Text>
      )}
      <View style={styles.container}>
        <TextInput
          style={multiline ? styles.textArea : styles.text}
          placeholderTextColor={colors.lightGray}
          {...props}
          autoCapitalize={"none"}
          secureTextEntry={isHidden}
          multiline={multiline}
          //textAlignVertical={multiline ? "top" : "auto"}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsHidden(!isHidden)}
            style={styles.rightIconContainer}>
           <Text style={{color:colors.primary}}>Show</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bluish,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    height:55,
  },
  rightIconContainer: {
    color:colors.primary,
    position: "absolute",
    right: 15,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 13,
    color: colors.black,
    marginBottom:8,
  },
  textArea: {
    color: colors.lightGray,
    fontSize: 16,
    //alignItems: "flex-start",
    textAlignVertical: "top",
    marginHorizontal: 8,
    height: 110,
  },
  text: {
    color: colors.darkGray,
    fontSize: 16,
    height: 45,
    marginHorizontal: 8,
    width: "100%",
    backgroundColor:colors.gray,
    opacity:0.5,
    borderRadius:5
  },
});
