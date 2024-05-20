
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

// Récupérer l'ID du produit et le nom du magasin à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const typeuserclick = urlParams.get('typeuserclick');
const typeOfUser = urlParams.get('typeuserclick');
const IdCabine = urlParams.get('cabineidclick');

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const userId = user.uid; 
        const docRef_CabineRoom = doc(db, typeOfUser , userId);
        console.log("userId ====="+userId);
      try {
          const docuser = await getDoc(docRef_CabineRoom); 
          if (docuser.exists()) {
              const docuserinfo = docuser.data(); 
              const langue = docuserinfo.lang;
              
              const id1 = document.getElementById("FertiConnect");
              if (langue === "Français") {
                  id1.innerHTML = "FertiConnect";
              } else if (langue === "Anglais") {
                  id1.innerHTML = "FertiConnect";
              } else if (langue === "Espagnol") {
                  id1.innerHTML = "ConexiónFértil";
              } else if (langue === "Arabe") {
                  id1.innerHTML = "فرتي كونكت";
              } else if (langue === "Portugais") {
                  id1.innerHTML = "ConexãoFértil";
              } else if (langue === "Allemand") {
                  id1.innerHTML = "FertiVerbindung";
              }
              
              const id2 = document.getElementById("messageAjoutePhoto");
              if (langue === "Français") {
                  id2.innerHTML = "Ajoutez une photo de couverture à votre groupe";
              } else if (langue === "Anglais") {
                  id2.innerHTML = "Add a cover photo to your group";
              } else if (langue === "Espagnol") {
                  id2.innerHTML = "Agrega una foto de portada a tu grupo";
              } else if (langue === "Arabe") {
                  id2.innerHTML = "أضف صورة غلاف لمجموعتك";
              } else if (langue === "Portugais") {
                  id2.innerHTML = "Adicione uma foto de capa ao seu grupo";
              } else if (langue === "Allemand") {
                  id2.innerHTML = "Fügen Sie ein Titelbild zu Ihrer Gruppe hinzu";
              }
              
              const id3 = document.getElementById("versPageAcc");
              if (langue === "Français") {
                  id3.innerHTML = "fertiConnect - Page d'accueil";
              } else if (langue === "Anglais") {
                  id3.innerHTML = "fertiConnect - Home Page";
              } else if (langue === "Espagnol") {
                  id3.innerHTML = "fertiConnect - Página de inicio";
              } else if (langue === "Arabe") {
                  id3.innerHTML = "فرتي كونكت - الصفحة الرئيسية";
              } else if (langue === "Portugais") {
                  id3.innerHTML = "fertiConnect - Página inicial";
              } else if (langue === "Allemand") {
                  id3.innerHTML = "fertiConnect - Startseite";
              }
              
              const id4 = document.getElementById("cliniques");
              if (langue === "Français") {
                  id4.innerHTML = "cliniques";
              } else if (langue === "Anglais") {
                  id4.innerHTML = "clinics";
              } else if (langue === "Espagnol") {
                  id4.innerHTML = "clínicas";
              } else if (langue === "Arabe") {
                  id4.innerHTML = "عيادات";
              } else if (langue === "Portugais") {
                  id4.innerHTML = "clínicas";
              } else if (langue === "Allemand") {
                  id4.innerHTML = "Kliniken";
              }
              
              const id5 = document.getElementById("Amis_");
              if (langue === "Français") {
                  id5.innerHTML = "Amis";
              } else if (langue === "Anglais") {
                  id5.innerHTML = "Friends";
              } else if (langue === "Espagnol") {
                  id5.innerHTML = "Amigos";
              } else if (langue === "Arabe") {
                  id5.innerHTML = "أصدقاء";
              } else if (langue === "Portugais") {
                  id5.innerHTML = "Amigos";
              } else if (langue === "Allemand") {
                  id5.innerHTML = "Freunde";
              }
              
              const id6 = document.getElementById("QMPEUM");
              if (langue === "Français") {
                  id6.innerHTML = "Que le médecin peut envoyer un message";
              } else if (langue === "Anglais") {
                  id6.innerHTML = "That the doctor can send a message";
              } else if (langue === "Espagnol") {
                  id6.innerHTML = "Que el médico puede enviar un mensaje";
              } else if (langue === "Arabe") {
                  id6.innerHTML = "أن الطبيب يمكنه إرسال رسالة";
              } else if (langue === "Portugais") {
                  id6.innerHTML = "Que o médico pode enviar uma mensagem";
              } else if (langue === "Allemand") {
                  id6.innerHTML = "Dass der Arzt eine Nachricht senden kann";
              }
              
              const id7 = document.getElementById("RAPDACC");
              if (langue === "Français") {
                  id7.innerHTML = "Retourner à la page d'accueil";
              } else if (langue === "Anglais") {
                  id7.innerHTML = "Return to homepage";
              } else if (langue === "Espagnol") {
                  id7.innerHTML = "Volver a la página de inicio";
              } else if (langue === "Arabe") {
                  id7.innerHTML = "العودة إلى الصفحة الرئيسية";
              } else if (langue === "Portugais") {
                  id7.innerHTML = "Voltar para a página inicial";
              } else if (langue === "Allemand") {
                  id7.innerHTML = "Zurück zur Startseite";
              }
              
              const id8 = document.getElementById("creeUneESpacemessageCabine");
              if (langue === "Français") {
                  id8.innerHTML = "Créez une messagerie pour votre cabinet";
              } else if (langue === "Anglais") {
                  id8.innerHTML = "Create a messaging system for your office";
              } else if (langue === "Espagnol") {
                  id8.innerHTML = "Cree un sistema de mensajería para su oficina";
              } else if (langue === "Arabe") {
                  id8.innerHTML = "إنشاء نظام مراسلة لمكتبك";
              } else if (langue === "Portugais") {
                  id8.innerHTML = "Crie um sistema de mensagens para o seu escritório";
              } else if (langue === "Allemand") {
                  id8.innerHTML = "Erstellen Sie ein Nachrichtensystem für Ihr Büro";
              }
              
              const id9 = document.getElementById("vousseulpouversendmessage");
              if (langue === "Français") {
                  id9.innerHTML = "Vous seul pouvez envoyer des messages.";
              } else if (langue === "Anglais") {
                  id9.innerHTML = "Only you can send messages.";
              } else if (langue === "Espagnol") {
                  id9.innerHTML = "Solo tú puedes enviar mensajes.";
              } else if (langue === "Arabe") {
                  id9.innerHTML = "يمكنك فقط إرسال الرسائل.";
              } else if (langue === "Portugais") {
                  id9.innerHTML = "Só você pode enviar mensagens.";
              } else if (langue === "Allemand") {
                  id9.innerHTML = "Nur Sie können Nachrichten senden.";
              }
              const input222 = document.getElementById("ajoutermembreTitle6");
              if (langue === "Français") {
                  input222.innerHTML = "Ajouter un membre dans cette clinique";
              } else if (langue === "Anglais") {
                  input222.innerHTML = "Add a member to this clinic";
              } else if (langue === "Espagnol") {
                  input222.innerHTML = "Añadir un miembro a esta clínica";
              } else if (langue === "Arabe") {
                  input222.innerHTML = "إضافة عضو إلى هذه العيادة";
              } else if (langue === "Portugais") {
                  input222.innerHTML = "Adicionar um membro a esta clínica";
              } else if (langue === "Allemand") {
                  input222.innerHTML = "Ein Mitglied zu dieser Klinik hinzufügen";
              }
              
              const input223 = document.getElementById("ajoutermembrediscreption6");
              if (langue === "Français") {
                  input223.innerHTML = "Ajouter un membre dans cette clinique, pour faire ça il faut accéder au profil de l'utilisateur que vous souhaitez ajouter à ce groupe et copier l'ID, puis le mettre ici";
              } else if (langue === "Anglais") {
                  input223.innerHTML = "Add a member to this clinic. To do this, access the profile of the user you want to add to this group, copy the ID, and enter it here";
              } else if (langue === "Espagnol") {
                  input223.innerHTML = "Añadir un miembro a esta clínica. Para hacer esto, acceda al perfil del usuario que desea agregar a este grupo, copie el ID y póngalo aquí";
              } else if (langue === "Arabe") {
                  input223.innerHTML = "أضف عضوًا إلى هذه العيادة. للقيام بذلك، قم بالوصول إلى ملف تعريف المستخدم الذي تريد إضافته إلى هذه المجموعة، وانسخ المعرف، وضعه هنا";
              } else if (langue === "Portugais") {
                  input223.innerHTML = "Adicionar um membro a esta clínica. Para fazer isso, acesse o perfil do usuário que deseja adicionar a este grupo, copie o ID e coloque-o aqui";
              } else if (langue === "Allemand") {
                  input223.innerHTML = "Fügen Sie ein Mitglied zu dieser Klinik hinzu. Um dies zu tun, greifen Sie auf das Profil des Benutzers zu, den Sie zu dieser Gruppe hinzufügen möchten, kopieren Sie die ID und geben Sie sie hier ein";
              }
              
              const input224 = document.getElementById("text156");
              if (langue === "Français") {
                  input224.innerHTML = "id";
              } else if (langue === "Anglais") {
                  input224.innerHTML = "id";
              } else if (langue === "Espagnol") {
                  input224.innerHTML = "id";
              } else if (langue === "Arabe") {
                  input224.innerHTML = "معرف";
              } else if (langue === "Portugais") {
                  input224.innerHTML = "id";
              } else if (langue === "Allemand") {
                  input224.innerHTML = "ID";
              }
              
              const input225 = document.getElementById("text166");
              if (langue === "Français") {
                  input225.innerHTML = "ajouter";
              } else if (langue === "Anglais") {
                  input225.innerHTML = "add";
              } else if (langue === "Espagnol") {
                  input225.innerHTML = "añadir";
              } else if (langue === "Arabe") {
                  input225.innerHTML = "إضافة";
              } else if (langue === "Portugais") {
                  input225.innerHTML = "adicionar";
              } else if (langue === "Allemand") {
                  input225.innerHTML = "hinzufügen";
              }

              
              const input226 = document.getElementById("text176");
              if (langue === "Français") {
                  input226.innerHTML = "Fait";
              } else if (langue === "Anglais") {
                  input226.innerHTML = "Done";
              } else if (langue === "Espagnol") {
                  input226.innerHTML = "Hecho";
              } else if (langue === "Arabe") {
                  input226.innerHTML = "منجز"; // Arabic for "done"
              } else if (langue === "Portugais") {
                  input226.innerHTML = "Feito";
              } else if (langue === "Allemand") {
                  input226.innerHTML = "Erledigt";
              }
              const id10 = document.getElementById("cree1");
              if (langue === "Français") {
                  id10.innerHTML = "Créez";
              } else if (langue === "Anglais") {
                  id10.innerHTML = "Create";
              } else if (langue === "Espagnol") {
                  id10.innerHTML = "Crear";
              } else if (langue === "Arabe") {
                  id10.innerHTML = "إنشاء";
              } else if (langue === "Portugais") {
                  id10.innerHTML = "Criar";
              } else if (langue === "Allemand") {
                  id10.innerHTML = "Erstellen";
              }
              const input221 = document.getElementById("AjouterMembre6");
              if (langue === "Français") {
                  input221.innerHTML = "Ajouter un membre ";
              } else if (langue === "Anglais") {
                  input221.innerHTML = "Add a member";
              } else if (langue === "Espagnol") {
                  input221.innerHTML = "Añadir un miembro";
              } else if (langue === "Arabe") {
                  input221.innerHTML = "إضافة عضو";
              } else if (langue === "Portugais") {
                  input221.innerHTML = "Adicionar um membro";
              } else if (langue === "Allemand") {
                  input221.innerHTML = "Mitglied hinzufügen";
              }
              const id11 = document.getElementById("termin1");
              if (langue === "Français") {
                  id11.innerHTML = "terminée";
              } else if (langue === "Anglais") {
                  id11.innerHTML = "completed";
              } else if (langue === "Espagnol") {
                  id11.innerHTML = "terminada";
              } else if (langue === "Arabe") {
                  id11.innerHTML = "مكتمل";
              } else if (langue === "Portugais") {
                  id11.innerHTML = "concluída";
              } else if (langue === "Allemand") {
                  id11.innerHTML = "abgeschlossen";
              }
              
              const id12 = document.getElementById("ChoisirUneImagesend");
              if (langue === "Français") {
                  id12.innerHTML = "Choisir une image à envoyer";
              } else if (langue === "Anglais") {
                  id12.innerHTML = "Choose an image to send";
              } else if (langue === "Espagnol") {
                  id12.innerHTML = "Elige una imagen para enviar";
              } else if (langue === "Arabe") {
                  id12.innerHTML = "اختر صورة لإرسالها";
              } else if (langue === "Portugais") {
                  id12.innerHTML = "Escolha uma imagem para enviar";
              } else if (langue === "Allemand") {
                  id12.innerHTML = "Wählen Sie ein Bild zum Senden aus";
              }
              
              const id13 = document.getElementById("Partager");
              if (langue === "Français") {
                  id13.innerHTML = "Partager";
              } else if (langue === "Anglais") {
                  id13.innerHTML = "Share";
              } else if (langue === "Espagnol") {
                  id13.innerHTML = "Compartir";
              } else if (langue === "Arabe") {
                  id13.innerHTML = "مشاركة";
              } else if (langue === "Portugais") {
                  id13.innerHTML = "Compartilhar";
              } else if (langue === "Allemand") {
                  id13.innerHTML = "Teilen";
              }
              
              const id14 = document.getElementById("termin2");
              if (langue === "Français") {
                  id14.innerHTML = "terminée";
              } else if (langue === "Anglais") {
                  id14.innerHTML = "completed";
              } else if (langue === "Espagnol") {
                  id14.innerHTML = "terminada";
              } else if (langue === "Arabe") {
                  id14.innerHTML = "مكتمل";
              } else if (langue === "Portugais") {
                  id14.innerHTML = "concluída";
              } else if (langue === "Allemand") {
                  id14.innerHTML = "abgeschlossen";
              }


              
              
              const id15 = document.getElementById("Commentaires");
              if (langue === "Français") {
                  id15.innerHTML = "Commentaires";
              } else if (langue === "Anglais") {
                  id15.innerHTML = "Comments";
              } else if (langue === "Espagnol") {
                  id15.innerHTML = "Comentarios";
              } else if (langue === "Arabe") {
                  id15.innerHTML = "تعليقات";
              } else if (langue === "Portugais") {
                  id15.innerHTML = "Comentários";
              } else if (langue === "Allemand") {
                  id15.innerHTML = "Kommentare";
              }
              
              const id16 = document.getElementById("SouDeconecter");
              if (langue === "Français") {
                  id16.innerHTML = "Souhaites-tu te déconnecter ?";
              } else if (langue === "Anglais") {
                  id16.innerHTML = "Do you want to log out?";
              } else if (langue === "Espagnol") {
                  id16.innerHTML = "¿Quieres cerrar sesión?";
              } else if (langue === "Arabe") {
                  id16.innerHTML = "هل تريد تسجيل الخروج؟";
              } else if (langue === "Portugais") {
                  id16.innerHTML = "Você quer sair?";
              } else if (langue === "Allemand") {
                  id16.innerHTML = "Möchten Sie sich abmelden?";
              }
              
              const id17 = document.getElementById("deco_neccterbtn");
              if (langue === "Français") {
                  id17.innerHTML = "déconnecter";
              } else if (langue === "Anglais") {
                  id17.innerHTML = "log out";
              } else if (langue === "Espagnol") {
                  id17.innerHTML = "cerrar sesión";
              } else if (langue === "Arabe") {
                  id17.innerHTML = "تسجيل خروج";
              } else if (langue === "Portugais") {
                  id17.innerHTML = "sair";
              } else if (langue === "Allemand") {
                  id17.innerHTML = "abmelden";
              }
              
              const id18 = document.getElementById("anulerdeco_neccterbtn");
              if (langue === "Français") {
                  id18.innerHTML = "fermer";
              } else if (langue === "Anglais") {
                  id18.innerHTML = "close";
              } else if (langue === "Espagnol") {
                  id18.innerHTML = "cerrar";
              } else if (langue === "Arabe") {
                  id18.innerHTML = "إغلاق";
              } else if (langue === "Portugais") {
                  id18.innerHTML = "fechar";
              } else if (langue === "Allemand") {
                  id18.innerHTML = "schließen";
              }
              
              const id19 = document.getElementById("CommentairesH1");
              if (langue === "Français") {
                  id19.innerHTML = "Commentaires";
              } else if (langue === "Anglais") {
                  id19.innerHTML = "Comments";
              } else if (langue === "Espagnol") {
                  id19.innerHTML = "Comentarios";
              } else if (langue === "Arabe") {
                  id19.innerHTML = "تعليقات";
              } else if (langue === "Portugais") {
                  id19.innerHTML = "Comentários";
              } else if (langue === "Allemand") {
                  id19.innerHTML = "Kommentare";
              }
              
              const id20 = document.getElementById("MLIDCDVC");
              if (langue === "Français") {
                  id20.innerHTML = "Modifiez l'image de couverture du votre cabine";
              } else if (langue === "Anglais") {
                  id20.innerHTML = "Modify the cover image of your office";
              } else if (langue === "Espagnol") {
                  id20.innerHTML = "Modificar la imagen de portada de tu oficina";
              } else if (langue === "Arabe") {
                  id20.innerHTML = "تعديل صورة غلاف مكتبك";
              } else if (langue === "Portugais") {
                  id20.innerHTML = "Modifique a imagem de capa do seu escritório";
              } else if (langue === "Allemand") {
                  id20.innerHTML = "Ändern Sie das Titelbild Ihres Büros";
              }
              
              const id21 = document.getElementById("Partager3");
              if (langue === "Français") {
                  id21.innerHTML = "Partager";
              } else if (langue === "Anglais") {
                  id21.innerHTML = "Share";
              } else if (langue === "Espagnol") {
                  id21.innerHTML = "Compartir";
              } else if (langue === "Arabe") {
                  id21.innerHTML = "مشاركة";
              } else if (langue === "Portugais") {
                  id21.innerHTML = "Compartilhar";
              } else if (langue === "Allemand") {
                  id21.innerHTML = "Teilen";
              }
              
              const id22 = document.getElementById("termin4");
              if (langue === "Français") {
                  id22.innerHTML = "terminée";
              } else if (langue === "Anglais") {
                  id22.innerHTML = "completed";
              } else if (langue === "Espagnol") {
                  id22.innerHTML = "terminada";
              } else if (langue === "Arabe") {
                  id22.innerHTML = "مكتمل";
              } else if (langue === "Portugais") {
                  id22.innerHTML = "concluída";
              } else if (langue === "Allemand") {
                  id22.innerHTML = "abgeschlossen";
              }
              
              const id23 = document.getElementById("fermer4");
              if (langue === "Français") {
                  id23.innerHTML = "fermer";
              } else if (langue === "Anglais") {
                  id23.innerHTML = "close";
              } else if (langue === "Espagnol") {
                  id23.innerHTML = "cerrar";
              } else if (langue === "Arabe") {
                  id23.innerHTML = "إغلاق";
              } else if (langue === "Portugais") {
                  id23.innerHTML = "fechar";
              } else if (langue === "Allemand") {
                  id23.innerHTML = "schließen";
              }
              

              
              const input1 = document.getElementById("inputpubadd");
              if (langue === "Français") {
                  input1.placeholder = "Quoi de neuf ?";
              } else if (langue === "Anglais") {
                  input1.placeholder = "What's new?";
              } else if (langue === "Espagnol") {
                  input1.placeholder = "¿Qué hay de nuevo?";
              } else if (langue === "Arabe") {
                  input1.placeholder = "ما الجديد؟";
              } else if (langue === "Portugais") {
                  input1.placeholder = "O que há de novo?";
              } else if (langue === "Allemand") {
                  input1.placeholder = "Was gibt's Neues?";
                }
              const input2 = document.getElementById("inputpubadd_comment");
              if (langue === "Français") {
                  input2.placeholder = "Ajouter un commentaire ?";
              } else if (langue === "Anglais") {
                  input2.placeholder = "Add a comment?";
              } else if (langue === "Espagnol") {
                  input2.placeholder = "¿Agregar un comentario?";
              } else if (langue === "Arabe") {
                  input2.placeholder = "إضافة تعليق؟";
              } else if (langue === "Portugais") {
                  input2.placeholder = "Adicionar um comentário?";
              } else if (langue === "Allemand") {
                  input2.placeholder = "Einen Kommentar hinzufügen?";
                }
              const input3 = document.getElementById("inputpubadd_comment");
              if (langue === "Français") {
                  input3.placeholder = "Ajouter un commentaire ?";
              } else if (langue === "Anglais") {
                  input3.placeholder = "Add a comment?";
              } else if (langue === "Espagnol") {
                  input3.placeholder = "¿Agregar un comentario?";
              } else if (langue === "Arabe") {
                  input3.placeholder = "إضافة تعليق؟";
              } else if (langue === "Portugais") {
                  input3.placeholder = "Adicionar um comentário?";
              } else if (langue === "Allemand") {
                  input3.placeholder = "Einen Kommentar hinzufügen?";
               }  

               const input4 = document.getElementById("inputpubadd_comment");
               if (langue === "Français") {
                input4.placeholder = "Ajouter un commentaire ?";
               } else if (langue === "Anglais") {
                input4.placeholder = "Add a comment?";
               } else if (langue === "Espagnol") {
                   input4.placeholder = "¿Agregar un comentario?";
               } else if (langue === "Arabe") {
                   input4.placeholder = "إضافة تعليق؟";
               } else if (langue === "Portugais") {
                   input4.placeholder = "Adicionar um comentário?";
               } else if (langue === "Allemand") {
                   input4.placeholder = "Einen Kommentar hinzufügen?";
                  } 
               

               

               


                 
            }  
      
       }catch(error){
 
       }
    }
});


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
messageAjoutePhoto.addEventListener("click", async (e) => {
    e.preventDefault();
    photocouverturechangerbg.style.display="flex";

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
            const storageRef2 = storageRef(storage, 'images/' + file3.name);
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







const sendImageicon = document.getElementById('sendImageicon');
const messageecrit = document.getElementById('messageecrit');
const sendmessageicon = document.getElementById('sendmessageicon');
const QMPEUM_ = document.getElementById('QMPEUM');


const docRef_info_cab = doc(db, "cabines", IdCabine);
try {
    const docSnap = await getDoc(docRef_info_cab); // Récupération du snapshot du document
    const datacabine = docSnap.data(); // Récupération des données du document cabine
    const cabineImage = datacabine.cabineImage;
    const creatorId = datacabine.creatorId;
    const nameCabine = datacabine.nameCabine;

    const name_room_message = document.getElementById("name_room_message");
    name_room_message.innerHTML= nameCabine;
    const Image_header_message = document.getElementById("Image_header_message");
    const Image_header_message_img = document.createElement("img");
    Image_header_message_img.src=cabineImage;
    Image_header_message.appendChild(Image_header_message_img)

  
}catch{

}


function tailledecran(){
    const navbar_buttom = document.getElementById('navbar_buttom');

    if (window.innerWidth < 600) {
        navbar_buttom.style.display="flex";
    } else {
        navbar_buttom.style.display="none";
    }
}

var navigationbarHeight = document.querySelector('.navigationbar').clientHeight;

const discution_bg = document.querySelector('.discution_bg');

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
    scrollToTop()

}
cabinsbtnnavbuttom.onclick = cabinsbtnnavbuttomFunction;
function cabinsbtnnavbuttomFunction(){

    leftespace.style.display = "flex";
    rightespace.style.display = "none";
    midleespace.style.display = "none";
    scrollToTop()

}
messagebtnnavbuttom.onclick = messagebtnnavbuttomFunction;
function messagebtnnavbuttomFunction(){

    if(typeuserclick === "patient"){
        sendImageicon.style.display="none";
        messageecrit.style.display="none";
        sendmessageicon.style.display="none";
        QMPEUM_.style.display="flex";
    }
    else{
        sendImageicon.style.display="flex";
        messageecrit.style.display="flex";
        sendmessageicon.style.display="flex";
        QMPEUM_.style.display="none";
    }
    
    var bgHome = document.querySelector('.bgHome');
    bgHome.style.padding="0";
    var navigationbar = document.querySelector('.navigationbar');
    navigationbar.style.display = "none";
    
    
    leftespace.style.display = "none";
    rightespace.style.display = "flex";
    midleespace.style.display = "none";
    navbarbuttom.style.display = "none";

    
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
   
   
   option_header_message.addEventListener('click', function() {
       if( optionbg_wind.style.display === "flex"){
           optionbg_wind.style.display = "none";
       }else{
           optionbg_wind.style.display = "flex";
       }
   });
 
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
      // Alternative pour les navigateurs ne prenant pas en charge scrollTo
      contentMessage.scrollTop = contentMessage.scrollHeight ;
  }



}


