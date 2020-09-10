import React from 'react'
import { Dimensions, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { chooseImage } from './utility'
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';


const windowWidth = Dimensions.get('window').width;

function AffichageMatch({ item, handleSubmit, isButton = false }) {
    const {
        home_team,
        home_team_score,
        date,
        visitor_team,
        visitor_team_score
    } = item
    const { t } = useTranslation();
    return(
        <View style={styles.bloc}>
            {
                !isButton
                &&
                    <View style={styles.resumbloc}>
                        <Text style={styles.resum}>{t('resum')} </Text>
                        <Text style={styles.resumBold}>{item.home_team.name}</Text> 
                        <Text style={styles.resum}> {t('vs')} </Text>
                        <Text style={styles.resumBold}>{item.visitor_team.name} </Text>
                    </View>

            }
            <View contentContainerStyle={styles.row}>
                <View style={styles.navbar}>
                    <Text style={styles.navbarTXT}>{t('conf')}</Text>
                </View>
                <View style={styles.body}>
                <View style={styles.componentL}>
                        <View style={styles.team}>
                            <Image style={styles.img} source={chooseImage(home_team.name)}></Image>
                            <Text style={styles.teamTXT}>{home_team.name}</Text>
                        </View> 
                        <View style={styles.scoreL}>
                            <Text style={styles.scoreTXT}>{home_team_score}</Text>
                        </View>
                    </View>
                    <View style={styles.componentL}>
                        <View style={styles.date}>
                            <Text style={styles.dateTXT}>{format(new Date(date), 'yyyy-MM-dd')}</Text>
                        </View>
                    </View>
                    <View style={styles.componentR}>
                        <View style={styles.team}>
                            <Image style={styles.img} source={chooseImage(visitor_team.name)} />
                            <Text style={styles.teamTXT}> {visitor_team.name} </Text>
                        </View>
                        <View style={styles.scoreR}>
                            <Text style={styles.scoreTXT}>{visitor_team_score}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    {
                        !isButton
                        ? 
                        <Text style={styles.footerTXT}>{t('victory')} {home_team_score > visitor_team_score ? home_team.full_name : visitor_team.full_name}</Text>
                        :
                        <TouchableOpacity 
                            onPress={() => handleSubmit({item})}
                            style={styles.button}
                        >
                        <Text style={styles.buttonTXT}>{t('resumButton')}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>

    )
}

export { AffichageMatch }

const styles = StyleSheet.create({
    bloc: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    row: {
        display: 'flex',
        width: windowWidth,
    },
    resumbloc: {
        marginVertical: 30,
        justifyContent: 'center',
        flexDirection: 'row'
    },  
    resum: {
        fontSize: 18,
    },
    resumBold: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    navbar: {
        backgroundColor: '#051c2d',
        flexDirection: 'column',
        width: windowWidth,
        paddingVertical: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    navbarTXT: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    body: {
        backgroundColor: '#FFFFFF',
        color: 'black',
        flexDirection: 'row',
        paddingTop: 10,
        width: windowWidth,
        justifyContent: 'space-around'
    },
    componentL: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    componentR: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    team: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    teamTXT: {
        color: 'black',
    },
    scoreL: {
        marginLeft: 15
    }, 
    scoreR: {
        marginRight: 15
    },

    scoreTXT: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {

    },
    dateTXT: {

    },
    img: {
        width: 60,
        height: 58,
    },  
    footer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20
    },
    footerTXT: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        paddingVertical: 10,
        color: '#78b4ec'
    },
    button: {
        marginTop: 5,
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        width: windowWidth,
    },
    buttonTXT: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        paddingVertical: 10,
        color: '#78b4ec'
    },
})