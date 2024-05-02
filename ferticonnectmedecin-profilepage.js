
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





import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc,setDoc, getDoc,query, where , getDocs,updateDoc ,addDoc ,collection ,serverTimestamp} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
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


  auth.onAuthStateChanged(async (user) => {
    if (user) {
        
        // Récupération de l'adresse e-mail de l'utilisateur connecté
        const mail = user.email;
        const iduser = user.uid;

        const log = document.getElementById("log");
        log.addEventListener('click', function() {
          window.location.href = `ferticonnectmedecin-home.html?typeuserclick=${typeuserclick}`; 
        });

        // Référence au document utilisateur
        const docRef = doc(db, typeuserclick, useridclick);
        try {
            const docSnap = await getDoc(docRef); // Récupération du snapshot du document
            if (docSnap.exists()) {
                const datauser = docSnap.data(); // Récupération des données du document utilisateur
                const nameuserprofile = datauser.nom;
                const prenomuserprofile = datauser.prenom;
                const statut_du_compte = datauser.statut_du_compte;
                const imguser = datauser.imguser;
                const imgcouvertureuser = datauser.imgcouvertureuser;
                const formulaire = datauser.formulaire;

                
                nameuser.innerHTML=prenomuserprofile+" "+ nameuserprofile;
                if(typeuserclick === "medecin"){
                    const nameuser_i = document.getElementById("nameuser_i");
                    nameuser_i.style.display="flex";
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

                        photoprofile.src = "img/ferticonnectiLogoGreen.png";
                        etap2.style.color="red"
                        etap2.style.fontWeight="500"

                    } else {
                        photoprofile.src = imguser;
                        a=a+25;
                        etap2.style.color="#00ea13"
                        etap2.style.fontWeight="500"
                    }
                    if (imgcouvertureuser==="") { // Vérification si couvertur existe
                        photocouverture.src = "img/ferticonnectiLogoWhite.png";
                        etap3.style.color="red"
                        etap3.style.fontWeight="500"
                    } else {
                        photocouverture.src = imgcouvertureuser;
                        a=a+25;
                        etap3.style.color="#00ea13"
                        etap3.style.fontWeight="500"
                    }
                    if (formulaire=== "remplir") { // Vérification si couvertur existe
                        a=a+25;
                        etap4.style.color="#00ea13"
                        etap4.style.fontWeight="500"

                    } else {
                        etap4.style.color="red"
                        etap4.style.fontWeight="500"
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
                    
                    partagerphotoPbtn.addEventListener('click', async function() {
                        originalprofile.style.display = "none";
                        loaderprofile.style.display = "block";
                        loaderprofile.style.color="white";
                    
                        if (file) {
                            try {
                                // Upload des images dans le stockage Firebase
                                const storageRef1 = ref(storage, 'images/' + file.name);
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
                                const storageRef2 = ref(storage, 'images/' + file1.name);
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

                    if (imguser==="") { // Vérification si imguser existe
                        photoprofile.src = "img/ferticonnectiLogoGreen.png";
                    } else {
                        photoprofile.src = imguser;
                    }
                    if (imgcouvertureuser==="") { // Vérification si couvertur existe
                        photocouverture.src = "img/ferticonnectiLogoWhite.png";
                    } else {
                        photocouverture.src = imgcouvertureuser;
                    }
                    abonnerbutton.style.display="flex";
                    messagebutton.style.display="flex";
                    infobtn.style.display="none";
                    compeleleprofile.style.display="none";
                }
            } 
        }catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error);
        }

    } else {
        console.log("---------");

    }
});

// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const useridclick = urlParams.get('useridclick');
const typeuserclick = urlParams.get('typeuserclick');



// Recharge la page actuelle
function refreshPage() {
    window.location.reload(); 
}







