
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc, addDoc,setDoc, deleteDoc, query, orderBy, limit, where, getDocs, collection, serverTimestamp as firestoreServerTimestamp  } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage,  ref as storageRef  , uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';
import { getDatabase,  ref as databaseRef, push, onValue, serverTimestamp as databaseServerTimestamp  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js';
import { serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlAbn2DAuE4kSVDtsNgdttwDeBT78YmL8",
    authDomain: "ferticonnect.firebaseapp.com",
    projectId: "ferticonnect",
    storageBucket: "ferticonnect.appspot.com",
    messagingSenderId: "1061809723490",
    appId: "1:1061809723490:web:307b939a9e256dcc21593b",
    measurementId: "G-XZT8HYB0DT",
    databaseURL: "https://ferticonnect-default-rtdb.europe-west1.firebasedatabase.app/"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const discussion_bg = document.querySelector('.discution_bg');
  const option_header_message = document.getElementById('option_header_message');
  const bottom_message_bar = document.getElementById('bottom_message');
  discussion_bg.style.right = "-120%";
  discussion_bg.style.zIndex = "240";
  discussion_bg.style.transition = ".4s ease";
  discussion_bg.style.position="fixed";
  option_header_message.style.display="flex";
  bottom_message_bar.style.bottom="-120%";

  const optionbg_wind_btn_liste_message = document.getElementById('optionbg_wind_btn_liste_message');
  optionbg_wind_btn_liste_message.onclick = closemessagespace;
  function closemessagespace(){
    const optionbg_wind = document.getElementById('optionbg_wind');
    discussion_bg.style.right = "-120%";
    discussion_bg.style.zIndex = "240";
    discussion_bg.style.transition = ".4s ease";
    discussion_bg.style.position="fixed";
    option_header_message.style.display="flex";
    bottom_message_bar.style.bottom="-120%";
    optionbg_wind.style.display = "none";
    const navbarbuttom = document.querySelector('.navbar_buttom');
    navbarbuttom.style.display = "none";
  }  

  option_header_message.onclick = dispalydiv;
  function dispalydiv(){
    const optionbg_wind = document.getElementById('optionbg_wind');
    if (optionbg_wind.style.display.display === "flex") {
        optionbg_wind.style.display = "none";
    }    
     if (optionbg_wind.style.display.display === "none") {
        optionbg_wind.style.display = "flex";
    }
}


  auth.onAuthStateChanged(async (user) => {
    if (user){
        const mail = user.email;
        const iduser = user.uid;
        const doclistemessageref = collection(db,typeuserclick,iduser,"listeMessage");
        const querySnapshot = await getDocs(doclistemessageref);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const idRoomMessage= data.idRoomMessage;
          const idamisMessage= data.idamisMessage;
          const typeamisMessage= data.TypeamisMessage;
          afficheLesDetaillesDeListe(idamisMessage,typeamisMessage,idRoomMessage);
        });
        async function afficheLesDetaillesDeListe(idamisMessage,typeamisMessage,idRoomMessage){
            const docRef = doc(db, typeamisMessage, idamisMessage);
            try {
                const docSnap = await getDoc(docRef); 
                if (docSnap.exists()) {
                    const datauser = docSnap.data(); 
                    const nameUserlisteamismessage = datauser.nom;
                    const prenimUserlisteamismessage = datauser.prenom;
                    const imageUserlisteamismessage = datauser.imguser;
                    const  listemesagebg = document.getElementById("listemesagebg");
                    const  amisbgmessage = document.createElement("div");
                    amisbgmessage.className="amisbgmessage";
                    const  imageamismessagebg = document.createElement("div");
                    imageamismessagebg.className="imageamismessagebg";
                    const  imageamismessagebgimg = document.createElement("img");
                    if(imageUserlisteamismessage){
                        imageamismessagebgimg.src= imageUserlisteamismessage;
                    }else{
                        imageamismessagebgimg.src= "img/ferticonnectiLogoWhite.png";
                    }
                    const  nameamismessagebg = document.createElement("div");
                    nameamismessagebg.className="nameamismessagebg";
                    const  nameamismessagebgh1 = document.createElement("h1");
                    nameamismessagebgh1.innerHTML=prenimUserlisteamismessage+" "+nameUserlisteamismessage;
                    imageamismessagebg.appendChild(imageamismessagebgimg);
                    amisbgmessage.appendChild(imageamismessagebg);
                    nameamismessagebg.appendChild(nameamismessagebgh1);
                    amisbgmessage.appendChild(nameamismessagebg);
                    listemesagebg.appendChild(amisbgmessage);
                    amisbgmessage.onclick = amisbgmessageFunction;
                    function amisbgmessageFunction(){
                        afficherlesMessages(typeamisMessage, idamisMessage ,imageUserlisteamismessage,prenimUserlisteamismessage,nameUserlisteamismessage,idRoomMessage);
                    }
                }
            }
            catch (error){
                console.error("-----",error);
            }
        }
    }
});


