
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,sendPasswordResetEmail,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc,addDoc,updateDoc,getDoc ,setDoc, query,serverTimestamp, where , collection, getDocs} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlAbn2DAuE4kSVDtsNgdttwDeBT78YmL8",
    authDomain: "ferticonnect.firebaseapp.com",
    projectId: "ferticonnect",
    storageBucket: "ferticonnect.appspot.com",
    messagingSenderId: "1061809723490",
    appId: "1:1061809723490:web:307b939a9e256dcc21593b",
    measurementId: "G-XZT8HYB0DT"
  };
// Initialiser Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);



const annulerFormulaire = document.getElementById("annulerFormulaire");
const nextStep0 = document.getElementById("nextStep0");
const prevStep1 = document.getElementById("prevStep1");
const nextStep1 = document.getElementById("nextStep1");
const prevStep2 = document.getElementById("prevStep2");
const nextStep2 = document.getElementById("nextStep2");
const prevStep3 = document.getElementById("prevStep3");
const soumettreFormulaire = document.getElementById("SoumettreFormulaire");

const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const userformulaireid = urlParams.get('userformulaireid');
const typeuserformulaire = urlParams.get('typeuserformulaire');

let currentStep = 1;

function showStep(step) {
  document.querySelectorAll('.step').forEach((el, index) => {
    el.classList.remove('active');
    if (index + 1 === step) {
      el.classList.add('active');
    }
  });
}

function nextStep() {
  currentStep++;
  showStep(currentStep);
  scrollToTop();

}

function prevStep() {
  currentStep--;
  showStep(currentStep);
  scrollToTop();



}


annulerFormulaire.onclick = annuler_Formulaire;
function annuler_Formulaire(){
    window.location.replace(`ferticonnectmedecin-home.html?typeuserclick=${typeuserformulaire}`);

}

//nextStep
nextStep0.onclick = nextStep_0;
function nextStep_0(){
    nextStep();
    recuperelesdonnees1();

}

nextStep1.onclick = nextStep_1;
function nextStep_1(){
    const partenaire = document.getElementById("partenaire");
    partenaire.addEventListener("input",async function() {
        const docRef = doc(db, "patient", partenaire.value);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const datauser = docSnap.data();
                const prenom = datauser.prenom;
                const nomdupartenaire = document.getElementById("nomdupartenaire");
                nomdupartenaire.innerHTML= prenom + " ****** ";
                nomdupartenaire.style.fontSize="1.4rem";
            }
            else{
                const nomdupartenaire = document.getElementById("nomdupartenaire");
                nomdupartenaire.value = "Aucun résultat trouvé";
            }
        }catch(error){
            console.error(error);
        }

    });
    const requiredFields = document.querySelectorAll('#step1 [required]');
    let allFieldsValid = true;
    requiredFields.forEach(field => {
        if (!field.value && !field.disabled) {
            scrollToBottom();
            message1.innerHTML = `Veuillez remplir le champ: ${field.previousElementSibling.textContent}`;
            allFieldsValid = false;
        }
    });
    if (allFieldsValid) {

        recuperelesdonnees2();

        summetreLeFormulaire_Step();
        nextStep();
        message1.innerHTML = "";
  
    }
}




nextStep2.onclick = nextStep_2;
function nextStep_2(){
    const requiredFields = document.querySelectorAll('#step2 [required]');
    let allFieldsValid = true;
    requiredFields.forEach(field => {
        if (!field.value && !field.disabled){
            scrollToBottom();
            message2.innerHTML=`Veuillez remplir le champ: ${field.previousElementSibling.textContent}`;
            allFieldsValid = false;
        }
    });
    if (allFieldsValid) {
        recuperelesdonnees3();

        summetreLeFormulaire_Stap2();
        nextStep();
        message2.innerHTML="";
    }
}

soumettreFormulaire.onclick = soumettre_Formulaire;
function soumettre_Formulaire(){
    const requiredFields = document.querySelectorAll('#step3 [required]');
    let allFieldsValid = true;
    requiredFields.forEach(field => {
        if (!field.value) {
            scrollToBottom();
            message3.innerHTML=`Veuillez remplir le champ: ${field.previousElementSibling.textContent}`;
            allFieldsValid = false;
        }
    });
    if (allFieldsValid) {
        summetreLeFormulaire_Stap3();
        alert('Formulaire soumis avec succès!');
        message3.innerHTML="";
    }
}


//prevStep
prevStep1.onclick = prevStep_1;
function prevStep_1(){
    prevStep();
    message1.innerHTML="";

}
prevStep2.onclick = prevStep_2;
function prevStep_2(){
    recuperelesdonnees2();
    prevStep();
    message2.innerHTML="";
}
prevStep3.onclick = prevStep_3;
function prevStep_3(){
    recuperelesdonnees3()
    prevStep();
    message2.innerHTML="";

}








