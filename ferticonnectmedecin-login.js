
// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const typeOfUser = urlParams.get('typeOfUser');
const selectedLanguage = urlParams.get('selectedLanguage');


const titreindex = document.getElementById("titreindex");
const pat = document.getElementById("pat");
const med = document.getElementById("med");
if(typeOfUser === "medecin"){
    pat.style.display="none"
    med.style.display="flex"
    titreindex.innerHTML="#Médecin"
}else{
    pat.style.display="flex"
    med.style.display="none"
    if (selectedLanguage === "fr") {
        titreindex.innerHTML = "Bienvenue";
    } else if (selectedLanguage === "en") {
        titreindex.innerHTML = "Welcome";
    } else if (selectedLanguage === "es") {
        titreindex.innerHTML = "Bienvenido";
    } else if (selectedLanguage === "ar") {
        titreindex.innerHTML = "أهلا بك";
    } else if (selectedLanguage === "pt") {
        titreindex.innerHTML = "Bem-vindo";
    }
    
}


if (window.innerWidth <= 600) {
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
    
}

const retourne = document.getElementById("retourne");

retourne.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.replace("index.html");

});

   
 
 //buttons
 const connecter = document.getElementById("connecter");
 const recupereMDP = document.getElementById("recupereMDP");
 const creeCompte = document.getElementById("creeCompte");
 const anuulerRecuperation = document.getElementById("anuulerRecuperation");
 // pages 
 const login_bg = document.getElementById("login_bg");
 const register_bg = document.getElementById("register_bg");
 const recuperation_bg = document.getElementById("recuperation_bg");
 


 
 connecter.addEventListener("click", async (e) => {
    e.preventDefault();
    login_bg.style.display = "flex";
    register_bg.style.display = "none";
    recuperation_bg.style.display = "none";
});
recupereMDP.addEventListener("click", async (e) => {
    e.preventDefault();
    login_bg.style.display = "none";
    register_bg.style.display = "none";
    recuperation_bg.style.display = "flex";
});
creeCompte.addEventListener("click", async (e) => {
    e.preventDefault();
    login_bg.style.display = "none";
    register_bg.style.display = "flex";
    recuperation_bg.style.display = "none";
});
anuulerRecuperation.addEventListener("click", async (e) => {
    e.preventDefault();
    login_bg.style.display = "flex";
    register_bg.style.display = "none";
    recuperation_bg.style.display = "none";
});
const message_firebase_recuperation = document.getElementById("message_firebase_recuperation");
const message_firebase_register = document.getElementById("message_firebase_register");
const message_firebase_login = document.getElementById("message_firebase_login");

const original = document.getElementById("original");
const loader = document.getElementById("loader");
const Done = document.getElementById("Done");

const original1 = document.getElementById("original1");
const loader1 = document.getElementById("loader1");
const Done1 = document.getElementById("Done1");

const original2 = document.getElementById("original2");
const loader2 = document.getElementById("loader2");
const Done2 = document.getElementById("Done2");


const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const recuperationForm = document.getElementById("recuperationForm");

const wating = document.getElementById("wating");

//---------------------------------------------- language


const text1 = document.getElementById("text1");
if (selectedLanguage === "fr") {
    message_firebase_register.innerHTML = "Bienvenue sur";
} else if (selectedLanguage === "en") {
    message_firebase_register.innerHTML = "Registration successful!";
} else if (selectedLanguage === "es") {
    message_firebase_register.innerHTML = "¡Registro exitoso!";
} else if (selectedLanguage === "ar") {
    message_firebase_register.innerHTML = "التسجيل ناجح!";
} else if (selectedLanguage === "pt") {
    message_firebase_register.innerHTML = "Inscrição bem-sucedida!";
}
const text2 = document.getElementById("text2");
if (selectedLanguage === "fr") {
    text2.innerHTML = "FertiConnect";
} else if (selectedLanguage === "en") {
    text2.innerHTML = "FertiConnect";
} else if (selectedLanguage === "es") {
    text2.innerHTML = "FertiConnect";
} else if (selectedLanguage === "ar") {
    text2.innerHTML = "فيرتيكونيكت";
} else if (selectedLanguage === "pt") {
    text2.innerHTML = "FertiConnect";
}
const p_image_L_R = document.getElementById("p_image_L_R");
if (selectedLanguage === "fr") {
    p_image_L_R.innerHTML = "Connectez-vous avec votre compte";
} else if (selectedLanguage === "en") {
    p_image_L_R.innerHTML = "Log in with your account";
} else if (selectedLanguage === "es") {
    p_image_L_R.innerHTML = "Inicie sesión con su cuenta";
} else if (selectedLanguage === "ar") {
    p_image_L_R.innerHTML = "قم بتسجيل الدخول باستخدام حسابك";
} else if (selectedLanguage === "pt") {
    p_image_L_R.innerHTML = "Faça login com sua conta";
}