async function afficherlesMessages(typeamisMessage, idamisMessage ,imageUserlisteamismessage,prenimUserlisteamismessage,nameUserlisteamismessage,idRoomMessage){
    const discution_bg = document.getElementById("discution_bg");
    discution_bg.style.right = "0";
    var bottom_message = document.querySelector('.bottom_message').clientHeight;
    content_message.style.bottom = '0px';
    bottom_message_bar.style.bottom="0";
    const navbarbuttom = document.querySelector('.navbar_buttom');
    navbarbuttom.style.display = "none";

    const Image_header_message = document.getElementById("Image_header_message");
    const Image_header_messageimg = document.createElement("img");
    if(imageUserlisteamismessage){
        Image_header_messageimg.src= imageUserlisteamismessage;
    }else{
        Image_header_messageimg.src= "img/ferticonnectiLogoWhite.png";
    }
    Image_header_message.appendChild(Image_header_messageimg);
    const name_room_message = document.getElementById("name_room_message");
    name_room_message.innerHTML=prenimUserlisteamismessage+" "+nameUserlisteamismessage;
    
    const database = getDatabase(app);
    //const messageRef = databaseRef(database, 'messages');
    const messageRef = databaseRef(database, idRoomMessage );

    const messageInput = document.getElementById("messageecrit");
    const sendButton = document.getElementById("sendmessageicon");
    const messagesDiv = document.getElementById("content_message");
    messagesDiv.style.width="100%";
    wating.style.display="none";
    sendButton.onclick = envoiyerMessage;
    function envoiyerMessage() {
        const message = messageInput.value.trim();
        const user = auth.currentUser;
        if (user) {
            const userId = user.uid; 
            console.log('userId ='+userId);

            if (message !== "") {
                push(messageRef, {
                    text: message,
                    id_usersent:userId,
                    timestamp: new Date().getTime()
                })
                .then(() => {
                    messageInput.value = "";
                })
                .catch((error) => {
                    console.error("Error adding message: ", error);
                });
            }
            else{
                console.log("messageInput impty");
            }
          }else{console.log("user no");}
    }
    const photochanger_couverture_i = document.getElementById("photochanger_couverture_i");
    const nouveauimage_couv = document.getElementById("nouveauimage_couv");
    const fermer2 = document.getElementById("fermer2");
    const partagerphotoPbtn_couv = document.getElementById("partagerphotoPbtn_couv");
    const Done_couv = document.getElementById("Done_couv");
    const loader_couv = document.getElementById("loader_couv");
    const original_couv = document.getElementById("original_couv");
    
    const photocouverturechangerbg = document.getElementById("photocouverturechangerbg");
    sendImageicon.onclick = openphotocouverturechangerbg;
    function openphotocouverturechangerbg(){
        photocouverturechangerbg.style.display="flex"
    }
    fermer2.onclick = closephotocouverturechangerbg;
    function closephotocouverturechangerbg(){
        photocouverturechangerbg.style.display="none"
    }
    let file1;
    const photochanger_couverture = document.getElementById('photochanger_couverture');
    photochanger_couverture.onclick = open_photochanger_couverture;
    function open_photochanger_couverture(){
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.id = "fileInput1";
        input.onchange = function(e) {
            file1 = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file1);
            reader.onload = function() {
                const imageUrl = reader.result;
                photochanger_couverture_i.style.display = "none";
                nouveauimage_couv.style.display = "flex";
                partagerphotoPbtn_couv.style.display = "block";
                nouveauimage_couv.innerHTML = "";
    
                // Affichage de l'image dans la galerie
                const img = document.createElement('img');
                img.src = imageUrl;
                nouveauimage_couv.appendChild(img);
            };
        };
        input.click();
    }
    partagerphotoPbtn_couv.onclick = partagerphotoPbtn_couvfunction;
    async function partagerphotoPbtn_couvfunction(){
          original_couv.style.display = "none";
          loader_couv.style.display = "block";
          loader_couv.style.color="white";
          if (file1) {
              try {
                  
                  const storageRef2 = storageRef(storage, 'images/' + file1.name);
                  await uploadBytes(storageRef2, file1);
                  const downloadURL2 = await getDownloadURL(storageRef2);
                  const user = auth.currentUser;
                  if (user) {
                    const userId = user.uid; 
                    if (downloadURL2) {
                        push(messageRef, {
                            image_message: downloadURL2,
                            id_usersent:userId,
                            timestamp: new Date().getTime()
                        })
                        .catch((error) => {
                            console.error("Error adding message: ", error);
                        });
                    }
                  }
                  original_couv.style.display = "none";
                  loader_couv.style.display = "none";
                  Done_couv.style.display = "block";
                  photocouverturechangerbg.style.display="none"
                  
              } catch (error) {
                      console.error(error);
                      original_couv.style.display = "block";
                      loader_couv.style.display = "none";
                      Done_couv.style.display = "none";
                      photocouverturechangerbg.style.display="none"
                  }
              }
    }
    function displayMessages(snapshot) {
        messagesDiv.innerHTML = "";
        
        snapshot.forEach((childSnapshot) => {
            const message = childSnapshot.val().text;
            const message_image = childSnapshot.val().image_message;
            const mess_user_id = childSnapshot.val().id_usersent;
            const user = auth.currentUser;

            if (user) {
              const userId = user.uid; 
              if(mess_user_id === userId){
                  const monM_bg = document.createElement("div");
                  monM_bg.className = "monM_bg";
                  const mon_message = document.createElement("div");
                  mon_message.className = "mon_message";
                  if(message){
                      const messageElement = document.createElement("p");
                      messageElement.innerHTML = message;
                      mon_message.appendChild(messageElement);
                  }
                  if(message_image){
                      const messageElement_img = document.createElement("img");
                      messageElement_img.src = message_image;
                      mon_message.appendChild(messageElement_img);
                      messageElement_img.onclick = afficheimageFunction;
                      function afficheimageFunction(){
                          const afficheImagesBg = document.getElementById('afficheImagesBg');
                          afficheImagesBg.style.display="flex";
                          const afficheImage_place = document.getElementById('afficheImage_place');
                          afficheImage_place.style.display="flex";
                          afficheImage_place.innerHTML="";
                          const afficheImage_placeimg = document.createElement("img");
                          afficheImage_placeimg.src = message_image;
                          afficheImage_place.appendChild(afficheImage_placeimg);
                      }
                  }
                  mon_message.style.width="auto";
                  mon_message.style.display="flex";
                  monM_bg.appendChild(mon_message);
                  messagesDiv.appendChild(monM_bg);
              }else{
                  const monM_bg = document.createElement("div");
                  monM_bg.className = "autreM_bg";
                  const mon_message = document.createElement("div");
                  mon_message.className = "autre_message";
                  if(message){
                      const messageElement = document.createElement("p");
                      messageElement.innerHTML = message;
                      mon_message.appendChild(messageElement);
                  }
                  if(message_image){
                      const messageElement_img = document.createElement("img");
                      messageElement_img.src = message_image;
                      mon_message.appendChild(messageElement_img);
                      messageElement_img.onclick = afficheimageFunction;
                      function afficheimageFunction(){
                          const afficheImagesBg = document.getElementById('afficheImagesBg');
                          afficheImagesBg.style.display="flex";
                          const afficheImage_place = document.getElementById('afficheImage_place');
                          afficheImage_place.style.display="flex";
                          afficheImage_place.innerHTML="";
                          const afficheImage_placeimg = document.createElement("img");
                          afficheImage_placeimg.src = message_image;
                          afficheImage_place.appendChild(afficheImage_placeimg);
                      } 
                  }
                  mon_message.style.width="auto";
                  monM_bg.appendChild(mon_message);
                  messagesDiv.appendChild(monM_bg);
              }
            }
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    onValue(messageRef, (snapshot) => {
       displayMessages(snapshot);
    });


   // const docRef = doc(db, typeamisMessage, idamisMessage);
   // try {
   //     const docSnap = await getDoc(docRef); 
   //     if (docSnap.exists()) {
   //         const datauser = docSnap.data(); 
   //         const nameUserlisteamismessage = datauser.nom;
   //         const prenimUserlisteamismessage = datauser.prenom;
   //     }
   // }catch{
   // }
   



}

const afficheImagesBg = document.getElementById('afficheImagesBg');   
afficheImagesBg.onclick = closeafficheImagesBgFunction;
function closeafficheImagesBgFunction(){
    const afficheImagesBg = document.getElementById('afficheImagesBg');
    afficheImagesBg.style.display="none";
    const afficheImage_place = document.getElementById('afficheImage_place');
    afficheImage_place.style.display="none"
    afficheImage_place.innerHTML="";
}  


const sendImageicon = document.getElementById('sendImageicon');
const sendmessageicon = document.getElementById('sendmessageicon');
const QMPEUM_ = document.getElementById('QMPEUM');
  
function tailledecran(){
    const navbar_buttom = document.getElementById('navbar_buttom');
    if (window.innerWidth < 600) {
        navbar_buttom.style.display="flex";
    } else {
        navbar_buttom.style.display="none";
    }
}
var navigationbarHeight = document.querySelector('.navigationbar').clientHeight;

const rightespace = document.querySelector('.rightespace');
const leftespace = document.querySelector('.leftespace');
const midleespace = document.querySelector('.midleespace');
const navbarbuttom = document.querySelector('.navbar_buttom');


const homebtnnavbuttom = document.getElementById('homebtnnavbuttom');
const cabinsbtnnavbuttom = document.getElementById('cabinsbtnnavbuttom');
const messagebtnnavbuttom = document.getElementById('messagebtnnavbuttom');

homebtnnavbuttom.onclick = homebtnnavbuttomFunction;
function homebtnnavbuttomFunction(){
    leftespace.style.display = "none";
    rightespace.style.display = "none";
    midleespace.style.display = "flex";
    scrollToTop();
}

cabinsbtnnavbuttom.onclick = cabinsbtnnavbuttomFunction;
function cabinsbtnnavbuttomFunction(){
    leftespace.style.display = "flex";
    rightespace.style.display = "none";
    midleespace.style.display = "none";
    scrollToTop();
}

messagebtnnavbuttom.onclick = messagebtnnavbuttomFunction;
function messagebtnnavbuttomFunction(){

    var bgHome = document.querySelector('.bgHome');
    bgHome.style.padding="0";
    var navigationbar = document.querySelector('.navigationbar');
    navigationbar.style.display = "none";
    
    leftespace.style.display = "none";
    rightespace.style.display = "flex";
    midleespace.style.display = "none";
    navbarbuttom.style.display = "flex";

    var navbar_buttom = document.querySelector('.navbar_buttom').clientHeight; 
    const height_disc_bg = window.innerHeight  - navigationbarHeight ;
    discution_bg.style.height = height_disc_bg + "px";
    var bottom_message = document.querySelector('.bottom_message').clientHeight;
    var header_message = document.querySelector('.header_message').clientHeight;
    content_message.style.height = height_disc_bg - header_message + "px";
    console.log("content_message = "+content_message.style.height +"   /header_message="+header_message);
    const optionbg_wind = document.querySelector('.optionbg_wind');
    optionbg_wind.style.top =header_message + "px";
    const option_header_message = document.getElementById('option_header_message');
    const optionbg_wind_btn_home = document.getElementById('optionbg_wind_btn_home');

    option_header_message.addEventListener('click', function() {
        if( optionbg_wind.style.display === "flex"){
           optionbg_wind.style.display = "none";
        }else{
           optionbg_wind.style.display = "flex";
        }
    });
    optionbg_wind_btn_home.addEventListener('click', function() {
       refreshPage();
    });  
    var contentMessage = document.querySelector('.content_message');
    if (contentMessage.scrollTo) {
        contentMessage.scrollTo({
          top: contentMessage.scrollHeight ,
          behavior: 'smooth' // pour un défilement fluide si pris en charge
        });
    } else {
       contentMessage.scrollTop = contentMessage.scrollHeight ;
    }

}



function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

tailledecran();
window.addEventListener('resize', tailledecran);

const inputpublication = document.getElementById('inputpubadd');

inputpublication.addEventListener('input', function() {
    inputpublication.style.height = 'auto'; // Réinitialise d'abord la hauteur à automatique
    inputpublication.style.height = inputpublication.scrollHeight + 'px'; // Ajuste ensuite la hauteur en fonction du contenu
});

const inputCommentaire = document.getElementById('inputpubadd_comment');

inputCommentaire.addEventListener('input', function() {
    inputCommentaire.style.height = 'auto'; // Réinitialise d'abord la hauteur à automatique
    inputCommentaire.style.height = inputCommentaire.scrollHeight + 'px'; // Ajuste ensuite la hauteur en fonction du contenu
});

const mescabins_ = document.getElementById('mescabins_');
const mycabinsbg = document.getElementById('mycabinsbg');
const titleoptionmycabinsbg = document.getElementById('titleoptionmycabinsbg');

titleoptionmycabinsbg.addEventListener('click', function() {
    if(mescabins_.style.display === "none") {
        mescabins_.style.display = "flex";
        mycabinsbg.style.height = "400px";
    } else {
        mescabins_.style.display = "none";
        mycabinsbg.style.height = "auto";
    }
});

//mes amis liste 
const mescabins_2 = document.getElementById('mescabins_2');
const mycabinsbg2 = document.getElementById('mycabinsbg2');
const titleoptionmycabinsbg2 = document.getElementById('titleoptionmycabinsbg2');

titleoptionmycabinsbg2.addEventListener('click', function() {
    if(mescabins_2.style.display === "none") {
        mescabins_2.style.display = "flex";
        mycabinsbg2.style.height = "400px";
    } else {
        mescabins_2.style.display = "none";
        mycabinsbg2.style.height = "auto";
    }
});

// langues liste 
const mescabins_3 = document.getElementById('mescabins_3');
const mycabinsbg3 = document.getElementById('mycabinsbg3');
const titleoptionmycabinsbg3 = document.getElementById('titleoptionmycabinsbg3');

titleoptionmycabinsbg3.addEventListener('click', function() {
    if(mescabins_3.style.display === "none") {
        mescabins_3.style.display = "flex";
        mycabinsbg3.style.height = "400px";
    } else {
        mescabins_3.style.display = "none";
        mycabinsbg3.style.height = "auto";
    }
});





var icons = document.querySelectorAll('.iconnavbar');

icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        icons.forEach(function(icon) {
            var iconClass = icon.querySelector('i').className;
            icon.querySelector('i').className = iconClass.replace('-fill', '');
        });

        if (!this.querySelector('i').classList.contains('-fill')) {
            var iconClass = this.querySelector('i').className;
            this.querySelector('i').className = iconClass + '-fill';
        }
    });
});


