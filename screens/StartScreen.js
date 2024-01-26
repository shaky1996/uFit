import { View, Text, ScrollView } from 'react-native';
import TemplatesUserCreated from '../components/TemplatesUserCreated';
import TemplateExamples from '../components/TemplateExamples';

const StartScreen = () => {
    return (
        <ScrollView>
        <View
            style={{ flex: 1 }}
        >
        <TemplatesUserCreated />
        </View>
        </ScrollView>
    );
};

export default StartScreen;
