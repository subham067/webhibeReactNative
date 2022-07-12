import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon, { IconType } from '../../Components/Icon'
import Navigation from '../../Service/Navigation'

const Signup = () => {
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
               
                    <Image style={{
                        alignSelf: "center",
                        marginTop: 60
                    }} source={require("../../Assets/Image/Group39307.png")} />

                <Text style={{
                        color: "#F45556",
                        fontFamily: "Poppins-Regular",
                        fontSize: 24,
                        textTransform:"uppercase",
                        textAlign:"center",
                        marginTop:20
                }}>
                Create your account
                </Text>
                <View style={{
                        width: "86%",
                        backgroundColor: "#fff",
                        borderRadius: 13,
                        height: 50,
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom:10,
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
                        flexDirection:"row",
                        alignItems:"center",
                        marginLeft:"7%",
                        paddingHorizontal:10
                    }}>
                        <View>
                        <Icon type={IconType.Ionicon} style={{marginHorizontal: 10}} name='checkbox' color="#01949A" size={22} />

                        </View>
                        <Text style={{
                               color: "#403E40",
                               fontFamily: "Poppins-Light",
                               fontSize: 16,
                               marginLeft:0
                        }}>
                        Keep me signed in
                        </Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginLeft:"7%",
                        paddingHorizontal:10,
                        marginTop:10
                    }}>
                        <View>
                        <Icon type={IconType.Ionicon} style={{marginHorizontal: 10}} name='checkbox' color="#01949A" size={22} />

                        </View>
                        <Text style={{
                               color: "#403E40",
                               fontFamily: "Poppins-Light",
                               fontSize: 16,
                               marginLeft:0
                        }}>
                     I agree with the Terms & Conditions
                        </Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginLeft:"7%",
                        paddingHorizontal:10,
                        marginTop:10
                    }}>
                        <View>
                        <Icon type={IconType.Ionicon} style={{marginHorizontal: 10}} name='checkbox' color="#01949A" size={22} />

                        </View>
                        <Text style={{
                               color: "#403E40",
                               fontFamily: "Poppins-Light",
                               fontSize: 16,
                               marginLeft:0
                        }}>
                   I agree with the Privacy Policy
                        </Text>
                    </View>
                    <Pressable onPress={()=> Navigation.navigate("EmailVerification")} style={{
                        width: "86%",
                        backgroundColor: "#01949A",
                        borderRadius: 50,
                        alignSelf: "center",
                        marginVertical: 20,
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontFamily: "Poppins-Regular",
                            fontSize: 16,
                            textAlign: "center"
                        }}>Sign Up</Text>
                    </Pressable>
                    <View style={{
                        flex:1
                    }}>

                    </View>
                    <View style={{
                    alignSelf:"center",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center",
                    marginBottom:10
                }}>
                     <Text style={{
                            color: "#403E40",
                            fontFamily: "Poppins-Light",
                            fontSize: 14,
                            marginHorizontal:7
                        }}>
                            Don’t have an account? 
                        </Text>
                     <Text onPress={()=> Navigation.navigate("Login")} style={{
                            color: "#01949A",
                            fontFamily: "Poppins-Regular",
                            fontSize: 14,
                            marginHorizontal:7
                        }}>
                           Sign In
                        </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})