const head_commentaire_ = document.querySelector('.head_commentaire_');
const addcommentaire_bg = document.querySelector('.addcommentaire_bg');
const commentaire_ = document.querySelector('.commentaire_');
const listeComments_bg = document.querySelector('.commentaire_');

const closecommentair = document.getElementById("closecommentair");
const commentaire_bg = document.getElementById("commentaire_bg");

closecommentair.onclick = closecommentairFunction;

function closecommentairFunction(){
    commentaire_bg.style.display="none";
    const listeComments_bg_list = document.getElementById("listeComments_bg_list");
    listeComments_bg_list.innerHTML="";
}



const boxactivation = document.getElementById("boxactivation");
const boxactivation_done = document.getElementById("boxactivation_done");
const acive_compt_form = document.getElementById("acive_compt_form");
const loader = document.getElementById("loader");
const original = document.getElementById("original");
const Done = document.getElementById("Done");
const message_cerification_consol = document.getElementById("message_cerification");


// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const typeuserclick = urlParams.get('typeuserclick');
const typeOfUser = urlParams.get('typeuserclick');


            //---------------- send message 

            
// const afficheImagesBg = document.getElementById('afficheImagesBg');   
// afficheImagesBg.onclick = closeafficheImagesBgFunction;
// function closeafficheImagesBgFunction(){
//     const afficheImagesBg = document.getElementById('afficheImagesBg');
//     afficheImagesBg.style.display="none";
//     const afficheImage_place = document.getElementById('afficheImage_place');
//     afficheImage_place.style.display="none"
//     afficheImage_place.innerHTML="";
// }  


 

   const content_message = document.querySelector('.content_message');
   const height_disc_bg = window.innerHeight  - navigationbarHeight;
   discution_bg.style.height = height_disc_bg + "px";
   
   var bottom_message = document.querySelector('.bottom_message').clientHeight;
   var header_message = document.querySelector('.header_message').clientHeight;
   content_message.style.height = height_disc_bg -bottom_message -header_message +"px";
   console.log("content_message = "+content_message.style.height +"   /header_message="+header_message);
   
   const optionbg_wind = document.querySelector('.optionbg_wind');
   optionbg_wind.style.top =header_message + "px";
   
   const optionbg_wind_btn_home = document.getElementById('optionbg_wind_btn_home');

   
   
   var contentMessage = document.querySelector('.content_message');
   if (contentMessage.scrollTop !== undefined) {
       contentMessage.scrollTop = contentMessage.scrollHeight;
   } else {
       contentMessage.scrollTo({
           top: contentMessage.scrollHeight,
           behavior: 'smooth' // pour un défilement fluide si pris en charge
       });
   }
   
