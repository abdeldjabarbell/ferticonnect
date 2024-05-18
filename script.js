        // Récupération des éléments du DOM une fois qu'il est chargé
document.addEventListener("DOMContentLoaded", function() {
    const caeee_logo = document.getElementById("caeee_logo");
    const imagelogo = document.getElementById("imagelogo");
    const textLogo = document.getElementById("textLogo");
    const bg_choix_user = document.getElementById("bg_choix_user");
    // Attente de 2 secondes avant de démarrer l'animation
    setTimeout(function() {
        // Réduire la taille du logo
        caeee_logo.style.width = "70px";
        caeee_logo.style.height = "70px";

        // Lancer la rotation
        rotate(caeee_logo);
        
        // Après 3 secondes, arrondir les coins, arrêter la rotation et afficher l'image
        setTimeout(function() {
            caeee_logo.style.borderRadius = "50%";
            caeee_logo.style.transform = 'translate(-50%, -50%) rotate(3600deg)';
            setTimeout(function() {
            imagelogo.style.opacity = "1";
            textLogo.style.top = "120%";
            textLogo.style.opacity = "1";
               setTimeout(function() {
                  caeee_logo.style.width = "100vw";
                  caeee_logo.style.height = "100vh";  
                  caeee_logo.style.borderRadius="0";  
                  setTimeout(function() {
                    imagelogo.style.top = "-300%";
                    bg_choix_user.style.top = "-200%";
                    textLogo.style.top = "-200%";
                    setTimeout(function() {
                       const ferticonnect = document.getElementById('ferticonnect');
                       ferticonnect.style.transition="1s ease";
                       ferticonnect.style.color="#176561";
                       ferticonnect.style.zIndex="200";
                       const language = document.getElementById('language');
                       language.addEventListener('change', function() {
                           const selectedLanguage = language.value;
                           console.log('Langue sélectionnée : ' + selectedLanguage);
                           const containerText= document.getElementById('containerText');
                           containerText.style.opacity="1";
                           afficheLaPresentation(selectedLanguage);
                       });
                    }, 1000);
                    
                }, 500);
               }, 1500);
            }, 500);
        }, 1600);

    }, 1000); // Attente de 2 secondes avant de démarrer

    const loadingi1 = document.getElementById("loadingi1");
    const loadinglogo1 = document.getElementById("loadinglogo1");
    const loadingi2 = document.getElementById("loadingi2");
    const loadinglogo2 = document.getElementById("loadinglogo2");


    const medcinclick = document.getElementById("medcinclick");
    const patientclick = document.getElementById("patientclick");



  

});


// Fonction pour la rotation
function rotate(element) {
    var angle = 0;
    var rotationInterval = setInterval(function() {
        angle += 4; // Augmente l'angle de rotation
        element.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)'; // Applique la rotation
    }, 1); // Change la valeur pour contrôler la vitesse de rotation

    // Arrête la rotation après 4 secondes
    setTimeout(function() {
        clearInterval(rotationInterval); // Arrête l'intervalle de rotation
        element.style.transform = 'translate(-50%, -50%) rotate(0deg)'; // Remet l'élément à sa position initiale
    }, 2000);
}


