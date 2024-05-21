
const etap4 = document.getElementById("etap4");
const etap3 = document.getElementById("etap3");
const etap2 = document.getElementById("etap2");
const etap1 = document.getElementById("etap1");
const pourcentage = document.getElementById("pourcentage");
const nameuser = document.getElementById("nameuser");
const photocouverture = document.getElementById("photocouverture");
const numberdabonner = document.getElementById("numberdabonner");
const photoprofile = document.getElementById("photoprofile");
const completeprofilnotif = document.getElementById("completeprofilnotif");

const compeleleprofile = document.getElementById("compeleleprofile");

const abonnerbutton = document.getElementById("abonnerbutton");
const messagebutton = document.getElementById("messagebutton");
const infobtn = document.getElementById("infobtn");



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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc, addDoc,setDoc, deleteDoc, query, orderBy, limit, where, getDocs, collection, serverTimestamp as firestoreServerTimestamp  } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage,  ref as storageRef  , uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';
import { getDatabase,  ref as databaseRef, push, onValue, serverTimestamp as databaseServerTimestamp  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js';

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
  
  
  auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Récupération de l'adresse e-mail de l'utilisateur connecté
        fotherprofile
        
        const mail = user.email;
        const iduser = user.uid;
        
        console.log('iduser = ' + iduser);
        const doclistemessageref = collection(db, typeuseruserauth, iduser, "listeMessage");
        const querySnapshot = await getDocs(doclistemessageref);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const idRoomMessage = data.idRoomMessage;
            const idamisMessage = data.idamisMessage;
            const typeamisMessage = data.typeamisMessage;
            const messagebutton = document.getElementById('messagebutton');
            const messagebuttonicon = document.getElementById('messagebuttonicon');

            if (idamisMessage === useridclick) {
                
                messagebuttonicon.style.color = "#007bbe";
                messagebutton.addEventListener('click', async function() {
                    alert('Vous avez déjà créé un espace de messagerie entre vous deux. Veuillez vérifier votre liste de messages.');

                });
            }   
        });

        
        messagebutton.addEventListener('click', async function() {
          console.log("messagebutton");

            const user = auth.currentUser;
            if (user) {
                 messagebutton.style.display = "none";
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let creatIdMessageRoom = '';
                for (let i = 0; i < 30; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    creatIdMessageRoom += characters[randomIndex];
                }
                const userId = user.uid; 
                try {
                    await setDoc(doc(db, typeuseruserauth, userId, "listeMessage",creatIdMessageRoom), {
                        idRoomMessage: creatIdMessageRoom,
                        idamisMessage: useridclick,
                        TypeamisMessage :typeuserclick

                    });
                    await setDoc(doc(db, typeuserclick, useridclick, "listeMessage",creatIdMessageRoom), {
                        idRoomMessage: creatIdMessageRoom,
                        idamisMessage: userId,
                        TypeamisMessage :typeuseruserauth
                    });
                     // Autres opérations avec les données de la cabine...
                     const database = getDatabase(app);
                     const messageRef = databaseRef(database, creatIdMessageRoom);
                     push(messageRef, {
                        text: "Salut! C'est super de vous retrouver sur Ferticonnet!  🩺",
                        id_usersent:userId,
                        timestamp: new Date().getTime() // Use local timestamp
                     })
                    .catch((error) => {
                        console.error("Error adding message: ", error);
                        wating.style.display="none";
                    });

                    alert('Veuillez vérifier votre liste de messages.');

                   
                }catch(error) {
                    console.error("Error adding document: ", error);
                }
                

            }
 
            
        });






        const log = document.getElementById("log");
        log.addEventListener('click', function() {
            window.history.back();
        });
        
        const docRef = doc(db, typeuserclick, useridclick);
        try {
            const docSnap = await getDoc(docRef); 
            if (docSnap.exists()) {
                const datauser = docSnap.data(); 
                const id__user =  docSnap.id;
                const nameuserprofile = datauser.nom;
                const prenomuserprofile = datauser.prenom;
                const statut_du_compte = datauser.statut_du_compte;
                const imguser = datauser.imguser;
                const imgcouvertureuser = datauser.imgcouvertureuser;
                const formulaire_liste1 = datauser.formulaire_liste1;
                const formulaire_liste2 = datauser.formulaire_liste2;
                const formulaire_liste3 = datauser.formulaire_liste3;
                const langue = datauser.lang;


                const timestamp = datauser.timestamp;
                const seconds = timestamp.seconds;
                const nanoseconds = timestamp.nanoseconds;
                // Créer une date à partir de la représentation Firebase Timestamp
                const milliseconds = seconds * 1000 + nanoseconds / 1000000; // Convertir nanosecondes en millisecondes
                const date = new Date(milliseconds);
                const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
                if(iduser===useridclick){
                    compeleleprofile.style.display='flex';
                   const idCopied = document.getElementById("idCopied");
                   idCopied.style.display="flex";
                   const iduser_for_copy = document.getElementById("iduser_for_copy");
                   iduser_for_copy.innerHTML= "votre id : "+id__user;
                   document.getElementById("idCopied").addEventListener("click", function() {
                       var tempTextArea = document.createElement("textarea");
                       document.getElementById("iduser_for_copy").style.color = "orange";
                       document.getElementById("idCopied").style.transition = "color 1.5s ease";
                       tempTextArea.value = id__user;
                       document.body.appendChild(tempTextArea);
                       tempTextArea.select();
                       document.execCommand("copy");
                       document.body.removeChild(tempTextArea);
                       setTimeout(function() {
                        document.getElementById("iduser_for_copy").style.color = "var(--second2-bg-color)"; 
                    }, 2000); 
                   });


                }
                else{
                    compeleleprofile.style.display="none";
                    infobtn.style.display="none";
                }


                // Extraire les composantes de la date
                const day = date.getDate();
                const monthIndex = date.getMonth(); // Les mois commencent à 0
                const monthName = monthNames[monthIndex];
                const year = date.getFullYear();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                
                // Formater la date en chaîne de caractères "DD Mois YY heure"
                const formattedTimestamp = `${day} ${monthName} ${year}`;
                traducFolder();
                async function traducFolder(){
                    const docRef = doc(db, typeuseruserauth, iduser);
                    try {
                        const docSnap = await getDoc(docRef); 
                        if (docSnap.exists()) {
                            const datauser = docSnap.data(); 
                            const langue =  datauser.lang;
                            const fotherprofile = document.getElementById("fotherprofile");
                            const FertiConnect_ = document.getElementById("FertiConnect_");
                          if (langue === "Français") {
                            FertiConnect_.innerHTML = "FertiConnect";
                            fotherprofile.innerHTML = "Cet utilisateur s'est enregistré en tant que " + typeuserclick + " sur Ferticonnect le " + formattedTimestamp;
                        } else if (langue === "Anglais") {
                            FertiConnect_.innerHTML = "FertiConnect";
                            fotherprofile.innerHTML = "This user registered as " + typeuserclick + " on Ferticonnect on " + formattedTimestamp;
                        } else if (langue === "Espagnol") {
                            FertiConnect_.innerHTML = "FertiConnect";
                            fotherprofile.innerHTML = "Este usuario se registró como " + typeuserclick + " en ConexiónFértil el " + formattedTimestamp;
                        } else if (langue === "Arabe") {
                            FertiConnect_.innerHTML = "فرتي كونكت";
                            fotherprofile.innerHTML = "سجل هذا المستخدم كـ " + typeuserclick + " على فرتي كونكت في " + formattedTimestamp;
                        } else if (langue === "Portugais") {
                            FertiConnect_.innerHTML = "FertiConnect";
                            fotherprofile.innerHTML = "Este usuário se registrou como " + typeuserclick + " no ConexãoFértil em " + formattedTimestamp;
                        } else if (langue === "Allemand") {
                            FertiConnect_.innerHTML = "FertiConnect";
                            fotherprofile.innerHTML = "Dieser Benutzer hat sich als " + typeuserclick + " auf FertiVerbindung am " + formattedTimestamp + " registriert";
                        }
                        }
                    }catch{}


                }
                

                nameuser.innerHTML=prenomuserprofile+" "+ nameuserprofile;



            
                numberamisList();
                async function numberamisList(){
                    const docRef = collection(db,typeuserclick,useridclick,"amis");
                    const querySnapshot = await getDocs(docRef);
                    const numberOfDocuments = querySnapshot.size;
                    numberdabonner.innerHTML = numberOfDocuments +" abonnés";
                }
                
                if(typeuserclick === "medecin"){
                    const nameuser_i = document.getElementById("nameuser_i");
                    nameuser_i.style.display="flex";
                    if(iduser=== useridclick){
                        mycabinsbg2.style.display="flex";
                    }
                }
                if(useridclick === iduser){
                    let a = 0;
                    completeprofilnotif.style.display="flex";
                    abonnerbutton.style.display="none";
                    messagebutton.style.display="none";
                    infobtn.style.display="flex";
                    compeleleprofile.style.display="flex";
                    infobtn.addEventListener('click', function() {
                        if(compeleleprofile.style.display === "none") {
                            compeleleprofile.style.display = "flex";
                        } else {
                            compeleleprofile.style.display = "none";
                        }
                    });
                    if(statut_du_compte=== "active"){
                        etap1.style.color="#00ea13"
                        etap1.style.fontWeight="500"
                        a=a+25;

                    }else{
                        etap1.style.color="red"
                        etap1.style.fontWeight="500"
                    }
                    if (imguser==="") { // Vérification si imguser existe

                        photoprofile.src = "img/ferticonnectiLogoGreen.svg";
                        etap2.style.color="red"
                        etap2.style.fontWeight="500"

                    } else {
                        photoprofile.src = imguser;
                        a=a+25;
                        etap2.style.color="#00ea13"
                        etap2.style.fontWeight="500"
                    }
                    if (imgcouvertureuser==="") { // Vérification si couvertur existe
                        photocouverture.src = "img/ferticonnectiLogoWhite.svg";
                        etap3.style.color="red"
                        etap3.style.fontWeight="500"
                    } else {
                        photocouverture.src = imgcouvertureuser;
                        a=a+25;
                        etap3.style.color="#00ea13"
                        etap3.style.fontWeight="500"
                    }

                    // Vérification si le formulaire liste 1 est vide
                    if (!formulaire_liste1 || Object.keys(formulaire_liste1).length === 0) {
                        etap4.style.color = "red";
                        etap4.style.fontWeight = "500";
                    } else {
                        a += 5;
                    }
                    
                    // Vérification si le formulaire liste 2 est vide
                    if (!formulaire_liste2 || Object.keys(formulaire_liste2).length === 0) {
                        etap4.style.color = "red";
                        etap4.style.fontWeight = "500";
                    } else {
                        
                        a += 10;
                    }
                    
                    // Vérification si le formulaire liste 3 est vide
                    if (!formulaire_liste3 || Object.keys(formulaire_liste3).length === 0) {
                        etap4.style.color = "red";
                        etap4.style.fontWeight = "500";
                    } else {
                        a += 10;
                        etap4.style.color = "#00ea13";
                        etap4.style.fontWeight = "500";
                    }


                    if(a===100){
                        completeprofilnotif.style.display="none";
                    }
                    pourcentage.innerHTML="Complete votre profile "+a+"%";
                    
                    const photoprofilchangerbg = document.getElementById("photoprofilchangerbg");
                    etap2.addEventListener('click', function() {
                        photoprofilchangerbg.style.display="flex"
                    });
                    const fermer1 = document.getElementById("fermer1");
                    fermer1.addEventListener('click', function() {
                        photoprofilchangerbg.style.display="none"

                    });
                    const originalprofile = document.getElementById("originalprofile");
                    const loaderprofile = document.getElementById("loaderprofile");
                    const Doneprofile = document.getElementById("Doneprofile");
                    const photochanger_i = document.getElementById("photochanger_i");
                    const partagerphotoPbtn = document.getElementById("partagerphotoPbtn");
                    const photochanger_gallery = document.getElementById("photochanger_gallery");
                    let file;
                    
                    document.getElementById('photochanger').addEventListener('click', function() {
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
                                photochanger_i.style.display = "none";
                                photochanger_gallery.style.display = "flex";
                                partagerphotoPbtn.style.display = "block";
                                photochanger_gallery.innerHTML = "";
                    
                                // Affichage de l'image dans la galerie
                                const img = document.createElement('img');
                                img.src = imageUrl;
                                photochanger_gallery.appendChild(img);
                            };
                        };
                        input.click();
                    });
                    //ferticonnectiLogoGreen.png
                    partagerphotoPbtn.addEventListener('click', async function() {
                        originalprofile.style.display = "none";
                        loaderprofile.style.display = "block";
                        loaderprofile.style.color="white";
                    
                        if (file) {
                            try {
                                // Upload des images dans le stockage Firebase
                                const storageRef1 = storageRef(storage, 'images/' + file.name);
                                await uploadBytes(storageRef1, file);
                                const downloadURL1 = await getDownloadURL(storageRef1);
                                const userDocRef = doc(db, typeuserclick, iduser);
                                await updateDoc(userDocRef, {
                                    imguser: downloadURL1,
                                });
                                originalprofile.style.display = "none";
                                loaderprofile.style.display = "none";
                                Doneprofile.style.display = "block";
                                refreshPage();

                            } catch (error) {
                                console.error(error);
                                originalprofile.style.display = "block";
                                loaderprofile.style.display = "none";
                                Doneprofile.style.display = "none";

                            }
                        }
                    });
                    
                    const photochanger_couverture_i = document.getElementById("photochanger_couverture_i");
                    const nouveauimage_couv = document.getElementById("nouveauimage_couv");
                    const fermer2 = document.getElementById("fermer2");
                    const partagerphotoPbtn_couv = document.getElementById("partagerphotoPbtn_couv");
                    const Done_couv = document.getElementById("Done_couv");
                    const loader_couv = document.getElementById("loader_couv");
                    const original_couv = document.getElementById("original_couv");
                    
                    const photocouverturechangerbg = document.getElementById("photocouverturechangerbg");
                    etap3.addEventListener('click', function() {
                        photocouverturechangerbg.style.display="flex"
                    });
                    fermer2.addEventListener('click', function() {
                        photocouverturechangerbg.style.display="none"
                    });
                    let file1;
                    
                    document.getElementById('photochanger_couverture').addEventListener('click', function() {
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
                    });
                    
                    partagerphotoPbtn_couv.addEventListener('click', async function() {  
                        original_couv.style.display = "none";
                        loader_couv.style.display = "block";
                        loader_couv.style.color="white";
                    
                        if (file1) {
                            try {
                                // Upload des images dans le stockage Firebase
                                const storageRef2 = storageRef(storage, 'images/' + file1.name);
                                await uploadBytes(storageRef2, file1);
                                const downloadURL2 = await getDownloadURL(storageRef2);
                                const userDocRef = doc(db, typeuserclick, iduser);
                                await updateDoc(userDocRef, {
                                    imgcouvertureuser: downloadURL2,
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
                    
                    
                }
                else{

                    if(typeuseruserauth === "patient"){
                        if(typeuserclick==="medecin"){
                            compeleleprofile.style.display="none";
                            infobtn.style.display="none";
                            afficheleprofile_med();
                        }
                        else{
                            photoprofile.src = "img/ferticonnectiLogoGreen.svg";
                            photocouverture.src = "img/ferticonnectiLogoWhite.svg";
                            nameuser.innerHTML="Utilisateur fertiConnect";
                            abonnerbutton.style.display="none";
                            messagebutton.style.display="none";
                            infobtn.style.display="none";
                            compeleleprofile.style.display="none";



                        }
                        

                        
                    }else{
                        afficheleprofile_med();

                    }

                    async function afficheleprofile_med(){
                        
                         if (imguser==="") { // Vérification si imguser existe
                             photoprofile.src = "img/ferticonnectiLogoGreen.svg";
                         } else {
                             photoprofile.src = imguser;
                         }
                         if (imgcouvertureuser==="") { // Vérification si couvertur existe
                             photocouverture.src = "img/ferticonnectiLogoWhite.svg";
                         } else {
                             photocouverture.src = imgcouvertureuser;
                         }
                         abonnerbutton.style.display="flex";
                         messagebutton.style.display="flex";
                         infobtn.style.display="none";
                         compeleleprofile.style.display="none";
                         
                         const user = auth.currentUser;
                         if (user) {
                             const userId = user.uid;                      
                               const docRef = collection(db,typeuserclick,useridclick,"amis");
                               const querySnapshot = await getDocs(docRef);
                               querySnapshot.forEach((doc) => {
                                   const data = doc.data();
                                   const useramisid= data.iduser;
                                   abonnerbutton.classList.contains("btnprfil");
                                   if (useramisid === userId) {
                                     abonnerbutton.classList.add("act");
                                   } else {
                                     if (abonnerbutton.classList.contains("act")) {
                                         abonnerbutton.classList.remove("act");
                                     }
                                   }
                               });
                           
                         }
                         
                         abonnerbutton.addEventListener('click', async function() {
                             if (abonnerbutton.classList.contains("btnprfil")) {
                                 if (abonnerbutton.classList.contains("act")) {
                                     abonnerbutton.classList.remove("act");
                                     const user = auth.currentUser;
                             
                                     if (user) {
                                         const userId = user.uid; 
                                         const amisCollectionRef = collection(db, typeuserclick, useridclick, "amis");
                                         const querySnapshot = await getDocs(query(amisCollectionRef, where("iduser", "==", userId)));
                                         querySnapshot.forEach(async (doc) => {
                                             try {
                                                 await deleteDoc(doc.ref);
                                                 await numberamisList();
                                             } catch (error) {
                                                 console.error("Erreur lors de la suppression du document de la sous-collection 'amis':", error);
                                             }
                                         });
                                         
                                         // Supprimer l'utilisateur actuel de sa propre liste d'amis
                                         const mesamisCollectionRef = collection(db, typeuseruserauth, userId, "amis");
                                         const mesquerySnapshot = await getDocs(query(mesamisCollectionRef, where("iduser", "==", useridclick)));
                                         mesquerySnapshot.forEach(async (doc) => {
                                             try {
                                                 await deleteDoc(doc.ref);
                                             } catch (error) {
                                                 console.error("Erreur lors de la suppression du document de la sous-collection 'mes amis':", error);
                                             }
                                         });
                                     }
                             
                                 } else {
                                     // ajouter amis
                                     const user = auth.currentUser;
                                     if (user) {
                                         const userId = user.uid;
                                         // Ajouter l'utilisateur cliqué comme ami
                                         const docRef = await addDoc(collection(db, typeuserclick, useridclick, "amis"), {
                                             iduser: userId,
                                             typeuser :typeuseruserauth,
                                         });
                                         await numberamisList();
     
                                         // Ajouter l'utilisateur cliqué à la liste d'amis de l'utilisateur actuel
                                         const mesamisRef = await addDoc(collection(db, typeuseruserauth, userId, "amis"), {
                                             iduser: useridclick,
                                             typeuser :typeuserclick,
                                         });
                                     }
                                     abonnerbutton.classList.add("act");
                                 }
                             }
                         });
                         
                         
                    }


                    
                    
                    
                    

                }
            } 
        }catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error);
        }
        

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
        
    } else {

        console.log("---------");

    }
});


auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userId = user.uid; 
        const docRef_CabineRoom = doc(db, typeuseruserauth , userId);
        console.log("userId ====="+userId);
      try {
        const docuser = await getDoc(docRef_CabineRoom); 
        if (docuser.exists()) {
          const docuserinfo = docuser.data(); 
          const langue = docuserinfo.lang;      
         if (langue === "Français") {
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "Vérifiez votre compte.";
             document.getElementById("etap2").innerHTML = "Ajoutez une photo de profil.";
             document.getElementById("etap3").innerHTML = "Ajoutez une photo de couverture.";
             document.getElementById("etap4").innerHTML = "Remplissez le formulaire.";
             document.getElementById("creeCabine").innerHTML = "Créez votre propre espace cabine";
             document.getElementById("creaCab").innerHTML = "Création de cabine";
             document.getElementById("cvpecf").innerHTML = "Créez votre propre espace cabine sur 'Ferticonnect' afin de partager des publications et des conseils entre les membres de cette cabine. Établissez également un espace médical axé sur la solidarité, favorisant ainsi l'échange d'informations et de soutien entre les utilisateurs.";
             document.getElementById("nomtext").innerHTML = "nom de cabine:";
             document.getElementById("Cr1").innerHTML = "Créez";
             document.getElementById("termin").innerHTML = "terminée";
             document.getElementById("mdfp").innerHTML = "Modifiez votre image de profil";
             document.getElementById("prtg").innerHTML = "Partager";
             document.getElementById("trm").innerHTML = "terminée";
             document.getElementById("couver").innerHTML = "Modifiez votre image de couverture";
             document.getElementById("Partager11").innerHTML = "Partager";
             document.getElementById("termin1").innerHTML = "terminée";
             document.getElementById("deco").innerHTML = "Souhaites-tu te déconnecter ?";
             document.getElementById("deco_neccterbtn").innerHTML = "déconnecter";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "fermer";
         } else if (langue === "Anglais") {
             // Traductions en anglais
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "Check your account.";
             document.getElementById("etap2").innerHTML = "Add a profile picture.";
             document.getElementById("etap3").innerHTML = "Add a cover photo.";
             document.getElementById("etap4").innerHTML = "Fill out the form.";
             document.getElementById("creeCabine").innerHTML = "Create your own cabin space";
             document.getElementById("creaCab").innerHTML = "Cabin creation";
             document.getElementById("cvpecf").innerHTML = "Create your own cabin space on 'Ferticonnect' to share posts and advice among members of this cabin. Also, establish a solidarity-focused medical space, thus promoting the exchange of information and support among users.";
             document.getElementById("nomtext").innerHTML = "cabin name:";
             document.getElementById("Cr1").innerHTML = "Create";
             document.getElementById("termin").innerHTML = "completed";
             document.getElementById("mdfp").innerHTML = "Edit your profile picture";
             document.getElementById("prtg").innerHTML = "Share";
             document.getElementById("trm").innerHTML = "completed";
             document.getElementById("couver").innerHTML = "Edit your cover photo";
             document.getElementById("Partager11").innerHTML = "Share";
             document.getElementById("termin1").innerHTML = "completed";
             document.getElementById("deco").innerHTML = "Would you like to log out?";
             document.getElementById("deco_neccterbtn").innerHTML = "log out";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "close";
         } else if (langue === "Espagnol") {
             // Traductions en espagnol
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "Verifique su cuenta.";
             document.getElementById("etap2").innerHTML = "Añadir una foto de perfil.";
             document.getElementById("etap3").innerHTML = "Añadir una foto de portada.";
             document.getElementById("etap4").innerHTML = "Complete el formulario.";
             document.getElementById("creeCabine").innerHTML = "Cree su propio espacio de cabina";
             document.getElementById("creaCab").innerHTML = "Creación de cabina";
             document.getElementById("cvpecf").innerHTML = "Cree su propio espacio de cabina en 'Ferticonnect' para compartir publicaciones y consejos entre los miembros de esta cabina. Además, establezca un espacio médico enfocado en la solidaridad, promoviendo así el intercambio de información y apoyo entre los usuarios.";
             document.getElementById("nomtext").innerHTML = "nombre de la cabina:";
             document.getElementById("Cr1").innerHTML = "Crear";
             document.getElementById("termin").innerHTML = "terminado";
             document.getElementById("mdfp").innerHTML = "Editar su foto de perfil";
             document.getElementById("prtg").innerHTML = "Compartir";
             document.getElementById("trm").innerHTML = "terminado";
             document.getElementById("couver").innerHTML = "Editar su foto de portada";
             document.getElementById("Partager11").innerHTML = "Compartir";
             document.getElementById("termin1").innerHTML = "terminado";
             document.getElementById("deco").innerHTML = "¿Te gustaría cerrar sesión?";
             document.getElementById("deco_neccterbtn").innerHTML = "cerrar sesión";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "cerrar";
         } else if (langue === "Arabe") {
             // Traductions en arabe
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "تحقق من حسابك.";
             document.getElementById("etap2").innerHTML = "إضافة صورة الملف الشخصي.";
             document.getElementById("etap3").innerHTML = "إضافة صورة الغلاف.";
             document.getElementById("etap4").innerHTML = "املأ النموذج.";
             document.getElementById("creeCabine").innerHTML = "أنشئ  العيادة الخاصة بك";
             document.getElementById("creaCab").innerHTML = "إنشاء كوخ";
             document.getElementById("cvpecf").innerHTML = "أنشئ العيادة الخاصة بك على 'Ferticonnect' لمشاركة المنشورات والنصائح بين أعضاء هذا  العيادة. بالإضافة إلى ذلك، قم بإنشاء مساحة طبية تركز على التضامن، مما يعزز تبادل المعلومات والدعم بين المستخدمين.";
             document.getElementById("nomtext").innerHTML = "اسم  العيادة:";
             document.getElementById("Cr1").innerHTML = "خلق";
             document.getElementById("termin").innerHTML = "مكتمل";
             document.getElementById("mdfp").innerHTML = "تحرير صورة الملف الشخصي الخاصة بك";
             document.getElementById("prtg").innerHTML = "شارك";
             document.getElementById("trm").innerHTML = "مكتمل";
             document.getElementById("couver").innerHTML = "تحرير صورة الغلاف الخاصة بك";
             document.getElementById("Partager11").innerHTML = "شارك";
             document.getElementById("termin1").innerHTML = "مكتمل";
             document.getElementById("deco").innerHTML = "هل ترغب في تسجيل الخروج؟";
             document.getElementById("deco_neccterbtn").innerHTML = "تسجيل الخروج";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "إغلاق";
         } else if (langue === "Portugais") {
             // Traductions en portugais
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "Verifique sua conta.";
             document.getElementById("etap2").innerHTML = "Adicionar uma foto de perfil.";
             document.getElementById("etap3").innerHTML = "Adicionar uma foto de capa.";
             document.getElementById("etap4").innerHTML = "Preencha o formulário.";
             document.getElementById("creeCabine").innerHTML = "Crie seu próprio espaço de cabine";
             document.getElementById("creaCab").innerHTML = "Criação de cabine";
             document.getElementById("cvpecf").innerHTML = "Crie seu próprio espaço de cabine no 'Ferticonnect' para compartilhar postagens e conselhos entre os membros desta cabine. Além disso, estabeleça um espaço médico focado na solidariedade, promovendo assim a troca de informações e suporte entre os usuários.";
             document.getElementById("nomtext").innerHTML = "nome da cabine:";
             document.getElementById("Cr1").innerHTML = "Crie";
             document.getElementById("termin").innerHTML = "completo";
             document.getElementById("mdfp").innerHTML = "Edite sua foto de perfil";
             document.getElementById("prtg").innerHTML = "Compartilhar";
             document.getElementById("trm").innerHTML = "completo";
             document.getElementById("couver").innerHTML = "Edite sua foto de capa";
             document.getElementById("Partager11").innerHTML = "Compartilhar";
             document.getElementById("termin1").innerHTML = "completo";
             document.getElementById("deco").innerHTML = "Gostaria de fazer logout?";
             document.getElementById("deco_neccterbtn").innerHTML = "sair";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "fechar";
         } else if (langue === "Allemand") {
             // Traductions en allemand
             document.getElementById("FertiConnect_").innerHTML = "FertiConnect";
             document.getElementById("etap1").innerHTML = "Überprüfen Sie Ihr Konto.";
             document.getElementById("etap2").innerHTML = "Fügen Sie ein Profilbild hinzu.";
             document.getElementById("etap3").innerHTML = "Fügen Sie ein Titelbild hinzu.";
             document.getElementById("etap4").innerHTML = "Füllen Sie das Formular aus.";
             document.getElementById("creeCabine").innerHTML = "Erstellen Sie Ihren eigenen Kabine-Bereich";
             document.getElementById("creaCab").innerHTML = "Kabinenerstellung";
             document.getElementById("cvpecf").innerHTML = "Erstellen Sie Ihren eigenen Kabine-Bereich auf 'Ferticonnect', um Beiträge und Ratschläge zwischen den Mitgliedern dieser Kabine zu teilen. Richten Sie auch einen auf Solidarität ausgerichteten medizinischen Bereich ein, der den Austausch von Informationen und Unterstützung zwischen den Benutzern fördert.";
             document.getElementById("nomtext").innerHTML = "Kabinenname:";
             document.getElementById("Cr1").innerHTML = "Erstellen";
             document.getElementById("termin").innerHTML = "abgeschlossen";
             document.getElementById("mdfp").innerHTML = "Bearbeiten Sie Ihr Profilbild";
             document.getElementById("prtg").innerHTML = "Teilen";
             document.getElementById("trm").innerHTML = "abgeschlossen";
             document.getElementById("couver").innerHTML = "Bearbeiten Sie Ihr Titelbild";
             document.getElementById("Partager11").innerHTML = "Teilen";
             document.getElementById("termin1").innerHTML = "abgeschlossen";
             document.getElementById("deco").innerHTML = "Möchtest du dich abmelden?";
             document.getElementById("deco_neccterbtn").innerHTML = "abmelden";
             document.getElementById("anulerdeco_neccterbtn").innerHTML = "schließen";
         }
        }
      }catch
      {}
    }
});