function toggleScrollButton() {
    
    var contentMessage = document.querySelector('.content_message');
    var scrollButton = document.getElementById('scrollButton');

    // Utilisation de la propriété scrollHeight pour vérifier si le contenu est en bas
    if (contentMessage.scrollTop + contentMessage.clientHeight  < contentMessage.scrollHeight -300 ||
        document.documentElement.scrollTop + window.innerHeight  < document.documentElement.scrollHeight -300) {
        scrollButton.style.bottom = "40px"; // Utilisation de 'bottom' au lieu de 'buttom'
    } else {
        scrollButton.style.bottom = "-30px"; // Utilisation de 'bottom' au lieu de 'buttom'
    }
}


    
  document.getElementById('content_message').addEventListener('scroll', toggleScrollButton);


 
   optionbg_wind_btn_home.addEventListener('click', function() {
    refreshPage();
  }); 

  var scrollButton = document.getElementById('scrollButton');
  var contentMessage = document.querySelector('.content_message');

  scrollButton.addEventListener('click', function() {
    contentMessage.scrollTop = contentMessage.scrollHeight;

      //if (contentMessage.scrollTo) {
      //    contentMessage.scrollTo({
      //        top: contentMessage.scrollHeight,
      //        behavior: 'smooth' // pour un défilement fluide si pris en charge
      //    });
      //} else {
      //    // Alternative pour les navigateurs ne prenant pas en charge scrollTo
      //    contentMessage.scrollTop = contentMessage.scrollHeight;
      //}
  });


















