import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    //firebase 설정과 관련된 개인정보
    apiKey: "AIzaSyBwSmCG2Z832oGQzJX09S_4cLdvuTJfXGo",
    authDomain: "board-549d9.firebaseapp.com",
    projectId: "board-549d9",
    storageBucket: "board-549d9.appspot.com",
    messagingSenderId: "480351227840",
    appId: "1:480351227840:web:3c43b989ddd521b5594225",
    measurementId: "G-4EVEJ0RLH6"
}

//firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);


const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();


//firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();


// 필요한 곳에서 사용할 수 있도록 내보내기
export {firestore, auth, apiKey};