// Recharge la page actuelle
function refreshPage() {
    window.location.reload(); 
}
// Fonction de déconnexion
function logout() {
    signOut(auth).then(() => {
        window.location.href = 'index.html'; 
    }).catch((error) => {
        console.error('Erreur lors de la déconnexion : ', error);
    });
}

const confirmeCreecabine = document.getElementById('confirmeCreecabine');
const original2 = document.getElementById('original2');
const loader2 = document.getElementById('loader2');
const Done2 = document.getElementById('Done2');
const message_creation_canine = document.getElementById('message_creation_canine');

confirmeCreecabine.addEventListener('click', async function() {
    original2.style.display="none";
    loader2.style.display="block";
    const user = auth.currentUser;
    if (user) {
        const nomdecabin = document.getElementById("nomdecabin").value;
        const userId = user.uid; 
        try {
            const docRef = await addDoc(collection(db, 'cabines'), {
                cabineImage: "",
                nameCabine: nomdecabin,
                creatorId: userId, 
            });
            const cabineId = docRef.id; // Retrieve the ID of the created cabin
            Done2.style.display="block";
            original2.style.display="none";
            loader2.style.display="none";
            message_creation_canine.textContent = `La cabine a été parfaitement créée. nom de la cabine : ${nomdecabin}`;
            message_creation_canine.style.color="green";
            AjouteIdinAccountAdmin(cabineId,userId);
            AjouteIdinrecherchliste(cabineId,nomdecabin);
            AjouteIdinSearchlist(cabineId,userId);
            setTimeout(() => {
                message_creation_canine.textContent = "";
                Done2.style.display="none";
                original2.style.display="block";
            }, 3000);
            
        } catch (error) {
            original2.style.display="block";
            loader2.style.display="none";
            console.error("Error adding Cabine: ", error);
        }
    } else {
        console.log("User not logged in");
    }
});


async function AjouteIdinAccountAdmin(cabineId,userId){
    try {
        const docRef = await addDoc(collection(db, typeuseruserauth,userId,"cabines"), {
            cabineId: cabineId, 
        });
    } catch (error) {
        console.error("Error adding Cabine in user account: ", error);
    }

}
async function  AjouteIdinrecherchliste(cabineId,nomdecabin){
    const docRef = await addDoc(collection(db, 'rechercheliste'), {
        idelement: cabineId,
        nomelement: nomdecabin,
        typeelement:"cabines"
    });
}
async function  AjouteIdinSearchlist(cabineId,userId){
    const docmembresRef = await addDoc(collection(db, 'cabines',cabineId,"membres"), {
        idmembres: userId, 
        typuser:typeuseruserauth 
    });
}

etap4.addEventListener('click', () => {
    window.location.href = `formulairepatien.html?userformulaireid=${useridclick}&typeuserformulaire=${typeuseruserauth}`; // Redirection vers la page du produit avec l'ID du produit
}); 

// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const useridclick = urlParams.get('useridclick');
const typeuserclick = urlParams.get('typeuserclick');
const typeuseruserauth = urlParams.get('typeOfUser');

//creatorId