const text3 = document.getElementById("text3");
if (selectedLanguage === "fr") {
    text3.innerHTML = "Connectez-vous";
} else if (selectedLanguage === "en") {
    text3.innerHTML = "Log in";
} else if (selectedLanguage === "es") {
    text3.innerHTML = "Iniciar sesión";
} else if (selectedLanguage === "ar") {
    text3.innerHTML = "تسجيل الدخول";
} else if (selectedLanguage === "pt") {
    text3.innerHTML = "Entrar";
}
const text4 = document.getElementById("text4");
if (selectedLanguage === "fr") {
    text4.innerHTML = "Bienvenue dans votre espace FertiConnect";
} else if (selectedLanguage === "en") {
    text4.innerHTML = "Welcome to your FertiConnect space";
} else if (selectedLanguage === "es") {
    text4.innerHTML = "Bienvenido a su espacio FertiConnect";
} else if (selectedLanguage === "ar") {
    text4.innerHTML = "مرحبًا بك في مساحتك فيرتيكونيكت";
} else if (selectedLanguage === "pt") {
    text4.innerHTML = "Bem-vindo ao seu espaço FertiConnect";
}


// Définition du contenu pour text0
const text0 = document.getElementById("text0");
if (selectedLanguage === "fr") {
    text0.innerHTML = "Email";
} else if (selectedLanguage === "en") {
    text0.innerHTML = "Email";
} else if (selectedLanguage === "es") {
    text0.innerHTML = "Correo electrónico";
} else if (selectedLanguage === "ar") {
    text0.innerHTML = "البريد الإلكتروني";
} else if (selectedLanguage === "pt") {
    text0.innerHTML = "Email";
}

// Définition du contenu pour text5
const text5 = document.getElementById("text5");
if (selectedLanguage === "fr") {
    text5.innerHTML = "Mot de passe:";
} else if (selectedLanguage === "en") {
    text5.innerHTML = "Password:";
} else if (selectedLanguage === "es") {
    text5.innerHTML = "Contraseña:";
} else if (selectedLanguage === "ar") {
    text5.innerHTML = "كلمة المرور:";
} else if (selectedLanguage === "pt") {
    text5.innerHTML = "Senha:";
}

// Définition du contenu pour text6
const text6 = document.getElementById("text6");
if (selectedLanguage === "fr") {
    text6.innerHTML = "Se Connecter";
} else if (selectedLanguage === "en") {
    text6.innerHTML = "Log in";
} else if (selectedLanguage === "es") {
    text6.innerHTML = "Iniciar sesión";
} else if (selectedLanguage === "ar") {
    text6.innerHTML = "تسجيل الدخول";
} else if (selectedLanguage === "pt") {
    text6.innerHTML = "Entrar";
}

// Définition du contenu pour text7
const text7 = document.getElementById("text7");
if (selectedLanguage === "fr") {
    text7.innerHTML = "terminée";
} else if (selectedLanguage === "en") {
    text7.innerHTML = "completed";
} else if (selectedLanguage === "es") {
    text7.innerHTML = "terminado";
} else if (selectedLanguage === "ar") {
    text7.innerHTML = "مكتمل";
} else if (selectedLanguage === "pt") {
    text7.innerHTML = "completado";
}

// Définition du contenu pour text8
const text8 = document.getElementById("text8");
if (selectedLanguage === "fr") {
    text8.innerHTML = "J'ai oublié mon mot de passe, <a href='#' id='recupereMDP'></a> ";
} else if (selectedLanguage === "en") {
    text8.innerHTML = "I forgot my password, <a href='#' id='recupereMDP'></a> ";
} else if (selectedLanguage === "es") {
    text8.innerHTML = "Olvidé mi contraseña, <a href='#' id='recupereMDP'></a> ";
} else if (selectedLanguage === "ar") {
    text8.innerHTML = "لقد نسيت كلمة المرور الخاصة بي، <a href='#' id='recupereMDP'></a> ";
} else if (selectedLanguage === "pt") {
    text8.innerHTML = "Esqueci minha senha, <a href='#' id='recupereMDP'></a> ";
}