function scrollToTop() {
    // Utilise la méthode smooth pour un défilement fluide
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollToBottom() {
    // Utilise la méthode smooth pour un défilement fluide
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}


document.getElementById('maritalStatus').addEventListener('change', function() {

    if (maritalStatus.value === 'single') {
        children.disabled = true;
        moreChildren.disabled = true;
        partenaire.disabled = true;
    } else {
        console.log('Option sélectionnée :', this.value);
    }
});



    async function recuperelesdonnees1() {
        const docRef = doc(db, typeuserformulaire, userformulaireid);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const datauser = docSnap.data();
                const formulaire_liste1 = datauser.formulaire_liste1;
                console.log("formulaire_liste1 =", formulaire_liste1);
                if (formulaire_liste1.age) {
                    document.getElementById("age").value = formulaire_liste1.age;
                }
                
                if (formulaire_liste1.dateOfBirth) {
                    document.getElementById("dob").value = formulaire_liste1.dateOfBirth;
                }
                
                if (formulaire_liste1.gender) {
                    document.getElementById("gender").value = formulaire_liste1.gender;
                }
                
                if (formulaire_liste1.address) {
                    document.getElementById("address").value = formulaire_liste1.address;
                }
                
                if (formulaire_liste1.phoneNumber) {
                    document.getElementById("phoneNumber").value = formulaire_liste1.phoneNumber;
                }
                
            }
        } catch (error) {
            console.error(error);
        }
    }
    async function recuperelesdonnees2() {
        const docRef = doc(db, typeuserformulaire, userformulaireid);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const datauser = docSnap.data();
                const formulaire_liste2 = datauser.formulaire_liste2;
                console.log("formulaire_liste2 =", formulaire_liste2);
                if (formulaire_liste2.age) {
                    document.getElementById("age").value = formulaire_liste2.age;
                }
                
                if (formulaire_liste2.maritalStatus) {
                    document.getElementById("maritalStatus").value = formulaire_liste2.maritalStatus;
                }
                
                if (formulaire_liste2.children) {
                    document.getElementById("children").value = formulaire_liste2.children;
                }
                
                if (formulaire_liste2.moreChildren) {
                    document.getElementById("moreChildren").value =  formulaire_liste2.moreChildren;
                }
                
                if (formulaire_liste2.partenaire) {
                    const partenaireinpt=document.getElementById("partenaire");
                    partenaireinpt.value = formulaire_liste2.partenaire;

                    const docRef = doc(db, "patient", partenaireinpt.value);
                    try {
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            const datauser = docSnap.data();
                            const prenom = datauser.prenom;
                            const nomdupartenaire = document.getElementById("nomdupartenaire");
                            nomdupartenaire.innerHTML= prenom + " ****** ";
                            nomdupartenaire.style.fontSize="1.4rem";
                        }
                        else{
                            const nomdupartenaire = document.getElementById("nomdupartenaire");
                            nomdupartenaire.value = "Aucun résultat trouvé";
                        }
                    }catch(error){
                        console.error(error);
                    }

                }
                
                if (formulaire_liste2.medicalHistory) {
                    document.getElementById("medicalHistory").value = formulaire_liste2.medicalHistory;
                }
                
                if (formulaire_liste2.allergies) {
                    document.getElementById("allergies").value = formulaire_liste2.allergies;
                }
                
                if (formulaire_liste2.medications) {
                    document.getElementById("medications").value =  formulaire_liste2.medications;
                }
                
                if (formulaire_liste2.fertilityIssues) {
                    document.getElementById("fertilityIssues").value = formulaire_liste2.fertilityIssues;
                }
                
                if (formulaire_liste2.hormonalDisorders) {
                    document.getElementById("hormonalDisorders").value = formulaire_liste2.hormonalDisorders;
                }
                
            }
        } catch (error) {
            console.error(error);
        }
    }
    async function recuperelesdonnees3() {
        const docRef = doc(db, typeuserformulaire, userformulaireid);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const datauser = docSnap.data();
                const formulaire_liste3 = datauser.formulaire_liste3;
                console.log("formulaire_liste1 =", formulaire_liste3);

                if (formulaire_liste3.stdHistory) {
                    document.getElementById("stdHistory").value = formulaire_liste3.stdHistory;
                }
                
                if (formulaire_liste3.cycleRegularity) {
                    document.getElementById("cycleRegularity").value = formulaire_liste3.cycleRegularity;
                }
                
                if (formulaire_liste3.pregnancyComplications) {
                    document.getElementById("pregnancyComplications").value = formulaire_liste3.pregnancyComplications;
                }
                
                if (formulaire_liste3.abortionTrimester) {
                    document.getElementById("abortionTrimester").value = formulaire_liste3.abortionTrimester;
                }
                
                if (formulaire_liste3.profession) {
                    document.getElementById("profession").value = formulaire_liste3.profession;
                }
                
                if (formulaire_liste3.workConditions) {
                    document.getElementById("workConditions").value = formulaire_liste3.workConditions;
                }
                
                if (formulaire_liste3.workStress) {
                    document.getElementById("workStress").value = formulaire_liste3.workStress;
                }
                
                if (formulaire_liste3.smoker) {
                    document.getElementById("smoker").value = formulaire_liste3.smoker;
                }
                
                if (formulaire_liste3.cigarettesPerDay) {
                    document.getElementById("cigarettesPerDay").value = formulaire_liste3.cigarettesPerDay;
                }
                
                if (formulaire_liste3.alcoholConsumption) {
                    document.getElementById("alcoholConsumption").value = formulaire_liste3.alcoholConsumption;
                }
                
                if (formulaire_liste3.alcoholPerWeek) {
                    document.getElementById("alcoholPerWeek").value = formulaire_liste3.alcoholPerWeek;
                }
                
                if (formulaire_liste3.cannabisConsumption) {
                    document.getElementById("cannabisConsumption").value = formulaire_liste3.cannabisConsumption;
                }
                
                if (formulaire_liste3.cannabisPerWeek) {
                    document.getElementById("cannabisPerWeek").value = formulaire_liste3.cannabisPerWeek;
                }
                
                if (formulaire_liste3.physicalActivity) {
                    document.getElementById("physicalActivity").value = formulaire_liste3.physicalActivity;
                }
                
                if (formulaire_liste3.activityDetails) {
                    document.getElementById("activityDetails").value = formulaire_liste3.activityDetails;
                }
                
                if (formulaire_liste3.healthGoals) {
                    document.getElementById("healthGoals").value = formulaire_liste3.healthGoals;
                }
                
                if (formulaire_liste3.platformExpectations) {
                    document.getElementById("platformExpectations").value = formulaire_liste3.platformExpectations;
                }
                
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    async function summetreLeFormulaire_Step(){
        // Step 1
        const dateOfBirth = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("address").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        // Step 1
        await updateDoc(doc(db, typeuserformulaire, userformulaireid), {
            formulaire_liste1: {
                dateOfBirth: dateOfBirth,
                gender: gender,
                address: address,
                phoneNumber: phoneNumber
            }
        });
    }
    async function summetreLeFormulaire_Stap2(){
       // Step 2
       const age = document.getElementById("age").value;
       const maritalStatus = document.getElementById("maritalStatus").value;
       const children = document.getElementById("children").value;
       const moreChildren = document.getElementById("moreChildren").value;
       const partenaire = document.getElementById("partenaire").value;
       const medicalHistory = document.getElementById("medicalHistory").value;
       const allergies = document.getElementById("allergies").value;
       const medications = document.getElementById("medications").value;
       const fertilityIssues = document.getElementById("fertilityIssues").value;
       const hormonalDisorders = document.getElementById("hormonalDisorders").value;
        // Step 2
       await updateDoc(doc(db, typeuserformulaire, userformulaireid), {
           formulaire_liste2: {
               age: age,
               maritalStatus: maritalStatus,
               children: children,
               moreChildren: moreChildren,
               partenaire: partenaire,
               medicalHistory: medicalHistory,
               allergies: allergies,
               medications: medications,
               fertilityIssues: fertilityIssues,
               hormonalDisorders: hormonalDisorders
           },
       });

       await updateDoc(doc(db, typeuserformulaire, partenaire), {
            partenaire: userformulaireid,
       });
    
       

    }
    async function summetreLeFormulaire_Stap3(){
                 // Step 3
         const stdHistory = document.getElementById("stdHistory").value;
         const cycleRegularity = document.getElementById("cycleRegularity").value;
         const pregnancyComplications = document.getElementById("pregnancyComplications").value;
         const abortionTrimester = document.getElementById("abortionTrimester").value;
         const profession = document.getElementById("profession").value;
         const workConditions = document.getElementById("workConditions").value;
         const workStress = document.getElementById("workStress").value;
         const smoker = document.getElementById("smoker").value;
         const cigarettesPerDay = document.getElementById("cigarettesPerDay").value;
         const alcoholConsumption = document.getElementById("alcoholConsumption").value;
         const alcoholPerWeek = document.getElementById("alcoholPerWeek").value;
         const cannabisConsumption = document.getElementById("cannabisConsumption").value;
         const cannabisPerWeek = document.getElementById("cannabisPerWeek").value;
         const physicalActivity = document.getElementById("physicalActivity").value;
         const activityDetails = document.getElementById("activityDetails").value;
         const healthGoals = document.getElementById("healthGoals").value;
         const platformExpectations = document.getElementById("platformExpectations").value;

        // Step 3
        await updateDoc(doc(db, typeuserformulaire, userformulaireid), {
            formulaire_liste3: {
                stdHistory: stdHistory,
                cycleRegularity: cycleRegularity,
                pregnancyComplications: pregnancyComplications,
                abortionTrimester: abortionTrimester,
                profession: profession,
                workConditions: workConditions,
                workStress: workStress,
                smoker: smoker,
                cigarettesPerDay: cigarettesPerDay,
                alcoholConsumption: alcoholConsumption,
                alcoholPerWeek: alcoholPerWeek,
                cannabisConsumption: cannabisConsumption,
                cannabisPerWeek: cannabisPerWeek,
                physicalActivity: physicalActivity,
                activityDetails: activityDetails,
                healthGoals: healthGoals,
                platformExpectations: platformExpectations
            },
            formulaire:"remplir",
        
        });
        
    }



    








