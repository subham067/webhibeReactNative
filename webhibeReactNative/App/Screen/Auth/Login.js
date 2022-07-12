import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon, { IconType } from '../../Components/Icon'
import Navigation from '../../Service/Navigation'

const Login = () => {
    return (
        <View style={{
            flex: 1,
        }}>
             <StatusBar
                animated={true}
                translucent={true} backgroundColor={'transparent'}
                hidden={false}
                barStyle={'dark-content'} />
            <ImageBackground
                source={require("../../Assets/Image/Background.png")}
                style={{
                    flex: 1
                }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image style={{
                        alignSelf: "center",
                        marginTop: 30
                    }} source={require("../../Assets/Image/logo.png")} />

                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                }}>
                    <View style={{
                        height: 48,
                        width: 48,
                        borderRadius: 13,
                        backgroundColor: "#fff",
                        elevation: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 5
                    }}>
                        <Image style={{ marginTop: 10 }} source={require("../../Assets/Image/Vectorgg.png")} />
                    </View>
                    <View style={{
                        height: 48,
                        width: 48,
                        borderRadius: 13,
                        backgroundColor: "#fff",
                        elevation: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 5
                    }}>
                        <Image source={require("../../Assets/Image/Vectorfb.png")} />
                    </View>
                    <View style={{
                        height: 48,
                        width: 48,
                        borderRadius: 13,
                        backgroundColor: "#fff",
                        elevation: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 5
                    }}>
                        <Image source={require("../../Assets/Image/Vectorap.png")} />
                    </View>

                </View>
                <View style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2) ',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    elevation: 1
                }}>
                    <Text
                        style={{
                            fontFamily: "Poppins-Regular",
                            fontSize: 16,
                            color: "#403E40",
                            textAlign: "center",
                            marginVertical: 10
                        }}>Log in with email</Text>
                    <View style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#D1FAFB"
                    }} />
                    <View style={{
                        width: "86%",
                        backgroundColor: "#fff",
                        borderRadius: 13,
                        height: 50,
                        alignSelf: "center",
                        marginVertical: 10,
                        alignItems: "center",
                        flexDirection: "row",
                        paddingHorizontal: 10
                    }}>
                        <Icon type={IconType.Fontisto} style={{ marginHorizontal: 10 }} name="email" size={16} color="#403E40" />
                        <View style={{
                            width: 1,
                            height: "100%",
                            backgroundColor: "#D1FAFB",
                            marginHorizontal: 10,

                        }} />
                        <TextInput style={{
                            flex: 1,
                            color: "#01949A",
                            fontFamily: "Poppins-Regular",
                            fontSize: 16,
                        }}
                            placeholder="wanda.maxi@gmail.com"
                            placeholderTextColor={"#403E40"}
                        />
                    </View>
                    <View style={{
                        width: "86%",
                        backgroundColor: "#fff",
                        borderRadius: 13,
                        height: 50,
                        alignSelf: "center",
                        marginVertical: 10,
                        alignItems: "center",
                        flexDirection: "row",
                        paddingHorizontal: 10
                    }}>
                        <Icon type={IconType.AntDesign} style={{ marginHorizontal: 10 }} name="lock" size={16} color="#403E40" />
                        <View style={{
                            width: 1,
                            height: "100%",
                            backgroundColor: "#D1FAFB",
                            marginHorizontal: 10,

                        }} />
                        <TextInput style={{
                            flex: 1,
                            color: "#01949A",
                            fontFamily: "Poppins-Light",
                            fontSize: 16,
                        }}
                            placeholder="Password"
                            placeholderTextColor={"#403E40"}
                        />
                        <View style={{

                        }}>
                            <Text style={{
                                color: "#01949A",
                                fontFamily: "Poppins-Light",
                                fontSize: 14,
                                marginTop: -2
                            }}>Show</Text>
                            <View style={{ height: 1, backgroundColor: "#01949A", marginTop: -7 }}>

                            </View>
                        </View>

                    </View>
                    <View style={{
                        width: "86%",
                        backgroundColor: "#01949A",
                        borderRadius: 50,
                        alignSelf: "center",
                        marginVertical: 10,
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontFamily: "Poppins-Regular",
                            fontSize: 16,
                            textAlign: "center"
                        }}>Log In</Text>
                    </View>
                <Text onPress={()=> Navigation.navigate("ForgotPassword")} style={{
                    textAlign: "right",
                    marginRight: "7%",
                    color: "#403E40",
                    fontFamily: "Poppins-Light",
                    fontSize: 14,
                }}>
                    Forgot Password?
                </Text>
                <View style={{
                    alignSelf:"center",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center",
                    marginVertical:20
                }}>
                     <Text style={{
                            color: "#403E40",
                            fontFamily: "Poppins-Light",
                            fontSize: 14,
                            marginHorizontal:7
                        }}>
                            Don’t have an account? 
                        </Text>
                     <Text onPress={()=> Navigation.navigate("SignUp")} style={{
                            color: "#01949A",
                            fontFamily: "Poppins-Regular",
                            fontSize: 14,
                            marginHorizontal:7
                        }}>
                           Sign Up
                        </Text>
                </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})