const text9 = document.getElementById("text9");
if (selectedLanguage === "fr") {
    text9.innerHTML = "Je n'ai pas de compte, <a href='#' id='creeCompte'></a>";
} else if (selectedLanguage === "en") {
    text9.innerHTML = "I don't have an account, <a href='#' id='creeCompte'></a>";
} else if (selectedLanguage === "es") {
    text9.innerHTML = "No tengo una cuenta, <a href='#' id='creeCompte'></a>";
} else if (selectedLanguage === "ar") {
    text9.innerHTML = "ليس لدي حساب، <a href='#' id='creeCompte'></a>";
} else if (selectedLanguage === "pt") {
    text9.innerHTML = "Eu não tenho uma conta, <a href='#' id='creeCompte'></a>";
}

const text10 = document.getElementById("text10");
if (selectedLanguage === "fr") {
    text10.innerHTML = "S'inscrire";
} else if (selectedLanguage === "en") {
    text10.innerHTML = "Sign up";
} else if (selectedLanguage === "es") {
    text10.innerHTML = "Regístrate";
} else if (selectedLanguage === "ar") {
    text10.innerHTML = "اشترك";
} else if (selectedLanguage === "pt") {
    text10.innerHTML = "Inscrever-se";
}


// Définition du contenu pour text11
const text11 = document.getElementById("text11");
if (selectedLanguage === "fr") {
    text11.innerHTML = "Bienvenue dans votre espace FertiConnect";
} else if (selectedLanguage === "en") {
    text11.innerHTML = "Welcome to your FertiConnect space";
} else if (selectedLanguage === "es") {
    text11.innerHTML = "Bienvenido a su espacio FertiConnect";
} else if (selectedLanguage === "ar") {
    text11.innerHTML = "مرحبًا بك في مساحتك FertiConnect";
} else if (selectedLanguage === "pt") {
    text11.innerHTML = "Bem-vindo ao seu espaço FertiConnect";
}

// Définition du contenu pour text12
const text12 = document.getElementById("text12");
if (selectedLanguage === "fr") {
    text12.innerHTML = "Nom:";
} else if (selectedLanguage === "en") {
    text12.innerHTML = "Name:";
} else if (selectedLanguage === "es") {
    text12.innerHTML = "Nombre:";
} else if (selectedLanguage === "ar") {
    text12.innerHTML = "الاسم:";
} else if (selectedLanguage === "pt") {
    text12.innerHTML = "Nome:";
}

// Définition du contenu pour text13
const text13 = document.getElementById("text13");
if (selectedLanguage === "fr") {
    text13.innerHTML = "Prénom:";
} else if (selectedLanguage === "en") {
    text13.innerHTML = "First Name:";
} else if (selectedLanguage === "es") {
    text13.innerHTML = "Nombre de pila:";
} else if (selectedLanguage === "ar") {
    text13.innerHTML = "الاسم الأول:";
} else if (selectedLanguage === "pt") {
    text13.innerHTML = "Primeiro Nome:";
}

// Définition du contenu pour text14
const text14 = document.getElementById("text14");
if (selectedLanguage === "fr") {
    text14.innerHTML = "Email:";
} else if (selectedLanguage === "en") {
    text14.innerHTML = "Email:";
} else if (selectedLanguage === "es") {
    text14.innerHTML = "Correo electrónico:";
} else if (selectedLanguage === "ar") {
    text14.innerHTML = "البريد الإلكتروني:";
} else if (selectedLanguage === "pt") {
    text14.innerHTML = "Email:";
}

// Définition du contenu pour text15
const text15 = document.getElementById("text15");
if (selectedLanguage === "fr") {
    text15.innerHTML = "Mot de passe:";
} else if (selectedLanguage === "en") {
    text15.innerHTML = "Password:";
} else if (selectedLanguage === "es") {
    text15.innerHTML = "Contraseña:";
} else if (selectedLanguage === "ar") {
    text15.innerHTML = "كلمة المرور:";
} else if (selectedLanguage === "pt") {
    text15.innerHTML = "Senha:";
}

