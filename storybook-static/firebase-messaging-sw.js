// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCGJZ7HD2brARHYVtgdpgJPzLrymTO03xg",
    authDomain: "cloud-studio-325401.firebaseapp.com",
    projectId: "cloud-studio-325401",
    storageBucket: "cloud-studio-325401.appspot.com",
    messagingSenderId: "283804455161",
    appId: "1:283804455161:web:b2a9dc54dabf7010aa5228",
    measurementId: "G-VS301BVPMH",
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = "Cloud Studio"
    const message = payload.data.msg
    const notificationOptions = {
        body: message,
        icon: "https://cloudstudio.cloudraw.kr/images/mainLogo/mainCloudStudio.png",
    }
    self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener("notificationclick", function (event) {
    // const click_action = "https://cloudstudio.cloudraw.kr"
    // event.waitUntil(clients.openWindow(click_action))
    event.notification.close()
})
