mkdir -p android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
curl "http://localhost:8081/index.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"
cd android && ./gradlew clean assembleDebug