// Définition du contenu pour text16
const text16 = document.getElementById("text16");
if (selectedLanguage === "fr") {
    text16.innerHTML = "S'inscrire";
} else if (selectedLanguage === "en") {
    text16.innerHTML = "Sign up";
} else if (selectedLanguage === "es") {
    text16.innerHTML = "Registrarse";
} else if (selectedLanguage === "ar") {
    text16.innerHTML = "سجل";
} else if (selectedLanguage === "pt") {
    text16.innerHTML = "Inscrever-se";
}

// Définition du contenu pour text17
const text17 = document.getElementById("text17");
if (selectedLanguage === "fr") {
    text17.innerHTML = "terminée";
} else if (selectedLanguage === "en") {
    text17.innerHTML = "completed";
} else if (selectedLanguage === "es") {
    text17.innerHTML = "terminado";
} else if (selectedLanguage === "ar") {
    text17.innerHTML = "مكتمل";
} else if (selectedLanguage === "pt") {
    text17.innerHTML = "completado";
}

// Définition du contenu pour text18
const text18 = document.getElementById("text18");
if (selectedLanguage === "fr") {
    text18.innerHTML = "J'ai un compte, <a href='#' id='connecter'></a>";
} else if (selectedLanguage === "en") {
    text18.innerHTML = "I have an account, <a href='#' id='connecter'></a>";
} else if (selectedLanguage === "es") {
    text18.innerHTML = "Tengo una cuenta, <a href='#' id='connecter'></a>";
} else if (selectedLanguage === "ar") {
    text18.innerHTML = "لدي حساب، <a href='#' id='connecter'></a>";
} else if (selectedLanguage === "pt") {
    text18.innerHTML = "Eu tenho uma conta, <a href='#' id='connecter'></a>";
}

// Définition du contenu pour text19
const text19 = document.getElementById("text19");
if (selectedLanguage === "fr") {
    text19.innerHTML = "Récupération de Mot de Passe";
} else if (selectedLanguage === "en") {
    text19.innerHTML = "Password Recovery";
} else if (selectedLanguage === "es") {
    text19.innerHTML = "Recuperación de Contraseña";
} else if (selectedLanguage === "ar") {
    text19.innerHTML = "استعادة كلمة المرور";
} else if (selectedLanguage === "pt") {
    text19.innerHTML = "Recuperação de Senha";
}

// Définition du contenu pour text20
const text20 = document.getElementById("text20");
if (selectedLanguage === "fr") {
    text20.innerHTML = "Entrez votre adresse e-mail ci-dessous. Un lien de réinitialisation de mot de passe vous sera envoyé.";
} else if (selectedLanguage === "en") {
    text20.innerHTML = "Enter your email address below. A password reset link will be sent to you.";
} else if (selectedLanguage === "es") {
    text20.innerHTML = "Ingrese su dirección de correo electrónico a continuación. Se le enviará un enlace para restablecer su contraseña.";
} else if (selectedLanguage === "ar") {
    text20.innerHTML = "أدخل عنوان بريدك الإلكتروني أدناه. سيتم إرسال رابط إعادة تعيين كلمة المرور إليك.";
} else if (selectedLanguage === "pt") {
    text20.innerHTML = "Digite seu endereço de e-mail abaixo. Um link para redefinir a senha será enviado a você.";
}

// Définition du contenu pour text21
const text21 = document.getElementById("text21");
if (selectedLanguage === "fr") {
    text21.innerHTML = "Email:";
} else if (selectedLanguage === "en") {
    text21.innerHTML = "Email:";
} else if (selectedLanguage === "es") {
    text21.innerHTML = "Correo electrónico:";
} else if (selectedLanguage === "ar") {
    text21.innerHTML = "البريد الإلكتروني:";
} else if (selectedLanguage === "pt") {
    text21.innerHTML = "Email:";
}

// Définition du contenu pour text22
const text22 = document.getElementById("text22");
if (selectedLanguage === "fr") {
    text22.innerHTML = "Envoyer le lien";
} else if (selectedLanguage === "en") {
    text22.innerHTML = "Send Link";
} else if (selectedLanguage === "es") {
    text22.innerHTML = "Enviar enlace";
} else if (selectedLanguage === "ar") {
    text22.innerHTML = "إرسال الرابط";
} else if (selectedLanguage === "pt") {
    text22.innerHTML = "Enviar link";
}

