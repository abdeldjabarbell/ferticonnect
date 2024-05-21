import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, collection, getDocs ,doc,getDoc} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
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
        const userRef = doc(db, typeuserauth, userId);
        const docSnapshot = await getDoc(userRef);
        const lang = docSnapshot.data().lang;

        const ferticonnect_name_text = document.getElementById("ferticonnect_name_text");
        const chercherici = document.getElementById("chercherici");
        const nomdemedcin = document.getElementById("nomdemedcin");
        const searchbar = document.getElementById("search-bar");
        const toutlesmedecinh1 = document.getElementById("toutlesmedecinh1");
        const toutlesmedcinp = document.getElementById("toutlesmedcinp");
        
        if (lang === "Français") {
            ferticonnect_name_text.innerHTML = "FertiConnect";
            chercherici.innerHTML = "Chercher un médecin";
            nomdemedcin.innerHTML = "Écrire le nom du médecin et il s'affichera ici dans les suggestions. Choisissez-en un.";
            searchbar.innerHTML = "Rechercher un médecin...";
            toutlesmedecinh1.innerHTML = "Tous les médecins sur FertiConnect";
            toutlesmedcinp.innerHTML = "Voici tous les médecins sur FertiConnect. Vous pouvez voir ici tous les médecins enregistrés sur notre plateforme.";
        } else if (lang === "Anglais") {
            ferticonnect_name_text.innerHTML = "FertiConnect";
            chercherici.innerHTML = "Search for a doctor";
            nomdemedcin.innerHTML = "Type the doctor's name and it will appear here in the suggestions. Choose one.";
            searchbar.placeholder = "Search for a doctor...";
            toutlesmedecinh1.innerHTML = "All doctors on FertiConnect";
            toutlesmedcinp.innerHTML = "Here are all the doctors on FertiConnect. You can see all the registered doctors on our platform here.";
        } else if (lang === "Espagnol") {
            ferticonnect_name_text.innerHTML = "ConexiónFértil";
            chercherici.innerHTML = "Buscar un médico";
            nomdemedcin.innerHTML = "Escriba el nombre del médico y aparecerá aquí en las sugerencias. Elija uno.";
            searchbar.placeholder = "Buscar un médico...";
            toutlesmedecinh1.innerHTML = "Todos los médicos en ConexiónFértil";
            toutlesmedcinp.innerHTML = "Aquí están todos los médicos en ConexiónFértil. Puede ver todos los médicos registrados en nuestra plataforma aquí.";
        } else if (lang === "Arabe") {
            ferticonnect_name_text.innerHTML = "فرتي كونكت";
            chercherici.innerHTML = "ابحث عن طبيب";
            nomdemedcin.innerHTML = "اكتب اسم الطبيب وسيظهر هنا في الاقتراحات. اختر واحدا.";
            searchbar.placeholder = "ابحث عن طبيب...";
            toutlesmedecinh1.innerHTML = "جميع الأطباء على فرتي كونكت";
            toutlesmedcinp.innerHTML = "هنا جميع الأطباء على فرتي كونكت. يمكنك هنا رؤية جميع الأطباء المسجلين على منصتنا.";
        } else if (lang === "Portugais") {
            ferticonnect_name_text.innerHTML = "ConexãoFértil";
            chercherici.innerHTML = "Procurar um médico";
            nomdemedcin.innerHTML = "Digite o nome do médico e ele aparecerá aqui nas sugestões. Escolha um.";
            searchbar.placeholder = "Procurar um médico...";
            toutlesmedecinh1.innerHTML = "Todos os médicos na ConexãoFértil";
            toutlesmedcinp.innerHTML = "Aqui estão todos os médicos na ConexãoFértil. Você pode ver todos os médicos registrados em nossa plataforma aqui.";
        } else if (lang === "Allemand") {
            ferticonnect_name_text.innerHTML = "FertiVerbindung";
            chercherici.innerHTML = "Einen Arzt suchen";
            nomdemedcin.innerHTML = "Geben Sie den Namen des Arztes ein und er wird hier in den Vorschlägen angezeigt. Wählen Sie einen aus.";
            searchbar.placeholder = "Einen Arzt suchen...";
            toutlesmedecinh1.innerHTML = "Alle Ärzte auf FertiVerbindung";
            toutlesmedcinp.innerHTML = "Hier sind alle Ärzte auf FertiVerbindung. Hier können Sie alle auf unserer Plattform registrierten Ärzte sehen.";
        }
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

    // Si la barre de recherche est vide, ne rien afficher
    if (query === '') {
        return;
    }

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
 