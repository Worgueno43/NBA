import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import fr from '../img/flag/fr.png'
import en from '../img/flag/en.png'
import { useTranslation } from 'react-i18next';


export default function Langue() {
    const { t, i18n } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{t('menuLangue')}</Text>
              <View style={styles.flagView}>
                <TouchableOpacity 
                  onPress={() =>{
                    i18n.changeLanguage('fr')
                  }}
                >
                  <Image style={styles.flag} source={fr}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>{
                    i18n.changeLanguage('en')
                  }}
                >
                  <Image style={styles.flag} source={en}/>  
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>{t('fermer')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>{t('langueButton')}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    flag: {
        height: 50,
        width: 50,
    },
    flagView: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        width: 200,
        paddingVertical: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center"
    },
})