// Définition du contenu pour text23
const text23 = document.getElementById("text23");
if (selectedLanguage === "fr") {
    text23.innerHTML = "terminée";
} else if (selectedLanguage === "en") {
    text23.innerHTML = "completed";
} else if (selectedLanguage === "es") {
    text23.innerHTML = "terminado";
} else if (selectedLanguage === "ar") {
    text23.innerHTML = "مكتمل";
} else if (selectedLanguage === "pt") {
    text23.innerHTML = "completado";
}

// Définition du contenu pour text24
const text24 = document.getElementById("text24");
if (selectedLanguage === "fr") {
    text24.innerHTML = "Retour à la page de <a href='#' id='anuulerRecuperation'></a>";
} else if (selectedLanguage === "en") {
    text24.innerHTML = "Return to page of <a href='#' id='anuulerRecuperation'></a>";
} else if (selectedLanguage === "es") {
    text24.innerHTML = "Volver a la página de <a href='#' id='anuulerRecuperation'></a>";
} else if (selectedLanguage === "ar") {
    text24.innerHTML = "<a href='#' id='anuulerRecuperation'></a> العودة إلى صفحة";
} else if (selectedLanguage === "pt") {
    text24.innerHTML = "Voltar para a página de <a href='#' id='anuulerRecuperation'></a>";
}





if (selectedLanguage === "fr") {
    recupereMDP.innerHTML = "Récupérer mon compte";
} else if (selectedLanguage === "en") {
    recupereMDP.innerHTML = "Recover my account";
} else if (selectedLanguage === "es") {
    recupereMDP.innerHTML = "Recuperar mi cuenta";
} else if (selectedLanguage === "ar") {
    recupereMDP.innerHTML = "استعادة حسابي";
} else if (selectedLanguage === "pt") {
    recupereMDP.innerHTML = "Recuperar minha conta";
}

 if (selectedLanguage === "fr") {
    creeCompte.innerHTML = "créez un compte";
} else if (selectedLanguage === "en") {
    creeCompte.innerHTML = "create an account";
} else if (selectedLanguage === "es") {
    creeCompte.innerHTML = "crear una cuenta";
} else if (selectedLanguage === "ar") {
    creeCompte.innerHTML = "أنشئ حسابًا";
} else if (selectedLanguage === "pt") {
    creeCompte.innerHTML = "criar uma conta";
}
 
 if (selectedLanguage === "fr") {
    connecter.innerHTML = "Connectez-vous";
} else if (selectedLanguage === "en") {
    connecter.innerHTML = "Log in";
} else if (selectedLanguage === "es") {
    connecter.innerHTML = "Iniciar sesión";
} else if (selectedLanguage === "ar") {
    connecter.innerHTML = "تسجيل الدخول";
} else if (selectedLanguage === "pt") {
    connecter.innerHTML = "Entrar";
}

 if (selectedLanguage === "fr") {
    anuulerRecuperation.innerHTML = "connexion";
} else if (selectedLanguage === "en") {
    anuulerRecuperation.innerHTML = "login";
} else if (selectedLanguage === "es") {
    anuulerRecuperation.innerHTML = "inicio de sesión";
} else if (selectedLanguage === "ar") {
    anuulerRecuperation.innerHTML = "تسجيل الدخول";
} else if (selectedLanguage === "pt") {
    anuulerRecuperation.innerHTML = "login";
}

if (selectedLanguage === "fr") {
    retourne.innerHTML = "Retour";
} else if (selectedLanguage === "en") {
    retourne.innerHTML = "Return";
} else if (selectedLanguage === "es") {
    retourne.innerHTML = "Volver";
} else if (selectedLanguage === "ar") {
    retourne.innerHTML = "العودة";
} else if (selectedLanguage === "pt") {
    retourne.innerHTML = "Voltar";
}

//---------------------------------------------- registration

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,sendPasswordResetEmail,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc,addDoc, setDoc, query,serverTimestamp, where , collection, getDocs} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

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

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    original1.style.display="none"
    loader1.style.display="block"
    signUpAndLogin(); 
});

async function signUpAndLogin() {
    try {
        // Inscription de l'utilisateur
        await signUp();
        // Connexion après l'inscription
        await loginAfterRegister();
    } catch (error) {
        console.error('Erreur lors de l\'inscription ou de la connexion :', error);
        // Gérer les erreurs d'inscription ou de connexion
    }
}



