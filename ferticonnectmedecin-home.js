
function tailledecran(){
    const navbar_buttom = document.getElementById('navbar_buttom');

    if (window.innerWidth < 600) {
        navbar_buttom.style.display="flex";
    } else {
        navbar_buttom.style.display="none";
    }
}

const homebtnnavbuttom = document.getElementById('homebtnnavbuttom');
const cabinsbtnnavbuttom = document.getElementById('cabinsbtnnavbuttom');
const messagebtnnavbuttom = document.getElementById('messagebtnnavbuttom');
homebtnnavbuttom.addEventListener('click', function() {
    leftespace.style.display = "none";
    rightespace.style.display = "none";
    midleespace.style.display = "flex";
    scrollToTop()
});
cabinsbtnnavbuttom.addEventListener('click', function() {
    leftespace.style.display = "flex";
    rightespace.style.display = "none";
    midleespace.style.display = "none";
    scrollToTop()
});
messagebtnnavbuttom.addEventListener('click', function() {
    leftespace.style.display = "none";
    rightespace.style.display = "flex";
    midleespace.style.display = "none";
    scrollToTop()
});



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

closecommentair.addEventListener('click', function() {
    commentaire_bg.style.display="none";
});
closecommentair.addEventListener('click', function() {
    commentaire_bg.style.display="none";
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth ,signOut} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc,updateDoc ,addDoc,deleteDoc, query, orderBy,limit,where, getDocs, collection, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyBlAbn2DAuE4kSVDtsNgdttwDeBT78YmL8",
    authDomain: "ferticonnect.firebaseapp.com",
    projectId: "ferticonnect",
    storageBucket: "ferticonnect.appspot.com",
    messagingSenderId: "1061809723490",
    appId: "1:1061809723490:web:307b939a9e256dcc21593b",
    measurementId: "G-XZT8HYB0DT"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);


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
            console.log("iduseramis="+iduseramis);
            console.log("typeuseramis="+typeuseramis);
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
            console.log("iduseramis="+cabineId);
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

           // cabinfoss.addEventListener('click', () => {
           //     window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${iduseramis}&typeuserclick=${typeuseramis}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
           // }); 
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
    lespublicationslist.appendChild(pubbg_);

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

                image_user_pub.appendChild(image_user_pub_img);
                infouser_.appendChild(image_user_pub);

                const nameuserpub = document.createElement("div");
                nameuserpub.className = "nameuserpub";
                const nameuserpubh1 = document.createElement("h1");
                nameuserpubh1.innerHTML =prenameuser+ " " + nameuser;

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
                btncomment.addEventListener('click', async function() {
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
                                console.log("comment="+commentaires);
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
                                hedercomment_img_img.src = imguser ? imguser : "img/ferticonnectiLogoWhite.png";
                    
                                const hedercomment_h1 = document.createElement('h1');
                                hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                const hedercomment_i= document.createElement('i');
                                if(typeusercomment === "medecin"){
                                    hedercomment_i.className="bi bi-patch-check-fill";
                                }
                                const content_comment = document.createElement('div');
                                content_comment.className = "content_comment";
                    
                                const content_comment_p = document.createElement('p');
                                content_comment_p.innerHTML = commentaires;
                    
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
                    


                    send_comment.addEventListener("click", async(e) => {
                        e.preventDefault();
                        sharePublicationComment();
                        numbercommentaires();
                    });
                    
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
                                        AficherLesCommentaire();
                                    } catch (error) {
                                        console.error(error);
                                        wating.style.display = "none";
                                        //message_cree_produit.innerHTML = 'Erreur lors du partage du produit: ' + error.message;
                                    }
                            }
                        });
                    }
                    
                });

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




















































