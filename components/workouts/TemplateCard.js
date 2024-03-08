import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { differenceInDays, format } from 'date-fns';
import TemplateModal from './TemplateModal';

// Template exercises on start workout screen

const TemplateCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastClickedDate, setLastClickedDate] = useState(null);

  const openModal = () => {
    setLastClickedDate(new Date());
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const formatLastClickedDate = () => {
    if (lastClickedDate) {
      const daysDifference = differenceInDays(new Date(), lastClickedDate);

      if (daysDifference === 0) {
        return 'Last opened: Today';
      } else if (daysDifference === 1) {
        return 'Last opened: Yesterday';
      } else {
        return `Last opened: ${daysDifference} days ago`;
      }
    }
    return null;
  };  // shows when was the last time user opened particular exercise 

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
        <Image style={{ width: '100%', height: 200 }} source={item.image} />
        <LinearGradient
          colors={['transparent', '#000000']}
          style={{
            width: '100%',
            height: 200,
            position: 'absolute',
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text
          style={{
            fontSize: 50,
            color: '#daff6a',
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            bottom: 70,
            width: '100%',
          }}
        >
          {item.name}
        </Text>
        {lastClickedDate && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 50,
              width: '100%',
            }}
          >
            <FontAwesome6 name="clock" size={14} color="#dcdcdc" style={{ marginRight: 5 }} />
            <Text
              style={{
                fontSize: 14,
                color: '#dcdcdc',
                textAlign: 'center',
              }}
            >
              {formatLastClickedDate()}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <TemplateModal visible={modalVisible} closeModal={closeModal} routine={item} />
    </View>
  );
};

export default TemplateCard;