// Fonction pour s'inscrire avec email et mot de passe
async function signUp() {
    const registerNom = document.getElementById("nom_medecin").value;
    const registerPrenom = document.getElementById("registerPrenom_medecin").value;
    const registerEmail = document.getElementById("registerEmail_medecin").value;
    const registerPassword = document.getElementById("registerPassword_medecin").value;
    
    try {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 11; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ne.pas.rependre.ferticonnect@gmail.com",
            Password : "B58393493272B1AC4DFEF6455183C24DDCAB",
            To : registerEmail,
            From : 'ne.pas.rependre.ferticonnect@gmail.com',
            Subject : "Confirmation de votre compte",
            Body : 

                "Cher "+registerPrenom+" "+registerNom +",<br>"

                +"<br>Nous vous remercions de votre inscription sur notre plateforme. Pour finaliser la création de votre compte, veuillez utiliser le code de vérification suivant :"
                
                +"<br>Code de vérification : <h3>"+code+"</h3>"
                
                +"<br>Veuillez entrer ce code dans notre interface utilisateur pour confirmer votre compte. Si vous n'avez pas demandé cette procédure, vous pouvez ignorer ce message.<br>"
               
                +'<br><br>Cordialement,'
                +"<br>L'équipe de FertiConnect<br>" 

                +"<br><span style='color:red;'>Ce message a été envoyé automatiquement. Merci de ne pas y répondre.</span>",

                
            
        }).then(
            console.log('message envoiyer')
        );


        const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        // Enregistrer les données utilisateur dans Firestore
        await setDoc(doc(db, typeOfUser, userCredential.user.uid), {
            nom: registerNom,
            prenom: registerPrenom,
            email: registerEmail,
            mot_de_passe: registerPassword,
            statut_du_compte: "desactive",
            code : code,
            imguser:"",
            imgcouvertureuser:"",
            typeOfUser:typeOfUser,
            lang:"Français",
            formulaire_liste1:"",
            formulaire_liste2:"",
            formulaire_liste3:"",
            timestamp: serverTimestamp()

        });
        const docRef = await addDoc(collection(db, 'rechercheliste'), {
            idelement: userCredential.user.uid,
            nomelement: registerNom,
            typeelement:typeOfUser
        });




        // button loder
        loader1.style.display="none"
        Done1.style.display="block"
        // message
        message_firebase_register.style.color="#33ff00";
        if (selectedLanguage === "fr") {
            message_firebase_register.innerHTML = "Inscription réussie !";
        } else if (selectedLanguage === "en") {
            message_firebase_register.innerHTML = "Registration successful!";
        } else if (selectedLanguage === "es") {
            message_firebase_register.innerHTML = "¡Registro exitoso!";
        } else if (selectedLanguage === "ar") {
            message_firebase_register.innerHTML = "التسجيل ناجح!";
        } else if (selectedLanguage === "pt") {
            message_firebase_register.innerHTML = "Inscrição bem-sucedida!";
        }

        message_firebase_register.style.fontWeight="600"

        setTimeout(() => {
             // message & loder
            message_firebase_register.textContent = "";
            original1.style.display="block"
            Done1.style.display="none"
        }, 3000);

    } catch (error) {
        // Gérer les erreurs d'inscription
        message_firebase_register.style.color="red"
        message_firebase_register.innerHTML= error.message;
        message_firebase_register.style.fontWeight="600"
        original1.style.display="block"
        Done1.style.display="none"
        loader1.style.display="none"
    }
}


recuperationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    original2.style.display="none"
    loader2.style.display="block"
    envoyerEmail();
});

async function envoyerEmail() {
    const recuperationEmail = document.getElementById('recuperationEmail').value;
    try {
    await sendPasswordResetEmail(auth, recuperationEmail)
    .then(() => {
        // Email envoyé avec succès
        loader2.style.display = "none";
        Done2.style.display = "block";
        setTimeout(() => {
           original2.style.display="block"
           Done2.style.display="none"
       }, 3000);
        message_firebase_recuperation.style.color="#33ff00"
        message_firebase_recuperation.style.fontWeight="600"
        if (selectedLanguage === "fr") {
            message_firebase_recuperation.innerHTML = "Un email de récupération de mot de passe a été envoyé à " + recuperationEmail;
        } else if (selectedLanguage === "en") {
            message_firebase_recuperation.innerHTML = "A password recovery email has been sent to " + recuperationEmail;
        } else if (selectedLanguage === "es") {
            message_firebase_recuperation.innerHTML = "Se ha enviado un correo de recuperación de contraseña a " + recuperationEmail;
        } else if (selectedLanguage === "ar") {
            message_firebase_recuperation.innerHTML = recuperationEmail+ "تم إرسال بريد استرداد كلمة المرور إلى ";
        } else if (selectedLanguage === "pt") {
            message_firebase_recuperation.innerHTML = "Um email de recuperação de senha foi enviado para " + recuperationEmail;
        }
     });
    } catch (error) {
    
        loader2.style.display = "none";
        original2.style.display = "block";
        Done2.style.display = "none";

        message_firebase_recuperation.style.color="red"
        message_firebase_recuperation.style.fontWeight="600"
        message_firebase_recuperation.innerHTML= error.message;
    }
}

