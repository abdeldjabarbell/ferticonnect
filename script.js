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
        skip_btn= `Passer`;

    } else if (selectedLanguage === 'en') {
        text = `
        FertiConnect 💡, a 100% Algerian platform 🇩🇿, helps individuals with reproductive issues like PCOS, endometriosis, and erectile dysfunction. It aims to improve the experience of infertile couples 👫 by offering comprehensive care 🌐, efficient coordination 🤝, and accessible services 📲.
        `;
        next_lang = `Next`;
        skip_btn= `Skip`;

    } else if (selectedLanguage === 'es') {
        text = `
        FertiConnect 💡, una plataforma 100% argelina 🇩🇿, ayuda a personas con problemas reproductivos como el SOP, la endometriosis y la disfunción eréctil. Su objetivo es mejorar la experiencia de las parejas infértiles 👫 ofreciendo atención integral 🌐, coordinación eficiente 🤝 y servicios accesibles 📲.
        `;
        next_lang = `Siguiente`;
        skip_btn= `Saltar`;

    } else if (selectedLanguage === 'ar') {
        text = `
        فرتي كونكت 💡، منصة جزائرية 100% 🇩🇿، تساعد الأشخاص الذين يعانون من مشاكل الإنجاب مثل متلازمة تكيس المبايض، بطانة الرحم المهاجرة، والخلل الوظيفي الانتصابي. تهدف إلى تحسين تجربة الأزواج الذين يعانون من العقم 👫، من خلال تقديم رعاية شاملة 🌐، تنسيق فعال 🤝، وخدمات متاحة 📲.
        `;
        next_lang = `التالي`;
        skip_btn= `تخطي`;

        direction = 'rtl'; // Change text direction to right-to-left
    } else if (selectedLanguage === 'pt') {
        text = `
        FertiConnect 💡, uma plataforma 100% argelina 🇩🇿, ajuda pessoas com problemas reprodutivos como SOP, endometriose e disfunção erétil. Seu objetivo é melhorar a experiência de casais inférteis 👫 oferecendo cuidados abrangentes 🌐, coordenação eficiente 🤝 e serviços acessíveis 📲.
        `;
        next_lang = `Próximo`;
        skip_btn= `Pular`;

    } else if (selectedLanguage === 'de') {
        text = `
        FertiConnect 💡, eine 100% algerische Plattform 🇩🇿, hilft Menschen mit reproduktiven Problemen wie PCOS, Endometriose und Erektionsstörungen. Sie zielt darauf ab, die Erfahrung unfruchtbarer Paare 👫 zu verbessern, indem sie umfassende Betreuung 🌐, effiziente Koordination 🤝 und zugängliche Dienstleistungen 📲 bietet.
        `;
        next_lang = `Weiter`;
        skip_btn= `Überspringen`;
    }
      
        setTimeout(function() {
             animationText1(text,direction,selectedLanguage,next_lang);
             setTimeout(function(){
                const buttonnext = document.getElementById('buttonnext1');
                const buttonnext4 = document.getElementById('buttonnext4');
                buttonnext.style.display="flex";
                buttonnext.style.opacity="0";
                buttonnext4.style.display="flex";
                buttonnext4.style.opacity="0";

                setTimeout(function(){        
                    buttonnext.style.opacity="1";
    
                 },700);
                 setTimeout(function(){        
                    buttonnext4.style.opacity="1";
                 },700);
                 const suivant1 = document.getElementById('suivant1');
                 suivant1.innerHTML="<h3>"+next_lang+"</h3>";
                 const suivant4 = document.getElementById('suivant4');
                 suivant4.innerHTML=skip_btn;
                 }, 2000);
         }, 1000);
}

