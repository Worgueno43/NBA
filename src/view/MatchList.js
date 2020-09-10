import React, { useState, useEffect  } from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { format,compareAsc} from 'date-fns'
import Header from './Header';
import DatePicker from 'react-native-datepicker';
import MatchRow from './MatchRow';
import BGImg from './../img/NBA/background.jpg';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { mt } from 'date-fns/locale';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const axios = require('axios');

export default function MatchList() {
  const [date, setDate] = useState(null);
  const [donnee, setDonnee] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      setLoadingData(true)
      const result = await axios.get('https://www.balldontlie.io/api/v1/games')
      setDonnee(result.data.data)
      setLoadingData(false)
    }
    getData();
  }, []);

  useEffect(() => {
    const filtered = donnee.filter(item => {
      let datetest = format(new Date(item.date), 'yyyy-MM-dd');
      return !date || compareAsc(new Date(datetest), new Date(date)) === 0
    })
    
    setFilteredData(filtered);
  }, [date, donnee, setFilteredData, format, compareAsc])

  return (
    <View style={styles.blocList}>
      {console.log(date)}
      <Header />
          <ImageBackground style={styles.imgbg} source={BGImg}>
            <View style={styles.head}>
              <DatePicker
                style={styles.datepicker}
                date={date}
                mode="date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{ 
                  dateIcon: {
                    display: 'none'
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => {setDate(date)}}
              />
              {
                date 
                &&
                <TouchableOpacity 
                style={styles.reset}
                onPress={() => {
                  setDate(null)
                }}
                >
                  <Text style={styles.resetTXT}>{t('reset')}</Text>
                </TouchableOpacity>
              }
            </View>
        </ImageBackground>
        <View style={styles.bodyList}>
            { loadingData 
              ? 
                <View>
                  <Text style={styles.loadingTXT}>{t('load')}</Text>
                </View>
              :
                <FlatList style={styles.flat}
                  data = {filteredData}
                  renderItem={({item, index}) => 
                    <MatchRow 
                        item={item} 
                        index={index} 
                    />
                  }
                  keyExtractor={item => item.id}
                  initialNumToRender={50}
                />
            }
        </View>
    </View>
        
  );
}

const styles = StyleSheet.create({
  reset: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: -5,
  },
  resetTXT: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  datepicker: {
    width: 200,
    fontSize: 24,
    color: 'white',
    marginVertical: 20,
    zIndex: 1,
  },
  imgbg: {
      width: windowWidth,
      height: 300,
      zIndex: 0,
      justifyContent: 'center',
      alignContent: 'space-around'
  },
  head: {
      backgroundColor: 'white',
      width: 230,
      alignSelf: 'center',
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
  },
  blocList: {
      flex: 1,
      backgroundColor: '#E0E0E0',
      marginTop: -32,
  },
  flat: {
      marginTop: 10,
      height: windowHeight - 400,
    },
  bodyList: {
      display: "flex",
      alignItems: "center",
  },
  loadingTXT: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})