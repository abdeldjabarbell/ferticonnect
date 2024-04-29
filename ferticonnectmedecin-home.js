


function tailledecran(){
    const navbar_buttom = document.getElementById('navbar_buttom');
    const leftespace = document.getElementById('leftespace');
    const rightespace = document.getElementById('rightespace');
    const midleespace = document.getElementById('midleespace');
    if (window.innerWidth < 600) {
        navbar_buttom.style.display="flex";
        leftespace.style.display = "none";
        rightespace.style.display = "none";
        midleespace.style.display = "flex";
    } else {
        navbar_buttom.style.display="none";
        leftespace.style.display = "block";
        rightespace.style.display = "block";
        midleespace.style.display = "block";
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
    leftespace.style.display = "block";
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








import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc ,addDoc,deleteDoc, query, orderBy,where, getDocs, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
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

  auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Récupération de l'adresse e-mail de l'utilisateur connecté
        const mail = user.email;

        // Vérification si l'e-mail existe dans la collection "admins"
        const q = query(collection(db, "medecin"), where("email", "==", mail));

        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const watingAccount = document.getElementById("wating");
                watingAccount.style.display = "flex";

                const userId = user.uid;
                const userRef = doc(db, "medecin", userId);
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
            const userRef = doc(db, "medecin", userId);
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
                    const userDocRef = doc(db, 'medecin', userId);
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
// Fonction de déconnexion
function logout() {
    signOut(auth).then(() => {
        window.location.href = 'index.html'; 
    }).catch((error) => {
        console.error('Erreur lors de la déconnexion : ', error);
    });
}


const partagerntn = document.getElementById("partagerntn");
const fileInput1 = document.getElementById("fileInput1");
const inputpubadd = document.getElementById("inputpubadd").value;
const imagge1 = document.getElementById("imagge1");
const gallery1 = document.getElementById("gallery1");
const wating = document.getElementById("wating");

fileInput1.addEventListener('change', async function(event) {
    const file = event.target.files[0];

    // Conversion de l'image redimensionnée en URL de données (data URL)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      const imageUrl = reader.result;
      gallery1.style.display="flex";
      imagge1.innerHTML="";

      // Affichage de l'image dans la galerie
      const img = document.createElement('img');
      img.src = imageUrl;
      imagge1.appendChild(img);
    };
 
 
});
partagerntn.addEventListener("click", async (e) => {
    e.preventDefault();
    wating.style.display = "flex";
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userId = user.uid;
            if (gallery1.style.display === "flex") {
                const fileInput1 = document.getElementById('fileInput1');
                const file1 = fileInput1.files[0];
                try {
                    // Upload des images dans le stockage Firebase
                    const storageRef1 = ref(storage, 'images/' + file1.name);
                    await uploadBytes(storageRef1, file1);
                    const downloadURL1 = await getDownloadURL(storageRef1);
                    const inputpubadd = document.getElementById("inputpubadd").value;
                    const docRef = await addDoc(collection(db, 'publications'), {
                        publication: inputpubadd,
                        imageUrl_publication: downloadURL1,
                        iduser:userId,
                        placepub:"home",
                        typeuser:"medecin",
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
                        iduser:userId,
                        placepub:"home",
                        timestamp: serverTimestamp(),
                        typeuser:"medecin"
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
});


// Recharge la page actuelle
function refreshPage() {
    window.location.reload(); 
}



const lespublicationslist = document.getElementById("lespublicationslist");

try {
    const querySnapshot = await getDocs(query(collection(db, 'publications'), orderBy('timestamp', 'desc')));

    for (const doc of querySnapshot.docs) {
        const idpub = doc.id;
        const data = doc.data();
        const publication = data.publication;
        const placepub = data.placepub;
        const imageUrl_publication = data.imageUrl_publication;
        
        // Fonction pour formater un timestamp en "DD MM YYYY heure:minute"
        function formatterTimestamp(timestamp) {
            const date = new Date(timestamp.seconds * 1000); // Convertir les secondes en millisecondes
        
            // Obtenir les parties de la date
            const day = date.getDate();
            const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc ajout de 1
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
        
            // Formater les parties de la date pour s'assurer qu'elles ont toujours deux chiffres
            const formattedDay = day < 10 ? '0' + day : day;
            const formattedMonth = month < 10 ? '0' + month : month;
            const formattedHours = hours < 10 ? '0' + hours : hours;
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
            // Retourner la date formatée au format "DD MM YYYY heure:minute"
            return `${formattedDay} ${formattedMonth} ${year} ${formattedHours}:${formattedMinutes}`;
        }
        
        // Exemple d'utilisation avec votre timestamp
        const timestamp = { seconds: 1714246980, nanoseconds: 165000000 }; // Votre timestamp
        const formattedTimestamp = formatterTimestamp(timestamp);
        

        const iduser = data.iduser;
        const typeuser = data.typeuser;

        creatpost(iduser,typeuser,placepub,formattedTimestamp,imageUrl_publication,publication,idpub);

        
    }
  
} catch (error) {
    console.error("Erreur lors de la récupération des publications:", error);
}
async function creatpost(iduser,typeuser,placepub,formattedTimestamp,imageUrl_publication,publication,idpub){

    // Référence au document utilisateur
    const docRef = doc(db, typeuser, iduser);
    try {
        const docSnap = await getDoc(docRef); // Récupération du snapshot du document
        if (docSnap.exists()) { // Vérification si le document utilisateur existe
            const datauser = docSnap.data(); // Récupération des données du document utilisateur
            const nameuser = datauser.nom;
            const prenameuser = datauser.prenom;
            const imguser = datauser.imguser;

            if (placepub === "home") {

                const pubbg_ = document.createElement("div");
                pubbg_.className = "pubbg_";

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
                commentsnum_p.innerHTML = "0";
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
                btncomment.appendChild(btncomment_i);
                jaimecommentbtns.appendChild(btncomment);
                pubbg_.appendChild(jaimecommentbtns);

                


                lespublicationslist.appendChild(pubbg_);
                const user = auth.currentUser;
                if (user) {
                    const userId = user.uid;                      
                      const docRef = collection(db, 'publications', idpub, 'jaimes');
                      const querySnapshot = await getDocs(docRef);
                      querySnapshot.forEach((doc) => {
                          const data = doc.data();
                          if (data.userid === userId) {
                              btnjaimei1.style.display = "none";
                              btnjaimei2.style.display = "flex";
                          } else {
                              btnjaimei1.style.display = "none";
                              btnjaimei2.style.display = "flex";
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
        } else {
            console.log("Le document utilisateur n'existe pas.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
    }
}





















































