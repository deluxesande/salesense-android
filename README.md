# Salesense Mobile App

**Salesense** is a modern ERP mobile application that helps businesses manage sales, inventory, and payments. Integrated with **M-Pesa** for seamless mobile money transactions and **KRA** for automated tax compliance, Salesense empowers businesses to operate efficiently and stay compliant, right from their phones.

This is the **React Native** app built using **Expo**.

---

## Features

-   📈 **Sales Management:** Track and manage sales with real-time updates.
-   🛒 **Inventory Management:** Monitor stock levels and receive low-stock alerts.
-   💸 **M-Pesa Integration:** Accept and verify payments easily via mobile money.
-   🧾 **KRA Integration:** Automatically generate and submit compliant invoices.
-   📊 **Analytics and Reporting:** Access visual reports on business performance.
-   🔒 **User Roles and Permissions:** Manage secure access based on roles (Admin, Salesperson, Accountant, etc.).

---

## Tech Stack

-   **Frontend:** React Native (Expo)
-   **State Management:** Zustand (as per project setup)
-   **Networking:** Axios
-   **Authentication:** JWT
-   **APIs:** M-Pesa, KRA, Custom Backend
-   **Navigation:** React Navigation
-   **Form Handling:** Formik and Yup

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/deluxesande/salesense-android.git
cd salesense-android
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project:

```env
API_URL=https://your-backend-api.com
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
KRA_API_KEY=your_kra_api_key
```

Make sure you're using a library like `expo-constants` or `react-native-dotenv` to load these variables.

### 4. Start the Expo Server

```bash
npx expo start
```

Then scan the QR code with your Expo Go app or run it on an Android emulator.

---

## Folder Structure

The project follows the default **Expo** template structure:

```
/assets          # Images, fonts, and other static assets
/components      # Reusable UI components
/constants       # Constants like colors, sizes, API endpoints
/navigation      # App navigation setup (React Navigation)
/screens         # App screens
/services        # API service handlers (M-Pesa, KRA, backend)
/hooks           # Custom React hooks
/utils           # Utility functions and helpers
/App.js          # Root component
/app.json        # Expo app configuration
/babel.config.js # Babel configuration
```

---

## API Integrations

-   **M-Pesa API:** Initiates payments, processes callbacks, and checks transaction status.
-   **KRA API:** Sends invoices and retrieves tax compliance data.
-   **Backend API:** Handles authentication, user management, business logic, and data storage.

---

## Contributing

Contributions are welcome! 🎉

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/FeatureName`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/FeatureName`).
6. Open a Pull Request.

---

## License

Licensed under the **Apache License 2.0**.  
See the [LICENSE](LICENSE) file for more information.

---

## Contact

For any questions or support:

-   **Email:** deluxesande@gmail.com

---