async function loginAfterRegister() {
    const registerEmail = document.getElementById("registerEmail_medecin").value;
    const registerPassword = document.getElementById("registerPassword_medecin").value;
    wating.style.display="flex"

    try {

        const userCredential = await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
        // Connexion réussie
        const user = userCredential.user;
        console.log('Connecté en tant que:', user.email);
        setTimeout(() => {   
            wating.style.display="none"
            console.log(typeOfUser);
            window.location.replace(`ferticonnectmedecin-home.html?typeuserclick=${typeOfUser}`);
        }, 2000);

        // Redirigez ici vers une autre page ou effectuez d'autres actions après la connexion réussie
    } catch (error) {
        // Gestion des erreurs lors de la connexion
        const errorMessage = error.message;
        console.error('Erreur de connexion:', errorMessage);
        wating.style.display="none"

        // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions en fonction de l'erreur
    }
}

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    original.style.display="none"
    loader.style.display="block"
    const loginEmail = document.getElementById("loginEmail_medecin").value;
console.log(typeOfUser);
    // Vérification si le email existe dans la collection "users"
    const q = query(collection(db, typeOfUser), where("email", "==", loginEmail));
    getDocs(q)
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                login();
            } else {
                original.style.display="block";
                loader.style.display="none";
                message_firebase_login.style.color="red";
                message_firebase_login.style.fontWeight="600";
                if (selectedLanguage === "fr") {
                    message_firebase_login.innerHTML = "Vous n'êtes pas autorisé à accéder à cette fonctionnalité.";
                } else if (selectedLanguage === "en") {
                    message_firebase_login.innerHTML = "You are not authorized to access this feature.";
                } else if (selectedLanguage === "es") {
                    message_firebase_login.innerHTML = "No está autorizado para acceder a esta función.";
                } else if (selectedLanguage === "ar") {
                    message_firebase_login.innerHTML = "غير مصرح لك بالوصول إلى هذه الميزة.";
                } else if (selectedLanguage === "pt") {
                    message_firebase_login.innerHTML = "Você não está autorizado a acessar este recurso.";
                }
                
            }
        })
        .catch((error) => {
            console.error("Erreur lors de la vérification du email :", error);
        });
    
});

async function login() {
    const loginEmail = document.getElementById("loginEmail_medecin").value;
    const loginPassword = document.getElementById("loginPassword_medecin").value;
    try {

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        // Connexion réussie
        const user = userCredential.user;
        message_firebase_login.style.color="#33ff00";
        message_firebase_login.style.fontWeight="600"

        if (selectedLanguage === "fr") {
            message_firebase_login.innerHTML = 'Connecté en tant que: ' + loginEmail;
        } else if (selectedLanguage === "en") {
            message_firebase_login.innerHTML = 'Logged in as: ' + loginEmail;
        } else if (selectedLanguage === "es") {
            message_firebase_login.innerHTML = 'Conectado como: ' + loginEmail;
        } else if (selectedLanguage === "ar") {
            message_firebase_login.innerHTML = 'تم تسجيل الؤخول بواسطة  ' + loginEmail;
        } else if (selectedLanguage === "pt") {
            message_firebase_login.innerHTML = 'Conectado como: ' + loginEmail;
        }
                loader.style.display="none"
        Done.style.display="block"
        setTimeout(() => {  
            window.location.replace(`ferticonnectmedecin-home.html?typeuserclick=${typeOfUser}`);

        }, 2000);

        // Redirigez ici vers une autre page ou effectuez d'autres actions après la connexion réussie
    } catch (error) {
        // Gestion des erreurs lors de la connexion
        message_firebase_login.style.color="red";
        message_firebase_login.style.fontWeight="600"

        message_firebase_login.innerHTML= error.message;  
        original.style.display="block"
        loader.style.display="none"

        // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions en fonction de l'erreur
    }
}




