if (window.innerWidth < 600) {
    creemessagegroup();
    messagegroupeCabine();
    if(typeuserclick === "patient"){
        sendImageicon.style.display="none";
        messageecrit.style.display="none";
        sendmessageicon.style.display="none";
        QMPEUM_.style.display="flex";
        QMPEUM.style.color="var(--bg-color)";
    }
    else{
        sendImageicon.style.display="flex";
        messageecrit.style.display="flex";
        sendmessageicon.style.display="flex";
        QMPEUM_.style.display="none";
    }
    
} else {
    creemessagegroup();
    messagegroupeCabine();
}



  //---------------------------------------- messagenging--------------------------------
async function creemessagegroup(){
    
    const wating = document.getElementById("wating");
    wating.style.display="flex";
    const creeUneRoomCabineBg = document.getElementById("creeUneRoomCabineBg");
    const confirmeCreeMeaasegCabine = document.getElementById("confirmeCreeMeaasegCabine");
    const originalmessageCabine = document.getElementById("originalmessageCabine");
    const loadermessageCabine = document.getElementById("loadermessageCabine");
    const DonemessageCabine = document.getElementById("DonemessageCabine");
  

    try {
            const docRef_CabineRoom = doc(db, "cabines", IdCabine,"messagesCabine","messageCabineroom");
            const docSnapCabin = await getDoc(docRef_CabineRoom); 
            const dataCabineRoom = docSnapCabin.data(); 
            if(dataCabineRoom){   
               const creatIdMessageRoom = dataCabineRoom.idroomCabineMessage;
               if(creatIdMessageRoom){
                  creeUneRoomCabineBg.style.display="none";
                  messagegroupeCabine();
                  console.log('creatIdMessageRoom=  '+creatIdMessageRoom);
                }else{
                    creeUneRoomCabineBg.style.display="flex";
                }
            }else{
                creeUneRoomCabineBg.style.display="flex";
                
                confirmeCreeMeaasegCabine.onclick = confirmeCreeMeaasegCabineFunction;
                async function confirmeCreeMeaasegCabineFunction(){
                    
                   originalmessageCabine.style.display="none";
                   loadermessageCabine.style.display="block";
                   const user = auth.currentUser;
                   if (user) {
                       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                       let creatIdMessageRoom = '';
                       for (let i = 0; i < 20; i++) {
                           const randomIndex = Math.floor(Math.random() * characters.length);
                           creatIdMessageRoom += characters[randomIndex];
                       }
                       const userId = user.uid; 
                       try {     
                          await setDoc(doc(db, "cabines", IdCabine, "messagesCabine","messageCabineroom"), {
                              idroomCabineMessage: creatIdMessageRoom,
                          }); 
                           //---------------- send message 
                           try {
                               const docRef_Cabine = doc(db, "cabines", IdCabine);
                               const cabineRef = await getDoc(docRef_Cabine);
                               if (cabineRef.exists()) {
                                 const cabinInfo = cabineRef.data();
                                 const nameCabine = cabinInfo.name;
                                 const cabineImage = cabinInfo.cabineImage;
                                 // Autres opérations avec les données de la cabine...
                                    const database = getDatabase(app);
                                    const messageRef = databaseRef(database, creatIdMessageRoom);
                                    push(messageRef, {
                                       text: "Salut les amis ! je vous souhaite la bienvenue sur notre espace de messagerie du "+nameCabine+". Ici, vous trouverez toutes les informations importantes sur les nouvelles de notre cabine. N'hésitez pas à explorer et à nous contacter si vous avez besoin de quoi que ce soit. Nous sommes là pour vous ! 🚀",
                                       image_message:cabineImage,
                                       id_usersent:userId,
                                       timestamp: new Date().getTime() // Use local timestamp
                                    })
                                   .catch((error) => {
                                       console.error("Error adding message: ", error);
                                       wating.style.display="none";
                                   });
                                    DonemessageCabine.style.display="block";
                                    originalmessageCabine.style.display="none";
                                    loadermessageCabine.style.display="none";
                                    creemessagegroup();
                               } else {
                                   console.log("La cabine n'existe pas.");
                                   wating.style.display="none";
                                 }
                           }catch(error){
                               console.error("Error adding message: ", error);
                               wating.style.display="none";
                           }
                       } catch (error) {
                           originalmessageCabine.style.display="block";
                           loadermessageCabine.style.display="none";
                           console.error("Error adding : ", error);
                           wating.style.display="none";
                       }
                   } else {
                       console.log("User not logged in");
                       wating.style.display="none";
                   }
                
                }
             }   
             
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
        wating.style.display="none";

    }

}


            //---------------- send message 
