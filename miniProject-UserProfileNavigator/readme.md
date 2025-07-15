# 🛠️ Mini Project: User Profile Navigator

### ✅ Features:

* Home screen with buttons
* Navigate to About and dynamic User Profile
* Uses `useRouter`, `Link`, and `[user].tsx`
* Styles with global style

### Screenshots

![My Image](../_screenshots/miniProject-UserProfileNavigator_1.jpeg "Image Title")
![My Image](../_screenshots/miniProject-UserProfileNavigator_1.jpeg "Image Title")
![My Image](../_screenshots/miniProject-UserProfileNavigator_1.jpeg "Image Title")

### 🧾 File Structure:

```
app/
├── _layout.tsx
├── index.tsx         <-- Home
├── about.tsx
├── [user].tsx        <-- Dynamic profile
├── +not-found.tsx
styles/
└── global.ts
```

###  🎨 Reusable Stylesheet (every project)

```ts
// styles/global.ts
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 10,
  },
});
```
 
### 📄 \_layout.tsx

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack screenOptions={{ headerTitleAlign: 'center' }} />;
}
```

### 📄 index.tsx (Home)

```tsx
import { useRouter } from 'expo-router';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Button title="Go to About" onPress={() => router.push('/about')} />
      <Button title="Go to Zied's Profile" onPress={() => router.push({ pathname: '/[user]', params: { user: 'zied' } })} />
    </View>
  );
}
```

### 📄 about.tsx

```tsx
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About Page</Text>
    </View>
  );
}
```

### 📄 \[user].tsx

```tsx
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { globalStyles } from '../styles/global';

export default function Profile() {
  const { user } = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Hello, {user}!</Text>
    </View>
  );
}
```

### 📄 +not-found.tsx

```tsx
import { View, Text } from 'react-native';

export default function NotFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>404 - Page Not Found</Text>
    </View>
  );
}
```

---

# 📘 Basics of Navigation in Expo Router

Expo Router uses **file-based routing**, like Next.js.

## 📁 Folder + File Notation

| Type           | File/Folder Example       | Description                       |
| -------------- | ------------------------- | --------------------------------- |
| Static Route   | `/app/home.tsx`           | Becomes `/home` route             |
| Dynamic Route  | `/app/[userName].tsx`     | Becomes `/john`, `/maria`, etc.   |
| Group (no URL) | `/app/(tabs)/home.tsx`    | Grouped routes (no impact on URL) |
| Layout         | `/app/_layout.tsx`        | Shared layout/navigation bar      |
| Error Page     | `/app/+not-found.tsx`     | 404 fallback page                 |
| Web HTML       | `/app/+html.tsx`          | Customize HTML structure          |
| Native Intent  | `/app/+native-intent.tsx` | Android intent handling           |

🧠 **Memorize:**

* `[]` → Dynamic
* `()` → Grouping (no URL change)
* `_layout.tsx` → Navigation shell
* `+not-found.tsx` → 404 screen

---

## 🚀 Navigation Between Pages

### 🔁 `useRouter`

```tsx
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <Button title="Go to About" onPress={() => router.push('/about')} />
  );
}
```

| Method                  | What it does          |
| ----------------------- | --------------------- |
| `router.push('/about')` | Navigate to page      |
| `router.replace()`      | Replace current route |
| `router.back()`         | Go back               |

---

## 🔗 Links

```tsx
import { Link } from 'expo-router';

<Link href="/about">
  <Text>Go to About</Text>
</Link>
```

---

## 🔍 Query Params & Dynamic Routes

### Navigate with query:

```tsx
router.push({
  pathname: '/profile',
  params: { user: 'zied' }
});
```

### Receive in `[profile].tsx`:

```tsx
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { user } = useLocalSearchParams();
  return <Text>Welcome {user}</Text>;
}
```

---

# 🧠 Summary to Memorize

| Symbol                 | Meaning                             |
| ---------------------- | ----------------------------------- |
| `[]`                   | Dynamic route (`[user].tsx`)        |
| `()`                   | Grouping (like layout containers)   |
| `_layout.tsx`          | Navigation layout for screen stacks |
| `useRouter`            | Programmatic navigation             |
| `Link`                 | Declarative navigation              |
| `useLocalSearchParams` | Access params in route              |

---

