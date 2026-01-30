import { Typography, Button, Card } from '@repo/ui';
import { View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);

export default function App() {
    return (
        <StyledSafeAreaView className="flex-1 bg-background">
            <StatusBar style="auto" />
            <StyledView className="flex-1 items-center justify-center p-6">
                <Card className="w-full text-center items-center">
                    <Typography variant="h1">CSA ONE Mobile</Typography>
                    <Typography variant="body" className="mb-6 text-center">
                        Empowering Ghana's farmers with Climate-Smart solutions right in their hands.
                    </Typography>

                    <StyledView className="w-full gap-4">
                        <Button
                            title="Enter App"
                            onPress={() => console.log('Mobile app enter')}
                        />
                        <Button
                            title="Explore Features"
                            variant="outline"
                            onPress={() => console.log('Explore features')}
                        />
                    </StyledView>
                </Card>
            </StyledView>
        </StyledSafeAreaView>
    );
}