function afficheLaPresentation(selectedLanguage){
    const languageselector = document.getElementById("languageselector");
    languageselector.style.display="none";
    let text;
    let next_lang;
    let direction = 'ltr'; // Default text direction is left-to-right

    if (selectedLanguage === 'fr') {
        text = `
        FertiConnect 💡, une plateforme 100% algérienne 🇩🇿, aide les personnes avec des problèmes reproductifs comme le SOPK, l'endométriose, et les dysfonctionnements érectiles. Elle vise à améliorer l'expérience des couples infertiles 👫, en offrant une prise en charge globale 🌐, une coordination efficace 🤝, et des services accessibles 📲.
        `;
        next_lang = `Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
        FertiConnect 💡, a 100% Algerian platform 🇩🇿, helps individuals with reproductive issues like PCOS, endometriosis, and erectile dysfunction. It aims to improve the experience of infertile couples 👫 by offering comprehensive care 🌐, efficient coordination 🤝, and accessible services 📲.
        `;
        next_lang = `Next`;
    } else if (selectedLanguage === 'es') {
        text = `
        FertiConnect 💡, una plataforma 100% argelina 🇩🇿, ayuda a personas con problemas reproductivos como el SOP, la endometriosis y la disfunción eréctil. Su objetivo es mejorar la experiencia de las parejas infértiles 👫 ofreciendo atención integral 🌐, coordinación eficiente 🤝 y servicios accesibles 📲.
        `;
        next_lang = `Siguiente`;
    } else if (selectedLanguage === 'ar') {
        text = `
        فرتي كونكت 💡، منصة جزائرية 100% 🇩🇿، تساعد الأشخاص الذين يعانون من مشاكل الإنجاب مثل متلازمة تكيس المبايض، بطانة الرحم المهاجرة، والخلل الوظيفي الانتصابي. تهدف إلى تحسين تجربة الأزواج الذين يعانون من العقم 👫، من خلال تقديم رعاية شاملة 🌐، تنسيق فعال 🤝، وخدمات متاحة 📲.
        `;
        next_lang = `التالي`;
        direction = 'rtl'; // Change text direction to right-to-left
    } else if (selectedLanguage === 'pt') {
        text = `
        FertiConnect 💡, uma plataforma 100% argelina 🇩🇿, ajuda pessoas com problemas reprodutivos como SOP, endometriose e disfunção erétil. Seu objetivo é melhorar a experiência de casais inférteis 👫 oferecendo cuidados abrangentes 🌐, coordenação eficiente 🤝 e serviços acessíveis 📲.
        `;
        next_lang = `Próximo`;
    } else if (selectedLanguage === 'de') {
        text = `
        FertiConnect 💡, eine 100% algerische Plattform 🇩🇿, hilft Menschen mit reproduktiven Problemen wie PCOS, Endometriose und Erektionsstörungen. Sie zielt darauf ab, die Erfahrung unfruchtbarer Paare 👫 zu verbessern, indem sie umfassende Betreuung 🌐, effiziente Koordination 🤝 und zugängliche Dienstleistungen 📲 bietet.
        `;
        next_lang = `Weiter`;
    }
      
        setTimeout(function() {
             animationText1(text,direction,selectedLanguage);
             setTimeout(function(){
                const buttonnext = document.getElementById('buttonnext1');
                buttonnext.style.display="flex";
                buttonnext.style.opacity="0";
                setTimeout(function(){        
                    buttonnext.style.opacity="1";
    
                 },700);
                 const suivant1 = document.getElementById('suivant1');
                 suivant1.innerHTML="<h3>"+next_lang+"</h3>";
                 
                 }, 2000);
         }, 1000);
}

function animationText1(text,direction,selectedLanguage){
    console.log("text ="+text);
    
    const texto = text;
    const textContainer = document.getElementById('typed-text');
    const textBar = document.getElementById('text-bar');
    textContainer.style.direction = direction; 
    async function typeWriter(texto, i) {
      if (i < texto.length) {
        if (texto.charAt(i) === '\n') {
          textContainer.innerHTML += '<br>';
        } else {
          textContainer.innerHTML += texto.charAt(i);
        }
        textBar.style.width = textContainer.clientWidth + "px";
        i++;
        setTimeout(() => typeWriter(text, i), 1);
      }
    }
    typeWriter(texto, 0);
    const suivant1 = document.getElementById("suivant1");
    suivant1.addEventListener('click', function() {
        textContainer.innerHTML = '';
        const buttonnext = document.getElementById('buttonnext1');
        buttonnext.style.opacity="0";
        buttonnext.style.display="none";
        
        toNextText1(selectedLanguage);
    });
}
   

