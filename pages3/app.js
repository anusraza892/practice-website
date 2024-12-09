import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp, getDocs, query } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANbtwX_MoekD2QT6uzxNyvwnCI5mT2Mt4",
    authDomain: "web-app-54b9c.firebaseapp.com",
    projectId: "web-app-54b9c",
    storageBucket: "web-app-54b9c.appspot.com",
    messagingSenderId: "636857898317",
    appId: "1:636857898317:web:4da873848a2cb58f0d9304",
    measurementId: "G-KH0RWCTW41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save a new post to Firestore
window.savePost = async function() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const name = document.getElementById('name').value;

    if (title && content && name) {
        try {
            const newPost = {
                title: title,
                content: content,
                name : name,
                created_at: Timestamp.fromDate(new Date())
            };

            await addDoc(collection(db, 'posts'), newPost);
            alert('Post saved successfully');
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Failed to save the post');
        }
    } else {
        alert('Please fill out all fields.');
    }
};

// Fetch posts from Firestore and display on the homepage
document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts');

    try {
        const postsQuery = query(collection(db, 'posts'));
        const snapshot = await getDocs(postsQuery);

        snapshot.forEach(doc => {
            const postData = doc.data();
            const postDiv = document.createElement('div');

            postDiv.innerHTML = `
                <h2>${postData.title}</h2> 
                <p>${postData.name}</p>
                <p>${postData.content}</p>
                <hr />
            `;

            postsContainer.appendChild(postDiv);
        });
    } catch (err) {
        console.error('Error fetching posts:', err);
        alert('Failed to load posts');
    }
});