async function messagegroupeCabine(){
      const docRef_CabineRoom = doc(db, "cabines", IdCabine,"messagesCabine","messageCabineroom");
      try {
        const docSnapCabin = await getDoc(docRef_CabineRoom); 
          if (docSnapCabin.exists()) {
            const dataCabineRoom = docSnapCabin.data(); 
            const creatIdMessageRoom = dataCabineRoom.idroomCabineMessage;
              const database = getDatabase(app);
              //const messageRef = databaseRef(database, 'messages');
              const messageRef = databaseRef(database, creatIdMessageRoom );
              //img/ferticonnectiLogoWhite.svg
              const messageInput = document.getElementById("messageecrit");
              const sendButton = document.getElementById("sendmessageicon");
              const messagesDiv = document.getElementById("content_message");
              messagesDiv.style.width="100%";
              if(window.innerWidth > 600){
                var bottom_message = document.querySelector('.bottom_message').clientHeight;
                messagesDiv.style.bottom = bottom_message+"px";
                messagesDiv.style.position="absolute";
              }
              wating.style.display="none";
              sendButton.onclick = envoiyerMessage;
              // Event listener for sending message
              function envoiyerMessage() {
                   const message = messageInput.value.trim();
                    const user = auth.currentUser;
                    if (user) {
                      const userId = user.uid; 
                      if (message !== "") {
                          push(messageRef, {
                              text: message,
                              id_usersent:userId,
                              timestamp: new Date().getTime() // Use local timestamp
                          })
                          .then(() => {
                              messageInput.value = "";
                          })
                          .catch((error) => {
                              console.error("Error adding message: ", error);
                          });
                      }
                    }
              }
              const photochanger_couverture_i2 = document.getElementById("photochanger_couverture_i2");
              const nouveauimage_couv2 = document.getElementById("nouveauimage_couv2");
              const fermer22 = document.getElementById("fermer22");
              const partagerphotoPbtn_couv2 = document.getElementById("partagerphotoPbtn_couv2");
              const Done_couv2 = document.getElementById("Done_couv2");
              const loader_couv2 = document.getElementById("loader_couv2");
              const original_couv2 = document.getElementById("original_couv2");
              
              const photocouverturechangerbg2 = document.getElementById("photocouverturechangerbg2");
              sendImageicon.onclick = openphotocouverturechangerbg;
              function openphotocouverturechangerbg(){
                  photocouverturechangerbg2.style.display="flex"
              }
              fermer22.onclick = closephotocouverturechangerbg;
              function closephotocouverturechangerbg(){
                  photocouverturechangerbg2.style.display="none"
              }
              let file1;
              const photochanger_couverture2 = document.getElementById('photochanger_couverture2');
              photochanger_couverture2.onclick = open_photochanger_couverture;
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
                          photochanger_couverture_i2.style.display = "none";
                          nouveauimage_couv2.style.display = "flex";
                          partagerphotoPbtn_couv2.style.display = "block";
                          nouveauimage_couv2.innerHTML = "";
              
                          // Affichage de l'image dans la galerie
                          const img = document.createElement('img');
                          img.src = imageUrl;
                          nouveauimage_couv2.appendChild(img);
                      };
                  };
                  input.click();
            }
          partagerphotoPbtn_couv2.onclick = partagerphotoPbtn_couvfunction;
     async function partagerphotoPbtn_couvfunction(){
            original_couv2.style.display = "none";
              loader_couv2.style.display = "block";
                loader_couv2.style.color="white";
    
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
                           timestamp: new Date().getTime() // Use local timestamp
                       })
                       .catch((error) => {
                           console.error("Error adding message: ", error);
                       });
                   }
                 }
                 original_couv2.style.display = "none";
                 loader_couv2.style.display = "none";
                 Done_couv2.style.display = "block";
                 photocouverturechangerbg2.style.display="none"
                 
             } catch (error) {
                     console.error(error);
                     original_couv.style.display = "block";
                     loader_couv.style.display = "none";
                     Done_couv.style.display = "none";
                     photocouverturechangerbg2.style.display="none"
                 }
             }
         }


                          // Function to display messages
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
                                        monM_bg.appendChild(mon_message);
                                        messagesDiv.appendChild(monM_bg);
        
                                    }
        
                                  }
                    
                              });
                      
                              messagesDiv.scrollTop = messagesDiv.scrollHeight;
                        }
              
                          // Listen for changes in the database and update message display
                        onValue(messageRef, (snapshot) => {
                              displayMessages(snapshot);
                        });
                    }
              
                } catch (error) {
                    wating.style.display="none";
                }
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

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// -----------------------------------------------------------------------
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
const titleoptionmycabinsbg4 = document.getElementById('titleoptionmycabinsbg4');