function animationText1(text,direction,selectedLanguage,next_lang){
    
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
    const suivant4 = document.getElementById("suivant4");
    suivant4.addEventListener('click', function() {
        const quinousbg = document.getElementById("quinousbg");
        quinousbg.style.display="flex";

        affucheLeSkip(selectedLanguage);
        function  affucheLeSkip(selectedLanguage){

            const quinousbgHeadertext = document.getElementById("quinousbgHeadertext");
            if (selectedLanguage === "fr") {
                quinousbgHeadertext.innerHTML = "FertiConnect";
            } else if (selectedLanguage === "en") {
                quinousbgHeadertext.innerHTML = "FertiConnect";
            } else if (selectedLanguage === "es") {
                quinousbgHeadertext.innerHTML = "FertiConnect";
            } else if (selectedLanguage === "ar") {
                quinousbgHeadertext.innerHTML = "فيرتيكونيكت";
            } else if (selectedLanguage === "pt") {
                quinousbgHeadertext.innerHTML = "FertiConnect";
            } else if (selectedLanguage === "de") {
                quinousbgHeadertext.innerHTML = "FertiConnect";
            }        
            const pesentationquinous = document.getElementById("pesentationquinous");
    
            if (selectedLanguage === "fr") {
                pesentationquinous.innerHTML = `
                    FertiConnect est une plateforme innovante 100% algérienne destinée pour toute personne souffrant de pathologies reproductives (SOPK, Endométriose, troubles du cycle, Troubles de l'érection...). 
                    Notre objectif est d'améliorer l'expérience des couples infertiles, d'augmenter leurs chances de succès et de leur offrir une meilleure qualité de vie. <br><br>
                    FertiConnect s'attaque à la complexité et au manque de prise en charge globale du parcours de reproduction en offrant une plateforme centralisée, une coordination efficace, un soutien personnalisé et des services accessibles.<br><br>
            
                    1. Manque de coordination et communication entre les différents acteurs clés de la santé reproductive<br>
                    2. Manque d'accessibilité à l'information sur la santé reproductive<br>
                    3. Problèmes de suivi et de gestion du temps et des documents médicaux papier<br>
                    4. Manque du soutien émotionnel<br><br>
            
                    Ce qui rend le parcours de reproduction fragmenté et complexe, impliquant plusieurs spécialistes, cliniques et tests différents, ceci pourrait entraîner :<br>
                    - Des retards de diagnostic<br>
                    - Des traitements inefficaces<br>
                    - Et une expérience frustrante pour les patients<br><br>
            
                    FertiConnect est une plateforme 100% algérienne en ligne multilingue qui offre un suivi complet et personnalisé à ses utilisateurs ! Notre mission est de vous aider à :<br>
                    - Trouver des cliniques et des spécialistes de la santé reproductive qualifiés dans votre région<br>
                    - Gérer vos dossiers médicaux et vos rendez-vous en toute simplicité<br>
                    - Accéder à des informations fiables et à des ressources éducatives sur la santé reproductive en différentes langues<br>
                    - Bénéficier d'un soutien émotionnel et psychologique par le biais de forums, de groupes de discussion et de services de messagerie instantanée.<br><br>
            
                    Accédez à la plateforme depuis n'importe quel appareil connecté à internet, ordinateur, tablette ou Smartphone. Vous allez vous retrouver dans un espace sûr et anonyme où vous pouvez poser des questions et obtenir des conseils sans crainte de stigmatisation et sans jugement ! Avec FertiConnect, vous avez accès à un réseau de professionnels de la santé reproductive qualifiés, à des informations fiables et à une communauté de soutien.<br><br>
                `;
            } else if (selectedLanguage === "en") {
                pesentationquinous.innerHTML = `
                    FertiConnect is an innovative 100% Algerian platform designed for anyone suffering from reproductive pathologies (PCOS, Endometriosis, cycle disorders, Erectile dysfunction...). 
                    Our goal is to improve the experience of infertile couples, increase their chances of success, and provide them with a better quality of life. <br><br>
                    FertiConnect addresses the complexity and lack of comprehensive care in the reproductive journey by offering a centralized platform, efficient coordination, personalized support, and accessible services.<br><br>
            
                    1. Lack of coordination and communication among key reproductive health stakeholders<br>
                    2. Lack of access to reproductive health information<br>
                    3. Problems with monitoring and managing time and paper medical documents<br>
                    4. Lack of emotional support<br><br>
            
                    This makes the reproductive journey fragmented and complex, involving multiple specialists, clinics, and different tests, which could lead to:<br>
                    - Diagnostic delays<br>
                    - Ineffective treatments<br>
                    - A frustrating experience for patients<br><br>
            
                    FertiConnect is a 100% Algerian online multilingual platform that offers comprehensive and personalized support to its users! Our mission is to help you:<br>
                    - Find clinics and qualified reproductive health specialists in your area<br>
                    - Manage your medical records and appointments with ease<br>
                    - Access reliable information and educational resources on reproductive health in different languages<br>
                    - Benefit from emotional and psychological support through forums, discussion groups, and instant messaging services.<br><br>
            
                    Access the platform from any internet-connected device, computer, tablet, or smartphone. You will find yourself in a safe and anonymous space where you can ask questions and get advice without fear of stigmatization and judgment! With FertiConnect, you have access to a network of qualified reproductive health professionals, reliable information, and a support community.<br><br>
    *            `;
            } else if (selectedLanguage === "es") {
                pesentationquinous.innerHTML = `
                    FertiConnect es una plataforma innovadora 100% argelina diseñada para cualquier persona que sufra de patologías reproductivas (SOP, Endometriosis, trastornos del ciclo, disfunción eréctil...). 
                    Nuestro objetivo es mejorar la experiencia de las parejas infértiles, aumentar sus posibilidades de éxito y brindarles una mejor calidad de vida. <br><br>
                    FertiConnect aborda la complejidad y la falta de atención integral en el recorrido reproductivo al ofrecer una plataforma centralizada, una coordinación eficiente, un apoyo personalizado y servicios accesibles.<br><br>
            
                    1. Falta de coordinación y comunicación entre los actores clave de la salud reproductiva<br>
                    2. Falta de acceso a información sobre salud reproductiva<br>
                    3. Problemas con el seguimiento y la gestión del tiempo y los documentos médicos en papel<br>
                    4. Falta de apoyo emocional<br><br>
            
                    Esto hace que el recorrido reproductivo sea fragmentado y complejo, involucrando múltiples especialistas, clínicas y diferentes pruebas, lo que podría llevar a:<br>
                    - Retrasos en el diagnóstico<br>
                    - Tratamientos ineficaces<br>
                    - Una experiencia frustrante para los pacientes<br><br>
            
                    FertiConnect es una plataforma multilingüe en línea 100% argelina que ofrece un apoyo integral y personalizado a sus usuarios! Nuestra misión es ayudarte a:<br>
                    - Encontrar clínicas y especialistas calificados en salud reproductiva en tu área<br>
                    - Gestionar tus expedientes médicos y citas con facilidad<br>
                    - Acceder a información confiable y recursos educativos sobre salud reproductiva en diferentes idiomas<br>
                    - Beneficiarte de apoyo emocional y psicológico a través de foros, grupos de discusión y servicios de mensajería instantánea.<br><br>
            
                    Accede a la plataforma desde cualquier dispositivo conectado a Internet, computadora, tableta o teléfono inteligente. Te encontrarás en un espacio seguro y anónimo donde podrás hacer preguntas y obtener consejos sin temor a la estigmatización y sin juicio! Con FertiConnect, tienes acceso a una red de profesionales calificados en salud reproductiva, información confiable y una comunidad de apoyo.<br><br>
                `;
            } else if (selectedLanguage === "ar") {
                pesentationquinous.innerHTML = `
                فيرتي كونيكت هي منصة مبتكرة 100٪ جزائرية مصممة لأي شخص يعاني من أمراض تناسلية (متلازمة تكيس المبايض، بطانة الرحم، اضطرابات الدورة، ضعف الانتصاب...). 
                هدفنا هو تحسين تجربة الأزواج العقيمين، وزيادة فرصهم في النجاح، وتقديم نوعية حياة أفضل لهم.<br><br> 
                فيرتي كونيكت تتعامل مع التعقيد ونقص الرعاية الشاملة في رحلة التكاثر من خلال تقديم منصة مركزية، وتنسيق فعال، ودعم شخصي، وخدمات يمكن الوصول إليها.<br><br>
        
                1. نقص التنسيق والتواصل بين الجهات الرئيسية في الصحة التناسلية<br>
                2. نقص الوصول إلى معلومات الصحة التناسلية<br>
                3. مشاكل في متابعة وإدارة الوقت والوثائق الطبية الورقية<br>
                4. نقص الدعم العاطفي<br><br>
        
                هذا يجعل رحلة التكاثر مجزأة ومعقدة، مما يشمل العديد من الأخصائيين، والعيادات، والاختبارات المختلفة، مما قد يؤدي إلى:<br>
                - تأخيرات في التشخيص<br>
                - علاجات غير فعالة<br>
                - وتجربة محبطة للمرضى<br><br>
        
                فيرتي كونيكت هي منصة متعددة اللغات على الإنترنت 100٪ جزائرية تقدم دعمًا شاملاً وشخصيًا لمستخدميها! مهمتنا هي مساعدتك في:<br>
                - العثور على عيادات وأخصائيين في الصحة التناسلية مؤهلين في منطقتك<br>
                - إدارة ملفاتك الطبية ومواعيدك بسهولة<br>
                - الوصول إلى معلومات موثوقة وموارد تعليمية عن الصحة التناسلية بلغات مختلفة<br>
                - الاستفادة من الدعم العاطفي والنفسي من خلال المنتديات، ومجموعات المناقشة، وخدمات المراسلة الفورية.<br><br>
        
                الوصول إلى المنصة من أي جهاز متصل بالإنترنت، كمبيوتر، جهاز لوحي أو هاتف ذكي. ستجد نفسك في مساحة آمنة ومجهولة حيث يمكنك طرح الأسئلة والحصول على المشورة دون خوف من الوصم ودون حكم! مع FertiConnect، لديك إمكانية الوصول إلى شبكة من المهنيين المؤهلين في الصحة التناسلية، ومعلومات موثوقة، ومجتمع دعم.<br><br>
                
            
                 `;
            } else if (selectedLanguage === "pt") {
                pesentationquinous.innerHTML = `
                    FertiConnect é uma plataforma inovadora 100% argelina projetada para qualquer pessoa que sofra de patologias reprodutivas (SOP, Endometriose, distúrbios do ciclo, disfunção erétil...). 
                    Nosso objetivo é melhorar a experiência dos casais inférteis, aumentar suas chances de sucesso e proporcionar-lhes uma melhor qualidade de vida. <br><br>
                    FertiConnect aborda a complexidade e a falta de atendimento abrangente na jornada reprodutiva, oferecendo uma plataforma centralizada, coordenação eficiente, suporte personalizado e serviços acessíveis.<br><br>
            
                    1. Falta de coordenação e comunicação entre os principais atores da saúde reprodutiva<br>
                    2. Falta de acesso à informação sobre saúde reprodutiva<br>
                    3. Problemas com o acompanhamento e gestão do tempo e dos documentos médicos em papel<br>
                    4. Falta de apoio emocional<br><br>
            
                    Isso torna a jornada reprodutiva fragmentada e complexa, envolvendo vários especialistas, clínicas e diferentes testes, o que pode levar a:<br>
                    - Atrasos no diagnóstico<br>
                    - Tratamentos ineficazes<br>
                    - Uma experiência frustrante para os pacientes<br><br>
            
                    FertiConnect é uma plataforma online multilingue 100% argelina que oferece suporte abrangente e personalizado aos seus usuários! Nossa missão é ajudá-lo a:<br>
                    - Encontrar clínicas e especialistas qualificados em saúde reprodutiva na sua região<br>
                    - Gerenciar seus registros médicos e consultas com facilidade<br>
                    - Acessar informações confiáveis e recursos educacionais sobre saúde reprodutiva em diferentes idiomas<br>
                    - Beneficiar-se de apoio emocional e psicológico através de fóruns, grupos de discussão e serviços de mensagens instantâneas.<br><br>
            
                    Acesse a plataforma de qualquer dispositivo conectado à internet, computador, tablet ou smartphone. Você se encontrará em um espaço seguro e anônimo onde pode fazer perguntas e obter conselhos sem medo de estigmatização e sem julgamento! Com o FertiConnect, você tem acesso a uma rede de profissionais qualificados em saúde reprodutiva, informações confiáveis e uma comunidade de apoio.<br><br>
                `;
            } else if (selectedLanguage === "de") {
                pesentationquinous.innerHTML = `
                    FertiConnect ist eine innovative 100% algerische Plattform, die für alle Personen mit reproduktiven Erkrankungen (PCOS, Endometriose, Zyklusstörungen, Erektionsstörungen...) entwickelt wurde. 
                    Unser Ziel ist es, die Erfahrung unfruchtbarer Paare zu verbessern, ihre Erfolgschancen zu erhöhen und ihnen eine bessere Lebensqualität zu bieten. <br><br>
                    FertiConnect adressiert die Komplexität und den Mangel an umfassender Betreuung im reproduktiven Weg, indem es eine zentralisierte Plattform, effiziente Koordination, personalisierte Unterstützung und zugängliche Dienstleistungen bietet.<br><br>
            
                    1. Mangelnde Koordination und Kommunikation zwischen den wichtigsten Akteuren der reproduktiven Gesundheit<br>
                    2. Mangelnder Zugang zu Informationen über reproduktive Gesundheit<br>
                    3. Probleme mit der Überwachung und Verwaltung von Zeit und Papierdokumenten<br>
                    4. Mangel an emotionaler Unterstützung<br><br>
            
                    Dies macht den reproduktiven Weg fragmentiert und komplex, da mehrere Spezialisten, Kliniken und verschiedene Tests beteiligt sind, was zu folgenden Problemen führen kann:<br>
                    - Diagnoseverzögerungen<br>
                    - Ineffektive Behandlungen<br>
                    - Eine frustrierende Erfahrung für die Patienten<br><br>
            
                    FertiConnect ist eine 100% algerische Online-Mehrsprachplattform, die umfassende und personalisierte Unterstützung für ihre Nutzer bietet! Unsere Mission ist es, Ihnen zu helfen:<br>
                    - Finden Sie Kliniken und qualifizierte Spezialisten für reproduktive Gesundheit in Ihrer Region<br>
                    - Verwalten Sie Ihre medizinischen Unterlagen und Termine ganz einfach<br>
                    - Greifen Sie auf zuverlässige Informationen und Bildungsressourcen zur reproduktiven Gesundheit in verschiedenen Sprachen zu<br>
                    - Profitieren Sie von emotionaler und psychologischer Unterstützung durch Foren, Diskussionsgruppen und Instant-Messaging-Dienste.<br><br>
            
                    Greifen Sie von jedem internetfähigen Gerät, Computer, Tablet oder Smartphone auf die Plattform zu. Sie werden sich in einem sicheren und anonymen Raum wiederfinden, in dem Sie Fragen stellen und Ratschläge einholen können, ohne Angst vor Stigmatisierung und ohne Urteil! Mit FertiConnect haben Sie Zugang zu einem Netzwerk von qualifizierten Fachkräften für reproduktive Gesundheit, zuverlässigen Informationen und einer unterstützenden Gemeinschaft.<br><br>
                `;
            }
            
            
    
            const boxchecktext = document.getElementById("boxchecktext");
            if (selectedLanguage === "fr") {
                boxchecktext.innerHTML = "Si vous êtes médecin, cochez ici";
            } else if (selectedLanguage === "en") {
                boxchecktext.innerHTML = "If you are a doctor, check here";
            } else if (selectedLanguage === "es") {
                boxchecktext.innerHTML = "Si eres médico, marca aquí";
            } else if (selectedLanguage === "ar") {
                boxchecktext.innerHTML = "إذا كنت طبيباً، ضع علامة هنا";
            } else if (selectedLanguage === "pt") {
                boxchecktext.innerHTML = "Se você é médico, marque aqui";
            } else if (selectedLanguage === "de") {
                boxchecktext.innerHTML = "Wenn Sie Arzt sind, markieren Sie hier";
            }
            
        }

        
        
        const boxcheck = document.getElementById("boxcheck");
        const suivant6 = document.getElementById("suivant6");
        suivant6.innerHTML= next_lang;

        suivant6.addEventListener('click', function() {
            if (boxcheck.checked) {
                let typeOfUser = "medecin";
                window.location.href = `ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}&selectedLanguage=${selectedLanguage}`; 
                return;
            } else {
                let typeOfUser = "patient";
                window.location.href = `ferticonnectmedecin-login.html?typeOfUser=${typeOfUser}&selectedLanguage=${selectedLanguage}`; 
                return;
    
            }
        });     

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
     