//-----------------------------------------------------------------------------
if(typeOfUser==="medecin"){
    const veri_acco = document.getElementById("veri_acco");
    veri_acco.style.display="flex";
}
else{
    const veri_acco = document.getElementById("veri_acco");
    veri_acco.style.display="none";
}

  auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Récupération de l'adresse e-mail de l'utilisateur connecté
        const mail = user.email;
        const userId = user.uid;
        console.log(userId);
        const userRef = doc(db, typeuserclick, userId);
        const docSnapshot = await getDoc(userRef);
        
        
        if (docSnapshot.exists()) {
            const photoprofilepubadd = document.getElementById("photoprofilepubadd");
            const photoprofilepubadd1 = document.getElementById("photoprofilepubadd1");
            const imguser = docSnapshot.data().imguser;
            if(imguser){
                photoprofilepubadd.src=imguser;
                photoprofilepubadd1.src=imguser;
                  photoprofilepubadd.addEventListener('click', () => {
                       window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${userId}&typeuserclick=${typeuserclick}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
                  }); 
                  photoprofilepubadd1.addEventListener('click', () => {
                       window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${userId}&typeuserclick=${typeuserclick}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
                  }); 
            }

        }
        const profilinfobg = document.getElementById("profilinfobg");
        profilinfobg.addEventListener('click', () => {
            window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${userId}&typeuserclick=${typeuserclick}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
        }); 

        const amisquerySnapshot = await getDocs(query(collection(db, typeOfUser,userId,"amis")));
        amisquerySnapshot.forEach((doc) => {
            const data = doc.data();
            const iduseramis = data.iduser;
            const typeuseramis = data.typeuser;

            recupereAmis(iduseramis,typeuseramis);

        });
        async function recupereAmis(iduseramis,typeuseramis){
            const docRef = doc(db, typeuseramis, iduseramis);
            const docSnap = await getDoc(docRef); 
            const datauser = docSnap.data(); 
            const nameuser = datauser.nom;
            const prenameuser = datauser.prenom;
            const imguser = datauser.imguser;
            const type_user = datauser.typeOfUser;
            
            const cabinfoss = document.createElement('div');
            cabinfoss.className="cabinfoss";

            const mescabins_image = document.createElement('div');
            mescabins_image.className="mescabins_image";

            const mescabins_image_img = document.createElement('img');
            if(imguser){
                mescabins_image_img.src=imguser;
            }else{
                mescabins_image_img.src="img/ferticonnectiLogoWhite.png";
            }
            const mescabins_name = document.createElement('div');
            mescabins_name.className="mescabins_name";

            const mescabins_nameh1 = document.createElement('h1');
            mescabins_nameh1.innerHTML=prenameuser+" "+nameuser;

            mescabins_image.appendChild(mescabins_image_img);
            cabinfoss.appendChild(mescabins_image);
            mescabins_name.appendChild(mescabins_nameh1);
            cabinfoss.appendChild(mescabins_name);
            mescabins_2.appendChild(cabinfoss);

            cabinfoss.addEventListener('click', () => {
                window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${iduseramis}&typeuserclick=${typeuseramis}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
            }); 
        }
        

        const cabinequerySnapshot = await getDocs(query(collection(db, typeOfUser,userId,"cabines")));
        cabinequerySnapshot.forEach((doc) => {
            const data = doc.data();
            const cabineId = data.cabineId;
            recupereCabine(cabineId);

        });
        
        async function recupereCabine(cabineId){
            const docRef = doc(db, "cabines", cabineId);
            const docSnap = await getDoc(docRef); 
            const dataCabine = docSnap.data(); 
            const nameCabine = dataCabine.nameCabine;
            const cabine_Image = dataCabine.cabineImage;
            const creator_Id = dataCabine.creatorId;
            
            const cabinfoss = document.createElement('div');
            cabinfoss.className="cabinfoss";

            const mescabins_image = document.createElement('div');
            mescabins_image.className="mescabins_image";

            const mescabins_image_img = document.createElement('img');
            if(cabine_Image){
                mescabins_image_img.src=cabine_Image;
            }else{
                mescabins_image_img.src="img/ferticonnectiLogoWhite.png";
            }
            const mescabins_name = document.createElement('div');
            mescabins_name.className="mescabins_name";
            
            const mescabins_nameh1 = document.createElement('h1');
            mescabins_nameh1.innerHTML= nameCabine;

            mescabins_image.appendChild(mescabins_image_img);
            cabinfoss.appendChild(mescabins_image);
            mescabins_name.appendChild(mescabins_nameh1);
            cabinfoss.appendChild(mescabins_name);
            mescabins_.appendChild(cabinfoss);


           cabinfoss.addEventListener('click', () => {
               window.location.href = `ferticonnectmedecin-cabine.html?cabineidclick=${cabineId}&typeuserclick=${typeuserclick}`; // Redirection vers la page du produit avec l'ID du produit
           }); 
        }


        //const langauequerySnapshot = doc(db, typeOfUser, userId);
        const langauequerySnapshot = await getDocs(query(collection(db, "languesList")));
        langauequerySnapshot.forEach((doc) => {
            const data = doc.data();
            const langue = data.langue;
            const langue_image = data.img_langue;
            console.log("langaue database = "+langue);
            recupereLang(langue,langue_image);

        });
        async function recupereLang(langue,langue_image){
            const docRef = doc(db, typeOfUser, userId);
            const docSnap = await getDoc(docRef); 
            const datauser = docSnap.data(); 
            const lang = datauser.lang;

           // console.log("typeOfUser ="+typeOfUser);
           // console.log("userId ="+userId);
           // console.log("lang  ="+lang);



            const cabinfoss = document.createElement('div');
            cabinfoss.className="cabinfoss";

            const mescabins_image = document.createElement('div');
            mescabins_image.className="mescabins_image";

            const mescabins_image_img = document.createElement('img');
            if(langue_image){
                mescabins_image_img.src=langue_image;
            }else{
                mescabins_image_img.src="img/ferticonnectiLogoWhite.png";
            }
            const mescabins_name = document.createElement('div');
            mescabins_name.className="mescabins_name";
            const mescabins_nameh1 = document.createElement('h1');
            mescabins_nameh1.innerHTML=" "+langue+" ";

            const langue_check = document.createElement('div');
            langue_check.className="langue_check";
            const langue_check_i = document.createElement('i');
            langue_check_i.className='bi bi-check-lg';

            mescabins_image.appendChild(mescabins_image_img);
            cabinfoss.appendChild(mescabins_image);

            mescabins_name.appendChild(mescabins_nameh1);
            cabinfoss.appendChild(mescabins_name);

            if(lang === langue){
                langue_check.appendChild(langue_check_i);
                cabinfoss.appendChild(langue_check);
            }
            mescabins_3.appendChild(cabinfoss);

            cabinfoss.addEventListener('click', () => {
                window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${iduseramis}&typeuserclick=${typeuseramis}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
            }); 
        }
        
        

        



        // Vérification si l'e-mail existe dans la collection "admins"
        const q = query(collection(db, typeuserclick), where("email", "==", mail));

        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const watingAccount = document.getElementById("wating");
                watingAccount.style.display = "flex";

                const userId = user.uid;
                const userRef = doc(db, typeuserclick, userId);
                const docSnapshot = await getDoc(userRef);


                if (docSnapshot.exists()) {
                    // Correction : récupération de l'e-mail depuis docSnapshot.data()
                    const statut_du_compte = docSnapshot.data().statut_du_compte;
                    const nomAdm = docSnapshot.data().nom;
                    const prenomAdm = docSnapshot.data().prenom;

                    const nom_prenom_admin = document.getElementById("nameUser_connect");
                    nom_prenom_admin.innerHTML = prenomAdm.toUpperCase() + " " + nomAdm.toUpperCase();

                    const activatoin_compt = document.getElementById("activatoin_compt");
                    if (statut_du_compte === "desactive") {
                        watingAccount.style.display = "none";
                        activatoin_compt.style.display = "flex";
                    } else {
                        activatoin_compt.style.display = "none";
                        watingAccount.style.display = "none";
                    }
                }
            } else {
                console.log("déconnection en cours ...")
                logout();
            }
        } catch (error) {
            console.error("Erreur lors de la vérification du email :", error);
        }
    } else {
        window.location.href = 'index.html';
    }
});

acive_compt_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    activrmyaccount();
    original.style.display="none"
    loader.style.display="block"

});

  function activrmyaccount() {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userId = user.uid;
            const userRef = doc(db, typeuserclick, userId);
            const docSnapshot = await getDoc(userRef);
            
            if (docSnapshot.exists()) {

                const code = docSnapshot.data().code;
                const nom = docSnapshot.data().nom;
                const prenom = docSnapshot.data().prenom;


                // Vous devez d'abord récupérer la valeur du code_verification à partir d'un formulaire ou d'une autre source
                // Je vais supposer que vous avez déjà cette variable définie quelque part
                const code_verification = document.getElementById("code_verification").value;

                if(code_verification === code) {
                    // Le code de vérification correspond au code dans la base de données
                    const userDocRef = doc(db, typeuserclick, userId);
                    await updateDoc(userDocRef, {
                        statut_du_compte: "active"
                    });
                    Done.style.display="block"
                    loader.style.display="none" 
                    boxactivation_done.style.display="flex";
                    boxactivation.style.display="none";

                    setTimeout(() => {
                        refreshPage();
                    }, 2000);
                    
                } else {
                    // Le code de vérification ne correspond pas au code dans la base de données
                    message_cerification_consol.style.color="red";
                    message_cerification_consol.innerHTML="Le code de vérification est incorrect.";
                    original.style.display="block"
                    loader.style.display="none"
                }
            } else {
                // Aucun document trouvé pour cet utilisateur dans la collection "admins"
                message_cerification_consol.style.color="red";
                message_cerification_consol.innerHTML="Aucun document trouvé pour cet medecin.";
                original.style.display="block"
                loader.style.display="none"
            }
        }
    });
}



