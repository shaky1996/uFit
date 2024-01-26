import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { templateRoutines } from '../constants/templateRoutines';
import { LinearGradient } from 'expo-linear-gradient';
import TemplateModal from './TemplateModal';

const TemplateCard = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={openModal}
            >
                <Image
                    style={{ width: '100%', height: 200 }}
                    source={item.image}
                />
                <LinearGradient
                    colors={['transparent', '#000000']}
                    style={{
                        width: '100%',
                        height: 200,
                        position: 'absolute'
                    }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <Text
                    style={{
                        fontSize: 28,
                        color: '#daff6a',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        position: 'absolute',
                        bottom: 70,
                        width: '100%'
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
            <TemplateModal
                visible={modalVisible}
                closeModal={closeModal}
                routine={item}
            />
        </View>
    );
};

export default TemplateCard;
