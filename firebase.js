const admin = require('firebase-admin');
const fbProyectId = process.env.FB_PROJECT_ID;

// Initialize firebase admin SDK
/*
admin.initializeApp({
  credential: admin.credential.cert(fbProyectId),
  storageBucket: FB_PROJECT_ID.appspot.com
})

// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
  bucket
}*/