const deconnecter_acv_msg = document.getElementById("deconnecter_acv_msg");


deconnecter_acv_msg.addEventListener("click", async (e) => {
    e.preventDefault();
    logout();
});    


const deconnectionbg = document.getElementById("deconnectionbg");

const loggouut_nav = document.getElementById("loggouut_nav");
loggouut_nav.addEventListener("click", async (e) => {
    e.preventDefault();
    deconnectionbg.style.display="flex";
});

const anulerdeco_neccterbtn = document.getElementById("anulerdeco_neccterbtn");
anulerdeco_neccterbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    deconnectionbg.style.display="none";
});
const deco_neccterbtn = document.getElementById("deco_neccterbtn");
deco_neccterbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    logout();
});

// Fonction de déconnexion
function logout() {
    signOut(auth).then(() => {
        window.location.href = 'index.html'; 
    }).catch((error) => {
        console.error('Erreur lors de la déconnexion : ', error);
    });
}



const partagerntn = document.getElementById("partagerntn");
//const fileInput1 = document.getElementById("fileInput1");
const inputpubadd = document.getElementById("inputpubadd").value;
const imagge1 = document.getElementById("imagge1");
const gallery1 = document.getElementById("gallery1");
const wating = document.getElementById("wating");
let file
document.getElementById('importphoto').addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.id = "fileInput1";
    input.onchange = function(e) {
        file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function() {
            const imageUrl = reader.result;
            gallery1.style.display = "flex";
            imagge1.innerHTML = "";

            // Affichage de l'image dans la galerie
            const img = document.createElement('img');
            img.src = imageUrl;
            imagge1.appendChild(img);
        };
    };
    input.click();
});

partagerntn.addEventListener("click", async(e) => {
    e.preventDefault();
    sharePublication(file);
});

async function sharePublication(file) {
    wating.style.display = "flex";
    auth.onAuthStateChanged(async(user) => {
        if (user) {
            const userId = user.uid;
            if (file) {
                try {
                    // Upload des images dans le stockage Firebase
                    const storageRef1 = ref(storage, 'images/' + file.name);
                    await uploadBytes(storageRef1, file);
                    const downloadURL1 = await getDownloadURL(storageRef1);
                    const inputpubadd = document.getElementById("inputpubadd").value;
                    const docRef = await addDoc(collection(db, 'publications'), {
                        publication: inputpubadd,
                        imageUrl_publication: downloadURL1,
                        iduser: userId,
                        placepub: "home",
                        typeuser: typeuserclick,
                        timestamp: serverTimestamp()
                    });
                    wating.style.display = "none";
                    refreshPage();
                } catch (error) {
                    console.error(error);
                    wating.style.display = "none";
                    //message_cree_produit.innerHTML = 'Erreur lors du partage du produit: ' + error.message;
                }
            } else {
                try {
                    const inputpubadd = document.getElementById("inputpubadd").value;
                    // Upload des images dans le stockage Firebase
                    const docRef = await addDoc(collection(db, 'publications'), {
                        publication: inputpubadd,
                        iduser: userId,
                        placepub: "home",
                        timestamp: serverTimestamp(),
                        typeuser: typeuserclick
                    });
                    wating.style.display = "none";
                    refreshPage();

                } catch (error) {
                    console.error(error);
                    wating.style.display = "none";

                    //message_cree_produit.innerHTML = 'Erreur lors du partage du produit: ' + error.message;
                }
            }
        }
    });
}


// Recharge la page actuelle
function refreshPage() {
    window.location.reload(); 
}

const lespublicationslist = document.getElementById("lespublicationslist");

const querySnapshot = await getDocs(query(collection(db, 'publications'), orderBy('timestamp', 'desc'), limit(25)));
querySnapshot.forEach((doc) => {
    const idpub = doc.id;
    const data = doc.data();
    const publication = data.publication;
    const placepub = data.placepub;
    const imageUrl_publication = data.imageUrl_publication;
    
    const timestamp = data.timestamp; // Suppose que le timestamp est stocké dans un champ "timestamp" du document
    const seconds = timestamp.seconds;
    const nanoseconds = timestamp.nanoseconds;
    // Créer une date à partir de la représentation Firebase Timestamp
    const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convertir nanosecondes en millisecondes
    const date = new Date(milliseconds);
    
    // Extraire les composantes de la date
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Formater la date en chaîne de caractères "DD MM YY heure"
    const formattedTimestamp = `${day}/${month}/${year}   ${hours}h${minutes}`;
    
    const iduser = data.iduser;
    const typeuser = data.typeuser;

    const pubbg_ = document.createElement("div");
    pubbg_.className = "pubbg_";
    creatpost(pubbg_,iduser,typeuser,placepub,formattedTimestamp,imageUrl_publication,publication,idpub);
    if(placepub === "home"){
        lespublicationslist.appendChild(pubbg_);
    }

});


