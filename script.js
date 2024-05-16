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
            FertiConnect 💡, une plateforme innovante 100% algérienne 🇩🇿, est destinée à toute personne souffrant de pathologies reproductives telles que le SOPK, l'endométriose, les troubles du cycle menstruel ou les dysfonctionnements érectiles. Notre objectif est d'améliorer l'expérience des couples infertiles 👫, d'augmenter leurs chances de succès et de leur offrir une meilleure qualité de vie. FertiConnect s'attaque à la complexité et au manque de prise en charge globale du parcours de reproduction en offrant une plateforme centralisée 📲, une coordination efficace 🤝, un soutien personnalisé et des services accessibles 🛤️.
        `;
        next_lang =`Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
            FertiConnect 💡, an innovative 100% Algerian 🇩🇿 platform, is designed for anyone suffering from reproductive pathologies such as PCOS, endometriosis, menstrual cycle disorders, or erectile dysfunctions. Our goal is to improve the experience of infertile couples 👫, increase their chances of success, and offer them a better quality of life. FertiConnect addresses the complexity and lack of comprehensive care in the reproductive journey by offering a centralized platform 📲, effective coordination 🤝, personalized support, and accessible services 🛤️.
        `;
        next_lang =`Next`;

    } else if (selectedLanguage === 'es') {
        text = `
            FertiConnect 💡, una plataforma innovadora 100% argelina 🇩🇿, está destinada a cualquier persona que sufra de patologías reproductivas como el SOP, la endometriosis, los trastornos del ciclo menstrual o las disfunciones eréctiles. Nuestro objetivo es mejorar la experiencia de las parejas infértiles 👫, aumentar sus posibilidades de éxito y ofrecerles una mejor calidad de vida. FertiConnect aborda la complejidad y la falta de atención integral en el camino de la reproducción ofreciendo una plataforma centralizada 📲, una coordinación eficaz 🤝, un apoyo personalizado y servicios accesibles 🛤️.
        `;
        next_lang =`Siguiente`;

    } else if (selectedLanguage === 'ar') {
        text = `
            FertiConnect 💡، منصة مبتكرة 100% جزائرية 🇩🇿، مخصصة لأي شخص يعاني من أمراض الإنجاب مثل متلازمة تكيس المبايض، الانتباذ البطاني الرحمي، اضطرابات الدورة الشهرية أو ضعف الانتصاب. هدفنا هو تحسين تجربة الأزواج الذين يعانون من العقم 👫، وزيادة فرص نجاحهم وتقديم نوعية حياة أفضل لهم. FertiConnect تتعامل مع التعقيدات ونقص الرعاية الشاملة في رحلة الإنجاب من خلال تقديم منصة مركزية 📲، تنسيق فعال 🤝، دعم شخصي وخدمات متاحة 🛤️.
        `;
        next_lang =`التالي`;
        direction = 'rtl'; // Change text direction to right-to-left
    } else if (selectedLanguage === 'pt') {
        text = `
            FertiConnect 💡, uma plataforma inovadora 100% argelina 🇩🇿, é destinada a qualquer pessoa que sofra de patologias reprodutivas, como SOP, endometriose, distúrbios do ciclo menstrual ou disfunções eréteis. Nosso objetivo é melhorar a experiência dos casais inférteis 👫, aumentar suas chances de sucesso e oferecer-lhes uma melhor qualidade de vida. FertiConnect aborda a complexidade e a falta de atendimento abrangente na jornada reprodutiva, oferecendo uma plataforma centralizada 📲, coordenação eficaz 🤝, suporte personalizado e serviços acessíveis 🛤️.
        `;
        next_lang =`Próximo`;

    } else {
        text = 'Please select a language.';
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
                 
                 }, 4000);
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

        const suivant1 = document.getElementById('suivant1');
        if (suivant1) {
            suivant1.removeAttribute('id'); // Supprime l'attribut id
            suivant1.id = 'suivant2'; // Remplace l'identifiant par 'suivant3'
        }

        
        toNextText1(selectedLanguage);
    });
}
   

function toNextText1(selectedLanguage){
    let text="";
    let next_lang;
    let direction = 'ltr'; // Default text direction is left-to-right

    if (selectedLanguage === 'fr') {
        text = `
            Le parcours de reproduction peut être un défi complexe, souvent entravé par des obstacles tels que le manque de coordination entre les intervenants de la santé reproductive, l'absence d'accessibilité à l'information pertinente, les difficultés de suivi et de gestion des documents médicaux, ainsi que le besoin non comblé en soutien émotionnel. Cette fragmentation peut entraîner des retards dans les diagnostics, des traitements inefficaces et une expérience frustrante pour les patients. 💔🔄
            `;
        next_lang =`Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
            The reproductive journey can be a complex challenge, often hindered by obstacles such as lack of coordination among reproductive health stakeholders, lack of accessibility to relevant information, difficulties in tracking and managing medical documents, and unmet emotional support needs. This fragmentation can lead to delays in diagnoses, ineffective treatments, and a frustrating experience for patients. 💔🔄
            `;
        next_lang =`Next`;
    
    } else if (selectedLanguage === 'es') {
        text = `
            El camino reproductivo puede ser un desafío complejo, a menudo obstaculizado por problemas como la falta de coordinación entre los actores de la salud reproductiva, la falta de accesibilidad a la información relevante, las dificultades para hacer seguimiento y gestionar documentos médicos, y las necesidades de apoyo emocional no satisfechas. Esta fragmentación puede provocar retrasos en los diagnósticos, tratamientos ineficaces y una experiencia frustrante para los pacientes. 💔🔄
            `;
        next_lang =`Siguiente`;
    
    } else if (selectedLanguage === 'ar') {
        text = `
            يمكن أن يكون الرحلة الإنجابية تحدياً معقداً، غالباً ما يتعثر بعوائق مثل النقص في التنسيق بين أصحاب مصلحة الصحة الإنجابية، وعدم الوصول إلى المعلومات ذات الصلة، وصعوبات تتبع وإدارة الوثائق الطبية، واحتياجات الدعم العاطفي غير الملباة. يمكن أن تؤدي هذه الانقسامات إلى تأخير التشخيصات، وعلاجات غير فعّالة، وتجربة محبطة للمرضى. 💔🔄
            `;
        next_lang =`التالي`;
    
    } else if (selectedLanguage === 'pt') {
        text = `
            A jornada reprodutiva pode ser um desafio complexo, frequentemente prejudicado por obstáculos como a falta de coordenação entre os intervenientes da saúde reprodutiva, a falta de acessibilidade à informação relevante, as dificuldades em acompanhar e gerir documentos médicos e as necessidades de apoio emocional não satisfeitas. Essa fragmentação pode levar a atrasos nos diagnósticos, tratamentos ineficazes e uma experiência frustrante para os pacientes. 💔🔄
            `;
        next_lang =`Próximo`;
    
    } else {
        text = 'Please select a language.';
    }
    

          
    setTimeout(function() {
        animationText2(text,direction,selectedLanguage);
        setTimeout(function(){
            const buttonnext = document.getElementById('buttonnext1');
            buttonnext.style.display="flex";
            buttonnext.style.opacity="0";
            setTimeout(function(){        
                buttonnext.style.opacity="1";

             },700);
            const suivant2 = document.getElementById('suivant2');
            suivant2.innerHTML="<h3>"+next_lang+"</h3>";
            
            }, 4000);
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
        const buttonnext = document.getElementById('buttonnext1');
        buttonnext.style.display="none";
        buttonnext.style.opacity="0";
        buttonnext.style.display="none";
        toNextText3(selectedLanguage);
        const suivant2 = document.getElementById('suivant2');
        if (suivant2) {
            suivant2.removeAttribute('id'); // Supprime l'attribut id
            suivant2.id = 'suivant3'; // Remplace l'identifiant par 'suivant3'
        }
        

    });
}

function toNextText3(selectedLanguage){
    let text="";
    let next_lang;
    let direction = 'ltr'; // Default text direction is left-to-right

    if (selectedLanguage === 'fr') {
        text = `
            FertiConnect 💡 s'engage à surmonter ces défis en offrant une solution complète et personnalisée. Notre plateforme en ligne multilingue facilite la recherche de cliniques et de spécialistes qualifiés, la gestion des dossiers médicaux et des rendez-vous, tout en fournissant des informations fiables et des ressources éducatives dans différentes langues. De plus, nous offrons un soutien émotionnel et psychologique via des forums, des groupes de discussion et des services de messagerie instantanée, dans un espace sûr et anonyme. Avec FertiConnect, vous avez accès à un réseau de professionnels qualifiés, à des informations précises et à une communauté de soutien dédiée. 🌐👩‍⚕️
            `;
            
        message =` <p id="clickHereMed"></p>  Si vous êtes médecin, cliquez ici 👨‍⚕️🖱️`;

        next_lang =`Suivant`;
    } else if (selectedLanguage === 'en') {
        text = `
            FertiConnect 💡 is committed to overcoming these challenges by offering a comprehensive and personalized solution. Our multilingual online platform facilitates the search for qualified clinics and specialists, the management of medical records and appointments, while providing reliable information and educational resources in different languages. Additionally, we offer emotional and psychological support through forums, discussion groups, and instant messaging services, in a safe and anonymous space. With FertiConnect, you have access to a network of qualified professionals, accurate information, and a dedicated support community. 🌐👩‍⚕️
            `;
         message = ` <p id="clickHereMed">If you are a doctor, click here 👨‍⚕️🖱️</p> `;
        next_lang =`Next`;
    
    } else if (selectedLanguage === 'es') {
        text = `
            FertiConnect 💡 se compromete a superar estos desafíos ofreciendo una solución completa y personalizada. Nuestra plataforma en línea multilingüe facilita la búsqueda de clínicas y especialistas calificados, la gestión de registros médicos y citas, al tiempo que proporciona información confiable y recursos educativos en diferentes idiomas. Además, ofrecemos apoyo emocional y psicológico a través de foros, grupos de discusión y servicios de mensajería instantánea, en un espacio seguro y anónimo. Con FertiConnect, tienes acceso a una red de profesionales calificados, información precisa y una comunidad de apoyo dedicada. 🌐👩‍⚕️
            `;
         message = `<p id="clickHereMed">Si usted es médico, haga clic aquí.👨‍⚕️🖱️</p> `;

        next_lang =`Siguiente`;
    
    }else if (selectedLanguage === 'ar') {
        text = `
        FertiConnect 💡 تلتزم بتجاوز هذه التحديات عن طريق تقديم حل شامل ومخصص. تسهل منصتنا عبر الإنترنت متعددة اللغات البحث عن العيادات والمتخصصين المؤهلين، وإدارة السجلات الطبية والمواعيد، بينما توفر معلومات موثوقة وموارد تعليمية بلغات مختلفة. بالإضافة إلى ذلك، نقدم الدعم العاطفي والنفسي من خلال المنتديات ومجموعات النقاش وخدمات المراسلة الفورية، في مساحة آمنة ومجهولة. مع FertiConnect، لديك الوصول إلى شبكة من المحترفين المؤهلين، ومعلومات دقيقة، ومجتمع داعم مخصص. 🌐👩‍⚕️
            `;
        message =` <p id="clickHereMed">👨‍⚕️🖱️ إذا كنت طبيبًا، انقر هنا</p> `;

        next_lang =`التالي`;
    
    } else if (selectedLanguage === 'pt') {
        text = `
            FertiConnect 💡 está comprometida em superar esses desafios, oferecendo uma solução completa e personalizada. Nossa plataforma online multilíngue facilita a busca por clínicas e especialistas qualificados, a gestão de registros médicos e agendamentos, fornecendo informações confiáveis e recursos educacionais em diferentes idiomas. Além disso, oferecemos suporte emocional e psicológico através de fóruns, grupos de discussão e serviços de mensagens instantâneas, em um espaço seguro e anônimo. Com o FertiConnect, você tem acesso a uma rede de profissionais qualificados, informações precisas e uma comunidade de apoio dedicada. 🌐👩‍⚕️
        `; 
         message =`Se você é médico, clique aqui.👨‍⚕️🖱️`;

        next_lang =`Próximo`;
    }
     else {
        text = 'Please select a language.';
    }
    

          
    setTimeout(function() {
        animationText3(text,direction,selectedLanguage,message);
        
        setTimeout(function(){
            const buttonnext = document.getElementById('buttonnext1');
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
             },1200);

        
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
            
            }, 4000);
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
     