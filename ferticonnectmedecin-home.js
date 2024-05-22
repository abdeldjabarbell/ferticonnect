
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc, addDoc,setDoc, deleteDoc, query, orderBy, limit, where, getDocs, collection, serverTimestamp as firestoreServerTimestamp  } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage,  ref as storageRef  , uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';
import { getDatabase,  ref as databaseRef, push, onValue, serverTimestamp as databaseServerTimestamp  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js';
import { serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { PDFDocument, rgb } from 'https://cdn.skypack.dev/pdf-lib';

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
    navbarbuttom.style.bottom="0";
    
  }  
  const watingAccount = document.getElementById("wating");

  
  const shercheBtn = document.getElementById("shercheBtn");
  shercheBtn.addEventListener('click', () => {
    watingAccount.style.display = "flex";
      window.location.href = `searchBr.html?typeuserauth=${typeuserclick}`; // Redirection vers la page du produit avec l'ID du produit

  });
  const searchbtnnavvbutton = document.getElementById("searchbtnnavvbutton");
  searchbtnnavvbutton.addEventListener('click', () => {
        watingAccount.style.display = "flex";
      window.location.href = `searchBr.html?typeuserauth=${typeuserclick}`; // Redirection vers la page du produit avec l'ID du produit

  });


  //wating

  auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Récupération de l'adresse e-mail de l'utilisateur connecté
        const mail = user.email;
        const userId = user.uid;
        console.log(userId);
        const userRef = doc(db, typeuserclick, userId);
        const docSnapshot = await getDoc(userRef);
        const lang = docSnapshot.data().lang;
        const emailconfirmation = docSnapshot.data().email;
        const codeverification = docSnapshot.data().code;
        const nomverification = docSnapshot.data().nom;
        const prenomverification = docSnapshot.data().prenom;

        const resendlecode = document.getElementById("resendlecode");
        resendlecode.addEventListener('click', () => { enbyerlemail()}); 

        async function enbyerlemail(){
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "ne.pas.rependre.ferticonnect@gmail.com",
                Password : "B58393493272B1AC4DFEF6455183C24DDCAB",
                To : emailconfirmation,
                From : 'ne.pas.rependre.ferticonnect@gmail.com',
                Subject : "Confirmation de votre compte",
                Body : 
    
                    "Cher "+prenomverification+" "+nomverification +",<br>"
    
                    +"<br>Nous vous remercions de votre inscription sur notre plateforme. Pour finaliser la création de votre compte, veuillez utiliser le code de vérification suivant :"
                    
                    +"<br>Code de vérification : <h3>"+codeverification+"</h3>"
                    
                    +"<br>Veuillez entrer ce code dans notre interface utilisateur pour confirmer votre compte. Si vous n'avez pas demandé cette procédure, vous pouvez ignorer ce message.<br>"
                   
                    +'<br><br>Cordialement,'
                    +"<br>L'équipe de FertiConnect<br>" 
    
                    +"<br><span style='color:red;'>Ce message a été envoyé automatiquement. Merci de ne pas y répondre.</span>",
    
                    
                
                }).then(() => {
                    alert('message envoyé');
                    console.log('message envoyé');
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
       
        }
        

        const sendfeedback = document.getElementById("sendfeedback");
        const original10 = document.getElementById("original10");
        const loader10 = document.getElementById("loader10");
        const Done10 = document.getElementById("Done10");
        const feebackenvoyer = document.getElementById("feebackenvoyer");
        const feedbackdone = document.getElementById("feedbackdone");
        const envoyerfeedbackp = document.getElementById("envoyerfeedbackp");
        const ecrirfeedbach1 = document.getElementById("ecrirfeedbach1");

        sendfeedback.addEventListener('click', () => {
            original10.style.display="none";
            loader10.style.display="flex";

            const feedbackmessage  = document.getElementById("feedbackmessage").value;
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "ne.pas.rependre.ferticonnect@gmail.com",
                Password : "B58393493272B1AC4DFEF6455183C24DDCAB",
                To : "Ferticonnect.feedback@gmail.com",
                From : 'ne.pas.rependre.ferticonnect@gmail.com',
                Subject : "Feedback sur Ferticonnect par : "+prenomverification+' '+nomverification,
                Body : 

                   "informations de l'utilisateur :<br>"+

                    "email :  "+emailconfirmation+",<br>"+
                    "nom :  "+nomverification+",<br>"+
                    "prenom :  "+prenomverification+",<br>"+
                    "id :  "+userId+",<br>"+
 
                    "--------------------------------------<br>"
                    +"Feedback :<br><br>"

                    +feedbackmessage


                    +"<br><br>FertiConnect<br>" 
    
                    +"<br><span style='color:red;'>Ce message a été envoyé pa lutilistaeur de ferti connect. Merci de ne pas y répondre ici.</span>",

                
                }).then(() => {
                    alert('message envoyé');
                    console.log('message envoyé');
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
            
                Done10.style.display="flex";
                original10.style.display="none";
                loader10.style.display="none";
        }); 
        
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

        const amisquerySnapshot = await getDocs(query(collection(db, typeOfUser, userId, "amis")));

        if (!amisquerySnapshot.empty) {
            amisquerySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(" friends data."+data);

                const iduseramis = data.iduser;
                const typeuseramis = data.typeuser;
        
                recupereAmis(iduseramis, typeuseramis);
            });
        } else {

            const div = document.createElement("div");
            div.className="divnoamis";
            const divimg = document.createElement("img");
            divimg.className="divimg";
            divimg.src="img/undraw_coffee_with_friends_3cbj.svg";
            div.appendChild(divimg);
            mescabins_2.appendChild(div);

            const divptext = document.createElement("div");
            divptext.classList="divnoamis";
            const divptextP = document.createElement("p");
            if (lang === "Français") {
                divptextP.innerHTML = `
                    Désolé, nous ne pouvons pas afficher votre liste d'amis car vous n'avez pas encore ajouté d'amis. <br>
                    
                    - **Si vous êtes médecin**, vous pouvez ajouter n'importe qui à votre liste de contacts.<br>
                    - **Si vous n'êtes pas médecin**, vous pouvez uniquement ajouter des médecins à votre liste de contacts.<br>
                    <br>
                    Pour trouver de nouveaux amis :<br>
                    - Utilisez la barre de recherche.<br>
                    - Consultez les profils des médecins directement via les publications sur la page d'accueil.<br>
            
                    <br><br>
                    Cordialement,<br>
                    
                    L'équipe de FertiConnect<br>
                `;
            } else if (lang === "Anglais") {
                divptextP.innerHTML = `
                    Sorry, we cannot display your friends list because you have not added any friends yet. <br>
                    
                    - **If you are a doctor**, you can add anyone to your contact list.<br>
                    - **If you are not a doctor**, you can only add doctors to your contact list.<br>
                    <br>
                    To find new friends:<br>
                    - Use the search bar.<br>
                    - Check the profiles of doctors directly through the posts on the homepage.<br>
            
                    <br><br>
                    Sincerely,<br>
                    
                    The FertiConnect team<br>
                `;
            } else if (lang === "Espagnol") {
                divptextP.innerHTML = `
                    Lo sentimos, no podemos mostrar tu lista de amigos porque aún no has agregado a ningún amigo. <br>
                    
                    - **Si eres médico**, puedes agregar a cualquiera a tu lista de contactos.<br>
                    - **Si no eres médico**, solo puedes agregar médicos a tu lista de contactos.<br>
                    <br>
                    Para encontrar nuevos amigos:<br>
                    - Utiliza la barra de búsqueda.<br>
                    - Consulta los perfiles de los médicos directamente a través de las publicaciones en la página de inicio.<br>
            
                    <br><br>
                    Atentamente,<br>
                    
                    El equipo de ConexiónFértil<br>
                `;
            } else if (lang === "Arabe") {
                divptextP.innerHTML = `
                    نأسف، لا يمكننا عرض قائمة الأصدقاء الخاصة بك لأنك لم تقم بإضافة أي أصدقاء بعد. <br>
                    
                    - **إذا كنت طبيباً**، يمكنك إضافة أي شخص إلى قائمة جهات الاتصال الخاصة بك.<br>
                    - **إذا لم تكن طبيباً**، يمكنك فقط إضافة الأطباء إلى قائمة جهات الاتصال الخاصة بك.<br>
                    <br>
                    للعثور على أصدقاء جدد:<br>
                    - استخدم شريط البحث.<br>
                    - تحقق من ملفات الأطباء مباشرة من خلال المنشورات على الصفحة الرئيسية.<br>
            
                    <br><br>
                    مع خالص التحية,<br>
                    
                    فريق فرتي كونكت<br>
                `;
            } else if (lang === "Portugais") {
                divptextP.innerHTML = `
                    Desculpe, não podemos exibir sua lista de amigos porque você ainda não adicionou nenhum amigo. <br>
                    
                    - **Se você é médico**, você pode adicionar qualquer pessoa à sua lista de contatos.<br>
                    - **Se você não é médico**, você só pode adicionar médicos à sua lista de contatos.<br>
                    <br>
                    Para encontrar novos amigos:<br>
                    - Use a barra de pesquisa.<br>
                    - Confira os perfis dos médicos diretamente através das postagens na página inicial.<br>
            
                    <br><br>
                    Atenciosamente,<br>
                    
                    A equipe do ConexãoFértil<br>
                `;
            } else if (lang === "Allemand") {
                divptextP.innerHTML = `
                    Entschuldigung, wir können Ihre Freundesliste nicht anzeigen, da Sie noch keine Freunde hinzugefügt haben. <br>
                    
                    - **Wenn Sie Arzt sind**, können Sie jeden zu Ihrer Kontaktliste hinzufügen.<br>
                    - **Wenn Sie kein Arzt sind**, können Sie nur Ärzte zu Ihrer Kontaktliste hinzufügen.<br>
                    <br>
                    Um neue Freunde zu finden:<br>
                    - Verwenden Sie die Suchleiste.<br>
                    - Überprüfen Sie die Profile der Ärzte direkt über die Beiträge auf der Startseite.<br>
            
                    <br><br>
                    Mit freundlichen Grüßen,<br>
                    
                    Das FertiVerbindung-Team<br>
                `;
            }
            divptextP.style.color="#176561";
            divptext.appendChild(divptextP);
            mescabins_2.appendChild(divptext);
        }
        
        async function recupereAmis(iduseramis,typeuseramis){
            const docRef = doc(db, typeuseramis, iduseramis);
            const docSnap = await getDoc(docRef); 
            const datauser = docSnap.data(); 
            const prenameuser = datauser.prenom;
            const nameuser = datauser.nom;
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
                mescabins_image_img.src="img/ferticonnectiLogoWhite.svg";
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
        if (!cabinequerySnapshot.empty) {
            cabinequerySnapshot.forEach((doc) => {
                const data = doc.data();
                const cabineId = data.cabineId;
                recupereCabine(cabineId);
    
            });
        } else {

            const div = document.createElement("div");
            div.className="divnoamis";
            const divimg = document.createElement("img");
            divimg.className="divimg";
            divimg.src="img/undraw_hooked_re_vl59.svg";
            div.appendChild(divimg);
            mescabins_.appendChild(div);

            const divptext = document.createElement("div");
            divptext.classList="divnoamis";
            const divptextP = document.createElement("p");
            if (lang === "Français") {
                divptextP.innerHTML = `
                Désolé, nous ne pouvons pas afficher votre liste de cliniques car vous n'êtes pas encore associé à une clinique.<br><br>
                
                Pour accéder à une clinique :<br>
                - Demandez à votre médecin de vous ajouter à leur clinique.<br>
                - Utilisez la barre de recherche pour trouver la clinique souhaitée et envoyez une demande d'adhésion.<br>
                <br><br>
                Cordialement,<br>
                
                L'équipe de FertiConnect<br>
                `;
            } else if (lang === "Anglais") {
                divptextP.innerHTML = `
                Sorry, we cannot display your list of clinics because you are not yet associated with a clinic.<br><br>
                
                To access a clinic:<br>
                - Ask your doctor to add you to their clinic.<br>
                - Use the search bar to find the desired clinic and send a request.<br>
                <br><br>
                Best regards,<br>
                
                The FertiConnect Team<br>
                `;
            } else if (lang === "Espagnol") {
                divptextP.innerHTML = `
                Lo siento, no podemos mostrar su lista de clínicas porque aún no está asociado con una clínica.<br><br>
                
                Para acceder a una clínica:<br>
                - Pida a su médico que lo agregue a su clínica.<br>
                - Use la barra de búsqueda para encontrar la clínica deseada y enviar una solicitud.<br>
                <br><br>
                Atentamente,<br>
                
                El equipo de FertiConnect<br>
                `;
            } else if (lang === "Arabe") {
                divptextP.innerHTML = `
                عذرًا، لا يمكننا عرض قائمة العيادات الخاصة بك لأنك لم ترتبط بعد بعيادة.<br><br>
                
                للوصول إلى عيادة:<br>
                - اطلب من طبيبك إضافتك إلى عيادتهم.<br>
                - استخدم شريط البحث للعثور على العيادة المطلوبة وإرسال طلب.<br>
                <br><br>
                مع تحيات،<br>
                
                فريق FertiConnect<br>
                `;
            } else if (lang === "Portugais") {
                divptextP.innerHTML = `
                Desculpe, não podemos exibir sua lista de clínicas porque você ainda não está associado a uma clínica.<br><br>
                
                Para acessar uma clínica:<br>
                - Peça ao seu médico para adicioná-lo à clínica deles.<br>
                - Use a barra de pesquisa para encontrar a clínica desejada e enviar uma solicitação.<br>
                <br><br>
                Atenciosamente,<br>
                
                A equipe FertiConnect<br>
                `;
            } else if (lang === "Allemand") {
                divptextP.innerHTML = `
                Entschuldigung, wir können Ihre Liste der Kliniken nicht anzeigen, da Sie noch keiner Klinik zugeordnet sind.<br><br>
                
                Um auf eine Klinik zuzugreifen:<br>
                - Bitten Sie Ihren Arzt, Sie seiner Klinik hinzuzufügen.<br>
                - Verwenden Sie die Suchleiste, um die gewünschte Klinik zu finden und eine Anfrage zu senden.<br>
                <br><br>
                Mit freundlichen Grüßen,<br>
                
                Das FertiConnect-Team<br>
                `;
            }
            
            divptextP.style.color="#176561";
            divptext.appendChild(divptextP);
            mescabins_.appendChild(divptext);
        }
        
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
                mescabins_image_img.src="img/ferticonnectiLogoWhite.svg";
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
                mescabins_image_img.src="img/ferticonnectiLogoWhite.svg";
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
            
            cabinfoss.addEventListener('click', async() => {
                wating.style.display="flex";
                await updateDoc(doc(db, typeOfUser,userId), {
                    lang: langue,
                });
                refreshPage();
            }); 
        }
        
        

        



        // Vérification si l'e-mail existe dans la collection "admins"
        const q = query(collection(db, typeuserclick), where("email", "==", mail));

        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                watingAccount.style.display = "flex";

                const userId = user.uid;
                const userRef = doc(db, typeuserclick, userId);
                const docSnapshot = await getDoc(userRef);


                if (docSnapshot.exists()) {
                    // Correction : récupération de l'e-mail depuis docSnapshot.data()
                    const statut_du_compte = docSnapshot.data().statut_du_compte;
                    const nomAdm = docSnapshot.data().nom;
                    const prenomAdm = docSnapshot.data().prenom;
                    const lango = docSnapshot.data().lang;

                    

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



                    traduction_systeme(lango);

                    








                    

                    
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
const pathologydiscreption = document.getElementById("pathologydiscreption");

const maladeTitle1 = document.getElementById("maladeTitle1");
const quinousbg = document.getElementById("quinousbg");
const closephatology = document.getElementById("closephatology");

const titlephatology = document.getElementById("maladeTitle1");
const pesentationquinous_pathologie = document.getElementById("pesentationquinous_pathologie");

maladeTitle1.addEventListener('click', () => {
    quinousbg.style.display="flex";
    scrollToTop();

}); 
closephatology.addEventListener('click', () => {
    quinousbg.style.display="none";
}); 


function traduction_systeme(lango){
    
const messageecrit = document.getElementById("messageecrit");
const ferticonnect_name_text = document.getElementById("ferticonnect_name_text");
const cabines = document.getElementById("cabines");
const Amis = document.getElementById("Amis");
const Langues = document.getElementById("Langues");
const QMPEUM = document.getElementById("QMPEUM");
const retourPAC = document.getElementById("retourPAC");
const Voirlalistedesmessages = document.getElementById("Voirlalistedesmessages");
const Envoyervotredossier = document.getElementById("Envoyervotredossier");
const creeUneMessage = document.getElementById("creeUneMessage");
const noSendMessage = document.getElementById("noSendMessage");
const cree = document.getElementById("cree");
const termine = document.getElementById("termine");
const imageSend = document.getElementById("imageSend");
const Partager = document.getElementById("Partager");
const termine2 = document.getElementById("termine2");
const fertiMessage = document.getElementById("fertiMessage");
const Commentaires = document.getElementById("Commentaires");
const atcvcompttext = document.getElementById("atcvcompttext");
const bienvenudansderticonnect = document.getElementById("bienvenudansderticonnect");
const code_verification = document.getElementById("code_verification");
const Activermoncompte = document.getElementById("Activermoncompte");
const termine3 = document.getElementById("termine3");
const infoActv = document.getElementById("infoActv");
const noactvaccuntexit = document.getElementById("noactvaccuntexit");
const deconnecter_acv_msg = document.getElementById("deconnecter_acv_msg");
const actvsuucss = document.getElementById("actvsuucss");
const deco = document.getElementById("deco");
const deco_neccterbtn = document.getElementById("deco_neccterbtn");
const anulerdeco_neccterbtn = document.getElementById("anulerdeco_neccterbtn");
const inputpubadd = document.getElementById("inputpubadd");
const resendlecode = document.getElementById("resendlecode");
 
const cycle = document.getElementById("cycle");
const pathology = document.getElementById("pathology");
const traitement = document.getElementById("traitement");
const formus = document.getElementById("formus");
const sports = document.getElementById("sports");
const psycolog = document.getElementById("psycolog");

 
if (lango === "Français") {
    pathologydiscreption.innerHTML = "ici vous pouvez voir des articles sur différentes pathologies, cliquez sur le titre de la pathologie ci-dessous pour voir l'article.";
} else if (lango === "Anglais") {
    pathologydiscreption.innerHTML = "Here you can view articles on various pathologies, click on the title of the pathology below to view the article.";
} else if (lango === "Espagnol") {
    pathologydiscreption.innerHTML = "aquí puedes ver artículos sobre diversas patologías, haz clic en el título de la patología a continuación para ver el artículo.";
} else if (lango === "Arabe") {
    pathologydiscreption.innerHTML = "هنا يمكنك رؤية مقالات حول مختلف الأمراض، انقر على عنوان الأمراض أدناه لعرض المقال.";
} else if (lango === "Portugais") {
    pathologydiscreption.innerHTML = "aqui você pode ver artigos sobre diferentes patologias, clique no título da patologia abaixo para ver o artigo.";
} else if (lango === "Allemand") {
    pathologydiscreption.innerHTML = "hier können Sie Artikel zu verschiedenen Pathologien sehen. Klicken Sie auf den Titel der Pathologie unten, um den Artikel anzuzeigen.";
}

if (lango === "Français") {
    closephatology.innerHTML = "fermer";
} else if (lango === "Anglais") {
    closephatology.innerHTML = "close";
} else if (lango === "Espagnol") {
    closephatology.innerHTML = "cerrar";
} else if (lango === "Arabe") {
    closephatology.innerHTML = "إغلاق";
} else if (lango === "Portugais") {
    closephatology.innerHTML = "fechar";
} else if (lango === "Allemand") {
    closephatology.innerHTML = "schließen";
}

if (lango === "Français") {
    titlephatology.innerHTML = "Endométriose";
} else if (lango === "Anglais") {
    titlephatology.innerHTML = "Endometriosis";
} else if (lango === "Espagnol") {
    titlephatology.innerHTML = "Endometriosis";
} else if (lango === "Arabe") {
    titlephatology.innerHTML = "بطانة الرحم المهاجرة";
} else if (lango === "Portugais") {
    titlephatology.innerHTML = "Endometriose";
} else if (lango === "Allemand") {
    titlephatology.innerHTML = "Endometriose";
}
  
if (lango === "Français") {
    pesentationquinous_pathologie.innerHTML = "L'endométriose est une pathologie fréquente et affecte environ 10 % des femmes en âge de procréer. Elle se manifeste par la présence ectopique de tissu endométrial constitué de glandes et de stroma en dehors de la cavité utérine qui peut se développer à différents endroits du corps. , il s’agit d’une maladie chronique progressive qui peut s’aggraver avec le temps et entraîner une variété de symptômes et de complications notamment l’inflammation, les douleurs et les troubles de la fertilité. Il faut savoir que même si elle est courante, les causes de son apparition et ses mécanismes demeurent énigmatiques. Différentes formes d’endométriose : Les 4 formes principales sont les suivantes : Endométriose pelvienne Endométriomes ovariens Endométriose profonde Endométriose extra-pelvienne Symptômes de l’endométriose : Ses symptômes, tout comme ses retentissements, sont variables d’une personne à l’autre, ce qui rend d’autant plus difficile sa compréhension, mais aussi son diagnostic dont le délai moyen est encore de 7 ans, notamment : Dysménorrhées : douleurs en rapport avec les règles (douleurs au bas ventre, bas du dos…) Dyspareunies : douleurs au moment des rapports sexuels (douleurs plus ou moins profondes) Dysuries : Douleurs urinaires (problèmes à la miction, infections à répétition…) Troubles intestinaux (douleurs pour éliminer les selles, alternance diarrhée et constipation, ballonnements…) Douleurs pelviennes chroniques (douleurs aux ovaires, contractions utérines…) Fatigue chronique (sentiment d’épuisement, stations debout/assise difficiles…) Douleurs de dos et d’épaules (douleurs lombaires, compression au niveau du diaphragme…) Infertilité (insuffisance ovarienne, trompes atrophiées, problème à la nidation… grossesses extra utérines etc Diagnostic Il n'existe pas de test diagnostique unique pour l'endométriose. Le diagnostic repose généralement sur une combinaison de symptômes, d'antécédents médicaux, d'examen pelvien et d'examens d'imagerie tels que l'échographie ou l'IRM. La laparoscopie, une intervention chirurgicale qui permet aux médecins de voir l'intérieur du pelvis, est parfois utilisée pour confirmer le diagnostic. Traitement Il n'existe pas de remède contre l'endométriose, Mais il existe un certain nombre de traitements qui peuvent aider à gérer les symptômes. Le choix du traitement s'individualise en fonction de plusieurs facteurs, dont la sévérité de la maladie, les organes touchés, la symptomatologie douloureuse, l'atteinte ovarienne ou utérine, et les facteurs associés (infertilité, etc.). Les options de traitement comprennent : Anti-inflammatoires non stéroïdiens (AINS) et les analgésiques (tels que l'ibuprofène ou le naproxène) peuvent aider à soulager la douleur Thérapie hormonale: Les contraceptifs oraux hormonaux, La contraception œstroprogestative ou l’administration de progestatifs, l’utilisation d’androgènes ou d’agonistes du GnRH peuvent aider à réduire la croissance du tissu endométrial. Chirurgie: La chirurgie laparoscopique peut être utilisée pour enlever les implants endométriaux et améliorer la douleur et la fertilité. L’impact de la maladie sur la qualité de vie : Douleurs chroniques et leurs répercussions: Fatigue chronique: Les douleurs incessantes liées à l'endométriose peuvent mener à un état d'épuisement permanent, affectant l'énergie disponible pour les activités quotidiennes, le travail et les relations sociales. Troubles du sommeil: La perturbation du sommeil causée par la douleur et l'inconfort peut aggraver la fatigue et accentuer les autres symptômes, créant un cercle vicieux. États dépressifs: Face à la douleur persistante, à l'incompréhension de l'entourage et aux limitations imposées par la maladie, un sentiment de découragement et de dépression peut s'installer. Impact sur la vie personnelle et familiale: Difficultés à prendre soin de soi et de sa famille: Les tâches quotidiennes, même les plus simples, peuvent devenir des épreuves physiques et mentales, rendant difficile la gestion autonome de la vie personnelle et familiale. Difficultés dans le couple: La douleur et la fatigue peuvent avoir un impact négatif sur la libido, l'intimité et la fertilité du couple, engendrant des incompréhensions, des frustrations et des tensions. Isolement et solitude: La peur d'être jugée, l'incompréhension de l'entourage et les limitations physiques peuvent conduire à un repli sur soi et à un isolement social. Impact sur la vie professionnelle: Absentéisme et arrêts maladie fréquents: Les douleurs intenses et la fatigue chronique peuvent obliger à des absences répétées au travail, avec des répercussions sur le rendement et les relations professionnelles. Incompréhension de l'entourage: Le manque de connaissance de l'endométriose peut mener à un manque de soutien et de compréhension de la part des collègues et employeurs, aggravant le vécu de la maladie. Difficultés à assumer ses responsabilités professionnelles: La concentration et la productivité peuvent être altérées par la douleur et la fatigue, rendant difficile En résumé, l'endométriose n'est pas seulement une maladie physique, mais un véritable défi quotidien qui affecte tous les aspects de la vie des femmes atteintes. La reconnaissance de la maladie et un meilleur soutien médical et social sont cruciaux pour aider les femmes à vivre une vie pleine et épanouissante malgré l'endométriose.";
} else if (lango === "Anglais") {
    pesentationquinous_pathologie.innerHTML = "Endometriosis is a common condition affecting about 10% of women of reproductive age. It manifests as the ectopic presence of endometrial tissue consisting of glands and stroma outside the uterine cavity, which can develop in various parts of the body. It is a progressive chronic disease that can worsen over time, causing a variety of symptoms and complications, particularly inflammation, pain, and fertility issues. Even though it is common, the causes and mechanisms of its occurrence remain enigmatic. Different forms of endometriosis: The 4 main types are: Pelvic endometriosis, Ovarian endometriomas, Deep endometriosis, Extrapelvic endometriosis. Symptoms of endometriosis: Its symptoms and impacts vary from person to person, making its understanding and diagnosis difficult, with an average diagnosis delay of 7 years. These symptoms include: Dysmenorrhea: pain related to menstruation (lower abdominal pain, lower back pain…), Dyspareunia: pain during sexual intercourse (more or less deep pain), Dysuria: painful urination (urination problems, recurrent infections…), Intestinal disorders (pain during bowel movements, alternating diarrhea and constipation, bloating…), Chronic pelvic pain (ovarian pain, uterine contractions…), Chronic fatigue (feeling of exhaustion, difficulty standing/sitting…), Back and shoulder pain (lower back pain, diaphragm compression…), Infertility (ovarian insufficiency, atrophied tubes, implantation issues… ectopic pregnancies, etc.). Diagnosis: There is no single diagnostic test for endometriosis. Diagnosis usually relies on a combination of symptoms, medical history, pelvic examination, and imaging tests such as ultrasound or MRI. Laparoscopy, a surgical procedure that allows doctors to see inside the pelvis, is sometimes used to confirm the diagnosis. Treatment: There is no cure for endometriosis, but several treatments can help manage symptoms. Treatment choices are individualized based on factors such as disease severity, affected organs, pain symptoms, ovarian or uterine involvement, and associated factors (infertility, etc.). Treatment options include: Nonsteroidal anti-inflammatory drugs (NSAIDs) and analgesics (such as ibuprofen or naproxen) to help relieve pain; Hormonal therapy: hormonal oral contraceptives, estrogen-progestin contraception, progestin administration, use of androgens or GnRH agonists to help reduce the growth of endometrial tissue; Surgery: laparoscopic surgery can be used to remove endometrial implants and improve pain and fertility. Impact of the disease on quality of life: Chronic pain and its repercussions: Chronic fatigue: persistent pain related to endometriosis can lead to a state of permanent exhaustion, affecting energy available for daily activities, work, and social relationships. Sleep disorders: sleep disruption caused by pain and discomfort can worsen fatigue and accentuate other symptoms, creating a vicious cycle. Depressive states: facing persistent pain, misunderstanding from others, and limitations imposed by the disease, feelings of discouragement and depression can settle in. Impact on personal and family life: Difficulties in self-care and family care: daily tasks, even the simplest ones, can become physical and mental challenges, making it difficult to independently manage personal and family life. Difficulties in the couple: pain and fatigue can negatively impact libido, intimacy, and fertility within the couple, causing misunderstandings, frustrations, and tensions. Isolation and loneliness: fear of being judged, misunderstanding from others, and physical limitations can lead to social withdrawal and isolation. Impact on professional life: Absenteeism and frequent sick leaves: intense pain and chronic fatigue may require repeated absences from work, affecting performance and professional relationships. Misunderstanding from others: lack of knowledge about endometriosis can lead to a lack of support and understanding from colleagues and employers, exacerbating the experience of the disease. Difficulty in assuming professional responsibilities: concentration and productivity can be impaired by pain and fatigue, making it difficult. In summary, endometriosis is not just a physical disease but a real daily challenge affecting all aspects of the lives of affected women. Recognizing the disease and providing better medical and social support are crucial to helping women live a full and fulfilling life despite endometriosis.";
} else if (lango === "Espagnol") {
    pesentationquinous_pathologie.innerHTML = "La endometriosis es una patología común que afecta aproximadamente al 10% de las mujeres en edad reproductiva. Se manifiesta por la presencia ectópica de tejido endometrial compuesto por glándulas y estroma fuera de la cavidad uterina, que puede desarrollarse en diferentes partes del cuerpo. Es una enfermedad crónica progresiva que puede empeorar con el tiempo y causar una variedad de síntomas y complicaciones, especialmente inflamación, dolor y problemas de fertilidad. Aunque es común, las causas de su aparición y sus mecanismos siguen siendo enigmáticos. Diferentes formas de endometriosis: Las 4 formas principales son: Endometriosis pélvica, Endometriomas ováricos, Endometriosis profunda, Endometriosis extrapélvica. Síntomas de la endometriosis: Sus síntomas y repercusiones varían de una persona a otra, lo que dificulta su comprensión y diagnóstico, con un promedio de retraso en el diagnóstico de 7 años. Estos síntomas incluyen: Dismenorrea: dolor relacionado con la menstruación (dolor en la parte inferior del abdomen, dolor en la parte inferior de la espalda…), Dispareunia: dolor durante las relaciones sexuales (dolor más o menos profundo), Disuria: dolor al orinar (problemas al orinar, infecciones recurrentes…), Trastornos intestinales (dolor durante la evacuación intestinal, alternancia de diarrea y estreñimiento, hinchazón…), Dolor pélvico crónico (dolor ovárico, contracciones uterinas…), Fatiga crónica (sensación de agotamiento, dificultad para estar de pie/sentado…), Dolor de espalda y hombros (dolor en la parte baja de la espalda, compresión del diafragma…), Infertilidad (insuficiencia ovárica, trompas atrofiadas, problemas de implantación… embarazos ectópicos, etc.). Diagnóstico: No existe una prueba diagnóstica única para la endometriosis. El diagnóstico generalmente se basa en una combinación de síntomas, historia médica, examen pélvico y pruebas de imagen como ecografía o resonancia magnética. La laparoscopia, un procedimiento quirúrgico que permite a los médicos ver dentro de la pelvis, a veces se usa para confirmar el diagnóstico. Tratamiento: No existe una cura para la endometriosis, pero varios tratamientos pueden ayudar a controlar los síntomas. Las opciones de tratamiento se individualizan según factores como la gravedad de la enfermedad, los órganos afectados, los síntomas de dolor, la afectación ovárica o uterina y factores asociados (infertilidad, etc.). Las opciones de tratamiento incluyen: Antiinflamatorios no esteroideos (AINE) y analgésicos (como ibuprofeno o naproxeno) para aliviar el dolor; Terapia hormonal: anticonceptivos orales hormonales, anticoncepción estroprogestativa, administración de progestágenos, uso de andrógenos o agonistas de GnRH para reducir el crecimiento del tejido endometrial; Cirugía: la cirugía laparoscópica puede utilizarse para eliminar los implantes endometriales y mejorar el dolor y la fertilidad. Impacto de la enfermedad en la calidad de vida: Dolor crónico y sus repercusiones: Fatiga crónica: el dolor persistente relacionado con la endometriosis puede llevar a un estado de agotamiento permanente, afectando la energía disponible para las actividades diarias, el trabajo y las relaciones sociales. Trastornos del sueño: la interrupción del sueño causada por el dolor y el malestar puede empeorar la fatiga y acentuar otros síntomas, creando un círculo vicioso. Estados depresivos: enfrentar el dolor persistente, la incomprensión de los demás y las limitaciones impuestas por la enfermedad pueden generar sentimientos de desánimo y depresión. Impacto en la vida personal y familiar: Dificultades en el cuidado personal y familiar: las tareas diarias, incluso las más simples, pueden convertirse en desafíos físicos y mentales, dificultando la gestión autónoma de la vida personal y familiar. Dificultades en la pareja: el dolor y la fatiga pueden afectar negativamente la libido, la intimidad y la fertilidad en la pareja, causando malentendidos, frustraciones y tensiones. Aislamiento y soledad: el miedo a ser juzgada, la incomprensión de los demás y las limitaciones físicas pueden llevar al retraimiento social y al aislamiento. Impacto en la vida profesional: Absentismo y bajas por enfermedad frecuentes: el dolor intenso y la fatiga crónica pueden requerir ausencias repetidas del trabajo, afectando el rendimiento y las relaciones profesionales. Incomprensión de los demás: la falta de conocimiento sobre la endometriosis puede llevar a una falta de apoyo y comprensión por parte de colegas y empleadores, exacerbando la experiencia de la enfermedad. Dificultad para asumir responsabilidades profesionales: la concentración y la productividad pueden verse afectadas por el dolor y la fatiga, dificultando. En resumen, la endometriosis no es solo una enfermedad física, sino un verdadero desafío diario que afecta todos los aspectos de la vida de las mujeres afectadas. Reconocer la enfermedad y brindar un mejor apoyo médico y social son cruciales para ayudar a las mujeres a vivir una vida plena y satisfactoria a pesar de la endometriosis.";
} else if (lango === "Arabe") {
    pesentationquinous_pathologie.innerHTML = "بطانة الرحم الهاجرة هي مرض شائع يصيب حوالي 10٪ من النساء في سن الإنجاب. يتميز بوجود نسيج بطانة الرحم خارج التجويف الرحمي، حيث يمكن أن يتطور في أجزاء مختلفة من الجسم. إنه مرض مزمن تدريجي يمكن أن يتفاقم بمرور الوقت، مسببًا مجموعة متنوعة من الأعراض والمضاعفات، وخاصة الالتهاب، الألم، ومشاكل الخصوبة. على الرغم من أنه شائع، فإن أسباب حدوثه وآلياته لا تزال غامضة. أشكال مختلفة من بطانة الرحم الهاجرة: الأنواع الأربعة الرئيسية هي: بطانة الرحم الحوضية، أكياس المبيض، بطانة الرحم العميقة، بطانة الرحم خارج الحوض. أعراض بطانة الرحم الهاجرة: تختلف أعراضها وتأثيراتها من شخص لآخر، مما يجعل فهمها وتشخيصها صعبًا، بمتوسط تأخير في التشخيص يبلغ 7 سنوات. تشمل هذه الأعراض: عسر الطمث: ألم مرتبط بالحيض (ألم في أسفل البطن، ألم في أسفل الظهر...)، عسر الجماع: ألم أثناء الجماع (ألم أكثر أو أقل عمقًا)، عسر التبول: ألم عند التبول (مشاكل التبول، التهابات متكررة...)، اضطرابات الأمعاء (ألم عند التبرز، تناوب الإسهال والإمساك، انتفاخ...)، ألم الحوض المزمن (ألم في المبيضين، تقلصات الرحم...)، التعب المزمن (الشعور بالإرهاق، صعوبة في الوقوف/الجلوس...)، ألم الظهر والكتفين (ألم في أسفل الظهر، ضغط في الحجاب الحاجز...)، العقم (قصور المبيض، ضمور الأنابيب، مشاكل الانغراس... الحمل خارج الرحم، إلخ). التشخيص: لا يوجد اختبار تشخيصي واحد لبطانة الرحم الهاجرة. يعتمد التشخيص عادةً على مجموعة من الأعراض، التاريخ الطبي، الفحص الحوضي، والفحوصات التصويرية مثل الموجات فوق الصوتية أو التصوير بالرنين المغناطيسي. يتم أحيانًا استخدام تنظير البطن، وهو إجراء جراحي يسمح للأطباء برؤية داخل الحوض، لتأكيد التشخيص. العلاج: لا يوجد علاج لبطانة الرحم الهاجرة، لكن يمكن أن تساعد العديد من العلاجات في إدارة الأعراض. يتم تخصيص خيارات العلاج بناءً على عوامل مثل شدة المرض، الأعضاء المصابة، أعراض الألم، تأثر المبيض أو الرحم، والعوامل المرتبطة (العقم، إلخ). تشمل خيارات العلاج: الأدوية المضادة للالتهابات غير الستيرويدية (NSAIDs) والمسكنات (مثل الإيبوبروفين أو نابروكسين) لتخفيف الألم؛ العلاج الهرموني: موانع الحمل الهرمونية الفموية، موانع الحمل الاستروجينية البروجسترونية، إعطاء البروجستينات، استخدام الأندروجينات أو نظائر GnRH لتقليل نمو نسيج بطانة الرحم؛ الجراحة: يمكن استخدام الجراحة بالمنظار لإزالة زراعة بطانة الرحم وتحسين الألم والخصوبة. تأثير المرض على نوعية الحياة: الألم المزمن وتبعاته: التعب المزمن: يمكن أن يؤدي الألم المستمر المرتبط ببطانة الرحم الهاجرة إلى حالة من الإرهاق الدائم، مما يؤثر على الطاقة المتاحة للأنشطة اليومية، العمل، والعلاقات الاجتماعية. اضطرابات النوم: يمكن أن يؤدي اضطراب النوم الناجم عن الألم والانزعاج إلى تفاقم التعب وتكثيف الأعراض الأخرى، مما يخلق حلقة مفرغة. الحالات الاكتئابية: في مواجهة الألم المستمر، وسوء الفهم من الآخرين، والقيود التي يفرضها المرض، يمكن أن تتشكل مشاعر الإحباط والاكتئاب. التأثير على الحياة الشخصية والعائلية: الصعوبات في رعاية الذات والأسرة: يمكن أن تصبح المهام اليومية، حتى الأكثر بساطة، تحديات جسدية وعقلية، مما يجعل من الصعب إدارة الحياة الشخصية والعائلية بشكل مستقل. الصعوبات في العلاقة الزوجية: يمكن أن يؤثر الألم والتعب سلبًا على الرغبة الجنسية، الحميمة، والخصوبة في العلاقة الزوجية، مما يسبب سوء الفهم، والإحباطات، والتوترات. العزلة والوحدة: يمكن أن يؤدي الخوف من الحكم، سوء الفهم من الآخرين، والقيود الجسدية إلى الانعزال الاجتماعي والعزلة. التأثير على الحياة المهنية: الغياب والتغيب المتكرر عن العمل: يمكن أن يتطلب الألم الشديد والتعب المزمن غيابات متكررة عن العمل، مما يؤثر على الأداء والعلاقات المهنية. سوء الفهم من الآخرين: يمكن أن يؤدي نقص المعرفة عن بطانة الرحم الهاجرة إلى نقص الدعم والتفهم من الزملاء وأرباب العمل، مما يزيد من تجربة المرض. الصعوبة في تحمل المسؤوليات المهنية: يمكن أن تتأثر التركيز والإنتاجية بالألم والتعب، مما يجعل من الصعب. باختصار، بطانة الرحم الهاجرة ليست مجرد مرض جسدي، بل تحد يومي حقيقي يؤثر على جميع جوانب حياة النساء المصابات. إن الاعتراف بالمرض وتوفير دعم طبي واجتماعي أفضل أمران حيويان لمساعدة النساء على عيش حياة كاملة ومرضية رغم بطانة الرحم الهاجرة.";
} else if (lango === "Portugais") {
    pesentationquinous_pathologie.innerHTML = "A endometriose é uma patologia comum que afeta cerca de 10% das mulheres em idade reprodutiva. Manifesta-se pela presença ectópica de tecido endometrial composto por glândulas e estroma fora da cavidade uterina, que pode se desenvolver em diferentes partes do corpo. É uma doença crônica progressiva que pode piorar com o tempo, causando uma variedade de sintomas e complicações, especialmente inflamação, dor e problemas de fertilidade. Embora seja comum, as causas e os mecanismos do seu aparecimento permanecem enigmáticos. Diferentes formas de endometriose: As 4 formas principais são: Endometriose pélvica, Endometriomas ovarianos, Endometriose profunda, Endometriose extrapélvica. Sintomas da endometriose: Seus sintomas e repercussões variam de pessoa para pessoa, tornando seu entendimento e diagnóstico difíceis, com um atraso médio no diagnóstico de 7 anos. Esses sintomas incluem: Dismenorreia: dor relacionada à menstruação (dor abdominal inferior, dor na parte inferior das costas...), Dispareunia: dor durante a relação sexual (dor mais ou menos profunda), Disúria: dor ao urinar (problemas urinários, infecções recorrentes...), Distúrbios intestinais (dor ao evacuar, alternância de diarreia e constipação, inchaço...), Dor pélvica crônica (dor nos ovários, contrações uterinas...), Fadiga crônica (sensação de exaustão, dificuldade para ficar em pé/sentar...), Dor nas costas e ombros (dor na parte inferior das costas, compressão do diafragma...), Infertilidade (insuficiência ovariana, trompas atrofiadas, problemas de implantação... gestações ectópicas, etc.). Diagnóstico: Não existe um teste diagnóstico único para a endometriose. O diagnóstico geralmente se baseia em uma combinação de sintomas, histórico médico, exame pélvico e exames de imagem, como ultrassom ou ressonância magnética. A laparoscopia, um procedimento cirúrgico que permite aos médicos ver o interior da pelve, é às vezes usada para confirmar o diagnóstico. Tratamento: Não existe cura para a endometriose, mas vários tratamentos podem ajudar a controlar os sintomas. As escolhas de tratamento são individualizadas com base em fatores como a gravidade da doença, órgãos afetados, sintomas de dor, comprometimento ovariano ou uterino e fatores associados (infertilidade, etc.). As opções de tratamento incluem: Anti-inflamatórios não esteroides (AINEs) e analgésicos (como ibuprofeno ou naproxeno) para ajudar a aliviar a dor; Terapia hormonal: anticoncepcionais orais hormonais, contracepção estrogênio-progestágeno, administração de progestágenos, uso de andrógenos ou agonistas de GnRH para ajudar a reduzir o crescimento do tecido endometrial; Cirurgia: a cirurgia laparoscópica pode ser usada para remover implantes endometriais e melhorar a dor e a fertilidade. Impacto da doença na qualidade de vida: Dor crônica e suas repercussões: Fadiga crônica: a dor persistente relacionada à endometriose pode levar a um estado de exaustão permanente, afetando a energia disponível para atividades diárias, trabalho e relações sociais. Distúrbios do sono: a interrupção do sono causada pela dor e desconforto pode piorar a fadiga e acentuar outros sintomas, criando um ciclo vicioso. Estados depressivos: diante da dor persistente, incompreensão dos outros e limitações impostas pela doença, sentimentos de desânimo e depressão podem se instalar. Impacto na vida pessoal e familiar: Dificuldades no autocuidado e no cuidado da família: tarefas diárias, mesmo as mais simples, podem se tornar desafios físicos e mentais, dificultando a gestão autônoma da vida pessoal e familiar. Dificuldades no relacionamento: a dor e a fadiga podem impactar negativamente a libido, intimidade e fertilidade do casal, causando mal-entendidos, frustrações e tensões. Isolamento e solidão: o medo de ser julgada, a incompreensão dos outros e as limitações físicas podem levar ao isolamento social e à solidão. Impacto na vida profissional: Absentismo e licenças médicas frequentes: a dor intensa e a fadiga crônica podem exigir ausências repetidas no trabalho, afetando o desempenho e as relações profissionais. Incompreensão dos outros: a falta de conhecimento sobre a endometriose pode levar à falta de apoio e compreensão por parte de colegas e empregadores, exacerbando a experiência da doença. Dificuldade em assumir responsabilidades profissionais: a concentração e a produtividade podem ser prejudicadas pela dor e fadiga, tornando difícil. Em resumo, a endometriose não é apenas uma doença física, mas um verdadeiro desafio diário que afeta todos os aspectos da vida das mulheres afetadas. Reconhecer a doença e fornecer melhor apoio médico e social são cruciais para ajudar as mulheres a viver uma vida plena e gratificante apesar da endometriose.";
} else if (lango === "Allemand") {
    pesentationquinous_pathologie.innerHTML = "Endometriose ist eine häufige Erkrankung, die etwa 10% der Frauen im gebärfähigen Alter betrifft. Sie äußert sich durch das ektope Vorhandensein von Endometriumgewebe, das aus Drüsen und Stroma besteht und sich außerhalb der Gebärmutterhöhle entwickelt und an verschiedenen Stellen im Körper auftreten kann. Es handelt sich um eine fortschreitende chronische Krankheit, die sich im Laufe der Zeit verschlechtern und eine Vielzahl von Symptomen und Komplikationen verursachen kann, insbesondere Entzündungen, Schmerzen und Fruchtbarkeitsprobleme. Obwohl sie häufig ist, bleiben die Ursachen und Mechanismen ihres Auftretens rätselhaft. Verschiedene Formen der Endometriose: Die 4 Hauptformen sind: Beckenendometriose, Ovarialendometriome, Tiefe Endometriose, Extrapelvine Endometriose. Symptome der Endometriose: Ihre Symptome und Auswirkungen variieren von Person zu Person, was das Verständnis und die Diagnose erschwert, wobei die durchschnittliche Diagnoseverzögerung 7 Jahre beträgt. Diese Symptome umfassen: Dysmenorrhoe: schmerzhafte Menstruation (Schmerzen im Unterbauch, Schmerzen im unteren Rücken...), Dyspareunie: Schmerzen beim Geschlechtsverkehr (mehr oder weniger tiefe Schmerzen), Dysurie: schmerzhaftes Wasserlassen (Harnprobleme, wiederkehrende Infektionen...), Darmprobleme (Schmerzen beim Stuhlgang, Wechsel zwischen Durchfall und Verstopfung, Blähungen...), Chronische Beckenschmerzen (Schmerzen in den Eierstöcken, Gebärmutterkontraktionen...), Chronische Müdigkeit (Erschöpfungsgefühl, Schwierigkeiten beim Stehen/Sitzen...), Rückenschmerzen und Schulterschmerzen (Schmerzen im unteren Rücken, Druck im Zwerchfell...), Unfruchtbarkeit (Ovarialinsuffizienz, verkümmerte Eileiter, Implantationsprobleme... Eileiterschwangerschaften usw.). Diagnose: Es gibt keinen einzigen diagnostischen Test für Endometriose. Die Diagnose stützt sich in der Regel auf eine Kombination von Symptomen, medizinischer Vorgeschichte, Beckenuntersuchung und bildgebenden Untersuchungen wie Ultraschall oder MRT. Eine Laparoskopie, ein chirurgischer Eingriff, der es den Ärzten ermöglicht, das Innere des Beckens zu sehen, wird manchmal verwendet, um die Diagnose zu bestätigen. Behandlung: Es gibt keine Heilung für Endometriose, aber es gibt mehrere Behandlungen, die helfen können, die Symptome zu bewältigen. Die Wahl der Behandlung wird individualisiert und basiert auf Faktoren wie Schweregrad der Erkrankung, betroffene Organe, Schmerzsypmtome, Beteiligung der Eierstöcke oder der Gebärmutter und assoziierte Faktoren (Unfruchtbarkeit usw.). Die Behandlungsoptionen umfassen: Nichtsteroidale entzündungshemmende Medikamente (NSAIDs) und Schmerzmittel (wie Ibuprofen oder Naproxen) zur Schmerzlinderung; Hormontherapie: Hormonelle Antibabypillen, kombinierte hormonelle Verhütung, Verabreichung von Gestagenen, Verwendung von Androgenen oder GnRH-Agonisten zur Reduktion des Wachstums von Endometriumgewebe; Chirurgie: Laparoskopische Chirurgie kann verwendet werden, um Endometriose-Implantate zu entfernen und Schmerzen und Fruchtbarkeit zu verbessern. Auswirkungen der Krankheit auf die Lebensqualität: Chronische Schmerzen und ihre Auswirkungen: Chronische Müdigkeit: Die anhaltenden Schmerzen im Zusammenhang mit Endometriose können zu einem Zustand dauerhafter Erschöpfung führen, der die verfügbare Energie für tägliche Aktivitäten, Arbeit und soziale Beziehungen beeinträchtigt. Schlafstörungen: Schlafstörungen, die durch Schmerzen und Unwohlsein verursacht werden, können die Müdigkeit verschlimmern und andere Symptome verstärken, wodurch ein Teufelskreis entsteht. Depressive Zustände: Angesichts der anhaltenden Schmerzen, des Unverständnisses anderer und der durch die Krankheit auferlegten Einschränkungen können Gefühle von Niedergeschlagenheit und Depression entstehen. Auswirkungen auf das persönliche und familiäre Leben: Schwierigkeiten bei der Selbst- und Familienpflege: Tägliche Aufgaben, selbst die einfachsten, können zu physischen und mentalen Herausforderungen werden, was die eigenständige Bewältigung des persönlichen und familiären Lebens erschwert. Schwierigkeiten in der Partnerschaft: Schmerzen und Müdigkeit können sich negativ auf die Libido, die Intimität und die Fruchtbarkeit des Paares auswirken, was zu Missverständnissen, Frustrationen und Spannungen führt. Isolation und Einsamkeit: Die Angst vor Verurteilung, das Unverständnis anderer und die körperlichen Einschränkungen können zu sozialer Isolation und Einsamkeit führen. Auswirkungen auf das Berufsleben: Häufige Fehlzeiten und Krankheitsausfälle: Starke Schmerzen und chronische Müdigkeit können wiederholte Fehlzeiten bei der Arbeit erfordern, was die Leistung und die beruflichen Beziehungen beeinträchtigt. Unverständnis der anderen: Das mangelnde Wissen über Endometriose kann zu mangelnder Unterstützung und Verständnis seitens der Kollegen und Arbeitgeber führen, was die Krankheitserfahrung verschärft. Schwierigkeiten bei der Übernahme beruflicher Verantwortung: Konzentration und Produktivität können durch Schmerzen und Müdigkeit beeinträchtigt werden, was es schwierig macht. Zusammenfassend lässt sich sagen, dass Endometriose nicht nur eine körperliche Krankheit ist, sondern eine echte tägliche Herausforderung darstellt, die alle Aspekte des Lebens der betroffenen Frauen beeinflusst. Die Anerkennung der Krankheit und die Bereitstellung besserer medizinischer und sozialer Unterstützung sind entscheidend, um Frauen zu helfen, trotz Endometriose ein vollständiges und erfülltes Leben zu führen.";
}
  
  
  


if (lango === "Français") {
    envoyerfeedbackp.innerHTML = "Envoyez-nous un feedback concernant notre plateforme.";
} else if (lango === "Anglais") {
    envoyerfeedbackp.innerHTML = "Send us feedback about our platform.";
} else if (lango === "Espagnol") {
    envoyerfeedbackp.innerHTML = "Envíenos sus comentarios sobre nuestra plataforma.";
} else if (lango === "Arabe") {
    envoyerfeedbackp.innerHTML = "أرسل لنا ملاحظاتك حول منصتنا.";
} else if (lango === "Portugais") {
    envoyerfeedbackp.innerHTML = "Envie-nos feedback sobre nossa plataforma.";
} else if (lango === "Allemand") {
    envoyerfeedbackp.innerHTML = "Senden Sie uns Feedback zu unserer Plattform.";
}

if (lango === "Français") {
    ecrirfeedbach1.innerHTML = "Écrire un feedback";
} else if (lango === "Anglais") {
    ecrirfeedbach1.innerHTML = "Write feedback";
} else if (lango === "Espagnol") {
    ecrirfeedbach1.innerHTML = "Escribir comentarios";
} else if (lango === "Arabe") {
    ecrirfeedbach1.innerHTML = "كتابة ملاحظات";
} else if (lango === "Portugais") {
    ecrirfeedbach1.innerHTML = "Escrever feedback";
} else if (lango === "Allemand") {
    ecrirfeedbach1.innerHTML = "Feedback schreiben";
}

if (lango === "Français") {
    feebackenvoyer.innerHTML = "Envoyer le feedback";
} else if (lango === "Anglais") {
    feebackenvoyer.innerHTML = "Send feedback";
} else if (lango === "Espagnol") {
    feebackenvoyer.innerHTML = "Enviar comentarios";
} else if (lango === "Arabe") {
    feebackenvoyer.innerHTML = "إرسال الملاحظات";
} else if (lango === "Portugais") {
    feebackenvoyer.innerHTML = "Enviar feedback";
} else if (lango === "Allemand") {
    feebackenvoyer.innerHTML = "Feedback senden";
}

if (lango === "Français") {
    feedbackdone.innerHTML = "Le feedback a été envoyé";
} else if (lango === "Anglais") {
    feedbackdone.innerHTML = "Feedback has been sent";
} else if (lango === "Espagnol") {
    feedbackdone.innerHTML = "Los comentarios han sido enviados";
} else if (lango === "Arabe") {
    feedbackdone.innerHTML = "تم إرسال الملاحظات";
} else if (lango === "Portugais") {
    feedbackdone.innerHTML = "O feedback foi enviado";
} else if (lango === "Allemand") {
    feedbackdone.innerHTML = "Feedback wurde gesendet";
}





if (lango === "Français") {
    cycle.innerHTML = "suivre mon cycle";
} else if (lango === "Anglais") {
    cycle.innerHTML = "my monthly cycle tracking";
} else if (lango === "Espagnol") {
    cycle.innerHTML = "seguimiento del ciclo mensual";
} else if (lango === "Arabe") {
    cycle.innerHTML = "متابعة دورني الشهرية";
} else if (lango === "Portugais") {
    cycle.innerHTML = "rastreamento do ciclo mensal";
} else if (lango === "Allemand") {
    cycle.innerHTML = "monatliche Zyklusverfolgung";
}

if (lango === "Français") {
    formus.innerHTML = "forums";
} else if (lango === "Anglais") {
    formus.innerHTML = "forums";
} else if (lango === "Espagnol") {
    formus.innerHTML = "foros";
} else if (lango === "Arabe") {
    formus.innerHTML = "منتديات";
} else if (lango === "Portugais") {
    formus.innerHTML = "fóruns";
} else if (lango === "Allemand") {
    formus.innerHTML = "Foren";
}

if (lango === "Français") {
    psycolog.innerHTML = "suivi psychologique";
} else if (lango === "Anglais") {
    psycolog.innerHTML = "psychological support";
} else if (lango === "Espagnol") {
    psycolog.innerHTML = "seguimiento psicológico";
} else if (lango === "Arabe") {
    psycolog.innerHTML = "الدعم النفسي";
} else if (lango === "Portugais") {
    psycolog.innerHTML = "acompanhamento psicológico";
} else if (lango === "Allemand") {
    psycolog.innerHTML = "psychologische Unterstützung";
}

if (lango === "Français") {
    sports.innerHTML = "coaching sportif";
} else if (lango === "Anglais") {
    sports.innerHTML = "sports coaching";
} else if (lango === "Espagnol") {
    sports.innerHTML = "entrenamiento deportivo";
} else if (lango === "Arabe") {
    sports.innerHTML = "التدريب الرياضي";
} else if (lango === "Portugais") {
    sports.innerHTML = "treinamento esportivo";
} else if (lango === "Allemand") {
    sports.innerHTML = "Sportcoaching";
}

if (lango === "Français") {
    pathology.innerHTML = "les pathologies";
} else if (lango === "Anglais") {
    pathology.innerHTML = "pathologies";
} else if (lango === "Espagnol") {
    pathology.innerHTML = "patologías";
} else if (lango === "Arabe") {
    pathology.innerHTML = "الأمراض";
} else if (lango === "Portugais") {
    pathology.innerHTML = "as patologias";
} else if (lango === "Allemand") {
    pathology.innerHTML = "Pathologien";
}

if (lango === "Français") {
    traitement.innerHTML = "mon traitement";
} else if (lango === "Anglais") {
    traitement.innerHTML = "my treatment";
} else if (lango === "Espagnol") {
    traitement.innerHTML = "los tratamientos";
} else if (lango === "Arabe") {
    traitement.innerHTML =" علاجاتي";
} else if (lango === "Portugais") {
    traitement.innerHTML = "os tratamentos";
} else if (lango === "Allemand") {
    traitement.innerHTML = "die Behandlungen";
}






if (lango === "Français") {
    resendlecode.innerHTML = "Réenvoyer le code de vérification";
} else if (lango === "Anglais") {
    resendlecode.innerHTML = "Resend verification code";
} else if (lango === "Espagnol") {
    resendlecode.innerHTML = "Reenviar el código de verificación";
} else if (lango === "Arabe") {
    resendlecode.innerHTML = "إعادة إرسال رمز التحقق";
} else if (lango === "Portugais") {
    resendlecode.innerHTML = "Reenviar código de verificação";
} else if (lango === "Allemand") {
    resendlecode.innerHTML = "Bestätigungscode erneut senden";
} else {
    resendlecode.innerHTML = "Resend verification code"; // Valeur par défaut en anglais
}


if (lango === "Français") {
    messageecrit.placeholder = "Écris un message";
} else if (lango === "Anglais") {
    messageecrit.placeholder = "Write a message";
} else if (lango === "Espagnol") {
    messageecrit.placeholder = "Escribe un mensaje";
} else if (lango === "Arabe") {
    messageecrit.placeholder = "اكتب رسالة";
} else if (lango === "Portugais") {
    messageecrit.placeholder = "Escreva uma mensagem";
} else if (lango === "Allemand") {
    messageecrit.placeholder = "Schreibe eine Nachricht";
}



if (lango === "Français") {
    inputpubadd.placeholder = "Quoi de neuf ?";
} else if (lango === "Anglais") {
    inputpubadd.placeholder = "What's new?";
} else if (lango === "Espagnol") {
    inputpubadd.placeholder = "¿Qué hay de nuevo?";
} else if (lango === "Arabe") {
    inputpubadd.placeholder = "ما الجديد؟";
} else if (lango === "Portugais") {
    inputpubadd.placeholder = "O que há de novo?";
} else if (lango === "Allemand") {
    inputpubadd.placeholder = "Was gibt's Neues?";
}




if (lango === "Français") {
    ferticonnect_name_text.innerHTML = "FertiConnect";
} else if (lango === "Anglais") {
    ferticonnect_name_text.innerHTML = "FertiConnect";
} else if (lango === "Espagnol") {
    ferticonnect_name_text.innerHTML = "FertiConnect";
} else if (lango === "Arabe") {
    ferticonnect_name_text.innerHTML = "فيرتيكونيكت";
} else if (lango === "Portugais") {
    ferticonnect_name_text.innerHTML = "FertiConnect";
} else if (lango === "Allemand") {
    ferticonnect_name_text.innerHTML = "FertiConnect";
}
if (lango === "Français") {
    cabines.innerHTML = "clinique";
} else if (lango === "Anglais") {
    cabines.innerHTML = "clinic";
} else if (lango === "Espagnol") {
    cabines.innerHTML = "clínica";
} else if (lango === "Arabe") {
    cabines.innerHTML = "عيادة";
} else if (lango === "Portugais") {
    cabines.innerHTML = "clínica";
} else if (lango === "Allemand") {
    cabines.innerHTML = "Klinik";
}


if (lango === "Français") {
    Amis.innerHTML = "Amis";
} else if (lango === "Anglais") {
    Amis.innerHTML = "Friends";
} else if (lango === "Espagnol") {
    Amis.innerHTML = "Amigos";
} else if (lango === "Arabe") {
    Amis.innerHTML = "أصدقاء";
} else if (lango === "Portugais") {
    Amis.innerHTML = "Amigos";
} else if (lango === "Allemand") {
    Amis.innerHTML = "Freunde";
}

if (lango === "Français") {
    Langues.innerHTML = "Langues";
} else if (lango === "Anglais") {
    Langues.innerHTML = "Languages";
} else if (lango === "Espagnol") {
    Langues.innerHTML = "Idiomas";
} else if (lango === "Arabe") {
    Langues.innerHTML = "اللغات";
} else if (lango === "Portugais") {
    Langues.innerHTML = "Idiomas";
} else if (lango === "Allemand") {
    Langues.innerHTML = "Sprachen";
}

if (lango === "Français") {
    QMPEUM.innerHTML = "Que le médecin peut envoyer un message";
} else if (lango === "Anglais") {
    QMPEUM.innerHTML = "That the doctor can send a message";
} else if (lango === "Espagnol") {
    QMPEUM.innerHTML = "Que el médico puede enviar un mensaje";
} else if (lango === "Arabe") {
    QMPEUM.innerHTML = "أن الطبيب يمكنه إرسال رسالة";
} else if (lango === "Portugais") {
    QMPEUM.innerHTML = "Que o médico pode enviar uma mensagem";
} else if (lango === "Allemand") {
    QMPEUM.innerHTML = "Dass der Arzt eine Nachricht senden kann";
}

if (lango === "Français") {
    retourPAC.innerHTML = "Retourner à la page d'accueil";
} else if (lango === "Anglais") {
    retourPAC.innerHTML = "Return to the homepage";
} else if (lango === "Espagnol") {
    retourPAC.innerHTML = "Volver a la página de inicio";
} else if (lango === "Arabe") {
    retourPAC.innerHTML = "العودة إلى الصفحة الرئيسية";
} else if (lango === "Portugais") {
    retourPAC.innerHTML = "Voltar para a página inicial";
} else if (lango === "Allemand") {
    retourPAC.innerHTML = "Zurück zur Startseite";
}

if (lango === "Français") {
    Voirlalistedesmessages.innerHTML = "Voir la liste des messages";
} else if (lango === "Anglais") {
    Voirlalistedesmessages.innerHTML = "View the list of messages";
} else if (lango === "Espagnol") {
    Voirlalistedesmessages.innerHTML = "Ver la lista de mensajes";
} else if (lango === "Arabe") {
    Voirlalistedesmessages.innerHTML = "عرض قائمة الرسائل";
} else if (lango === "Portugais") {
    Voirlalistedesmessages.innerHTML = "Ver a lista de mensagens";
} else if (lango === "Allemand") {
    Voirlalistedesmessages.innerHTML = "Nachrichtenliste anzeigen";
}

if (lango === "Français") {
    Envoyervotredossier.innerHTML = "Envoyer votre dossier médical";
} else if (lango === "Anglais") {
    Envoyervotredossier.innerHTML = "Send your medical file";
} else if (lango === "Espagnol") {
    Envoyervotredossier.innerHTML = "Enviar su expediente médico";
} else if (lango === "Arabe") {
    Envoyervotredossier.innerHTML = "إرسال ملفك الطبي";
} else if (lango === "Portugais") {
    Envoyervotredossier.innerHTML = "Envie seu arquivo médico";
} else if (lango === "Allemand") {
    Envoyervotredossier.innerHTML = "Senden Sie Ihre Krankenakte";
}

if (lango === "Français") {
    creeUneMessage.innerHTML = "Créez une messagerie pour votre cabinet";
} else if (lango === "Anglais") {
    creeUneMessage.innerHTML = "Create a messaging service for your practice";
} else if (lango === "Espagnol") {
    creeUneMessage.innerHTML = "Cree un servicio de mensajería para su consultorio";
} else if (lango === "Arabe") {
    creeUneMessage.innerHTML = "قم بإنشاء خدمة مراسلة لعيادتك";
} else if (lango === "Portugais") {
    creeUneMessage.innerHTML = "Crie um serviço de mensagens para o seu consultório";
} else if (lango === "Allemand") {
    creeUneMessage.innerHTML = "Erstellen Sie einen Messaging-Service für Ihre Praxis";
}

if (lango === "Français") {
    noSendMessage.innerHTML = "Vous seul pouvez envoyer des messages.";
} else if (lango === "Anglais") {
    noSendMessage.innerHTML = "Only you can send messages.";
} else if (lango === "Espagnol") {
    noSendMessage.innerHTML = "Solo usted puede enviar mensajes.";
} else if (lango === "Arabe") {
    noSendMessage.innerHTML = "أنت فقط يمكنك إرسال الرسائل.";
} else if (lango === "Portugais") {
    noSendMessage.innerHTML = "Apenas você pode enviar mensagens.";
} else if (lango === "Allemand") {
    noSendMessage.innerHTML = "Nur Sie können Nachrichten senden.";
}

if (lango === "Français") {
    cree.innerHTML = "Créez";
} else if (lango === "Anglais") {
    cree.innerHTML = "Create";
} else if (lango === "Espagnol") {
    cree.innerHTML = "Crear";
} else if (lango === "Arabe") {
    cree.innerHTML = "إنشاء";
} else if (lango === "Portugais") {
    cree.innerHTML = "Criar";
} else if (lango === "Allemand") {
    cree.innerHTML = "Erstellen";
}

if (lango === "Français") {
    termine.innerHTML = "terminée";
} else if (lango === "Anglais") {
    termine.innerHTML = "completed";
} else if (lango === "Espagnol") {
    termine.innerHTML = "terminado";
} else if (lango === "Arabe") {
    termine.innerHTML = "مكتمل";
} else if (lango === "Portugais") {
    termine.innerHTML = "completado";
} else if (lango === "Allemand") {
    termine.innerHTML = "abgeschlossen";
}

if (lango === "Français") {
    imageSend.innerHTML = "Choisir une image à envoyer";
} else if (lango === "Anglais") {
    imageSend.innerHTML = "Choose an image to send";
} else if (lango === "Espagnol") {
    imageSend.innerHTML = "Elija una imagen para enviar";
} else if (lango === "Arabe") {
    imageSend.innerHTML = "اختر صورة للإرسال";
} else if (lango === "Portugais") {
    imageSend.innerHTML = "Escolha uma imagem para enviar";
} else if (lango === "Allemand") {
    imageSend.innerHTML = "Wählen Sie ein Bild zum Senden";
}

if (lango === "Français") {
    Partager.innerHTML = "Partager";
} else if (lango === "Anglais") {
    Partager.innerHTML = "Share";
} else if (lango === "Espagnol") {
    Partager.innerHTML = "Compartir";
} else if (lango === "Arabe") {
    Partager.innerHTML = "مشاركة";
} else if (lango === "Portugais") {
    Partager.innerHTML = "Compartilhar";
} else if (lango === "Allemand") {
    Partager.innerHTML = "Teilen";
}

if (lango === "Français") {
    termine2.innerHTML = "terminée";
} else if (lango === "Anglais") {
    termine2.innerHTML = "completed";
} else if (lango === "Espagnol") {
    termine2.innerHTML = "terminado";
} else if (lango === "Arabe") {
    termine2.innerHTML = "مكتمل";
} else if (lango === "Portugais") {
    termine2.innerHTML = "completado";
}


if (lango === "Français") {
    fertiMessage.innerHTML = "Messagerie FertiConnect";
} else if (lango === "Anglais") {
    fertiMessage.innerHTML = "FertiConnect Messaging";
} else if (lango === "Espagnol") {
    fertiMessage.innerHTML = "Mensajería de FertiConnect";
} else if (lango === "Arabe") {
    fertiMessage.innerHTML = "الرسائل النصية في فيرتيكونيكت";
} else if (lango === "Portugais") {
    fertiMessage.innerHTML = "Mensagens FertiConnect";
} else if (lango === "Allemand") {
    fertiMessage.innerHTML = "FertiConnect-Nachrichten";
}

if (lango === "Français") {
    Commentaires.innerHTML = "Commentaires";
} else if (lango === "Anglais") {
    Commentaires.innerHTML = "Comments";
} else if (lango === "Espagnol") {
    Commentaires.innerHTML = "Comentarios";
} else if (lango === "Arabe") {
    Commentaires.innerHTML = "تعليقات";
} else if (lango === "Portugais") {
    Commentaires.innerHTML = "Comentários";
} else if (lango === "Allemand") {
    Commentaires.innerHTML = "Kommentare";
}

if (lango === "Français") {
    atcvcompttext.innerHTML = "Activation de compte";
} else if (lango === "Anglais") {
    atcvcompttext.innerHTML = "Account Activation";
} else if (lango === "Espagnol") {
    atcvcompttext.innerHTML = "Activación de cuenta";
} else if (lango === "Arabe") {
    atcvcompttext.innerHTML = "تفعيل الحساب";
} else if (lango === "Portugais") {
    atcvcompttext.innerHTML = "Ativação da Conta";
} else if (lango === "Allemand") {
    atcvcompttext.innerHTML = "Kontoaktivierung";
}

if (lango === "Français") {
    bienvenudansderticonnect.innerHTML = "Bienvenue dans l'Espace de FertiConnect ! Pour activer votre compte, veuillez saisir le code de vérification que vous avez reçu par e-mail :";
} else if (lango === "Anglais") {
    bienvenudansderticonnect.innerHTML = "Welcome to FertiConnect Space! To activate your account, please enter the verification code you received by email:";
} else if (lango === "Espagnol") {
    bienvenudansderticonnect.innerHTML = "¡Bienvenido al Espacio de FertiConnect! Para activar su cuenta, ingrese el código de verificación que recibió por correo electrónico:";
} else if (lango === "Arabe") {
    bienvenudansderticonnect.innerHTML = "مرحبًا بك في مساحة فيرتيكونيكت! لتنشيط حسابك ، يرجى إدخال رمز التحقق الذي تلقيته عبر البريد الإلكتروني:";
} else if (lango === "Portugais") {
    bienvenudansderticonnect.innerHTML = "Bem-vindo ao Espaço FertiConnect! Para ativar sua conta, insira o código de verificação que você recebeu por e-mail:";
} else if (lango === "Allemand") {
    bienvenudansderticonnect.innerHTML = "Willkommen im FertiConnect Space! Um Ihr Konto zu aktivieren, geben Sie bitte den Verifizierungscode ein, den Sie per E-Mail erhalten haben:";
}

if (lango === "Français") {
    code_verification.innerHTML = "Code de vérification :";
} else if (lango === "Anglais") {
    code_verification.innerHTML = "Verification Code :";
} else if (lango === "Espagnol") {
    code_verification.innerHTML = "Código de verificación :";
} else if (lango === "Arabe") {
    code_verification.innerHTML = "رمز التحقق :";
} else if (lango === "Portugais") {
    code_verification.innerHTML = "Código de Verificação :";
} else if (lango === "Allemand") {
    code_verification.innerHTML = "Bestätigungscode :";
}

if (lango === "Français") {
    Activermoncompte.innerHTML = "Activer mon compte";
} else if (lango === "Anglais") {
    Activermoncompte.innerHTML = "Activate my account";
} else if (lango === "Espagnol") {
    Activermoncompte.innerHTML = "Activar mi cuenta";
} else if (lango === "Arabe") {
    Activermoncompte.innerHTML = "تفعيل حسابي";
} else if (lango === "Portugais") {
    Activermoncompte.innerHTML = "Ativar minha conta";
} else if (lango === "Allemand") {
    Activermoncompte.innerHTML = "Mein Konto aktivieren";
}


if (lango === "Français") {
    termine3.innerHTML = "terminée";
} else if (lango === "Anglais") {
    termine3.innerHTML = "completed";
} else if (lango === "Espagnol") {
    termine3.innerHTML = "terminado";
} else if (lango === "Arabe") {
    termine3.innerHTML = "مكتمل";
} else if (lango === "Portugais") {
    termine3.innerHTML = "completado";
} else if (lango === "Allemand") {
    termine3.innerHTML = "abgeschlossen";
}

if (lango === "Français") {
    infoActv.innerHTML = "Si vous n'avez pas reçu de code de vérification, veuillez vérifier votre dossier de courriers indésirables (spam).";
} else if (lango === "Anglais") {
    infoActv.innerHTML = "If you haven't received a verification code, please check your spam folder.";
} else if (lango === "Espagnol") {
    infoActv.innerHTML = "Si no ha recibido un código de verificación, por favor revise su carpeta de spam.";
} else if (lango === "Arabe") {
    infoActv.innerHTML = "إذا لم تتلق رمز التحقق، يرجى التحقق من مجلد الرسائل غير المرغوب فيها.";
} else if (lango === "Portugais") {
    infoActv.innerHTML = "Se você não recebeu um código de verificação, por favor, verifique sua pasta de spam.";
} else if (lango === "Allemand") {
    infoActv.innerHTML = "Wenn Sie keinen Verifizierungscode erhalten haben, überprüfen Sie bitte Ihren Spam-Ordner.";
}

if (lango === "Français") {
    noactvaccuntexit.innerHTML = "Je ne veux pas activer mon compte.";
} else if (lango === "Anglais") {
    noactvaccuntexit.innerHTML = "I don't want to activate my account.";
} else if (lango === "Espagnol") {
    noactvaccuntexit.innerHTML = "No quiero activar mi cuenta.";
} else if (lango === "Arabe") {
    noactvaccuntexit.innerHTML = "لا أريد تفعيل حسابي.";
} else if (lango === "Portugais") {
    noactvaccuntexit.innerHTML = "Eu não quero ativar minha conta.";
} else if (lango === "Allemand") {
    noactvaccuntexit.innerHTML = "Ich möchte mein Konto nicht aktivieren.";
}

if (lango === "Français") {
    deconnecter_acv_msg.innerHTML = "Me déconnecter.";
} else if (lango === "Anglais") {
    deconnecter_acv_msg.innerHTML = "Log me out.";
} else if (lango === "Espagnol") {
    deconnecter_acv_msg.innerHTML = "Cerrar sesión.";
} else if (lango === "Arabe") {
    deconnecter_acv_msg.innerHTML = "تسجيل الخروج.";
} else if (lango === "Portugais") {
    deconnecter_acv_msg.innerHTML = "Desconectar.";
} else if (lango === "Allemand") {
    deconnecter_acv_msg.innerHTML = "Abmelden.";
}

if (lango === "Français") {
    actvsuucss.innerHTML = "Le compte a été activé avec succès.";
} else if (lango === "Anglais") {
    actvsuucss.innerHTML = "The account has been successfully activated.";
} else if (lango === "Espagnol") {
    actvsuucss.innerHTML = "La cuenta ha sido activada con éxito.";
} else if (lango === "Arabe") {
    actvsuucss.innerHTML = "تم تفعيل الحساب بنجاح.";
} else if (lango === "Portugais") {
    actvsuucss.innerHTML = "A conta foi ativada com sucesso.";
} else if (lango === "Allemand") {
    actvsuucss.innerHTML = "Das Konto wurde erfolgreich aktiviert.";
}

if (lango === "Français") {
    deco.innerHTML = "Souhaites-tu te déconnecter ?";
} else if (lango === "Anglais") {
    deco.innerHTML = "Do you want to log out?";
} else if (lango === "Espagnol") {
    deco.innerHTML = "¿Quieres cerrar sesión?";
} else if (lango === "Arabe") {
    deco.innerHTML = "هل ترغب في تسجيل الخروج؟";
} else if (lango === "Portugais") {
    deco.innerHTML = "Você quer sair?";
} else if (lango === "Allemand") {
    deco.innerHTML = "Möchten Sie sich abmelden?";
}
if (lango === "Français") {
    deco_neccterbtn.innerHTML = "déconnecter";
    anulerdeco_neccterbtn.innerHTML = "fermer";
} else if (lango === "Anglais") {
    deco_neccterbtn.innerHTML = "log out";
    anulerdeco_neccterbtn.innerHTML = "close";
} else if (lango === "Espagnol") {
    deco_neccterbtn.innerHTML = "cerrar sesión";
    anulerdeco_neccterbtn.innerHTML = "cerrar";
} else if (lango === "Arabe") {
    deco_neccterbtn.innerHTML = "تسجيل الخروج";
    anulerdeco_neccterbtn.innerHTML = "إغلاق";
} else if (lango === "Portugais") {
    deco_neccterbtn.innerHTML = "desconectar";
    anulerdeco_neccterbtn.innerHTML = "fechar";
} else if (lango === "Allemand") {
    deco_neccterbtn.innerHTML = "abmelden";
    anulerdeco_neccterbtn.innerHTML = "schließen";
}


const input4 = document.getElementById("inputpubadd_comment");
if (lango === "Français") {
 input4.placeholder = "Ajouter un commentaire ?";
} else if (lango === "Anglais") {
 input4.placeholder = "Add a comment?";
} else if (lango === "Espagnol") {
    input4.placeholder = "¿Agregar un comentario?";
} else if (lango === "Arabe") {
    input4.placeholder = "إضافة تعليق؟";
} else if (lango === "Portugais") {
    input4.placeholder = "Adicionar um comentário?";
} else if (lango === "Allemand") {
    input4.placeholder = "Einen Kommentar hinzufügen?";
 } 


}

option_header_message.addEventListener('click', function() {
    const optionbg_wind = document.querySelector('.optionbg_wind');
    if( optionbg_wind.style.display === "flex"){
       optionbg_wind.style.display = "none";
    }else{
       optionbg_wind.style.display = "flex";
    }
});


  auth.onAuthStateChanged(async (user) => {
    if (user){
        const mail = user.email;
        const iduser = user.uid;
        const doclistemessageref = collection(db,typeuserclick,iduser,"listeMessage");
        const querySnapshot = await getDocs(doclistemessageref);


        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const idRoomMessage= data.idRoomMessage;
                const idamisMessage= data.idamisMessage;
                const typeamisMessage= data.TypeamisMessage;
                afficheLesDetaillesDeListe(idamisMessage,typeamisMessage,idRoomMessage,typeuserclick,iduser);
            });
        } else {


            const userRef = doc(db, typeuserclick,iduser );
            const docSnapshot = await getDoc(userRef);
            const lang = docSnapshot.data().lang;
 
            
            const  listemesagebg = document.getElementById("listemesagebg");
            const div = document.createElement("div");
            div.className="divnoamis";
            const divimg = document.createElement("img");
            divimg.className="divimg";
            divimg.src="img/undraw_mailbox_re_dvds.svg";
            div.appendChild(divimg);
            listemesagebg.appendChild(div);

            const divptext = document.createElement("div");
            divptext.classList="divnoamis";
            const divptextP = document.createElement("p");

            if (lang === "Français") {
                divptextP.innerHTML = `
                Désolé, nous ne pouvons pas afficher votre liste de messages car vous n'avez pas encore envoyé de message à quelqu'un.<br><br>
                
                Pour créer une conversation avec une personne :<br>
                - Veuillez accéder à son profil et cliquer sur le bouton "Message".<br>
                - Ensuite, vous retrouverez cette personne ici dans votre liste de messages.<br>
                <br><br>
                Cordialement,<br>
                
                L'équipe de FertiConnect<br>
                `;
            } else if (lang === "Anglais") {
                divptextP.innerHTML = `
                Sorry, we cannot display your message list because you haven't sent a message to anyone yet.<br><br>
                
                To start a conversation with someone:<br>
                - Please go to their profile and click the "Message" button.<br>
                - Then you will find this person here in your message list.<br>
                <br><br>
                Best regards,<br>
                
                The FertiConnect Team<br>
                `;
            } else if (lang === "Espagnol") {
                divptextP.innerHTML = `
                Lo siento, no podemos mostrar su lista de mensajes porque aún no ha enviado un mensaje a nadie.<br><br>
                
                Para iniciar una conversación con alguien:<br>
                - Vaya a su perfil y haga clic en el botón "Mensaje".<br>
                - Luego encontrará a esta persona aquí en su lista de mensajes.<br>
                <br><br>
                Atentamente,<br>
                
                El equipo de FertiConnect<br>
                `;
            } else if (lang === "Arabe") {
                divptextP.innerHTML = `
                عذرًا، لا يمكننا عرض قائمة الرسائل الخاصة بك لأنك لم ترسل رسالة إلى أي شخص بعد.<br><br>
                
                لبدء محادثة مع شخص ما:<br>
                - يرجى الانتقال إلى ملفه الشخصي والنقر على زر "رسالة".<br>
                - بعد ذلك، ستجد هذا الشخص هنا في قائمة الرسائل الخاصة بك.<br>
                <br><br>
                مع تحيات،<br>
                
                فريق فيرتي كونكت<br>
                `;
            } else if (lang === "Portugais") {
                divptextP.innerHTML = `
                Desculpe, não podemos exibir sua lista de mensagens porque você ainda não enviou uma mensagem para ninguém.<br><br>
                
                Para iniciar uma conversa com alguém:<br>
                - Por favor, vá ao perfil dela e clique no botão "Mensagem".<br>
                - Depois, você encontrará essa pessoa aqui na sua lista de mensagens.<br>
                <br><br>
                Atenciosamente,<br>
                
                A equipe FertiConnect<br>
                `;
            } else if (lang === "Allemand") {
                divptextP.innerHTML = `
                Entschuldigung, wir können Ihre Nachrichtenliste nicht anzeigen, da Sie noch niemandem eine Nachricht gesendet haben.<br><br>
                
                Um eine Unterhaltung mit jemandem zu beginnen:<br>
                - Gehen Sie bitte zu dessen Profil und klicken Sie auf die Schaltfläche "Nachricht".<br>
                - Dann finden Sie diese Person hier in Ihrer Nachrichtenliste.<br>
                <br><br>
                Mit freundlichen Grüßen,<br>
                
                Das FertiConnect-Team<br>
                `;
            }
            
            divptextP.style.color="#176561";
            divptext.appendChild(divptextP);
            listemesagebg.appendChild(divptext);
        }



        async function afficheLesDetaillesDeListe(idamisMessage,typeamisMessage,idRoomMessage,typeuserclick,iduser){
            const docRef = doc(db, typeamisMessage, idamisMessage);
            try {
                const docSnap = await getDoc(docRef); 
                if (docSnap.exists()) {
                    const datauser = docSnap.data(); 
                    const nameUserlisteamismessage = datauser.nom;
                    const prenimUserlisteamismessage = datauser.prenom;
                    const imageUserlisteamismessage = datauser.imguser;
                    const emailUserlisteamismessage = datauser.email;
                    const  listemesagebg = document.getElementById("listemesagebg");
                    const  amisbgmessage = document.createElement("div");
                    amisbgmessage.className="amisbgmessage";
                    const  imageamismessagebg = document.createElement("div");
                    imageamismessagebg.className="imageamismessagebg";
                    const  imageamismessagebgimg = document.createElement("img");
                    if(imageUserlisteamismessage){
                        imageamismessagebgimg.src= imageUserlisteamismessage;
                    }else{
                        imageamismessagebgimg.src= "img/ferticonnectiLogoWhite.svg";
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
                        afficherlesMessages(typeamisMessage, idamisMessage ,imageUserlisteamismessage,prenimUserlisteamismessage,nameUserlisteamismessage,idRoomMessage,typeuserclick,iduser,emailUserlisteamismessage);
                    }
                }
            }
            catch (error){
                console.error("-----",error);
            }
        }
    }
});


