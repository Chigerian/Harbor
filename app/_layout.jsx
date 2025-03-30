import { ThemeProvider, theme } from '../theme';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
