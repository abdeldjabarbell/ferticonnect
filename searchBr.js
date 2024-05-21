import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

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

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userId = user.uid;
        console.log(userId);
        const userRef = doc(db, typeuserclick, userId);
        const docSnapshot = await getDoc(userRef);
        const lang = docSnapshot.data().lang;
    }
});



let medecins = [];
// Fonction pour récupérer les médecins
async function recuperemedcin() {
  try {
    const querySnapshot = await getDocs(collection(db, 'medecin'));
    const toutlemedecinbackground = document.getElementById("toutlemedecinbackground");

    querySnapshot.forEach((doc) => {
      const datauser = doc.data();
      const iduserclick = doc.id;
      const nameuser = datauser.nom;
      const prenameuser = datauser.prenom;
      const imguser = datauser.imguser;
      const type_user = datauser.typeOfUser;

      const cabinfoss = document.createElement('div');
      cabinfoss.className = "cabinfoss";

      const mescabins_image = document.createElement('div');
      mescabins_image.className = "mescabins_image";

      const mescabins_image_img = document.createElement('img');
      mescabins_image_img.src = imguser || "img/ferticonnectiLogoWhite.svg";

      const mescabins_name = document.createElement('div');
      mescabins_name.className = "mescabins_name";

      const mescabins_nameh1 = document.createElement('h1');
      mescabins_nameh1.textContent = `${prenameuser} ${nameuser}`;

      mescabins_image.appendChild(mescabins_image_img);
      cabinfoss.appendChild(mescabins_image);
      mescabins_name.appendChild(mescabins_nameh1);
      cabinfoss.appendChild(mescabins_name);
      toutlemedecinbackground.appendChild(cabinfoss);

      cabinfoss.addEventListener('click', () => {
        afficherResultatRecherche(iduserclick, type_user);
      });

      // Ajouter les médecins au tableau pour la recherche
      medecins.push({
        id: iduserclick,
        nom: nameuser,
        prenom: prenameuser,
        img: imguser,
        type: type_user
      });
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des médecins : ", error);
  }
}

// Fonction pour afficher les résultats de la recherche
function afficherResultatRecherche(iduserclick, type_user) {
  window.location.href = `ferticonnectmedecin-profilepage.html?useridclick=${iduserclick}&typeuserclick=${type_user}&typeOfUser=${typeuserauth}`;
}

function afficherSuggestions() {
    const searchBar = document.getElementById('search-bar');
    const suggeBackground = document.querySelector('.suggebackground');

    // Nettoyer les suggestions précédentes
    suggeBackground.innerHTML = '';

    const query = searchBar.value.toLowerCase();

    let suggestionsDisplayed = 0; // Variable de comptage des suggestions affichées

    medecins.forEach((medecin) => {
        const fullName = `${medecin.prenom} ${medecin.nom}`.toLowerCase();
        if (fullName.includes(query) && suggestionsDisplayed < 5) { // Vérifier le nombre de suggestions affichées
            const suggestion = document.createElement('div');
            suggestion.className = 'cabinfoss';

            const mescabins_image = document.createElement('div');
            mescabins_image.className = "mescabins_image";

            const mescabins_image_img = document.createElement('img');
            mescabins_image_img.src = medecin.img || "img/ferticonnectiLogoWhite.svg";

            const mescabins_name = document.createElement('div');
            mescabins_name.className = "mescabins_name";

            const mescabins_nameh1 = document.createElement('h1');
            mescabins_nameh1.textContent = fullName;

            mescabins_image.appendChild(mescabins_image_img);
            suggestion.appendChild(mescabins_image);
            mescabins_name.appendChild(mescabins_nameh1);
            suggestion.appendChild(mescabins_name);
            suggeBackground.appendChild(suggestion);

            suggestion.addEventListener('click', () => {
                afficherResultatRecherche(medecin.id, medecin.type);
            });

            suggestionsDisplayed++; // Incrémenter le nombre de suggestions affichées
        }
    });
}


// Ajouter un écouteur d'événements pour la barre de recherche
document.getElementById('search-bar').addEventListener('input', afficherSuggestions);

// Appeler la fonction pour récupérer les médecins lors du chargement de la page
document.addEventListener('DOMContentLoaded', recuperemedcin);




const returntohomepage = document.getElementById("returntohomepage");
returntohomepage.addEventListener('click', () => {
    window.location.href = `ferticonnectmedecin-home.html?typeuserclick=${typeuserauth}`; // Redirection vers la page du produit avec l'ID du produit
});




// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const typeuserauth = urlParams.get('typeuserauth');
 