async function creatpost(pubbg_,iduser,typeuser,placepub,formattedTimestamp,imageUrl_publication,publication,idpub){
    
    // Référence au document utilisateur
    const docRef = doc(db, typeuser, iduser);
    try {
        const docSnap = await getDoc(docRef); // Récupération du snapshot du document
            const datauser = docSnap.data(); // Récupération des données du document utilisateur
            const nameuser = datauser.nom;
            const prenameuser = datauser.prenom;
            const imguser = datauser.imguser;

            if (placepub === "home") {

                const headerpublication = document.createElement("div");
                headerpublication.className = "headerpublication";
                

                const infouser_ = document.createElement("div");
                infouser_.className = "infouser_";


                const image_user_pub = document.createElement("div");
                image_user_pub.className = "image_user_pub";

                const image_user_pub_img = document.createElement("img");
                if (imguser) { // Vérification si imguser existe
                    image_user_pub_img.src = imguser;
                } else {
                    image_user_pub_img.src = "img/ferticonnectiLogoWhite.png";
                }
                


                const nameuserpub = document.createElement("div");
                nameuserpub.className = "nameuserpub";
                const nameuserpubh1 = document.createElement("h1");
                if (typeuser === "patient") {
                    if(typeOfUser === "patient"){
                        auth.onAuthStateChanged(async(user) => {
                            if (user) {
                                const userId = user.uid;
                                if(iduser === userId){
                                    nameuserpubh1.innerHTML =prenameuser+ " " + nameuser;
                                }
                                else{
                                    image_user_pub_img.src = "img/ferticonnectiLogoWhite.png";
                                    nameuserpubh1.innerHTML ="Utilisateur fertiConnect";

                                }

                            }
                        });
                    }
                    else{
                        nameuserpubh1.innerHTML =prenameuser+ " " + nameuser;

                    }
                }
                else{
                     nameuserpubh1.innerHTML =prenameuser+ " " + nameuser;

                }
                image_user_pub.appendChild(image_user_pub_img);
                infouser_.appendChild(image_user_pub);
                nameuserpub.appendChild(nameuserpubh1);
                infouser_.appendChild(nameuserpub);
                infouser_.addEventListener('click', () => {
                    window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${iduser}&typeuserclick=${typeuser}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
                }); 
                
                const verifica = document.createElement("div");
                verifica.className = "verifica";
                if (typeuser === "medecin") {
                    const verifica_i = document.createElement("i");
                    verifica_i.className = "bi bi-patch-check-fill";
                    verifica.appendChild(verifica_i);
                }

                infouser_.appendChild(verifica);

                const verifica1 = document.createElement("div");
                verifica1.className = "verifica";
                const verifica1_i = document.createElement("i");
                verifica1_i.className = "bi bi-globe-europe-africa";
                verifica1.appendChild(verifica1_i);
                infouser_.appendChild(verifica1);

                headerpublication.appendChild(infouser_);
                const datpublication = document.createElement("p");

                datpublication.className = "datpublication";
                datpublication.innerHTML = formattedTimestamp;
                headerpublication.appendChild(datpublication);

                pubbg_.appendChild(headerpublication);

                
                const textpublication = document.createElement("p");
                textpublication.className="textpublication";
                textpublication.innerHTML=publication;
                pubbg_.appendChild(textpublication);

                if(imageUrl_publication){
                    const image_publicationbg = document.createElement("div");
                    image_publicationbg.className = "image_publicationbg";

                    const image_publicationbg_img = document.createElement("img");
                    image_publicationbg_img.src = imageUrl_publication;
                    image_publicationbg_img.className="image_publicationbg_img";

                    image_publicationbg.appendChild(image_publicationbg_img);
                    pubbg_.appendChild(image_publicationbg);
                }

                
                const jaimeandcommentsnum = document.createElement("div");
                jaimeandcommentsnum.className = "jaimeandcommentsnum";

                const jaimesnum = document.createElement("div");
                jaimesnum.className = "jaimesnum";
                const jaimesnum_i = document.createElement("i");
                jaimesnum_i.className = "bi bi-hand-thumbs-up";
                jaimesnum.appendChild(jaimesnum_i);
                numberjaime();
                const jaimesnum_p = document.createElement("p");
                async function numberjaime(){
                    const docRef = collection(db, "publications", idpub, "jaimes");
                    const querySnapshot = await getDocs(docRef);
                    const numberOfDocuments = querySnapshot.size;
                            
                  jaimesnum_p.innerHTML = numberOfDocuments;
                }

                jaimesnum.appendChild(jaimesnum_p);
                jaimeandcommentsnum.appendChild(jaimesnum);
                const commentsnum = document.createElement("div");
                commentsnum.className = "commentsnum";
                const commentsnum_i = document.createElement("i");
                commentsnum_i.className = "bi bi-chat-left";
                const commentsnum_p = document.createElement("p");
                numbercommentaires();
                async function numbercommentaires(){
                    const docRef = collection(db, "publications", idpub, "commentaires");
                    const querySnapshot = await getDocs(docRef);
                    const numberOfDocuments = querySnapshot.size;
                    commentsnum_p.innerHTML = numberOfDocuments;

                }
                commentsnum.appendChild(commentsnum_i);
                commentsnum.appendChild(commentsnum_p);
                jaimeandcommentsnum.appendChild(commentsnum);
                pubbg_.appendChild(jaimeandcommentsnum);

                const ligne_ = document.createElement("div");
                ligne_.className = "ligne_";
                pubbg_.appendChild(ligne_);

                // Créer les éléments du bouton "j'aime"
                const jaimecommentbtns = document.createElement("div");
                jaimecommentbtns.className = "jaimecommentbtns";
                
                const btnjaime = document.createElement("div");
                btnjaime.className = "btnjaime";
                
                const btnjaimei1 = document.createElement("i");
                btnjaimei1.className = "bi bi-hand-thumbs-up";
                btnjaimei1.style.display = "flex";

                const btnjaimei2 = document.createElement("i");
                btnjaimei2.className = "bi bi-hand-thumbs-up-fill";
                btnjaimei2.style.display = "none";
                
                btnjaime.appendChild(btnjaimei1);
                btnjaime.appendChild(btnjaimei2);
                jaimecommentbtns.appendChild(btnjaime);

                                
                
                const btncomment = document.createElement("div");
                btncomment.className = "btncomment";
                const btncomment_i = document.createElement("i");
                btncomment_i.className = "bi bi-chat-left";

                btncomment.onclick = afficheLesCommentairesFunction;

                async function afficheLesCommentairesFunction() {
                    commentaire_bg.style.display="flex";
                    
                    const height_commentaire_= commentaire_.getBoundingClientRect().height;
                    const height_addcommentaire_bg = addcommentaire_bg.getBoundingClientRect().height;
                    const height_head_commentaire_ = head_commentaire_.getBoundingClientRect().height;
                    commentaire_.style.paddingTop = height_head_commentaire_ + 'px';
                    commentaire_.style.paddingBottom = height_addcommentaire_bg + 'px';
                    listeComments_bg.height=(height_commentaire_-height_head_commentaire_+height_addcommentaire_bg)+ 'px';

                    const send_comment = document.getElementById("send_comment");
                    const photoprofilepubadd_comments = document.getElementById('photoprofilepubadd_comments');
                    
                    if (user) {
                        
                        const userId = user.uid;
                        const userRef = doc(db, typeOfUser, userId);
                        const docSnapshot = await getDoc(userRef);
                    
                            const imguser = docSnapshot.data().imguser;
                            console.log(imguser);
                            if (imguser) {
                                photoprofilepubadd_comments.src = imguser;
                            } else {
                                photoprofilepubadd_comments.src = "img/ferticonnectiLogoWhite.png";
                            }
                    }
                    AficherLesCommentaire();
                    async function AficherLesCommentaire(){
                        const listeComments_bg_list = document.getElementById("listeComments_bg_list");
                        listeComments_bg_list.innerHTML="";
                        
                         const querySnapshot = await getDocs(query(collection(db, "publications", idpub, "commentaires"), orderBy('timestamp', 'desc')));
                            querySnapshot.forEach(async (doc) => {
                                const idcommentaire = doc.id;
                                const data = doc.data();
                                const commentaires = data.commentaires;
                                const iduser_comment = data.iduser_comment;
                                const typeusercomment = data.typeuser;
                                const timestamp = data.timestamp;
                                await importusercommentinfo(typeusercomment, iduser_comment, commentaires, timestamp);
                            });
       


                    }
                    
                    async function importusercommentinfo(typeusercomment, iduser_comment, commentaires, timestamp) {
                        const docRef = doc(db, typeusercomment, iduser_comment);
                        try {
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                
                                const datauser = docSnap.data();
                                const nameuser = datauser.nom;
                                const prenameuser = datauser.prenom;
                                const imguser = datauser.imguser;

                                const listeComments_bg_list = document.getElementById("listeComments_bg_list");
                    
                                const comment_listeComments_bg = document.createElement('div');
                                comment_listeComments_bg.className = "comment_listeComments_bg";
                    
                                const hedercomment = document.createElement('div');
                                hedercomment.className = "hedercomment";
                    
                                const hedercomment_img = document.createElement('div');
                                hedercomment_img.className = "hedercomment_img";

                                const hedercomment_img_img = document.createElement('img');
                                const hedercomment_h1 = document.createElement('h1');

                                const hedercomment_i= document.createElement('i');
                                if(typeusercomment === "medecin"){
                                    hedercomment_i.className="bi bi-patch-check-fill";
                                }
                                const content_comment = document.createElement('div');
                                content_comment.className = "content_comment";
                                
                                const content_comment_p = document.createElement('p');
                                content_comment_p.innerHTML = commentaires;
                                if (typeuser === "patient") {
                                    if(typeOfUser === "patient"){
                                        auth.onAuthStateChanged(async(user) => {
                                            if (user) {
                                                const userId = user.uid;
                                                if(iduser_comment === userId){
                                                    hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                                    hedercomment_img_img.src = imguser;

                                                }
                                                else{
                                                    hedercomment_h1.innerHTML ="Utilisateur fertiConnect";
                                                    hedercomment_img_img.src = "img/ferticonnectiLogoWhite.png";

                                                }
                
                                            }
                                        });
                                    }
                                    else{
                                        hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                        hedercomment_img_img.src = imguser ? imguser : "img/ferticonnectiLogoWhite.png";


                                    }
                                }
                                else{
                                    hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                    hedercomment_img_img.src = imguser ? imguser : "img/ferticonnectiLogoWhite.png";


                                }
                    
                                hedercomment_img.appendChild(hedercomment_img_img);
                                hedercomment.appendChild(hedercomment_img);
                                hedercomment.appendChild(hedercomment_h1);
                                hedercomment.appendChild(hedercomment_i);
                                content_comment.appendChild(content_comment_p);
                                comment_listeComments_bg.appendChild(hedercomment);
                                comment_listeComments_bg.appendChild(content_comment);
                                listeComments_bg_list.appendChild(comment_listeComments_bg);

                            }


                        } catch (error) {
                            console.error("Une erreur s'est produite lors de l'importation des informations utilisateur :", error);
                        }
                    }
                     

                    send_comment.onclick = send_commentFunction;

                    async function send_commentFunction(){
                        sharePublicationComment();
                        numbercommentaires();
                    }
                    
                    async function sharePublicationComment() {
                        wating.style.display = "flex";
                        auth.onAuthStateChanged(async(user) => {
                            if (user) {
                                const userId = user.uid;
                                    try {
                                        const inputpubadd_comment = document.getElementById("inputpubadd_comment").value;
                                        const docRef = await addDoc(collection(db, "publications", idpub, "commentaires"), {
                                            commentaires: inputpubadd_comment,
                                            iduser_comment: userId,
                                            typeuser: typeOfUser,
                                            timestamp: serverTimestamp()
                                        });

                                        wating.style.display = "none";
                                        const inputpubadd_comme = document.getElementById("inputpubadd_comment");
                                        inputpubadd_comme.value="";

                                        AficherLesCommentaire();


                                    } catch (error) {
                                        console.error(error);
                                        wating.style.display = "none";
                                        //message_cree_produit.innerHTML = 'Erreur lors du partage du produit: ' + error.message;
                                    }
                            }
                        });
                    }
                    
                }

                btncomment.appendChild(btncomment_i);
                jaimecommentbtns.appendChild(btncomment);
                pubbg_.appendChild(jaimecommentbtns);

                const user = auth.currentUser;
                if (user) {
                    const userId = user.uid;                      
                      const docRef = collection(db, 'publications', idpub, 'jaimes');
                      const querySnapshot = await getDocs(docRef);
                      querySnapshot.forEach((doc) => {
                          const data = doc.data();
                          const userjaimeid = data.iduser;

                          if (userjaimeid === userId) {
                              btnjaimei1.style.display = "none";
                              btnjaimei2.style.display = "flex";
                          } else {
                              btnjaimei1.style.display = "flex";
                              btnjaimei2.style.display = "none";
                          }
                      });
                  

                }
                btnjaime.addEventListener("click", async (e) => {
                    e.preventDefault();
                    const user = auth.currentUser;
                    if (user) {
                        const userId = user.uid;
                        if (btnjaimei1.style.display === "none") {
                            btnjaimei1.style.display = "flex";
                            btnjaimei2.style.display = "none";
                        
                            const jaimesCollectionRef = collection(db, 'publications', idpub, 'jaimes');
                            try {
                                const querySnapshot = await getDocs(query(jaimesCollectionRef, where("iduser", "==", userId)));
                            
                                // Parcourir les documents correspondants
                                querySnapshot.forEach(async (doc) => {
                                    try {
                                        console.log("Document trouvé :", doc.id);
                                        // Supprimer le document
                                        await deleteDoc(doc.ref);
                                        // Mettre à jour le nombre de "j'aime" après la suppression
                                        await numberjaime();
                                    } catch (error) {
                                        console.error("Erreur lors de la suppression du document de la sous-collection 'jaimes':", error);
                                    }
                                });
                            } catch (error) {
                                console.error("Erreur lors de la récupération des documents de la sous-collection 'jaimes':", error);
                            }
                            
                        } else {
                            btnjaimei1.style.display = "none";
                            btnjaimei2.style.display = "flex";
                            const docRef = await addDoc(collection(db, 'publications',idpub,'jaimes'), {
                                iduser:userId,
                            });
                            numberjaime();
                        }
                    } else {
                        console.log("L'utilisateur n'est pas connecté.");
                    }
                });


            }
        
    } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
    }

    
}




















































