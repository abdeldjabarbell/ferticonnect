
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




// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const typeuserclick = urlParams.get('typeuserclick');
const typeOfUser = urlParams.get('typeuserclick');
const IdCabine = urlParams.get('cabineidclick');


const docRef = doc(db, "cabines", IdCabine);
try {
  const docSnap = await getDoc(docRef); // Récupération du snapshot du document
  const datacabine = docSnap.data(); // Récupération des données du document cabine
  const cabineImage = datacabine.cabineImage;
  const creatorId = datacabine.creatorId;
  const nameCabine = datacabine.nameCabine;



  const numberofMembre = document.getElementById("numberofMembre");

  numberamisListnumber();
  async function numberamisListnumber(){
      const docRefmembre = collection(db, "cabines", IdCabine, "membres");
      const snapshotmembre = await getDocs(docRefmembre);
      const numberOfDocuments = snapshotmembre.size;
      numberofMembre.innerHTML=' <i class="bi bi-people-fill"></i>   '+numberOfDocuments +" members";
    }
  const messageAjoutePhoto = document.getElementById("messageAjoutePhoto");
  const couvertureCabine = document.getElementById("couvertureCabine");


  if(cabineImage){
    couvertureCabine.src= cabineImage;
    messageAjoutePhoto.style.color="var(--second2-bg-color)";
  }else{
    couvertureCabine.src="img/ferticonnectiLogoWhite.png";
    messageAjoutePhoto.style.color="red";
  }


  const nameCabinetitre = document.getElementById("nameCabinetitre");
  nameCabinetitre.innerHTML=' <i class="bi bi-hospital"></i>  '+nameCabine;


  auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userId = user.uid;
        const addpublication = document.getElementById("addpublication");
        if(creatorId === userId){
            addpublication.style.display="flex";
            messageAjoutePhoto.style.display="flex";
        }else{
            addpublication.style.display="none";
            messageAjoutePhoto.style.display="none";

        }
    }
  });
  const lespublicationslist = document.getElementById("lespublicationslist");
  
  const querySnapshotadminpub = await getDocs(
    query(
        collection(db, 'cabines', IdCabine, 'publications'),
        orderBy('timestamp', 'desc'),
        limit(20)
    )
);

  if (querySnapshotadminpub.empty) {
      console.log("Il n'y a aucun document dans querySnapshotadminpub.");
  } else {
      console.log("querySnapshotadminpub contient des documents.");
      
      // Utilisation de la boucle for...of pour itérer de manière asynchrone
      for (const doc of querySnapshotadminpub.docs) {
          const data = doc.data();
          const publicationCabine_id = data.publicationCabine_id;
          if (publicationCabine_id) {
              await recuperationPubCabine(publicationCabine_id);
          } else {
              console.log("publicationCabine_id n'est pas défini dans ce document.");
          }
      }
  }
  

  
    
     async function recuperationPubCabine(publicationCabine_id){
         const docRef = doc(db, "publications", publicationCabine_id);
         try {

             const docSnappub = await getDoc(docRef); // Récupération du snapshot du document
                 const idpub = docSnappub.id;
                 const data = docSnappub.data();
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

             
         
         } catch (error) {
             console.error("Erreur lors de la récupération des données :", error);
         }
     
     
     }


     async function creatpost(pubbg_,iduser,typeuser,placepub,formattedTimestamp,imageUrl_publication,publication,idpub){

        // Référence au document utilisateur
        const docRef = doc(db, typeuser, iduser);
        try {
            const docSnap = await getDoc(docRef); // Récupération du snapshot du document
                const datauser = docSnap.data(); // Récupération des données du document utilisateur
                const nameuser = datauser.nom;
                const prenameuser = datauser.prenom;
                const imguser = datauser.imguser;
    
                if (placepub === "cabine") {
    
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
                                            nameuserpubh1.innerHTML =prenameuser+ " " + nameuser;
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
                else(
                    console.log("vide")
                )
            
        } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error);
        }
    
        
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
                             placepub: "cabine",
                             typeuser: typeuserclick,
                             timestamp: serverTimestamp()
                         });
                         const docRefadmin = await addDoc(collection(db, 'cabines',IdCabine,"publications"), {
                             publicationCabine_id: docRef.id,
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
                             placepub: "cabine",
                             timestamp: serverTimestamp(),
                             typeuser: typeuserclick
                         });
                         const docRefadmin = await addDoc(collection(db, 'cabines',IdCabine,"publications"), {
                            publicationCabine_id: docRef.id,
                            timestamp: serverTimestamp()
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
     
         
     
     
} catch (error) {
  console.error("Erreur lors de la récupération des données de la cabine :", error);
}


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
                window.location.href = `ferticonnectmedecin-cabine.html?cabineidclick=${cabineId}&typeOfUser=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
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

                    if (statut_du_compte === "desactive") {
                        window.location.href = 'index.html';
                    } else {
                        watingAccount.style.display = "none";
                    }
                    watingAccount.style.display = "none";

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




// Recharge la page actuelle
function refreshPage() {
    window.location.reload(); 
}



//const couvertureCabine = document.getElementById("messageAjoutePhoto");

const messageAjoutePhoto = document.getElementById("messageAjoutePhoto");
//messageAjoutePhoto.style.cursor="pointer";
const photochanger_couverture_i = document.getElementById("photochanger_couverture_i");
const nouveauimage_couv = document.getElementById("nouveauimage_couv");
const fermer2 = document.getElementById("fermer2");
const partagerphotoPbtn_couv = document.getElementById("partagerphotoPbtn_couv");
const Done_couv = document.getElementById("Done_couv");
const loader_couv = document.getElementById("loader_couv");
const original_couv = document.getElementById("original_couv");

const photocouverturechangerbg = document.getElementById("photocouverturechangerbg");
messageAjoutePhoto.addEventListener('click', function() {
    photocouverturechangerbg.style.display="flex"
});
fermer2.addEventListener('click', function() {
    photocouverturechangerbg.style.display="none"
});
let file3;
document.getElementById('photochanger_couverture').addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.id = "fileInput1";
    input.onchange = function(e) {
        file3 = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file3);
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
});

partagerphotoPbtn_couv.addEventListener('click', async function() {
    original_couv.style.display = "none";
    loader_couv.style.display = "block";
    loader_couv.style.color="white";

    if (file3) {
        try {
            // Upload des images dans le stockage Firebase
            const storageRef2 = ref(storage, 'images/' + file3.name);
            await uploadBytes(storageRef2, file3);
            const downloadURL2 = await getDownloadURL(storageRef2);
            const userDocRef = doc(db, "cabines", IdCabine);
            await updateDoc(userDocRef, {
                cabineImage: downloadURL2,
            });
            original_couv.style.display = "none";
            loader_couv.style.display = "none";
            Done_couv.style.display = "block";
            refreshPage();
        } catch (error) {
            console.error(error);
            original_couv.style.display = "block";
            loader_couv.style.display = "none";
            Done_couv.style.display = "none";

        }
    }
});

















