function toNextText1(selectedLanguage){
    let text="";
    let next_lang;
    let direction = 'ltr'; // Default text direction is left-to-right

    if (selectedLanguage === 'fr') {
        text = `
        Les défis du parcours de reproduction incluent le manque de coordination entre les professionnels de santé, l'accès restreint à l'information, les difficultés de gestion des documents médicaux et le besoin de soutien émotionnel. Ces obstacles peuvent provoquer des retards dans les diagnostics, des traitements inefficaces et une expérience frustrante pour les patients. 💔🔄
        `;
        next_lang = `Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
        Challenges in the reproductive journey include lack of coordination among healthcare professionals, limited access to information, difficulties in managing medical records, and the need for emotional support. These obstacles can lead to delays in diagnosis, ineffective treatments, and a frustrating experience for patients. 💔🔄
        `;
        next_lang = `Next`;
    } else if (selectedLanguage === 'es') {
        text = `
         Los desafíos en el viaje reproductivo incluyen la falta de coordinación entre los profesionales de la salud, el acceso limitado a la información, las dificultades para gestionar los registros médicos y la necesidad de apoyo emocional. Estos obstáculos pueden provocar retrasos en el diagnóstico, tratamientos ineficaces y una experiencia frustrante para los pacientes. 💔🔄
        `;
        next_lang = `Siguiente`;
    } else if (selectedLanguage === 'ar') {
        text = `
         تشمل تحديات الرحلة التكاثرية نقص التنسيق بين المتخصصين الصحيين، والوصول المحدود إلى المعلومات، وصعوبات إدارة السجلات الطبية، والحاجة إلى الدعم العاطفي. يمكن أن تؤدي هذه العقبات إلى تأخير في التشخيص، وعلاجات غير فعالة، وتجربة محبطة للمرضى. 💔🔄
        `;
        next_lang = `التالي`;
        direction = 'rtl'; // Change text direction to right-to-left
    } else if (selectedLanguage === 'pt') {
        text = `
        Os desafios no percurso reprodutivo incluem a falta de coordenação entre os profissionais de saúde, o acesso limitado à informação, as dificuldades na gestão de registos médicos e a necessidade de apoio emocional. Estes obstáculos podem levar a atrasos no diagnóstico, tratamentos ineficazes e uma experiência frustrante para os pacientes. 💔🔄
        `;
        next_lang = `Próximo`;
    } else if (selectedLanguage === 'de') {
        text = `
        Herausforderungen im reproduktiven Weg umfassen mangelnde Koordination unter Gesundheitsfachkräften, begrenzten Zugang zu Informationen, Schwierigkeiten bei der Verwaltung von Krankenakten und dem Bedarf an emotionaler Unterstützung. Diese Hindernisse können zu Verzögerungen bei der Diagnose, ineffektiven Behandlungen und einer frustrierenden Erfahrung für Patienten führen. 💔🔄
        `;
        next_lang = `Weiter`;
    }
    
          
    setTimeout(function() {
        animationText2(text,direction,selectedLanguage);
        setTimeout(function(){
            const buttonnext = document.getElementById('buttonnext2');
            buttonnext.style.display="flex";
            buttonnext.style.opacity="0";
            setTimeout(function(){        
                buttonnext.style.opacity="1";

             },700);
            const suivant2 = document.getElementById('suivant2');
            suivant2.innerHTML="<h3>"+next_lang+"</h3>";
            
            }, 2000);
    }, 1000);


}



function animationText2(text,direction,selectedLanguage){
    console.log("text ="+text);
    const texto = text;
    const textContainer = document.getElementById('typed-text');
    const textBar = document.getElementById('text-bar');
    textContainer.style.direction = direction; 
    async function typeWriter(texto, i) {
      if (i < texto.length) {
        if (texto.charAt(i) === '\n') {
          textContainer.innerHTML += '<br>';
        } else {
          textContainer.innerHTML += texto.charAt(i);
        }
        textBar.style.width = textContainer.clientWidth + "px";
        i++;
        setTimeout(() => typeWriter(text, i), 1);
      }
    }
    typeWriter(texto, 0);
    const suivant2 = document.getElementById("suivant2");
    suivant2.addEventListener('click', function() {
        textContainer.innerHTML = '';
        const buttonnext = document.getElementById('buttonnext2');
        buttonnext.style.display="none";
        buttonnext.style.opacity="0";
        buttonnext.style.display="none";

        toNextText3(selectedLanguage);

    });
}