titleoptionmycabinsbg4.addEventListener('click', () => {
    window.location.href = `ferticonnectmedecin-home.html?typeuserclick=${typeOfUser}`; // Redirection vers la page du produit avec l'ID du produit
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
//mes amis liste 
const mescabins_6 = document.getElementById('mescabins_6');
const mycabinsbg6 = document.getElementById('mycabinsbg6');
const titleoptionmycabinsbg6 = document.getElementById('titleoptionmycabinsbg6');

const submitajouterunmemebre = document.getElementById('ajouterunmembtreid') ;
const Done1O6 = document.getElementById('Done1O6') ;
const original1O6 = document.getElementById('original1O6') ;
const loader1O6 = document.getElementById('loader1O6') ;

titleoptionmycabinsbg6.addEventListener('click', function() {
    if(mescabins_6.style.display === "none") {
        mescabins_6.style.display = "flex";
        mycabinsbg6.style.height = "400px";
    } else {
        mescabins_6.style.display = "none";
        mycabinsbg6.style.height = "auto";
    }
});

submitajouterunmemebre.addEventListener('click', async function() {
    const inputid = document.getElementById('idamembreRajouter6').value;

    original1O6.style.display = "none";
    loader1O6.style.display = "flex";
    
    try {
        // Check if inputid already exists
        const querySnapshot = await getDocs(query(
            collection(db, "cabines", IdCabine, "membres"),
            where("idmembres", "==", inputid)
        ));

        if (!querySnapshot.empty) {
            // inputid already exists, handle it accordingly
            alert("This ID already exists in this group");
            loader1O6.style.display = "none";
            original1O6.style.display = "flex";
        }
        else{


        // If inputid does not exist, proceed to add a new member
        await addDoc(collection(db, "cabines", IdCabine, "membres"), {
            idmembres: inputid,
            typeuser: "patient",
            timestamp: firestoreServerTimestamp()
        });
        
        // Adding a reference to the 'patient' collection
        await addDoc(collection(db, "patient", inputid, "cabines"), {
            cabineId: IdCabine
        });

        loader1O6.style.display = "none";
        Done1O6.style.display = "flex";
        
        setTimeout(() => {
            Done1O6.style.display = "none";
            original1O6.style.display = "flex";
        }, 1000);
    }


    } catch (error) {
        console.error("Error adding document: ", error);
        // Optionally handle the error here
        original1O6.style.display = "flex";
        loader1O6.style.display = "none";
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






//-----------------------------------------------------------














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
 // const messageAjoutePhoto = document.getElementById("messageAjoutePhoto");
 // const couvertureCabine = document.getElementById("couvertureCabine");


  if(cabineImage){
    couvertureCabine.src= cabineImage;
    messageAjoutePhoto.style.color="var(--second2-bg-color)";
  }else{
    couvertureCabine.src="img/ferticonnectiLogoWhite.svg";
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
                         const storageRef1 = storageRef(storage, 'images/' + file.name);
                         await uploadBytes(storageRef1, file);
                         const downloadURL1 = await getDownloadURL(storageRef1);
                         const inputpubadd = document.getElementById("inputpubadd").value;

                         const docRef = await addDoc(collection(db, 'publications'), {
                             publication: inputpubadd,
                             imageUrl_publication: downloadURL1,
                             iduser: userId,
                             placepub: "cabine",
                             typeuser: typeuserclick,
                             timestamp: firestoreServerTimestamp()
                         });
                         const docRefadmin = await addDoc(collection(db, 'cabines',IdCabine,"publications"), {
                             publicationCabine_id: docRef.id,
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
                             placepub: "cabine",
                             timestamp: firestoreServerTimestamp(),
                             typeuser: typeuserclick
                         });
                         const docRefadmin = await addDoc(collection(db, 'cabines',IdCabine,"publications"), {
                            publicationCabine_id: docRef.id,
                            timestamp: firestoreServerTimestamp()
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