async function afficherlesMessages(typeamisMessage, idamisMessage ,imageUserlisteamismessage,prenimUserlisteamismessage,nameUserlisteamismessage,idRoomMessage,typeuserclick,iduser,emailUserlisteamismessage){
    const discution_bg = document.getElementById("discution_bg");
    discution_bg.style.right = "0";
    const messagesDiv = document.getElementById("content_message");

    bottom_message_bar.style.bottom="0";
    const navbarbuttom = document.querySelector('.navbar_buttom');
    navbarbuttom.style.bottom = '-120%';
    if(window.innerWidth > 600){
        var bottom_message = document.querySelector('.bottom_message').clientHeight;
        messagesDiv.style.bottom = bottom_message+"px";
        messagesDiv.style.position="absolute";
      }
    const Image_header_message = document.getElementById("Image_header_message");
    const Image_header_messageimg = document.createElement("img");
    if(imageUserlisteamismessage){
        Image_header_messageimg.src= imageUserlisteamismessage;
    }else{
        Image_header_messageimg.src= "img/ferticonnectiLogoWhite.svg";
    }
    Image_header_message.innerHTML="";
    Image_header_message.appendChild(Image_header_messageimg);
    const name_room_message = document.getElementById("name_room_message");
    name_room_message.innerHTML=prenimUserlisteamismessage+" "+nameUserlisteamismessage;
    
    const database = getDatabase(app);
    //const messageRef = databaseRef(database, 'messages');
    const messageRef = databaseRef(database, idRoomMessage );

    const messageInput = document.getElementById("messageecrit");
    const sendButton = document.getElementById("sendmessageicon");
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
          }else{console.log("user no");

          }
    }
    // pour envoyer le rapport medicale
    const optionbg_wind_btn_dossier = document.getElementById("optionbg_wind_btn_dossier");
    optionbg_wind_btn_dossier.onclick = envoiyerleRapportmedicale;
    async function envoiyerleRapportmedicale() {
        const docRef = doc(db, typeuserclick, iduser);
        try {
            const docSnap = await getDoc(docRef); 
            if (docSnap.exists()) {
                const datauser = docSnap.data();
                
                const name_formulaire = datauser.nom;
                const prenom_formulaire = datauser.prenom;
                const formulaire_liste1 = datauser.formulaire_liste1;
                const formulaire_liste2 = datauser.formulaire_liste2;
                const formulaire_liste3 = datauser.formulaire_liste3;

                // Pour les données du formulaire_liste1
                const adresseFormulaireListe1 = formulaire_liste1.address;
                const dateNaissanceFormulaireListe1 = formulaire_liste1.dateOfBirth;
                const genreFormulaireListe1 = formulaire_liste1.gender;
                const numeroTelephoneFormulaireListe1 = formulaire_liste1.phoneNumber;
                
                // Pour les données du formulaire_liste2
                const ageFormulaireListe2 = formulaire_liste2.age;
                const allergiesFormulaireListe2 = formulaire_liste2.allergies;
                const enfantsFormulaireListe2 = formulaire_liste2.children;
                const problemesFertiliteFormulaireListe2 = formulaire_liste2.fertilityIssues;
                const antecedentsMedicauxFormulaireListe2 = formulaire_liste2.medicalHistory;
                const medicamentsFormulaireListe2 = formulaire_liste2.medications;
                const plusEnfantsFormulaireListe2 = formulaire_liste2.moreChildren;
                const partenaireFormulaireListe2 = formulaire_liste2.partenaire;
                
                // Pour les données du formulaire_liste3
                const complicationsGrossesseFormulaireListe3 = formulaire_liste3.pregnancyComplications;
                const trimestreAvortementFormulaireListe3 = formulaire_liste3.abortionTrimester;
                const detailsActiviteFormulaireListe3 = formulaire_liste3.activityDetails;
                const consommationAlcoolSemaineFormulaireListe3 = formulaire_liste3.alcoholPerWeek;
                const consommationCannabisFormulaireListe3 = formulaire_liste3.cannabisConsumption;
                const consommationCannabisSemaineFormulaireListe3 = formulaire_liste3.cannabisPerWeek;
                const cigarettesParJourFormulaireListe3 = formulaire_liste3.cigarettesPerDay;
                const regulariteCycleFormulaireListe3 = formulaire_liste3.cycleRegularity;
                const objectifsSanteFormulaireListe3 = formulaire_liste3.healthGoals;
                const activitePhysiqueFormulaireListe3 = formulaire_liste3.physicalActivity;
                const attentesPlateformeFormulaireListe3 = formulaire_liste3.platformExpectations;
                const professionFormulaireListe3 = formulaire_liste3.profession;
                const fumeurFormulaireListe3 = formulaire_liste3.smoker;
                const antecedentsMaladiesFormulaireListe3 = formulaire_liste3.stdHistory;
                const conditionsTravailFormulaireListe3 = formulaire_liste3.workConditions;
                const stressTravailFormulaireListe3 = formulaire_liste3.workStress;

                const docRef = doc(db, typeuserclick, partenaireFormulaireListe2);
                try {
                    const docSnap = await getDoc(docRef); 
                    if (docSnap.exists()) {
                        const datauser_partenaire = docSnap.data();
                        const name_partenaire_formulaire = datauser_partenaire.nom;
                        const prenom_partenaire_formulaire = datauser_partenaire.prenom;
                        const formulaire_partenaire_liste1 = datauser_partenaire.formulaire_liste1;
                        const formulaire_partenaire_liste2 = datauser_partenaire.formulaire_liste2;
                        const formulaire_partenaire_liste3 = datauser_partenaire.formulaire_liste3;
                
                        // Compléter avec les données du partenaire
                        const adressePartenaireFormulaireListe1 = formulaire_partenaire_liste1.address;
                        const dateNaissancePartenaireFormulaireListe1 = formulaire_partenaire_liste1.dateOfBirth;
                        const genrePartenaireFormulaireListe1 = formulaire_partenaire_liste1.gender;
                        const numeroTelephonePartenaireFormulaireListe1 = formulaire_partenaire_liste1.phoneNumber;
                        
                        const agePartenaireFormulaireListe2 = formulaire_partenaire_liste2.age;
                        const allergiesPartenaireFormulaireListe2 = formulaire_partenaire_liste2.allergies;
                        const enfantsPartenaireFormulaireListe2 = formulaire_partenaire_liste2.children;
                        const problemesFertilitePartenaireFormulaireListe2 = formulaire_partenaire_liste2.fertilityIssues;
                        const antecedentsMedicauxPartenaireFormulaireListe2 = formulaire_partenaire_liste2.medicalHistory;
                        const medicamentsPartenaireFormulaireListe2 = formulaire_partenaire_liste2.medications;
                        const plusEnfantsPartenaireFormulaireListe2 = formulaire_partenaire_liste2.moreChildren;
                        
                        const complicationsGrossessePartenaireFormulaireListe3 = formulaire_partenaire_liste3.pregnancyComplications;
                        const trimestreAvortementPartenaireFormulaireListe3 = formulaire_partenaire_liste3.abortionTrimester;
                        const detailsActivitePartenaireFormulaireListe3 = formulaire_partenaire_liste3.activityDetails;
                        const consommationAlcoolSemainePartenaireFormulaireListe3 = formulaire_partenaire_liste3.alcoholPerWeek;
                        const consommationCannabisPartenaireFormulaireListe3 = formulaire_partenaire_liste3.cannabisConsumption;
                        const consommationCannabisSemainePartenaireFormulaireListe3 = formulaire_partenaire_liste3.cannabisPerWeek;
                        const cigarettesParJourPartenaireFormulaireListe3 = formulaire_partenaire_liste3.cigarettesPerDay;
                        const regulariteCyclePartenaireFormulaireListe3 = formulaire_partenaire_liste3.cycleRegularity;
                        const objectifsSantePartenaireFormulaireListe3 = formulaire_partenaire_liste3.healthGoals;
                        const activitePhysiquePartenaireFormulaireListe3 = formulaire_partenaire_liste3.physicalActivity;
                        const attentesPlateformePartenaireFormulaireListe3 = formulaire_partenaire_liste3.platformExpectations;
                        const professionPartenaireFormulaireListe3 = formulaire_partenaire_liste3.profession;
                        const fumeurPartenaireFormulaireListe3 = formulaire_partenaire_liste3.smoker;
                        const antecedentsMaladiesPartenaireFormulaireListe3 = formulaire_partenaire_liste3.stdHistory;
                        const conditionsTravailPartenaireFormulaireListe3 = formulaire_partenaire_liste3.workConditions;
                        const stressTravailPartenaireFormulaireListe3 = formulaire_partenaire_liste3.workStress;


                        
                         const messagePartenaire = `
                       Informations du Partenaire :
                       
                       Nom : ${prenom_partenaire_formulaire} ${name_partenaire_formulaire}<br><br>
                       
                       Informations Personnelles :<br>
                       - Date de naissance : ${dateNaissancePartenaireFormulaireListe1}<br>
                       - Sexe : ${genrePartenaireFormulaireListe1}<br>
                       - Adresse : ${adressePartenaireFormulaireListe1}<br>
                       - Numéro de téléphone : ${numeroTelephonePartenaireFormulaireListe1}<br><br>
                       
                       Informations Médicales :<br>
                       - Âge : ${agePartenaireFormulaireListe2}<br>
                       - Allergies connues : ${allergiesPartenaireFormulaireListe2}<br>
                       - Nombre d'enfants : ${enfantsPartenaireFormulaireListe2}<br>
                       - Problèmes de fertilité : ${problemesFertilitePartenaireFormulaireListe2}<br>
                       - Antécédents médicaux importants : ${antecedentsMedicauxPartenaireFormulaireListe2}<br>
                       - Médicaments ou compléments alimentaires actuels : ${medicamentsPartenaireFormulaireListe2}<br>
                       - Souhaitez-vous avoir plus d'enfants : ${plusEnfantsPartenaireFormulaireListe2}<br><br>
                       
                       Informations Complémentaires :<br>
                       - Complications lors de grossesses précédentes : ${complicationsGrossessePartenaireFormulaireListe3}<br>
                       - Trimestre des avortements : ${trimestreAvortementPartenaireFormulaireListe3}<br>
                       - Détails de l'activité physique : ${detailsActivitePartenaireFormulaireListe3}<br>
                       - Consommation d'alcool par semaine : ${consommationAlcoolSemainePartenaireFormulaireListe3}<br>
                       - Consommation de cannabis : ${consommationCannabisPartenaireFormulaireListe3}<br>
                       - Consommation de cannabis par semaine : ${consommationCannabisSemainePartenaireFormulaireListe3}<br>
                       - Nombre de cigarettes fumées par jour : ${cigarettesParJourPartenaireFormulaireListe3}<br>
                       - Régularité du cycle menstruel : ${regulariteCyclePartenaireFormulaireListe3}<br>
                       - Objectifs en matière de santé reproductive : ${objectifsSantePartenaireFormulaireListe3}<br>
                       - Activité physique régulière : ${activitePhysiquePartenaireFormulaireListe3}<br>
                       - Attentes de la plateforme : ${attentesPlateformePartenaireFormulaireListe3}<br>
                       - Profession : ${professionPartenaireFormulaireListe3}<br>
                       - Fumeur : ${fumeurPartenaireFormulaireListe3}<br>
                       - Antécédents de maladies sexuellement transmissibles : ${antecedentsMaladiesPartenaireFormulaireListe3}<br>
                       - Exposition aux pesticides ou températures importantes : ${conditionsTravailPartenaireFormulaireListe3}<br>
                       - Conditions de travail stressantes : ${stressTravailPartenaireFormulaireListe3}<br><br>
                       `;
                       
                   


                // Construction du message de courriel avec les données récupérées
                 const message = `
                 Objet : Formulaire de santé reproductive - Données soumises<br><br>
                 
                 Cher Dr. ${prenimUserlisteamismessage} ${nameUserlisteamismessage} ,<br><br>
                 
                 Votre patient, ${prenom_formulaire} ${name_formulaire}, a soumis son dossier médical ainsi que celui de leur partenaire ${prenom_partenaire_formulaire} ${name_partenaire_formulaire}, dans le but de vous permettre une meilleure compréhension de leur état de santé et de faciliter la prescription d'un traitement approprié. Voici un résumé des informations fournies : <br><br>                 
                 Informations Personnelles :<br>
                 - Date de naissance : ${dateNaissanceFormulaireListe1}<br>
                 - Sexe : ${genreFormulaireListe1}<br>
                 - Adresse : ${adresseFormulaireListe1}<br>
                 - Numéro de téléphone : ${numeroTelephoneFormulaireListe1}<br><br>
                 
                 Informations Médicales :<br>
                 - Âge : ${ageFormulaireListe2}<br>
                 - Allergies connues : ${allergiesFormulaireListe2}<br>
                 - Nombre d'enfants : ${enfantsFormulaireListe2}<br>
                 - Problèmes de fertilité : ${problemesFertiliteFormulaireListe2}<br>
                 - Antécédents médicaux importants : ${antecedentsMedicauxFormulaireListe2}<br>
                 - Médicaments ou compléments alimentaires actuels : ${medicamentsFormulaireListe2}<br>
                 - Souhaitez-vous avoir plus d'enfants : ${plusEnfantsFormulaireListe2}<br>
                 - ID du partenaire : ${partenaireFormulaireListe2}<br><br>
                 
                 Informations Complémentaires :<br>
                 - Complications lors de grossesses précédentes : ${complicationsGrossesseFormulaireListe3}<br>
                 - Trimestre des avortements : ${trimestreAvortementFormulaireListe3}<br>
                 - Détails de l'activité physique : ${detailsActiviteFormulaireListe3}<br>
                 - Consommation d'alcool par semaine : ${consommationAlcoolSemaineFormulaireListe3}<br>
                 - Consommation de cannabis : ${consommationCannabisFormulaireListe3}<br>
                 - Consommation de cannabis par semaine : ${consommationCannabisSemaineFormulaireListe3}<br>
                 - Nombre de cigarettes fumées par jour : ${cigarettesParJourFormulaireListe3}<br>
                 - Régularité du cycle menstruel : ${regulariteCycleFormulaireListe3}<br>
                 - Objectifs en matière de santé reproductive : ${objectifsSanteFormulaireListe3}<br>
                 - Activité physique régulière : ${activitePhysiqueFormulaireListe3}<br>
                 - Attentes de la plateforme : ${attentesPlateformeFormulaireListe3}<br>
                 - Profession : ${professionFormulaireListe3}<br>
                 - Fumeur : ${fumeurFormulaireListe3}<br>
                 - Antécédents de maladies sexuellement transmissibles : ${antecedentsMaladiesFormulaireListe3}<br>
                 - Exposition aux pesticides ou températures importantes : ${conditionsTravailFormulaireListe3}<br>
                 - Conditions de travail stressantes : ${stressTravailFormulaireListe3}<br><br>
                 
                 <br><br>
                 ------------------------------
                 <br><br>
                 
                 ${messagePartenaire}

                 <br><br>
                 <br><br>

                 Cordialement,<br><br>
                 
                 L'équipe de FertiConnect<br>
                 `;
                 

                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "ne.pas.rependre.ferticonnect@gmail.com",
                    Password : "B58393493272B1AC4DFEF6455183C24DDCAB",
                    To : emailUserlisteamismessage,
                    From : 'ne.pas.rependre.ferticonnect@gmail.com',
                    Subject : `Formulaire de santé reproductive - Soumission des données de ${prenom_formulaire} ${name_formulaire} et de leur partenaire ${prenom_partenaire_formulaire} ${name_partenaire_formulaire} `,
                    Body : message ,
        
                    
                }).then(
                    console.log("email is send")
                );
                const user = auth.currentUser;
                if (user) {
                    const userId = user.uid;                     
                        push(messageRef, {
                            text: `Cher Dr. ${prenimUserlisteamismessage} ${nameUserlisteamismessage}, je vous informe que le dossier médical de ${prenom_formulaire} ${name_formulaire} ainsi que de leur partenaire ${prenom_partenaire_formulaire} ${name_partenaire_formulaire} a été envoyé à votre adresse e-mail.`,
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
              }
            } catch (error) {
                console.error("Error fetching document: ", error);
            }
                

            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching document: ", error);
        }
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
  //mescabins_name
function tailledecran(){
    const navbar_buttom = document.getElementById('navbar_buttom');
    const shercheBtn = document.getElementById('shercheBtn');

    if (window.innerWidth < 600) {
        navbar_buttom.style.display="flex";
        shercheBtn.style.display="none";
    } else {
        navbar_buttom.style.display="none";
        shercheBtn.style.display="flex";
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
    const navigationbar = document.querySelector('.navigationbar');
    navigationbar.style.top = "0";
    refreshPage();
    scrollToTop();
}

cabinsbtnnavbuttom.onclick = cabinsbtnnavbuttomFunction;
function cabinsbtnnavbuttomFunction(){
    const navigationbar = document.querySelector('.navigationbar');
    navigationbar.style.top = "0";
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
    navigationbar.style.top = "-100%";
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


// sycl liste 
const mescabins_66 = document.getElementById('mescabins_66');
const mycabinsbg66 = document.getElementById('mycabinsbg66');
const titleoptionmycabinsbg66 = document.getElementById('titleoptionmycabinsbg66');

titleoptionmycabinsbg66.addEventListener('click', function() {
    if(mescabins_66.style.display === "none") {
        mescabins_66.style.display = "flex";
        mycabinsbg66.style.height = "400px";
    } else {
        mescabins_66.style.display = "none";
        mycabinsbg66.style.height = "auto";
    }
});

// formus liste 
const mescabins_77 = document.getElementById('mescabins_77');
const mycabinsbg77 = document.getElementById('mycabinsbg77');
const titleoptionmycabinsbg77 = document.getElementById('titleoptionmycabinsbg77');

titleoptionmycabinsbg77.addEventListener('click', function() {
    if(mescabins_77.style.display === "none") {
        mescabins_77.style.display = "flex";
        mycabinsbg77.style.height = "400px";
    } else {
        mescabins_77.style.display = "none";
        mycabinsbg77.style.height = "auto";
    }
});

// psyco liste 
const mescabins_88 = document.getElementById('mescabins_88');
const mycabinsbg88 = document.getElementById('mycabinsbg88');
const titleoptionmycabinsbg88 = document.getElementById('titleoptionmycabinsbg88');

titleoptionmycabinsbg88.addEventListener('click', function() {
    if(mescabins_88.style.display === "none") {
        mescabins_88.style.display = "flex";
        mycabinsbg88.style.height = "400px";
    } else {
        mescabins_88.style.display = "none";
        mycabinsbg88.style.height = "auto";
    }
});


// sports liste 
const mescabins_818 = document.getElementById('mescabins_818');
const mycabinsbg818 = document.getElementById('mycabinsbg818');
const titleoptionmycabinsbg818 = document.getElementById('titleoptionmycabinsbg818');

titleoptionmycabinsbg818.addEventListener('click', function() {
    if(mescabins_818.style.display === "none") {
        mescabins_818.style.display = "flex";
        mycabinsbg818.style.height = "400px";
    } else {
        mescabins_818.style.display = "none";
        mycabinsbg818.style.height = "auto";
    }
});



// traitement liste 
const mescabins_99 = document.getElementById('mescabins_99');
const mycabinsbg99 = document.getElementById('mycabinsbg99');
const titleoptionmycabinsbg99 = document.getElementById('titleoptionmycabinsbg99');

titleoptionmycabinsbg99.addEventListener('click', function() {
    if(mescabins_99.style.display === "none") {
        mescabins_99.style.display = "flex";
        mycabinsbg99.style.height = "400px";
    } else {
        mescabins_99.style.display = "none";
        mycabinsbg99.style.height = "auto";
    }
});



// pathology liste 
const mescabins_00 = document.getElementById('mescabins_00');
const mycabinsbg00 = document.getElementById('mycabinsbg00');
const titleoptionmycabinsbg00 = document.getElementById('titleoptionmycabinsbg00');

titleoptionmycabinsbg00.addEventListener('click', function() {
    if(mescabins_00.style.display === "none") {
        mescabins_00.style.display = "flex";
        mycabinsbg00.style.height = "400px";
    } else {
        mescabins_00.style.display = "none";
        mycabinsbg00.style.height = "auto";
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

anulerdeco_neccterbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    deconnectionbg.style.display="none";
});

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
                    const storageRef1 = storageRef(storage, 'images/' + file.name);
                    await uploadBytes(storageRef1, file);
                    const downloadURL1 = await getDownloadURL(storageRef1);
                    const inputpubadd = document.getElementById("inputpubadd").value;
                    const docRef = await addDoc(collection(db, 'publications'), {
                        publication: inputpubadd,
                        imageUrl_publication: downloadURL1,
                        iduser: userId,
                        placepub: "home",
                        typeuser: typeuserclick,
                        timestamp: firestoreServerTimestamp()
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
                        timestamp: firestoreServerTimestamp(),
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
                    image_user_pub_img.src = "img/ferticonnectiLogoWhite.svg";
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
                                    image_user_pub_img.src = "img/ferticonnectiLogoWhite.svg";
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
                                photoprofilepubadd_comments.src = "img/ferticonnectiLogoWhite.svg";
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
                                                    hedercomment_img_img.src = "img/ferticonnectiLogoWhite.svg";

                                                }
                
                                            }
                                        });
                                    }
                                    else{
                                        hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                        hedercomment_img_img.src = imguser ? imguser : "img/ferticonnectiLogoWhite.svg";


                                    }
                                }
                                else{
                                    hedercomment_h1.innerHTML = nameuser + " " + prenameuser;
                                    hedercomment_img_img.src = imguser ? imguser : "img/ferticonnectiLogoWhite.svg";


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
                            console.log('yes');
                              btnjaimei1.style.display = "none";
                              btnjaimei2.style.display = "flex";
                          }
                          // else {
                          //    btnjaimei1.style.display = "flex";
                          //    btnjaimei2.style.display = "none";
                          //    console.log('no');
                          //}
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