function toNextText3(selectedLanguage){
    let text="";
    let next_lang;
    let direction = 'ltr'; // Default text direction is left-to-right

    if (selectedLanguage === 'fr') {
        text = `
        FertiConnect 💡 simplifie le parcours de reproduction avec une plateforme en ligne. Elle aide à trouver des cliniques et des spécialistes, gère les dossiers médicaux et offre un soutien émotionnel via des forums et des messageries sécurisées. Accessible et pratique, FertiConnect relie les couples à une communauté de soutien et à des professionnels qualifiés. 🌐👩‍⚕️
        `;
            
        message =` <p id="clickHereMed"></p>  Si vous êtes médecin, cliquez ici 👨‍⚕️🖱️`;

        next_lang =`Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
        FertiConnect 💡 simplifies the reproductive journey with an online platform. It helps find clinics and specialists, manages medical records, and provides emotional support through secure forums and messaging. Accessible and convenient, FertiConnect connects couples with a supportive community and qualified professionals. 🌐👩‍⚕️
        `;
         message = ` <p id="clickHereMed">If you are a doctor, click here 👨‍⚕️🖱️</p> `;
        next_lang =`Next`;
    
    } else if (selectedLanguage === 'es') {
        text = `
        FertiConnect 💡 simplifica el camino reproductivo con una plataforma en línea. Ayuda a encontrar clínicas y especialistas, administra registros médicos y brinda apoyo emocional a través de foros y mensajería seguros. Accesible y conveniente, FertiConnect conecta a las parejas con una comunidad de apoyo y profesionales calificados. 🌐👩‍⚕️
        `;
         message = `<p id="clickHereMed">Si usted es médico, haga clic aquí.👨‍⚕️🖱️</p> `;

        next_lang =`Siguiente`;
    
    }else if (selectedLanguage === 'ar') {
        text = `
        فرتي كونكت 💡 تبسط مسار الإنجاب مع منصة عبر الإنترنت. تساعد في العثور على العيادات والأخصائيين، وتدير السجلات الطبية، وتوفر الدعم العاطفي من خلال منتديات آمنة ورسائل. يعتبر FertiConnect متاحًا ومريحًا، حيث يربط الأزواج بمجتمع داعم ومحترفين مؤهلين. 🌐👩‍⚕️
        `;
        message =` <p id="clickHereMed">👨‍⚕️🖱️ إذا كنت طبيبًا، انقر هنا</p> `;

        next_lang =`التالي`;
    
    } else if (selectedLanguage === 'pt') {
        text = `
        FertiConnect 💡 simplifica a jornada reprodutiva com uma plataforma online. Ajuda a encontrar clínicas e especialistas, gerencia registros médicos e fornece apoio emocional através de fóruns seguros e mensagens. Acessível e conveniente, o FertiConnect conecta casais a uma comunidade de apoio e profissionais qualificados. 🌐👩‍⚕️
        `; 
         message =`Se você é médico, clique aqui.👨‍⚕️🖱️`;

        next_lang =`Próximo`;
    }
    else if (selectedLanguage === 'de') {
        text = `
        FertiConnect 💡 vereinfacht den reproduktiven Weg mit einer Online-Plattform. Es hilft dabei, Kliniken und Spezialisten zu finden, verwaltet medizinische Aufzeichnungen und bietet emotionale Unterstützung durch sichere Foren und Messaging. Zugänglich und bequem verbindet FertiConnect Paare mit einer unterstützenden Community und qualifizierten Fachleuten. 🌐👩‍⚕️
        `; 
         message =`Wenn Sie Arzt sind, klicken Sie hier.👨‍⚕️🖱️`;

        next_lang =`Nächste`;
    }
    

          
    setTimeout(function() {
        animationText3(text,direction,selectedLanguage,message);
        
        setTimeout(function(){
            const buttonnext = document.getElementById('buttonnext3');
            buttonnext.style.display="flex";
            buttonnext.style.opacity="0";
            setTimeout(function(){        
                buttonnext.style.opacity="1";

            },700);

            const suivant3 = document.getElementById('suivant3');
            suivant3.innerHTML="<h3>"+next_lang+"</h3>";

            const tomedcinePage = document.getElementById('tomedcinePage');
            //medcin
            tomedcinePage.style.opacity="0";
            tomedcinePage.style.transition="1s ease";
            setTimeout(function(){   
                tomedcinePage.innerHTML=message;     
                tomedcinePage.style.opacity="1";
             },1000);

        
            tomedcinePage.addEventListener('click', function() {
                let typeOfUser = "medecin";
                window.location.href = `ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}&selectedLanguage=${selectedLanguage}`; 
                return;
            
        
            });
            suivant3.addEventListener('click', function() {
                let typeOfUser = "patient";
                window.location.href = `ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}&selectedLanguage=${selectedLanguage}`; 
                return;

            });
            
            }, 2000);
    }, 1000);


}

function animationText3(text,direction,selectedLanguage,message){
    console.log("text ="+text);
    const texto = text;
    const textContainer = document.getElementById('typed-text');
    const textBar = document.getElementById('text-bar');
    textContainer.style.direction = direction; 
    async function typeWriter(texto, i) {
      if (i < texto.length) {
        if (texto.charAt(i) === '\n') {
          textContainer.innerHTML += '<br>';
        } else {
          textContainer.innerHTML += texto.charAt(i);
        }
        textBar.style.width = textContainer.clientWidth + "px";
        i++;
        setTimeout(() => typeWriter(text, i), 1);
      }
    }
    typeWriter(texto, 0);
 
}
     